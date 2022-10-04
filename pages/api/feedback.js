export default function handler(req, res) {
  if (req.method === "GET") {
    const filePath = buildFilePath();
    const data = extractFeedback(filePath);
    res.status(201).json({ data: data });
  }
}
