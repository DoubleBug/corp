import React from 'react'
import HomeSrc from '../../../../public/b3.jpeg'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'reliability',
}
export default function reliability() {
	return <Hero imgUrl={HomeSrc} text="reliability" content="This is the reliability page" />
}
