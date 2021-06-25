import fs from "fs";
import path from "path";

export default function handler(req, res) {
	if (req.method === "POST") {
		console.log("GRACE");
		const uploadFile = req.body.uploadFile;
		const uploadFileName = req.body.uploadFileName;
		console.log(uploadFile);
		res.status(201).json({ message: "HIT the /POST" });
	} else if (req.method === "GET") {
		res.status(200).json({ message: "HIT the /GET" });
	} else {
		res.status(401);
	}
}

// this works for text
// const uploadFile = req.body.uploadFile;
// const uploadFileName = req.body.uploadFileName;
// const newFile = {
// 	id: new Date().toISOString(),
// 	uploadFile: uploadFile,
// 	uploadFileName: uploadFileName,
// };
// // store in file
// const filePath = path.join(process.cwd(), "data", "uploaded_files.json");
// const fileData = fs.readFileSync(filePath);
// const data = JSON.parse(fileData);
// data.push(newFile);
// fs.writeFileSync(filePath, JSON.stringify(data));
// res.status(201).json({ file: newFile, message: "HIT the /POST" });
