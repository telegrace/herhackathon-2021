import Visualize from "../../components/Visualize";
import BreadcrumbVisualize from "../../components/Layout/BreadcrumbVisualize"
import Image from "next/image";

const VisualizePage = () => {
	return (
		<div>
			<BreadcrumbVisualize />

			<div className="position-relative text-center mt-5 ">
				<Image
					alt="Mountains"
					src="/images/background.webp"
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
				<Visualize />
			</div>
		</div>
	);
};
export default VisualizePage;
