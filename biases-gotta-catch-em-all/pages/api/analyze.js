const { PythonShell } = require("python-shell");

//Router to handle the incoming request.

const handler = async (req, res) => {
	if (req.method === "GET") {
		console.log("hit the GET");
		let options = {
			mode: "text",
			pythonOptions: ["-u"], // get print results in real-time
			scriptPath:
				"/home/telegrace/Documents/CODING_JS/co-op/herhackathon-2021/biases-gotta-catch-em-all/pages/api/data/", //If you are having python_test.py script in same folder, then it's optional.
			// args: ["shubhamk314"], //An argument which can be accessed in the script using sys.argv[1]
		};

		PythonShell.run("test.py", options, function (err, result) {
			if (err) {
				console.log("err", err);
				res.status(500).send({ result });
			} else {
				console.log("result: ", result.toString());
				res.status(200).send({ result: result.toString() });
			}
		});
	} else {
		console.log("I am else");
		res.status(200).send({ msg: "hi" });
	}
};

export default handler;
