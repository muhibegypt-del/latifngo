import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './components/HomePage';
import { IslamicEducationTrustPage } from './components/IslamicEducationTrustPage';
import { BaitulKhairPage } from './components/BaitulKhairPage';
import { EbdurahmanFoundationPage } from './components/EbdurahmanFoundationPage';
import { WaterWellPage } from './components/WaterWellPage';
import { EducationalSponsorshipsPage } from './components/EducationalSponsorshipsPage';
import { SkillsTrainingPage } from './components/SkillsTrainingPage';
import { OrphanEmpowermentPage } from './components/OrphanEmpowermentPage';
import { SustainableDevelopmentPage } from './components/SustainableDevelopmentPage';
import { useScrollPosition } from './hooks/useScrollPosition';
import { useNavigation } from './hooks/useNavigation';
import { useLenis } from './hooks/useLenis';

export default function App() {
  useLenis();
  const { isScrolled } = useScrollPosition(50);
  const { view, navigateTo, scrollToSection, isNavigating } = useNavigation();

  const renderPage = () => {
    switch (view) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'islamic-education-trust':
        return <IslamicEducationTrustPage />;
      case 'baitul-khair':
        return <BaitulKhairPage />;
      case 'ebdurahman-foundation':
        return <EbdurahmanFoundationPage />;
      case 'water-well':
        return <WaterWellPage />;
      case 'educational-sponsorships':
        return <EducationalSponsorshipsPage />;
      case 'skills-training':
        return <SkillsTrainingPage />;
      case 'orphan-empowerment':
        return <OrphanEmpowermentPage />;
      case 'sustainable-development':
        return <SustainableDevelopmentPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <MainLayout
      view={view}
      isScrolled={isScrolled}
      onNavigate={navigateTo}
      onSectionScroll={scrollToSection}
      isNavigating={isNavigating}
    >
      {renderPage()}
    </MainLayout>
  );
}
