import BreadcrumbAnalyze from "../components/Layout/BreadcrumbHome";
import Analysis from "../components/Analysis";
import Image from "next/image";

const Analyze = () => {
	return (
		<div>
			<BreadcrumbAnalyze />

			<div className="position-relative text-center mt-5 ">
				<Image
					alt="Mountains"
					src="/images/background.webp"
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
				<Analysis />
			</div>
		</div>
	);
};
export default Analyze;
