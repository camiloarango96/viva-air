export default function Logo() {
	return (
		<div className="flex flex-row space-x-2">
			<h5 className="text-lg">Viva Air</h5>
			<div className="relative">
				<span className="h-2.5 w-2.5 md:h-3 md:w-3 bg-yellow-400 rounded-full inline-block absolute bottom-1  left-0"></span>
				<span className="h-2.5 w-2.5 md:h-3 md:w-3 bg-blue-600 rounded-full inline-block absolute left-2 md:left-3"></span>
				<span className="h-2.5 w-2.5 md:h-3 md:w-3 bg-red-600 rounded-full inline-block absolute bottom-1  left-4 md:left-6"></span>
			</div>
		</div>
	);
}
