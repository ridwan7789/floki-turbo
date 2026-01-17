import HeroSection from '@/components/HeroSection';
import ImpactStatement from '@/components/ImpactStatement';
import OriginStory from '@/components/OriginStory';
import CorePillars from '@/components/CorePillars';
import WhatMakesDifferent from '@/components/WhatMakesDifferent';
import TokenInfo from '@/components/TokenInfo';
import CommunitySection from '@/components/CommunitySection';
import ValhallaSection from '@/components/ValhallaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ImpactStatement />
      <OriginStory />
      <CorePillars />
      <WhatMakesDifferent />
      <TokenInfo />
      <CommunitySection />
      <ValhallaSection />
      <Footer />
    </div>
  );
};

export default Index;
