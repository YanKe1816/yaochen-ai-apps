import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

// 核心功能：结构化解释
function structureExplanation(inputText) {
  return {
    input: inputText,
    explanation: `Here’s a simplified structure of the input:  
                  - Key ideas: ${inputText.split(" ").slice(0, 5).join(", ")}  
                  - Core problem: Extract the main issue.  
                  - Solution breakdown: List out actionable steps to solve the problem.`
  };
}

app.post("/explain_structure", (req, res) => {
  const { input_text } = req.body;
  const response = structureExplanation(input_text);
  res.json(response);
});

app.listen(3000, () => {
  console.log("Structure-Explain app running on port 3000");
});
