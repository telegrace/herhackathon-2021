import BreadcrumbAbout from "../components/Layout/BreadcrumbAbout";
import Image from "next/image";

const About = () => {
	return (
		<div>
			<BreadcrumbAbout />

			<div className="position-relative text-center mt-5 ">
				<Image
					alt="Mountains"
					src="/images/background.webp"
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
				<div
					className="container w-50 file-uploader"
					style={{ height: "80vh" }}
				>
					<h1 className="mt-5 mb-2 p-5">A B O U T</h1>
					<p>Our aim is reduce biases.</p>
				</div>
			</div>
		</div>
	);
};

export default About;
