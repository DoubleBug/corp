'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header() {
	const pathname = usePathname()
	const linkDate = [
		{
			name: 'Performance',
			path: '/performance',
			active: pathname === '/performance',
		},
		{
			name: 'Reliability',
			path: '/reliability',
			active: pathname === '/reliability',
		},
		{
			name: 'Scale',
			path: '/scale',
			active: pathname === '/scale',
		},
	]
	const pathName = usePathname()

	return (
		<div className="absolute top-0 left-0 w-full z-10">
			<div className="flex flex-row justify-between items-center p-4 mx-auto container text-white">
				<Link className="text-3xl font-bold" href="/">
					Home
				</Link>
				<div className="flex flex-row gap-4 text-xl space-x-4">
					{linkDate.map(item => (
						<Link
							key={item.name}
							href={item.path}
							className={`${item.active ? 'underline' : ''} hover:underline`}
						>
							{item.name}
						</Link>
					))}
					{/* <Link href="/performance">Performance</Link>
					<Link href="/reliability">Reliability</Link>
					<Link href="/scale">Scale</Link> */}
				</div>
			</div>
		</div>
	)
}
