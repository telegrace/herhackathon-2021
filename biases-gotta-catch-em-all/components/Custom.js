import { useEffect, useState } from "react";
import Link from "next/link";

const Custom = () => {
	const [loading, setLoading] = useState(true);

	let normalization = {
		Before_model: {
			name: "before",
			var1: 13.66,
			var2: 23.81,
			var3: 3.43,
		},
		After_model: {
			name: "after",
			vara: 14.57,
			varb: 16.79,
			varc: 16.56,
		},
	};

	return (
		<div
			className="container w-50 file-uploader"
			style={{ height: "80vh" }}
		>
			<h1 className="mt-5 mb-2 p-5">N O R M A L I Z A T I O N </h1>

			<>
				<div className="normalization ">
					<img src="/uploads/figure_3.png" alt="visualization" />
					{""}
					<img src="/uploads/figure_4.png" alt="visualization" />
				</div>
				<div className="uploader-wrapper mt-5 p-3">
					<h2>False Positives</h2>
					<table className="table analysis-table mb-3 w-75 mx-auto">
						<thead>
							<tr>
								<th scope="col">Before</th>
								<th scope="col">After</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{normalization.Before_model.var1}%</td>
								<td>{normalization.After_model.vara}% </td>
							</tr>
							<tr>
								<td>{normalization.Before_model.var2}%</td>
								<td>{normalization.After_model.varb}% </td>
							</tr>
							<tr>
								<td>{normalization.Before_model.var3}%</td>
								<td>{normalization.After_model.varc}% </td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* <div className="uploader-wrapper mt-5 p-3">
					<h2>False Positives</h2>
					<h3>
						Before - After<br></br>
						{normalization.Before_model.var1}%{" "}
						<i
							className="fa fa-long-arrow-right"
							aria-hidden="true"
						></i>
						{normalization.After_model.vara}%<br></br>
						{normalization.Before_model.var2}%{" "}
						<i
							className="fa fa-long-arrow-right"
							aria-hidden="true"
						></i>
						{normalization.After_model.varb}%<br></br>
						{normalization.Before_model.var3}%{" "}
						<i
							className="fa fa-long-arrow-right"
							aria-hidden="true"
						></i>
						{normalization.After_model.varc}%
					</h3>
				</div> */}
			</>
		</div>
	);
};

export default Custom;
