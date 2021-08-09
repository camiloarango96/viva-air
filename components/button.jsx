const tipos = {
	primary: 'text-white bg-primary font-bold',
	secondary: 'text-white bg-blue-400',
	terceary: 'bg-gray-300',
};

export function PrimaryButton(props) {
	return (
		<button
			className={`text-center text-sm px-5 py-2 rounded-custom ${tipos.primary}`}
		>
			{props.text}
		</button>
	);
}

export function SecondaryButton(props) {
	return (
		<button
			className={`text-center text-sm px-5 py-2 rounded-custom ${tipos.secondary}`}
		>
			{props.texto}
		</button>
	);
}

export function TercearyButton(props) {
	return (
		<button
			className={`text-center text-sm px-5 py-2 rounded-custom ${tipos.terceary}`}
		>
			{props.texto}
		</button>
	);
}
