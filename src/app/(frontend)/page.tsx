import { HeroSection } from '@/components/sections/HeroSection'
import { LogoMarquee } from '@/components/sections/LogoMarquee'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { VideoShowcaseSection } from '@/components/sections/VideoShowcaseSection'
import { EventsSection } from '@/components/sections/EventsSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { IncludedSection } from '@/components/sections/IncludedSection'
import { InlineLeadSection } from '@/components/sections/InlineLeadSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <ServicesSection />
      <VideoShowcaseSection />
      <EventsSection />
      <SocialProofSection />
      <IncludedSection />
      <InlineLeadSection />
    </>
  )
}
