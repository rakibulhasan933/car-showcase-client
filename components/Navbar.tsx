import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
	return (
		<header className="absolute z-10 w-full ">
			<nav className=" max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
				<Link href="/" className='flex items-center justify-center '>
					<Image src="/logo.svg" alt='car hub logo'
						width={118}
						height={18}
						className='object-contain ' />
				</Link>
			</nav>
		</header>
	)
}

export default Navbar