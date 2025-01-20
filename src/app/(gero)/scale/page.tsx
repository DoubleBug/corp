import React from 'react'
import HomeSrc from '../../../../public/b4.jpeg'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'scale',
	icons: {
		icon: '/favicon.ico',
	},
}
export default function scale() {
	return <Hero imgUrl={HomeSrc} text="scale" content="This is the scale page" />
}
