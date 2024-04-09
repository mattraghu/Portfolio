import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function NavigationBar() {
	return (
		<div className="bg-black">
			<NavigationMenu>
				<NavigationMenuList className="py-3 px-3 pr-10 text-white dark:text-black">
					<NavigationMenuItem className="px-10">
						{/* <NavigationMenuTrigger className="bg-black dark:bg-white">
							About Me
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<NavigationMenuLink>Link</NavigationMenuLink>
						</NavigationMenuContent> */}
						<NavigationMenuLink>About Me</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink>Projects</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}
