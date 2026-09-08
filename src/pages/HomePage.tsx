import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import APKDownloadSection from '../components/home/APKDownloadSection';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Helmet>
        <title>SLV Marine Exports | Premium Indian Seafood Exporter</title>
        <meta name="description" content="Trusted exporter of fresh and frozen seafood from India with uncompromising quality. Delivering premium Indian seafood across the India and Nepal." />
      </Helmet>
      <div className="w-full min-h-screen">
        <HeroSection />
        <StatsSection />
        <WhyChooseUs />
        <APKDownloadSection />
      </div>
    </>
  );
};

export default HomePage;
