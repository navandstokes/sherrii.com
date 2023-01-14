import { Menu } from "components/box/Menu"
import { Logo } from "components/box/Logo"

export const Navbar = ({ items }) => {
	return (
		<div className="w-full flex flex-row justify-between items-center px-6 py-4 bg-blue-500 sticky top-0 shadow-2xl z-50">
			<Logo />
			<div className="flex flex-row gap-4">
				<Menu items={items} />
			</div>
		</div>
	)
}
