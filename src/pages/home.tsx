'use client'

import Header from '@/src/components/header'
import Hero from '@/src/components/hero'
import SEOContent from '@/src/components/seoContent'
import News from '@/src/components/news'
import Venue from '@/src/components/venue'
import Entry from '@/src/components/entryPink'
import Introduction from '@/src/components/introduction'
import EntryOgange from '@/src/components/entryOgange'
import FAQ from '@/src/components/faq'
import EntryGreen from '@/src/components/entryGreen'
import About from '@/src/components/about'
import EntryButton from '@/src/components/entryButton'
import Footer from '@/src/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <Hero />
      <SEOContent />
      <News />
      <Venue />
      <div id="entry-section">
        <Entry />
      </div>
      <Introduction />
      <EntryOgange />
      <FAQ />
      <EntryGreen />
      <About />
      <Footer />
      <EntryButton />
    </div>
  )
}
