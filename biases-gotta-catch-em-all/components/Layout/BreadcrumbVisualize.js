import Link from "next/link";

const BreadcrumbVisualize = () => {
	return (
		<div className="p-5">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						Visualize
					</li>
				</ol>
			</nav>
		</div>
	);
};
export default BreadcrumbVisualize;
