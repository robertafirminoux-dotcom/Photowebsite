import { useState } from 'react';
import Home from './imports/Home-13-1426';
import AboutMe from './imports/AboutMe-13-1558';
import Photobooth from './imports/Photobooth';
import Polaroid from './imports/Polaroid';
import PolaroidCustomize from './imports/PolaroidCustomize';
import PolaroidCountdown from './imports/PolaroidCountdown';
import PolaroidResult from './imports/PolaroidResult';
import PhotoboothUpload from './imports/PhotoboothUpload';
import PhotoboothCamera from './imports/PhotoboothCamera';
import PhotoboothCapture from './imports/PhotoboothCapture';
import PhotoboothCustomize from './imports/PhotoboothCustomize';
import PhotoboothResult from './imports/PhotoboothResult';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full h-screen overflow-auto">
      {currentPage === 'home' && <Home onNavigate={navigateTo} />}
      {currentPage === 'about' && <AboutMe onNavigate={navigateTo} />}
      {currentPage === 'photobooth' && <Photobooth onNavigate={navigateTo} />}
      {currentPage === 'photobooth-upload' && <PhotoboothUpload onNavigate={navigateTo} />}
      {currentPage === 'photobooth-camera' && <PhotoboothCamera onNavigate={navigateTo} />}
      {currentPage === 'photobooth-capture' && <PhotoboothCapture onNavigate={navigateTo} />}
      {currentPage === 'photobooth-customize' && <PhotoboothCustomize onNavigate={navigateTo} />}
      {currentPage === 'photobooth-result' && <PhotoboothResult onNavigate={navigateTo} />}
      {currentPage === 'polaroid' && <Polaroid onNavigate={navigateTo} />}
      {currentPage === 'polaroid-customize' && <PolaroidCustomize onNavigate={navigateTo} />}
      {currentPage === 'polaroid-countdown' && <PolaroidCountdown onNavigate={navigateTo} />}
      {currentPage === 'polaroid-result' && <PolaroidResult onNavigate={navigateTo} />}
    </div>
  );
}