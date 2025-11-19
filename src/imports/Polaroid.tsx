import svgPaths from "./svg-fgpmmj2x4n";
import imgImage1 from "figma:asset/ab1867e359183c8caff87ae61ad805d84bbbe06f.png";
import imgWhatsAppImage20251117At1749341 from "figma:asset/4aef63067c739da52744e677251065b88e52646d.png";

interface PolaroidProps {
  onNavigate: (page: string) => void;
}

function TaillessLineArrowLeftSmall() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tailless-line-arrow-left-small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tailless-line-arrow-left-small">
          <path clipRule="evenodd" d={svgPaths.p35fa5c00} fill="var(--fill-0, #E82EBF)" fillRule="evenodd" id="Icon" stroke="var(--stroke-0, #E82EBF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[rgba(255,37,142,0.4)] box-border content-stretch flex gap-[10px] items-center justify-center p-[13px] relative rounded-[29px] shrink-0 size-[42px] cursor-pointer hover:bg-[rgba(255,37,142,0.5)] transition-colors"
    >
      <TaillessLineArrowLeftSmall />
    </button>
  );
}

function Frame1({ onBackClick, onAboutClick }: { onBackClick: () => void; onAboutClick: () => void }) {
  return (
    <div className="w-full px-4 md:px-0 md:absolute md:left-[65px] md:top-[60px] md:w-[1311px] content-stretch flex items-center justify-between py-4 md:py-0">
      <Frame onClick={onBackClick} />
      <button onClick={onAboutClick} className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e82ebf] text-[16px] md:text-[20px] text-nowrap whitespace-pre cursor-pointer hover:underline">{`About `}</button>
    </div>
  );
}

function ImageAspectRatio() {
  return (
    <div className="content-stretch flex flex-col h-[300px] md:h-[437px] items-start relative shrink-0 w-full md:w-[382px] overflow-hidden" data-name="image-aspect-ratio [1.0]">
      <div className="absolute bg-gray-100 inset-0" />
      <div className="absolute aspect-[800/600] left-[3.66%] right-[3.66%] top-[86px] animate-photo-slide-infinite" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <div className="absolute h-[176px] left-[104px] top-[112px] w-[170px] animate-photo-slide-infinite" data-name="WhatsApp Image 2025-11-17 at 17.49.34 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.9%] left-[-0.04%] max-w-none top-[-24.31%] w-[100.09%]" src={imgWhatsAppImage20251117At1749341} />
        </div>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#fad5f2] h-[62px] relative rounded-[8px] shrink-0 w-full md:w-[198px] cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="button [1.0]"
    >
      <div className="box-border content-stretch flex gap-[8px] h-[62px] items-center justify-center overflow-clip p-[12px] relative rounded-[inherit] w-full">
        <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#e82ebf] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Upload photos
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e82ebf] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#e82ebf] box-border content-stretch flex gap-[8px] h-[62px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full md:w-[198px] cursor-pointer hover:opacity-90 transition-opacity" 
      data-name="button [1.0]"
    >
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Use camera
      </p>
    </button>
  );
}

function Frame2({ onUploadClick, onCameraClick }: { onUploadClick: () => void; onCameraClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[20px] items-center relative shrink-0 w-full">
      <Button onClick={onUploadClick} />
      <Button1 onClick={onCameraClick} />
    </div>
  );
}

function Frame3({ onUploadClick, onCameraClick }: { onUploadClick: () => void; onCameraClick: () => void }) {
  return (
    <div className="w-full px-4 md:px-0 md:absolute md:left-[499px] md:top-[266px] md:w-[416px] content-stretch flex flex-col gap-[40px] md:gap-[60px] items-center">
      <ImageAspectRatio />
      <Frame2 onUploadClick={onUploadClick} onCameraClick={onCameraClick} />
    </div>
  );
}

export default function Polaroid({ onNavigate }: PolaroidProps) {
  const handleUpload = () => {
    // Navigate to customize screen after upload
    onNavigate('polaroid-customize');
  };

  const handleCamera = () => {
    // Navigate to countdown screen first when using camera
    onNavigate('polaroid-countdown');
  };

  const handleAbout = () => {
    alert('Soul:) Prints - Create your own story with personalized photo prints!');
  };

  return (
    <div className="bg-[#ecebeb] relative min-h-screen w-full flex flex-col md:block overflow-auto" data-name="Polaroid">
      <Frame1 
        onBackClick={() => onNavigate('home')}
        onAboutClick={handleAbout}
      />
      <div className="flex-1 flex items-center justify-center py-8 md:py-0">
        <Frame3 
          onUploadClick={handleUpload}
          onCameraClick={handleCamera}
        />
      </div>
    </div>
  );
}