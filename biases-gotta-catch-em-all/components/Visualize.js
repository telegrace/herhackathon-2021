import { useEffect, useState } from "react";
import Link from "next/link";

const Visualize = () => {
	const [loading, setLoading] = useState(true);
	const [visualReady, setVisualReady] = useState(null);

	const analyzeHandler = () => {
		console.log("analyzeHandler");
		fetch("/api/visualize", {
			method: "GET",
			// body: JSON.stringify(reqBody),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setVisualReady("");
				setLoading(false);
				console.log(data);
			});
	};

	useEffect(() => {
		analyzeHandler();
	}, []);

	return (
		<div
			className="container w-50 file-uploader"
			style={{ height: "80vh" }}
		>
			<h1 className="mt-5 mb-2 p-5">V I S U A L I Z A T I O N </h1>
			{loading && (
				<div className="spinner-border text-danger mt-5" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			)}
			{!loading && (
				<>
					<img src="/uploads/histogram1.png" alt="visualization" />
					<div className="container mt-3 p-3">
						<div className="form">
							Check for bias{" "}
							<div className="form-check form-check-inline ms-3">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox1"
									value="option1"
								></input>
								<label
									className="form-check-label"
									htmlFor="inlineCheckbox1"
								>
									Minority Bias
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="option2"
								></input>
								<label
									className="form-check-label"
									htmlFor="inlineCheckbox2"
								>
									Sex Bias
								</label>
							</div>
						</div>
						<br></br>
						<Link href="/visualize/next">
							<button
								type="button"
								className="btn btn-light align-end"
							>
								<i
									className="fa fa-line-chart"
									aria-hidden="true"
								></i>{" "}
								Analyze
							</button>
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default Visualize;
