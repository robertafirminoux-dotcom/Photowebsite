import imgImage1 from "figma:asset/ab1867e359183c8caff87ae61ad805d84bbbe06f.png";
import imgWhatsAppImage20251117At1749341 from "figma:asset/4aef63067c739da52744e677251065b88e52646d.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center justify-end left-[65px] top-[60px] w-[1311px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e82ebf] text-[20px] text-nowrap whitespace-pre">{`About `}</p>
    </div>
  );
}

function ImageAspectRatio() {
  return (
    <div className="content-stretch flex flex-col h-[502px] items-start relative shrink-0 w-full" data-name="image-aspect-ratio [1.0]">
      <div className="absolute bg-gray-100 inset-0" />
      <div className="absolute aspect-[800/600] left-[3.51%] right-[3.82%] top-[43px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e82ebf] box-border content-stretch flex gap-[8px] h-[62px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-[198px]" data-name="button [1.0]">
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dowloand
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-end relative shrink-0 w-[599px]">
      <ImageAspectRatio />
      <Button />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center left-[285px] top-[168px] w-[871px]">
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[96px] min-w-full relative shrink-0 text-[#e82ebf] text-[64px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Almost there — printing now;)
      </p>
      <Frame1 />
    </div>
  );
}

export default function PolaroidCostumize() {
  return (
    <div className="bg-[#ecebeb] relative size-full" data-name="Polaroid costumize">
      <Frame />
      <Frame2 />
      <div className="absolute h-[278px] left-[581px] top-[407px] w-[269px]" data-name="WhatsApp Image 2025-11-17 at 17.49.34 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[128.9%] left-[-0.04%] max-w-none top-[-24.31%] w-[100.09%]" src={imgWhatsAppImage20251117At1749341} />
        </div>
      </div>
    </div>
  );
}