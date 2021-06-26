import FileUploader from "../components/FileUploader";
import BreadcrumbHome from "../components/Layout/BreadcrumbHome";
import Image from "next/image";

const Home = () => {
	return (
		<div>
			<BreadcrumbHome />
			<div className="position-relative text-center mt-5">
				<div className=""></div>
				<Image
					alt="Mountains"
					src="/images/background.webp"
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
				<FileUploader />
			</div>
		</div>
	);
};
export default Home;
