import Link from "next/link";

const BreadcrumbCustom = () => {
	return (
		<div className="p-5">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li className="breadcrumb-item">
						<Link href="/visualize">
							<a>Visualize</a>
						</Link>
					</li>
					<li className="breadcrumb-item active" aria-current="page">
						Custom
					</li>
				</ol>
			</nav>
		</div>
	);
};
export default BreadcrumbCustom;
