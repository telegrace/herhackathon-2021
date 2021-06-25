import React from "react";
import Uppy from "@uppy/core";
import { DragDrop } from "@uppy/react";
import ThumbnailGenerator from "@uppy/thumbnail-generator";
import XHRUpload from "@uppy/xhr-upload";

const uppy = new Uppy({
	meta: { type: "data" },
	restrictions: {
		maxNumberOfFiles: 3,
		maxFileSize: 1048576 * 4,
		allowedFileTypes: [".csv", ".json", ".xslx"],
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
});

uppy.on("error", (error) => {
	console.error(error.stack);
});

uppy.on("restriction-failed", (file, error) => {
	const err = error.stack.includes("exceeds maximum allowed size of 4 MB")
		? "exceeds maximum allowed size of 4 MB"
		: error;

	alert(
		"Upload error: " +
			err +
			"\n" +
			file.name +
			" Size : " +
			Math.round(file.size / 1024 / 1024) +
			"MB"
	);
});

/*

    From:   https://uppy.io/examples/dashboard/
            https://uppy.io/docs/react/

 */

const FileUploader = () => {
	return (
		<div className="mt-5 mb-3 w-50 mx-auto uploader-wrapper">
			<div className="text-center mt-3">
				<p>Click to browse your files or drag and drop.</p>
			</div>
			<DragDrop
				uppy={uppy}
				// locale={{
				// 	strings: {
				// 		// Text to show on the droppable area.
				// 		// `%{browse}` is replaced with a link that opens the system file selection dialog.
				// 		dropHereOr: "Drop files",
				// 		// Used as the label for the link that opens the system file selection dialog.
				// 		browse: "Browse files",
				// 	},
				// }}
			/>
		</div>
	);
};

export default FileUploader;
