import Link from "next/link";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container md">
				<ul className="navbar-nav">
					<li className="nav-item">
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
					<li className="nav-item">
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
					<li className="nav-item">
						<Link href="/contact">
							<a className="nav-link">
								<i className="fa fa-pencil-square-o "></i>
								Contact
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavBar;
