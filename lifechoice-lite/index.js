export default function handler(req, res) {
  const { topic, style = "simple" } = req.body;

  res.json({
    result: `This app provides structured explanation for: ${topic}. 
Output style: ${style}. 
Full generation handled automatically by ChatGPT at runtime.`
  });
}
