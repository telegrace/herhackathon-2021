const { PythonShell } = require("python-shell");

//Router to handle the incoming request.

const handler = async (req, res) => {
	let analysis = {
		General_model: {
			name: "All",
			acc: 85.03,
			recall: 85.03,
			precision: 72.31,
			f1: 78.16,
		},
		Male_model: {
			name: "male",
			acc: 85,
			recall: 85,
			precision: 72.26,
			f1: 78.11,
		},
		Female_model: {
			name: "Female",
			acc: 85.07,
			recall: 85.07,
			precision: 72.36,
			f1: 78.2,
		},
		women_f: 11948,
		men_f: 148052,
		min_f: 12076,
		notmin_f: 147924,
	};
	if (req.method === "GET") {
		// BELOW ONLY FOR DEV MODE
		let result = { result: ["Analysis Success"] };
		res.status(200).send({ result, analysis });
		//ABOVE ONLY FOR DEV MODE
		console.log("hit the analyze GET");

		// BELOW FOR REALS, NEED TO COMMENT BACK IN BUT PROCESSING TOO SLOW FOR DEV MODE
		// let options = {
		// 	mode: "text",
		// 	pythonOptions: ["-u"], // get print results in real-time
		// 	scriptPath:
		// 		"/home/telegrace/Documents/CODING_JS/co-op/herhackathon-2021/biases-gotta-catch-em-all/data", //If you are having python_test.py script in same folder, then it's optional.
		// };

		// PythonShell.run("Step2_Analyze.py", options, function (err, result) {
		// 	if (err) {
		// 		console.log("err", err);
		// 		res.status(500).send({ result });
		// 	} else {
		// 		console.log("result: ", result);
		// 		res.status(200).send({ result, analysis });
		// 	}
		// });
		//ABOVE FOR REALS
	} else {
		console.log("I am else");
		res.status(200).send({ msg: "hi" });
	}
};

export default handler;
