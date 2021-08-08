import NavBar from '../components/navBar.jsx';

export default function Inicio() {
	return (
		<div className="flex w-full h-full px-9 md:px-20 xl:px-60 flex-col">
			<NavBar />
			<header className="mt-16">
				<div className="px-6">
					<h1 className="text-center text-2xl font-bold">
						Vivir viajando nunca fue tan facil.
					</h1>
				</div>
				<div className="mt-6">
					<h6 className="text-center text-sm text-gray-500">
						Programa tus proximas vacaciones con nosotros. Con destinos desde
						99.900.
					</h6>
				</div>
			</header>
		</div>
	);
}
