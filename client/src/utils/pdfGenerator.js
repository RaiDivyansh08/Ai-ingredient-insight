import jsPDF from "jspdf";

export const generatePDF = (data) => {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("IngredientInsight Report", 20, y);

  y += 15;

  doc.setFontSize(12);

  doc.text(`Safety Score: ${data.score}/100`, 20, y);
  y += 10;

  doc.text(`Status: ${data.status}`, 20, y);
  y += 15;

  doc.text("Ingredient Analysis:", 20, y);
  y += 10;

  data.analysis.forEach((item) => {
    doc.text(
      `${item.ingredient} - ${item.risk}`,
      25,
      y
    );

    y += 8;
  });

  y += 10;

  if (data.aiSummary?.recommendation) {
    doc.text("AI Recommendation:", 20, y);
    y += 10;

    const lines = doc.splitTextToSize(
      data.aiSummary.recommendation,
      160
    );

    doc.text(lines, 25, y);
  }

  doc.save("IngredientInsight_Report.pdf");
};