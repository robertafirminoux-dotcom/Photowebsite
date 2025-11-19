import img52 from "figma:asset/a5acefbbbe5070fd49a4d04e535b571876721d52.png";

interface PhotoboothResultProps {
  onNavigate: (page: string) => void;
}

function ReplacePhotoHere() {
  return (
    <div className="bg-white h-[113px] overflow-clip relative shrink-0 w-[140px]" data-name="🖼️ REPLACE photo here">
      <div className="absolute h-[114px] left-0 top-[-1px] w-[140px]" data-name="5 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[461.83%] left-[-112.28%] max-w-none top-[-77.42%] w-[338.6%]" src={img52} />
        </div>
      </div>
    </div>
  );
}

function ReplacePhotoHere1() {
  return (
    <div className="bg-white h-[113px] overflow-clip relative shrink-0 w-[140px]" data-name="🖼️ REPLACE photo here">
      <div className="absolute h-[114px] left-0 top-[-1px] w-[140px]" data-name="5 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[461.83%] left-[-112.28%] max-w-none top-[-77.42%] w-[338.6%]" src={img52} />
        </div>
      </div>
      <div className="absolute h-[113px] left-0 top-0 w-[153px]" data-name="5 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[466.85%] left-[-102.42%] max-w-none top-[-195.65%] w-[311.29%]" src={img52} />
        </div>
      </div>
    </div>
  );
}

function ReplacePhotoHere2() {
  return (
    <div className="h-[113px] overflow-clip relative shrink-0 w-[140px]" data-name="🖼️ REPLACE photo here">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[466.85%] left-[-103.23%] max-w-none top-[-310.87%] w-[311.29%]" src={img52} />
        </div>
      </div>
      <div className="absolute h-[138px] left-[-29px] top-[-12px] w-[169px]" data-name="5 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[461.83%] left-[-112.28%] max-w-none top-[-77.42%] w-[338.6%]" src={img52} />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[466.85%] left-[-103.23%] max-w-none top-[-310.87%] w-[311.29%]" src={img52} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Photobooth() {
  return (
    <div className="bg-[#030303] box-border content-stretch flex flex-col gap-[4px] items-center justify-center overflow-clip pb-[60px] pt-[20px] px-[20px] relative shadow-[0px_3px_16px_0px_rgba(0,0,0,0.05)] shrink-0 animate-photo-slide" data-name="Photobooth">
      <ReplacePhotoHere />
      <ReplacePhotoHere1 />
      <ReplacePhotoHere2 />
      <ReplacePhotoHere />
    </div>
  );
}

function ImageAspectRatio() {
  return (
    <div className="content-stretch flex flex-col h-[450px] md:h-[597px] items-center justify-center relative shrink-0 w-full overflow-hidden rounded-lg" data-name="image-aspect-ratio [1.0]">
      <div className="absolute bg-gray-100 inset-0 rounded-lg" />
      <Photobooth />
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

function Frame({ onDownload }: { onDownload: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center md:items-end relative shrink-0 w-full md:w-[599px]">
      <ImageAspectRatio />
      <Button onClick={onDownload} />
    </div>
  );
}

function Frame1({ onDownload }: { onDownload: () => void }) {
  return (
    <div className="w-full px-4 md:px-0 md:absolute md:left-[285px] md:top-[168px] md:w-[871px] content-stretch flex flex-col gap-[40px] md:gap-[60px] items-center py-8 md:py-0">
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[1.2] text-center md:text-left relative shrink-0 text-[#e82ebf] text-[32px] md:text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Almost there — printing now;)
      </p>
      <Frame onDownload={onDownload} />
    </div>
  );
}

export default function PhotoboothResult({ onNavigate }: PhotoboothResultProps) {
  const handleDownload = () => {
    alert('Download started! Your photobooth strip is being saved.');
    setTimeout(() => {
      onNavigate('home');
    }, 1500);
  };

  return (
    <div className="bg-[#ecebeb] relative min-h-screen w-full flex flex-col md:block overflow-auto" data-name="Photobooth">
      <div className="flex-1 flex items-center justify-center">
        <Frame1 onDownload={handleDownload} />
      </div>
    </div>
  );
}