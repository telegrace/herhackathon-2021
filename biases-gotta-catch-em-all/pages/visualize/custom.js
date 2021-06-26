import Custom from "../../components/Custom";
import BreadcrumbCustom from "../../components/Layout/BreadcrumbCustom";
import Image from "next/image";

const NextPage = () => {
	return (
		<div>
			<BreadcrumbCustom />
			<div className="position-relative text-center mt-5 ">
				<Image
					alt="Mountains"
					src="/images/background.webp"
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
				<Custom />
			</div>
		</div>
	);
};
export default NextPage;
