import "../styles/custom.scss";
import NavBar from "../components/Layout/NavBar";
function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
