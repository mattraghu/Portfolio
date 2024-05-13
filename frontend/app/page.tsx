import Image from "next/image";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { AtSign, Github, Linkedin } from "lucide-react";

import { TracingBeam } from "@/components/ui/tracing-beam";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
	IconArrowWaveRightUp,
	IconBoxAlignRightFilled,
	IconBoxAlignTopLeft,
	IconClipboardCopy,
	IconFileBroken,
	IconSignature,
	IconTableColumn,
} from "@tabler/icons-react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProjectCard from "@/components/ui/project-card";

import Grid from "@/components/ui/grid";

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

export default function Home() {
	return (
		<div className="h-[700rem] w-full bg-gradient-to-b from-neutral-950 to-black relative flex flex-col items-center antialiased text-white bg">
			<TracingBeam className="px-4 bg-neutral-950">
				<div className="max-w-2xlaa mx-auto p-4">
					<h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
						Hello! My name is Matthew Raghunandan.
					</h1>
					<p></p>
					<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
						I'm a software engineer that is graduating from Stevens Institute of
						Technology in May 2024. I would love the opportunity to work with
						you!
					</p>
					<div className="flex gap-4 justify-center py-10">
						<TooltipProvider>
							<Reveal
								initial={{ opacity: 0, y: 20 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { duration: 0.4 },
								}}
							>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link
											href="https://www.linkedin.com/in/mattraghu/"
											target="_blank"
										>
											<Button variant="secondary" size="icon">
												<Linkedin />
											</Button>
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>LinkedIn</p>
									</TooltipContent>
								</Tooltip>
							</Reveal>
							<Reveal
								initial={{ opacity: 0, y: 20 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { duration: 0.4, delay: 0.2 },
								}}
							>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link href="https://github.com/mattraghu" target="_blank">
											<Button variant="secondary" size="icon">
												<Github />
											</Button>
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>Github</p>
									</TooltipContent>
								</Tooltip>
							</Reveal>
							<Reveal
								initial={{ opacity: 0, y: 20 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { duration: 0.4, delay: 0.4 },
								}}
							>
								<Tooltip>
									<TooltipTrigger asChild>
										<Link href="mailto:mattraghu@aol.com" target="_blank">
											<Button variant="secondary" size="icon">
												<AtSign />
											</Button>
										</Link>
									</TooltipTrigger>
									<TooltipContent>
										<p>Email</p>
									</TooltipContent>
								</Tooltip>
							</Reveal>
						</TooltipProvider>
					</div>
				</div>
				<Reveal
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
				>
					<section
					// className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16 px-10"
					>
						<h2
							id="about"
							className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center my-9"
						>
							About Me
						</h2>
						<p className="leading-7">
							I am a driven and innovative Computer Engineering student at
							Stevens Institute of Technology, expecting to graduate in May 2024
							with a Bachelor's degree and a GPA of 3.593. My education has
							equipped me with a strong foundation in programming and
							engineering principles, preparing me for a successful career in
							the tech industry.
							<br />
							<br />
							In terms of skills, I am proficient in a variety of programming
							languages, including Python, C++, Lua, C#, ARM, VHDL, and
							JavaScript. I also have experience with tools and technologies
							such as PyTorch, OpenCV, Linux, Git, React, HTML, Arduino, and
							SQL, which I have utilized in various projects and work
							experiences.
							<br />
							<br />
							My work experience includes positions at Wine Depot of Livingston,
							where I worked in management during the summers of 2022 and 2023.
							In this role, I was responsible for creating and managing the
							company's website and online store, as well as overseeing data and
							finances. I also assisted in day-to-day operations, gaining
							valuable leadership and organizational skills.
							<br />
							<br />
							One of my most recent and impactful projects is the Kearfott
							Autonomous UAV, which I have been working on since September 2023.
							Collaborating with a group, we are developing an autonomous UAV
							for Kearfott Corporation, incorporating SLAM, Machine Learning,
							and other cutting-edge techniques to enable obstacle avoidance.
							<br />
							<br />
							In addition to my academic and professional pursuits, I have a
							passion for game development. I have been creating games since
							2016, using platforms like Unreal Engine and ROBLOX. Currently, I
							am working on a more advanced game with features such as custom
							terrain generation, NPC systems, inventory management, and
							sophisticated combat systems.
							<br />
							<br />
							I am also a proactive participant in hackathons, such as the
							GreenNav project, where my team won the "Most Innovative" award at
							the CEWIT hackathon at Stony Brook University in March 2024. Our
							project aimed to find the most optimal path for an electric
							vehicle based on carbon emissions at each charging station and
							time, showcasing my ability to innovate and problem-solve in a
							collaborative environment.
							<br />
							<br />
							In addition to my technical skills, I am fluent in English and
							Spanish, and I am currently learning Hebrew and Latin. I am also
							the recipient of the Edwin A. Stevens Scholarship, highlighting my
							academic achievements and commitment to excellence.
							<br />
							<br />
							Overall, I am a dedicated and versatile individual with a passion
							for technology and innovation. I am excited to continue learning
							and growing in the field of computer engineering, contributing my
							skills and expertise to meaningful projects and teams.
							<br />
						</p>
					</section>
				</Reveal>

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
				<Reveal
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
				>
					<section id="experiences">
						<h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center w-full my-9">
							My Work Experiences
						</h2>

						{items.map((item, i) => (
							// <BentoGridItem
							// 	key={i}
							// 	title={item.title}
							// 	description={item.description}
							// 	header={item.header}
							// 	icon={item.icon}
							// 	className={i === 3 || i === 6 ? "md:col-span-2" : ""}
							// />
							<ProjectCard />
						))}
					</section>
				</Reveal>
				<Reveal
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
				>
					<section id="experiences">
						<h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-center w-full my-9">
							My Skills
						</h2>

						<BentoGrid>
							{items.map((item, i) => (
								<BentoGridItem
									key={i}
									title={item.title}
									description={item.description}
									header={item.header}
									icon={item.icon}
									className={i === 3 || i === 6 ? "md:col-span-2" : ""}
								/>
							))}
						</BentoGrid>
					</section>
				</Reveal>

				<BackgroundBeams className="pointer-events-none h-[40rem]" />
			</TracingBeam>
		</div>
	);
}
