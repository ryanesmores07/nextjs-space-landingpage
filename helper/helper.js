import fs from "fs";
import path from "path";

export const buildFilePath = () => {
  return path.join(process.cwd(), "data.json");
};

export const extractFeedback = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
};
