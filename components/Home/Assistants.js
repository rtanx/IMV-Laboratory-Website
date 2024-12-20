import Image from "next/legacy/image";
import { usePeople } from "../../hooks/usePeople";
import Loading from "../Loading";
import { useRouter } from "next/router";

export default function Assistants() {
	const router = useRouter();
	const { data: assistants, isLoading } = usePeople();

	if (isLoading) return <Loading />;

	return (
		<div className="p-4 md:p-8 pb-12 mb-8 max-w-full overflow-hidden">
			<h1 className="mb-12 text-center text-2xl font-bold tracking-wide">Assistants In-Charge</h1>
			<div className="flex flex-wrap justify-center gap-x-4 gap-y-8 place-items-center xl:mx-20">
				{assistants &&
					assistants.map &&
					assistants?.map((assistant, idx) => (
						<div key={idx} className="cursor-pointer relative group" onClick={() => router.push(`/people/assistant/${assistant.uuid}`)}>
							<Image src={assistant.photo_url} width={100} height={100} objectFit="cover" className="rounded-full pointer-events-none" />
							<div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
								<p className="whitespace-nowrap">{assistant.fullname}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
