'use client'
import dynamic from "next/dynamic"
import { useState } from 'react'

const HeavyComponent = dynamic(
    () => import('./components/HeavyComponent'),
    {
      ssr: false,
      loading: () => <p>Loading...</p>}
  );

export default function Home() {

  const [isVisable, setVisable] = useState(false)

  return (
    <main className='relative h-screen'>
        <h1>Hello World</h1>
        <button onClick={() => setVisable(true)}>Show</button>
        {isVisable && <HeavyComponent />}
    </main>
  )
}

/*

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch('')

  return {
    title: 'product.title',
    description: 'product.description'
  }
}

*/