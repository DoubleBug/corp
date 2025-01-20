import React from 'react'
import HomeSrc from '../../../../public/b2.jpeg'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'performance',
}
export default function performance() {
	return <Hero imgUrl={HomeSrc} text="performance" content="This is the performance page" />
}
