import React, { useState } from "react";
import Uppy from "@uppy/core";
import { DragDrop } from "@uppy/react";
import ThumbnailGenerator from "@uppy/thumbnail-generator";
import XHRUpload from "@uppy/xhr-upload";
import Link from "next/link";

const FileUploader = () => {
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	let alertText;

	const uppy = new Uppy({
		meta: { type: "data" },
		restrictions: {
			maxNumberOfFiles: 3,
			maxFileSize: 1048576 * 4,
			allowedFileTypes: [".csv", ".json", ".xslx", ".py"],
		},
		autoProceed: true,
	});

	uppy.use(XHRUpload, {
		endpoint: "/api/add-file",
		fieldName: "data",
		formData: true,
	});

	uppy.use(ThumbnailGenerator, {
		thumbnailWidth: 200,
		waitForThumbnailsBeforeUpload: false,
	});

	uppy.on("thumbnail:generated", (file, preview) => {
		console.log(file.name, preview);
	});

	uppy.on("complete", (result) => {
		const url = result.successful[0].uploadURL;
		console.log("successful upload", result);
		setSuccess(true);
	});

	uppy.on("error", (error) => {
		console.error(error.stack);
		setError(true);
	});

	uppy.on("restriction-failed", (file, error) => {
		const err = error.stack.includes("exceeds maximum allowed size of 4 MB")
			? "exceeds maximum allowed size of 4 MB"
			: error;
		// set this in the error
		alertText =
			"Upload error: " +
			err +
			"\n" +
			file.name +
			" Size : " +
			Math.round(file.size / 1024 / 1024) +
			"MB";
	});

	return (
		<div
			className="container w-50 file-uploader"
			style={{ height: "80vh" }}
		>
			<h1 className="mt-5 mb-3">B I A S E S</h1>
			<h3 className=" mb-3">Gotta catch 'em all</h3>
			{error && (
				<div className="alert alert-danger" role="alert">
					Something went wrong! Please try again.
				</div>
			)}
			<div className="mt-3 mb-3 mx-auto uploader-wrapper">
				<div className="text-center mt-3">
					<p>
						Upload your <strong>test.csv</strong>,{" "}
						<strong>train.csv</strong> and <strong>modal.py</strong>{" "}
						files
					</p>
					<p>Click to browse your files or drag and drop them</p>
				</div>
				<DragDrop uppy={uppy} />
			</div>

			{success && (
				<>
					<div className="alert alert-success mt-4" role="alert">
						<i className="fa fa-check" aria-hidden="true"></i> Files
						Uploaded!
					</div>
					<div className="container mt-3 ">
						<Link href="/visualize">
							<button
								type="button"
								className="btn btn-light align-end"
							>
								<i className="fa fa-eye" aria-hidden="true"></i>{" "}
								Visualize
							</button>
						</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default FileUploader;
