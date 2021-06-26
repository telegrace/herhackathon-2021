import { useEffect, useState } from "react";
import Link from "next/link";

const Analysis = () => {
	const [loading, setLoading] = useState(true);
	const [apiData, setApiData] = useState({});

	const analyzeHandler = () => {
		console.log("analyzeHandler");
		fetch("/api/analyze", {
			method: "GET",
			// body: JSON.stringify(reqBody),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then(({ analysis }) => {
				console.log("GRACE", analysis);
				setApiData(analysis);
				setLoading(false);
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
			<h1 className="mt-5 mb-2 p-5">A N A L Y S I S </h1>
			{loading && (
				<>
					<p>Analysis will take a few minutes...</p>
					<div
						className="spinner-border text-danger mt-5"
						role="status"
					>
						<span className="sr-only">Loading...</span>
					</div>
				</>
			)}
			{!loading && (
				<>
					<table className="table analysis-table mb-3">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">All</th>
								<th scope="col">
									<i
										className="fa fa-mars"
										aria-hidden="true"
									></i>{" "}
									Male
								</th>
								<th scope="col">
									<i
										className="fa fa-venus"
										aria-hidden="true"
									></i>{" "}
									Female
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Acc</th>
								<td>{apiData.General_model.acc}</td>
								<td>{apiData.Male_model.acc}</td>
								<td>{apiData.Female_model.precision}</td>
							</tr>
							<tr>
								<th scope="row">Recall</th>
								<td>{apiData.General_model.recall}</td>
								<td>{apiData.Male_model.recall}</td>
								<td>{apiData.Female_model.recall}</td>
							</tr>
							<tr>
								<th scope="row">Precision</th>
								<td>{apiData.General_model.precision}</td>
								<td>{apiData.Male_model.precision}</td>
								<td>{apiData.Female_model.precision}</td>
							</tr>
							<tr>
								<th scope="row">F1</th>
								<td>{apiData.General_model.f1}</td>
								<td>{apiData.Male_model.f1}</td>
								<td>{apiData.Female_model.f1}</td>
							</tr>
						</tbody>
					</table>
				</>
			)}
			<div className="uploader-wrapper mt-5 p-3">
				{apiData.women_f && apiData.min_f && (
					<h3>
						In this model <strong>{apiData.women_f}</strong> women
						and <strong>{apiData.min_f}</strong> persons from
						minority groups were incorrectly classified.
					</h3>
				)}

				{apiData.women_f && !apiData.min_f && (
					<h3>
						In this model <strong>{apiData.women_f}</strong> women
						were incorrectly classified.
					</h3>
				)}

				{!apiData.women_f && apiData.min_f && (
					<h3>
						In this model <strong>{apiData.min_f}</strong> persons
						from minority groups were incorrectly classified.
					</h3>
				)}
			</div>
		</div>
	);
};

export default Analysis;

//table can be refactored with helps of arrays
