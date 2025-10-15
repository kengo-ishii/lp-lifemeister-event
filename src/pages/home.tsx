'use client'

import Header from '@/src/components/header'
import Hero from '@/src/components/hero'
import Entry from '@/src/components/entry'
import Introduction from '@/src/components/introduction'
import FAQ from '@/src/components/faq'
import About from '@/src/components/about'
import EntryButton from '@/src/components/entryButton'
import Footer from '@/src/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div id="entry-section">
        <Entry />
      </div>
      <Introduction />
      <FAQ />
      <About />
      <Footer />
      <EntryButton />
    </div>
  )
}
