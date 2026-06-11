const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const generateSummary = async (analysis, score) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
Analyze these ingredients:

${JSON.stringify(analysis)}

Safety Score: ${score}

Return ONLY valid JSON in this format:

{
  "positives": [
    "point 1",
    "point 2"
  ],
  "negatives": [
    "point 1",
    "point 2"
  ],
  "recommendation": "short recommendation"
}

Rules:
- Maximum 2 positives
- Maximum 2 negatives
- Recommendation maximum 12 words
- Return JSON only
`;

  let result;

  for (let i = 0; i < 3; i++) {
    try {
      result = await model.generateContent(prompt);
      break;
    } catch (error) {
      if (
        (error.status === 503 ||
          error.status === 429) &&
        i < 2
      ) {
        console.log(
          `Summary Retry ${i + 1}/3`
        );

        await new Promise((resolve) =>
          setTimeout(resolve, 3000)
        );
      } else {
        throw error;
      }
    }
  }

  return result.response
    .text()
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
};

const generateIngredientData = async (
  ingredient
) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
Analyze this food ingredient:

${ingredient}

IMPORTANT RULES:

1. risk MUST be ONLY:
   - Low
   - Moderate
   - High

2. riskScore MUST be:
   - between -10 and 10

3. description:
   - maximum 20 words
   - only 1 short sentence

4. category:
   - short category name
   - maximum 3 words

5. Return ONLY JSON

Return format:

{
  "category": "",
  "risk": "Low",
  "riskScore": 0,
  "description": "",
  "diabeticFriendly": true,
  "heartFriendly": true
}
`;

  let result;

  for (let i = 0; i < 3; i++) {
    try {
      result = await model.generateContent(
        prompt
      );

      console.log(
        "INGREDIENT RAW RESPONSE =>",
        result.response.text()
      );

      break;
    } catch (error) {
      if (
        (error.status === 503 ||
          error.status === 429) &&
        i < 2
      ) {
        console.log(
          `Ingredient Retry ${i + 1}/3`
        );

        await new Promise((resolve) =>
          setTimeout(resolve, 3000)
        );
      } else {
        throw error;
      }
    }
  }

  let aiData = JSON.parse(
    result.response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim()
  );

  const validRisks = [
    "Low",
    "Moderate",
    "High",
  ];

  if (aiData.description) {
    aiData.description =
      aiData.description
        .split(" ")
        .slice(0, 20)
        .join(" ");
  }

  if (
    !validRisks.includes(aiData.risk)
  ) {
    aiData.risk = "Moderate";
  }

  if (
    typeof aiData.riskScore !==
      "number" ||
    aiData.riskScore > 10 ||
    aiData.riskScore < -10
  ) {
    aiData.riskScore = 0;
  }

  return aiData;
};

module.exports = {
  generateSummary,
  generateIngredientData,
};