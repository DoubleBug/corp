import React from 'react'
import Image from 'next/image'
import HomeSrc from '../../../public/b1.jpeg'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
}
export default function page() {
	return <Hero imgUrl={HomeSrc} text="Home" content="This is the home page" />
}
