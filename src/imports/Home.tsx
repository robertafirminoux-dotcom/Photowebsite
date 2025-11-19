import svgPaths from "./svg-73t3kyipat";
import imgAlert from "figma:asset/2d8fb0e986b85cbc4bb1175d7858ac803f9a828b.png";
import imgImageAspectRatio10 from "figma:asset/c58e0ee71e71cc580a5b0f9763c735b220f17eb6.png";
import imgPhotoOfACoupleInLove from "figma:asset/b9eb7470b0ce06080dd0248d837fca2bdb143306.png";
import imgImage1 from "figma:asset/ab1867e359183c8caff87ae61ad805d84bbbe06f.png";
import imgWhatsAppImage20251117At1749341 from "figma:asset/4aef63067c739da52744e677251065b88e52646d.png";

interface HomeProps {
  onNavigate: (page: string) => void;
}

function Logo() {
  return (
    <div className="backdrop-blur-[200px] backdrop-filter content-stretch flex flex-col gap-[16px] items-start" data-name="Logo">
      <div className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[1.2] not-italic relative shrink-0 text-[64px] md:text-[128px] w-[217px] md:w-[435px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 435 308\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(21.75 0 0 15.4 217.5 154)\\'><foreignObject x=\\'-190\\' y=\\'-190\\' width=\\'380\\' height=\\'380\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgba(255, 173, 59, 1) 0%, rgba(255, 139, 80, 1) 25%, rgba(255, 105, 100, 1) 50%, rgba(255, 71, 121, 1) 75%, rgba(255, 37, 142, 1) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>')" }}>
        <p className="mb-0">Soul:)</p>
        <p>Prints</p>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[#172b4d] text-[24px] md:text-[48px] w-full">Create your own story.</p>
    </div>
  );
}

function Alert() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="Alert">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[24px] size-full" src={imgAlert} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[24px] size-full" src={imgAlert} />
      </div>
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Alert">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAlert} />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white h-auto md:h-[530px] relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] md:gap-[32px] h-auto md:h-[530px] items-start p-[24px] md:p-[56px] relative w-full">
          <SectionHeader />
          <Alert />
        </div>
      </div>
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout() {
  return <div className="h-full w-0" data-name="Aspect ratio keeper # Rotated Auto Layout" />;
}

function AspectRatioKeeperAdditionally45RotatedAutoLayout() {
  return (
    <div className="content-stretch flex h-[220px] items-start relative w-full" data-name="Aspect ratio keeper # Additionally 45º rotated Auto Layout">
      <div className="flex h-full items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.4142167270183563)+(var(--transform-inner-width)*0.9101782441139221)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "220" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[24.47deg]">
          <AspectRatioKeeperRotatedAutoLayout />
        </div>
      </div>
    </div>
  );
}

function ImageAspectRatio() {
  return (
    <div className="content-stretch flex flex-col h-[194px] items-start relative shrink-0 w-full" data-name="image-aspect-ratio [1.0]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071117162704468)+(var(--transform-inner-height)*0.7071018218994141)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "220", "--transform-inner-height": "220" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg] w-full">
          <AspectRatioKeeperAdditionally45RotatedAutoLayout />
        </div>
      </div>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAspectRatio10} />
      <div className="absolute bg-gray-100 inset-[0.73%_3.18%_1.01%_3.64%]" />
      <div className="absolute inset-[15.67%_36.82%_15.55%_37.27%]" data-name="photo of a couple in love">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgPhotoOfACoupleInLove} />
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#e82ebf] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="button [1.0]"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
          <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Photobooth
          </p>
        </div>
      </div>
    </button>
  );
}

function Photobooth({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="bg-white box-border content-stretch flex flex-col gap-[20px] h-[282px] items-center justify-center p-[20px] relative rounded-[12px] shrink-0 w-[260px] cursor-pointer hover:shadow-xl transition-shadow" 
      data-name="Photobooth"
      onClick={onClick}
    >
      <ImageAspectRatio />
      <Button onClick={(e) => { e.stopPropagation(); onClick(); }} />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout1() {
  return <div className="h-full w-0" data-name="Aspect ratio keeper # Rotated Auto Layout" />;
}

function AspectRatioKeeperAdditionally45RotatedAutoLayout1() {
  return (
    <div className="content-stretch flex h-[220px] items-start relative w-full" data-name="Aspect ratio keeper # Additionally 45º rotated Auto Layout">
      <div className="flex h-full items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.4142167270183563)+(var(--transform-inner-width)*0.9101782441139221)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "220" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[24.47deg]">
          <AspectRatioKeeperRotatedAutoLayout1 />
        </div>
      </div>
    </div>
  );
}

function ImageAspectRatio1() {
  return (
    <div className="content-stretch flex flex-col h-[189px] items-start relative shrink-0 w-full" data-name="image-aspect-ratio [1.0]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071117162704468)+(var(--transform-inner-height)*0.7071018218994141)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "220", "--transform-inner-height": "220" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg] w-full">
          <AspectRatioKeeperAdditionally45RotatedAutoLayout1 />
        </div>
      </div>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAspectRatio10} />
      <div className="absolute bg-gray-100 inset-[0.73%_3.18%_1.01%_3.64%]" />
      <div className="absolute aspect-[800/600] left-[18.18%] right-[17.73%] top-[41.5px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[70px] left-[76px] top-[51.5px] w-[68px]" data-name="WhatsApp Image 2025-11-17 at 17.49.34 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.9%] left-[-0.04%] max-w-none top-[-24.31%] w-[100.09%]" src={imgWhatsAppImage20251117At1749341} />
        </div>
      </div>
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#e82ebf] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="button [1.0]"
    >
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative w-full">
          <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Polaroid
          </p>
        </div>
      </div>
    </button>
  );
}

function Polaroid({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="bg-white box-border content-stretch flex flex-col gap-[20px] items-center justify-center p-[20px] relative rounded-[12px] shrink-0 w-[260px] cursor-pointer hover:shadow-xl transition-shadow" 
      data-name="Polaroid"
      onClick={onClick}
    >
      <ImageAspectRatio1 />
      <Button1 onClick={(e) => { e.stopPropagation(); onClick(); }} />
    </div>
  );
}

function Frame({ onPhotoboothClick, onPolaroidClick }: { onPhotoboothClick: () => void; onPolaroidClick: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col md:flex-row gap-[30px] md:gap-[61px] items-center relative shadow-[0px_4px_50px_0px_rgba(0,0,0,0.15)] shrink-0">
      <Photobooth onClick={onPhotoboothClick} />
      <Polaroid onClick={onPolaroidClick} />
    </div>
  );
}

function Frame1({ onPhotoboothClick, onPolaroidClick }: { onPhotoboothClick: () => void; onPolaroidClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-full">
      <Section />
      <Frame onPhotoboothClick={onPhotoboothClick} onPolaroidClick={onPolaroidClick} />
    </div>
  );
}

function Frame3({ onPhotoboothClick, onPolaroidClick }: { onPhotoboothClick: () => void; onPolaroidClick: () => void }) {
  return (
    <div className="w-full px-4 md:px-0 md:absolute md:left-[293px] md:top-[119px] md:w-[905px] content-stretch flex flex-col gap-[24px] items-center md:items-end">
      <Frame1 onPhotoboothClick={onPhotoboothClick} onPolaroidClick={onPolaroidClick} />
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Share">
          <path d={svgPaths.p1119cc00} id="Icon" stroke="var(--stroke-0, #E82EBF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[rgba(255,37,142,0.4)] box-border content-stretch flex gap-[10px] items-center justify-center p-[13px] relative rounded-[29px] shrink-0 size-[42px] cursor-pointer hover:bg-[rgba(255,37,142,0.5)] transition-colors"
    >
      <Share />
    </button>
  );
}

function Frame4({ onContactClick, onAboutClick, onShareClick }: { onContactClick: () => void; onAboutClick: () => void; onShareClick: () => void }) {
  return (
    <div className="w-full px-4 md:px-0 md:absolute md:left-[65px] md:top-[60px] md:w-[1311px] content-stretch flex items-center justify-between py-4 md:py-0">
      <button onClick={onContactClick} className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e82ebf] text-[16px] md:text-[20px] cursor-pointer hover:underline">Contact</button>
      <button onClick={onAboutClick} className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e82ebf] text-[16px] md:text-[20px] text-nowrap whitespace-pre cursor-pointer hover:underline">{`About `}</button>
      <Frame2 onClick={onShareClick} />
    </div>
  );
}

export default function Home({ onNavigate }: HomeProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Soul:) Prints',
        text: 'Create your own story with Soul Prints!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      alert('Share feature not available on this browser');
    }
  };

  const handleContact = () => {
    alert('Contact: info@soulprints.com');
  };

  const handleAbout = () => {
    alert('Soul:) Prints - Create your own story with personalized photo prints!');
  };

  return (
    <div className="bg-[#ecebeb] relative min-h-screen w-full flex flex-col md:block overflow-auto" data-name="Home">
      {/* Desktop Logos - hidden on mobile */}
      <div className="hidden md:block absolute backdrop-blur-[200px] backdrop-filter content-stretch flex-col gap-[16px] items-start left-[76px] top-[265px]" data-name="Logo">
        <div className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[1.2] not-italic relative shrink-0 text-[128px] w-[435px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 435 308\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(21.75 0 0 15.4 217.5 154)\\'><foreignObject x=\\'-190\\' y=\\'-190\\' width=\\'380\\' height=\\'380\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgba(255, 173, 59, 1) 0%, rgba(255, 139, 80, 1) 25%, rgba(255, 105, 100, 1) 50%, rgba(255, 71, 121, 1) 75%, rgba(255, 37, 142, 1) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>')" }}>
          <p className="mb-0">Soul:)</p>
          <p>Prints</p>
        </div>
      </div>
      <div className="hidden md:block absolute backdrop-blur-[200px] backdrop-filter content-stretch flex-col gap-[16px] items-start left-[1005px] top-[238px]" data-name="Logo">
        <div className="bg-clip-text font-['Inter:Bold',sans-serif] font-bold leading-[1.2] not-italic relative shrink-0 text-[128px] w-[435px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 435 308\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(21.75 0 0 15.4 217.5 154)\\'><foreignObject x=\\'-190\\' y=\\'-190\\' width=\\'380\\' height=\\'380\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgba(255, 173, 59, 1) 0%, rgba(255, 139, 80, 1) 25%, rgba(255, 105, 100, 1) 50%, rgba(255, 71, 121, 1) 75%, rgba(255, 37, 142, 1) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>')" }}>
          <p className="mb-0">Soul:)</p>
          <p>Prints</p>
        </div>
      </div>
      
      {/* Mobile Logo - shown only on mobile */}
      <div className="md:hidden flex justify-center items-center py-8 px-4">
        <Logo />
      </div>
      
      <Frame4 
        onContactClick={handleContact}
        onAboutClick={handleAbout}
        onShareClick={handleShare}
      />
      
      <div className="flex-1 flex items-center justify-center py-8 md:py-0">
        <Frame3 
          onPhotoboothClick={() => onNavigate('photobooth')} 
          onPolaroidClick={() => onNavigate('polaroid')} 
        />
      </div>
      
      <div className="hidden md:block absolute h-[841px] left-[156px] top-[11px] w-[1262px]" data-name="madison-oren-uGP_6CAD-14-unsplash 1" />
    </div>
  );
}