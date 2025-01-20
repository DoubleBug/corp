import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Props {
	imgUrl: StaticImageData
	text: string
	content: string
	// children: React.ReactNode;
}

const accessLink = ['/', '/performance', 'reliability', '/scale']

export default function page(props: Props) {
	return (
		<div className=" text-white h-screen relative">
			<div className="absolute inset-0 -z-10">
				<Image src={props.imgUrl} alt={props.text} fill style={{ objectFit: 'cover' }}></Image>
				<div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
			</div>
			<div className="flex justify-center items-center h-full">
				<h1 className="text-3xl font-bold text-white">{props.content}</h1>
			</div>
		</div>
	)
}
