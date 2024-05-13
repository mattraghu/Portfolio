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

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ProjectCard from "@/components/ui/project-card";

import Grid from "@/components/ui/grid";

// Sections
import About from "@/components/sections/about";
import Experiences from "@/components/sections/experiences";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
	return (
		<div className="h-[700rem] w-full bg-gradient-to-b from-neutral-950 to-neutral-950 relative flex flex-col items-center antialiased text-white bg">
			{/* <TracingBeam className="px-4 bg-neutral-950"> */}
			<div className="px-10 py-10">
				<div className="max-w-2xlaa mx-auto p-4">
					<h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
						Hello! My name is Matthew Raghunandan.
					</h1>
					<p></p>
					<Image
						src="/media/me.PNG"
						alt="Matthew Raghunandan"
						width={300}
						height={300}
						className="rounded-full items-center justify-center mx-auto my-4"
					/>
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
					<About />
					<Experiences />
					<Projects />
					<Skills />
				</div>

				<BackgroundBeams className="pointer-events-none h-[100rem] w-screen" />
			</div>
			{/* </TracingBeam> */}
		</div>
	);
}
