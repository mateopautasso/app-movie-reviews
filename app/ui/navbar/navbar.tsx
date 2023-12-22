function Aside({ children }: { children: React.ReactNode }) {
	return (
		<header className='w-full flex flex-col items-center'>
			<ul className='flex justify-between w-full gap-2'>{children}</ul>
		</header>
	);
}
export default Aside;
