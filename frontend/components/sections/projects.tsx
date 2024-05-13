import { Reveal } from "@/components/reveal";
import ProjectCard from "@/components/ui/project-card";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Projects() {
	return (
		<Reveal
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
		>
			<section id="experiences">
				<h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center w-full my-9">
					My Projects
				</h2>

				<ProjectCard />
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
