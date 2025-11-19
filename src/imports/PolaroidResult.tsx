import imgImage1 from "figma:asset/ab1867e359183c8caff87ae61ad805d84bbbe06f.png";
import imgWhatsAppImage20251117At1749341 from "figma:asset/4aef63067c739da52744e677251065b88e52646d.png";

interface PolaroidResultProps {
  onNavigate: (page: 'home' | 'photobooth' | 'polaroid' | 'polaroid-customize' | 'polaroid-countdown' | 'polaroid-result') => void;
}

function Frame({ onAboutClick }: { onAboutClick: () => void }) {
  return (
    <div className="w-full px-4 md:px-0 md:absolute md:left-[65px] md:top-[60px] md:w-[1311px] content-stretch flex gap-[24px] items-center justify-end py-4 md:py-0">
      <button onClick={onAboutClick} className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e82ebf] text-[16px] md:text-[20px] text-nowrap whitespace-pre cursor-pointer hover:underline">{`About `}</button>
    </div>
  );
}

function ImageAspectRatio() {
  return (
    <div className="content-stretch flex flex-col h-[350px] md:h-[502px] items-start relative shrink-0 w-full overflow-hidden rounded-lg" data-name="image-aspect-ratio [1.0]">
      <div className="absolute bg-gray-100 inset-0 rounded-lg" />
      <div className="absolute aspect-[800/600] left-[3.51%] right-[3.82%] top-[43px] animate-photo-slide" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#e82ebf] box-border content-stretch flex gap-[8px] h-[62px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full md:w-[198px] cursor-pointer hover:opacity-90 transition-opacity"
      data-name="button [1.0]"
    >
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Download
      </p>
    </button>
  );
}

function Frame1({ onDownload }: { onDownload: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center md:items-end relative shrink-0 w-full md:w-[599px]">
      <ImageAspectRatio />
      <Button onClick={onDownload} />
    </div>
  );
}

function Frame2({ onDownload }: { onDownload: () => void }) {
  return (
    <div className="w-full px-4 md:px-0 md:absolute md:left-[285px] md:top-[168px] md:w-[871px] content-stretch flex flex-col gap-[40px] md:gap-[60px] items-center py-8 md:py-0">
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[1.2] text-center md:text-left relative shrink-0 text-[#e82ebf] text-[32px] md:text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Almost there — printing now;)
      </p>
      <Frame1 onDownload={onDownload} />
    </div>
  );
}

export default function PolaroidResult({ onNavigate }: PolaroidResultProps) {
  const handleDownload = () => {
    alert('Download started! Your polaroid is being saved.');
    // In a real app, this would trigger a download
    // After download, could navigate back to home
    setTimeout(() => {
      onNavigate('home');
    }, 1500);
  };

  const handleAbout = () => {
    alert('Soul:) Prints - Create your own story with personalized photo prints!');
  };

  return (
    <div className="bg-[#ecebeb] relative min-h-screen w-full flex flex-col md:block overflow-auto" data-name="Polaroid costumize">
      <Frame onAboutClick={handleAbout} />
      <div className="flex-1 flex items-center justify-center">
        <Frame2 onDownload={handleDownload} />
      </div>
      <div className="hidden md:block absolute h-[278px] left-[581px] top-[407px] w-[269px]" data-name="WhatsApp Image 2025-11-17 at 17.49.34 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.9%] left-[-0.04%] max-w-none top-[-24.31%] w-[100.09%]" src={imgWhatsAppImage20251117At1749341} />
        </div>
      </div>
    </div>
  );
}