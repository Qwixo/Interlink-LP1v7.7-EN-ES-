import React from 'react'
import SPANISHStartHero from "../components/SPANISHStartHero"
import SPANISHHowInterlinkHelpsSection from '../components/SPANISHHowInterlinkHelpsSection'
import SPANISHStudentJourneyComparisonSection from '../components/SPANISHStudentJourneyComparisonSection'
import SPANISHComparisonTableSection from '../components/SPANISHComparisonTableSection'
import SPANISHStudyOptionsSection from '../components/SPANISHStudyOptionsSection'
import SPANISHCleanJourneyTimeline from "../components/SPANISHCleanJourneyTimeline"
import SPANISHTimelineSection from '../components/SPANISHTimelineSection'
import SPANISHTestimonialsSection from '../components/SPANISHTestimonialsSection'
import SPANISHStudentLifeSection from '../components/SPANISHStudentLifeSection'
import SPANISHOnTheFenceSection from '../components/SPANISHOnTheFenceSection'
// import IsRightForYouSection from '../components/IsRightForYouSection'
import SPANISHFAQSection from '../components/SPANISHFAQSection'
import SPANISHLastCTASection from '../components/SPANISHLastCTASection'
import SPANISHFooter from '../components/SPANISHFooter'
import ScrollToTop from '../components/ScrollToTop'

const SPANISHStartPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      
      {/* NEW FLOATING + TEXT ROTATE HERO SECTION */}
      <SPANISHStartHero />
      
      {/* REPLACED SECTION: Start pursuing your goals with INTERLINK! */}
      <SPANISHHowInterlinkHelpsSection />
      
      {/* REPLACED: Speaking English Pays Off with Student Journey Comparison */}
      <SPANISHStudentJourneyComparisonSection />
      
      {/* UPDATED SECTION: Comparison Table */}
      <SPANISHComparisonTableSection />
      
      {/* UPDATED SECTION: Study Options */}
      <SPANISHStudyOptionsSection />
      
      {/* CleanJourneyTimeline */}
      <SPANISHCleanJourneyTimeline />
      
      {/* NEW SECTION: Timeline - What happens after you apply */}
      <SPANISHTimelineSection />
      
      {/* NEW SECTION: Testimonials - Not touching as requested */}
      <SPANISHTestimonialsSection guideStyle />

      
      {/* NEW SECTION: Student Life Section - Added between Testimonials and On The Fence */}
      <SPANISHStudentLifeSection />
      
      {/* NEW SECTION: On The Fence */}
      <SPANISHOnTheFenceSection />
      
      {/* NEW SECTION: Is Right For You - Commented out as requested */}
      {/* <IsRightForYouSection /> */}
      
      {/* NEW SECTION: FAQ */}
      <SPANISHFAQSection />
      
      {/* FINAL CTA SECTION - Updated */}
      <SPANISHLastCTASection />

      <SPANISHFooter />
    </div>
  )
}

export default SPANISHStartPage
