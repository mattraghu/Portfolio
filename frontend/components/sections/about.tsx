import { Reveal } from "@/components/reveal";

export default function AboutMe() {
	return (
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
					I am a driven and innovative Computer Engineering student at Stevens
					Institute of Technology, expecting to graduate in May 2024 with a
					Bachelor's degree and a GPA of 3.593. My education has equipped me
					with a strong foundation in programming and engineering principles,
					preparing me for a successful career in the tech industry.
				</p>
			</section>
		</Reveal>
	);
}
