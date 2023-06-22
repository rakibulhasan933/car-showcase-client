import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
	return (
		<footer className="flex flex-col mt-5 border-b border-gray-100 text-black-100">
			<div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
				<div className="flex flex-col items-start justify-start gap-6 ">
					<Image src="/logo.svg" alt='logo' width={118} height={18} className='object-contain ' />
					<p className="text-base text-gray-700 "> carHub 2023 <br />All rights reserved &copy; </p>
				</div>
				<div className="flex flex-wrap flex-1 w-full gap-20 md:justify-end max-md:mt-10">
					{footerLinks?.map((link) => (
						<div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
							<h3 className="font-bold ">{link.title}</h3>
							{link?.links?.map((item) => (
								<Link href={item.url} key={item.title} className='text-gray-500 ' >{item.title}</Link>
							))}
						</div>
					))}
				</div>
			</div>

		</footer>
	)
}

export default Footer