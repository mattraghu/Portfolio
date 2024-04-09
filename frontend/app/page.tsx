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

export default function Home() {
	return (
		<div className="h-[100rem] w-full bg-neutral-950 relative flex flex-col items-center antialiased text-white">
			<TracingBeam className="px-4">
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
											href="https://www.linkedin.com/in/danielwanjo/"
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
										<Link
											href="https://github.com/KeluhingBavui"
											target="_blank"
										>
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
										<Link
											href="mailto:daniel01.jonathan@gmail.com"
											target="_blank"
										>
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
					<section className="flex flex-col items-start justify-start gap-4 sm:py-32 py-16 px-10">
						<h2
							id="about"
							className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl"
						>
							About Me
						</h2>
						<p className="leading-7">
							I love programming. This is a paragraph about me. I love the joy
							of the Lord. Yes this is true. I am just putting random text right
							now. Test 123.
							<br />
							<br />
							blah blah blah blah blah blah blah blah blah blah blah blah blah
							blah blah blah
							<br />
							<br />
							blah blah
							<br />
						</p>
					</section>
				</Reveal>

				<BackgroundBeams />
			</TracingBeam>
		</div>
	);
}
