// components/ui/Grid.js
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Grid = ({ items = [], className = "" }) => (
	<div
		className={`grid grid-cols-2 gap-4 ${className}`}
		style={{ gridAutoFlow: "row" }}
	>
		{items.map((item, i) => (
			<CardContainer className="inter-var" key={i}>
				<CardBody
					key={i}
					className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[25rem] h-[30rem] rounded-xl p-6 border  "
				>
					<CardItem
						translateZ="50"
						className="text-xl font-bold text-neutral-600 dark:text-white"
					>
						test blasdjfhlaksdjflkjlsjldkfjlksd.nfm,
						{/* title={item.title}
						description={item.description}
						header={item.header}
						icon={item.icon} */}
					</CardItem>
				</CardBody>
			</CardContainer>
		))}
	</div>
);

export default Grid;
