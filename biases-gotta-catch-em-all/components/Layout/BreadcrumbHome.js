const BreadcrumbHome = () => {
	return (
		<div className="p-5">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item active" aria-current="page">
						Home
					</li>
				</ol>
			</nav>

			{/* <nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<a href="#">Home</a>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						Library
					</li>
				</ol>
			</nav>

			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<a href="#">Home</a>
					</li>
					<li className="breadcrumb-item">
						<a href="#">Library</a>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						Data
					</li>
				</ol>
			</nav> */}
		</div>
	);
};
export default BreadcrumbHome;
