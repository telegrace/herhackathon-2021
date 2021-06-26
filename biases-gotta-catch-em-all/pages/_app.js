import NavBar from "../components/Layout/NavBar";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }) {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<NavBar />
				</div>

				<div className="col-10">
					<Component {...pageProps} />
				</div>
			</div>
		</div>
	);
}

export default MyApp;
