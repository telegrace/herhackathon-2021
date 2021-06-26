import Analysis from "../../components/Analysis";
import BreadcrumbAnalyze from "../../components/Layout/BreadcrumbAnalyze";
import Image from "next/image";

const NextPage = () => {
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
export default NextPage;
