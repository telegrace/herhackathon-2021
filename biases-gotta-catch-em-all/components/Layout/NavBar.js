import Link from "next/link";

function NavBar() {
	return (
		<div className="container p-5">
			<nav className="navbar">
				<h1 className="mx-auto">B I A S E S</h1>
				<ul className="navbar-nav mt-5 text-center mx-auto">
					<li className="nav-item mt-2">
						<Link href="/">
							<a className="nav-link">
								<i
									className="fa fa-home"
									aria-hidden="true"
								></i>
								Home
							</a>
						</Link>
					</li>
					<li className="nav-item mt-5">
						<Link href="/visualize">
							<a className="nav-link">
								<i className="fa fa-eye" aria-hidden="true"></i>
								Visualize
							</a>
						</Link>
					</li>
					<li className="nav-item mt-5">
						<Link href="/visualize/next">
							<a className="nav-link">
								<i
									className="fa fa-line-chart"
									aria-hidden="true"
								></i>
								Analyze
							</a>
						</Link>
					</li>
					<li className="nav-item mt-5">
						<Link href="/files">
							<a className="nav-link">
								<i
									className="fa fa-file-archive-o"
									aria-hidden="true"
								></i>
								Files
							</a>
						</Link>
					</li>
					<li className="nav-item mt-5">
						<Link href="/about">
							<a className="nav-link">
								<i
									className="fa fa-file-text-o"
									aria-hidden="true"
								></i>
								About
							</a>
						</Link>
					</li>
					<li className="nav-item mt-5 ">
						<Link href="/contact">
							<a className="nav-link">
								<i className="fa fa-pencil-square-o "></i>
								Contact
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
