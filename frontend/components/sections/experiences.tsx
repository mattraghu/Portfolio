import { Reveal } from "@/components/reveal";

import {
	IconArrowWaveRightUp,
	IconBoxAlignRightFilled,
	IconBoxAlignTopLeft,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";
const Skeleton = () => (
	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
	{
		title: "The Dawn of Innovation",
		description: "Explore the birth of groundbreaking ideas and inventions.",
		header: <Skeleton />,
		icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Digital Revolution",
		description: "Dive into the transformative power of technology.",
		header: <Skeleton />,
		icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Art of Design",
		description: "Discover the beauty of thoughtful and functional design.",
		header: <Skeleton />,
		icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Power of Communication",
		description:
			"Understand the impact of effective communication in our lives.",
		header: <Skeleton />,
		icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Pursuit of Knowledge",
		description: "Join the quest for understanding and enlightenment.",
		header: <Skeleton />,
		icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Joy of Creation",
		description: "Experience the thrill of bringing ideas to life.",
		header: <Skeleton />,
		icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "The Spirit of Adventure",
		description: "Embark on exciting journeys and thrilling discoveries.",
		header: <Skeleton />,
		icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
	},
];
export default function Experiences() {
	return (
		<Reveal
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
		>
			<section id="experiences">
				<h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center w-full my-9">
					My Work Experiences
				</h2>

				{/* {items.map((item, i) => (
					// <BentoGridItem
					// 	key={i}
					// 	title={item.title}
					// 	description={item.description}
					// 	header={item.header}
					// 	icon={item.icon}
					// 	className={i === 3 || i === 6 ? "md:col-span-2" : ""}
					// />
					<ProjectCard />
				))} */}
			</section>
		</Reveal>
	);
}
