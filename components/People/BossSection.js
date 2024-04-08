import BossCard from "./BossCard";
import { useHead } from "../../hooks/useBoss";
import Loading from "../Loading";

const BossSection = () => {
	const { data: boss, isLoading } = useHead();

	if (isLoading) return <Loading />;
	return (
		<div className="px-4 py-8 w-full">
			<h1 className="text-2xl text-center font-bold">Meet Our Head Laboratory</h1>
			<div className="flex justify-center mt-12">
				<div className="flex gap-8">{boss && boss.map && boss?.map((boss, idx) => <BossCard boss={boss} key={idx} />)}</div>
			</div>
		</div>
	);
};

export default BossSection;
