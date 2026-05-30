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

Do not return markdown.
Do not return explanations.
Return JSON only.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

module.exports = {
  generateSummary,
};