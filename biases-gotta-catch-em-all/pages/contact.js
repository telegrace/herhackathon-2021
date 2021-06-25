const Contact = () => {
	return (
		<div className="container mt-5 w-50">
			<div className="text-start">
				<h1>Contact Us</h1>
				<form>
					<div className="mt-4 mb-4">
						<label
							for="exampleFormControlInput1"
							class="form-label"
						>
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="name@example.com"
						></input>
					</div>
					<div className="mb-4">
						<label
							for="exampleFormControlTextarea1"
							className="form-label"
						>
							Queries
						</label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
						></textarea>
					</div>
					<div className="text-end">
						<button>Send</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
