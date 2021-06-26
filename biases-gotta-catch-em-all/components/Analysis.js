import { useEffect } from "react";

const Analysis = () => {
	const analyzeHandler = () => {
		console.log("analyzeHandler");
		fetch("/api/analyze", {
			method: "GET",
			body: JSON.stringify(reqBody),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};
	useEffect(() => {
		analyzeHandler();
	}, []);

	return (
		<div className="mt-3 mb-3 mx-auto uploader-wrapper">
			<div className="text-center mt-3">
				<p>Your analysis</p>
			</div>
		</div>
	);
};

export default Analysis;
