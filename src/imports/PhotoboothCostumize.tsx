import imgImage10 from "figma:asset/c58e0ee71e71cc580a5b0f9763c735b220f17eb6.png";

function Image() {
  return (
    <div className="absolute h-[252px] left-0 top-[6px] w-[255px]" data-name="image [1.0]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white h-[258px] relative rounded-[12px] shrink-0 w-[254px]">
      <div className="h-[258px] overflow-clip relative rounded-[inherit] w-[254px]">
        <Image />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#e82ebf] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout() {
  return <div className="h-full w-0" data-name="Aspect ratio keeper # Rotated Auto Layout" />;
}

function AspectRatioKeeperAdditionally45RotatedAutoLayout() {
  return (
    <div className="content-stretch flex h-[247px] items-start relative w-full" data-name="Aspect ratio keeper # Additionally 45º rotated Auto Layout">
      <div className="flex h-full items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.41421669721603394)+(var(--transform-inner-width)*0.9101782441139221)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "247" } as React.CSSProperties}>
        <div className="flex-none h-full rotate-[24.47deg]">
          <AspectRatioKeeperRotatedAutoLayout />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute bottom-[-0.14%] left-0 right-0 top-[0.14%]" data-name="image [1.0]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
    </div>
  );
}

function ImageAspectRatio() {
  return (
    <div className="absolute content-stretch flex flex-col h-[249px] items-start left-[4px] overflow-clip top-[4px] w-[247px]" data-name="image-aspect-ratio [1.0]">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.7071117162704468)+(var(--transform-inner-height)*0.7071018218994141)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "247", "--transform-inner-height": "247" } as React.CSSProperties}>
        <div className="flex-none rotate-[315deg] w-full">
          <AspectRatioKeeperAdditionally45RotatedAutoLayout />
        </div>
      </div>
      <Image1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[258px] relative rounded-[12px] shrink-0 w-[254px]">
      <div className="h-[258px] overflow-clip relative rounded-[inherit] w-[254px]">
        <ImageAspectRatio />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#e82ebf] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[52px] items-center relative shrink-0 w-full">
      <Frame />
      {[...Array(3).keys()].map((_, i) => (
        <Frame1 key={i} />
      ))}
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <p className="font-['Archivo:Regular',sans-serif] font-normal h-[67px] leading-[96px] relative shrink-0 text-[#e82ebf] text-[40px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Upload 4 pictures from your device
      </p>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[95px] items-start relative shrink-0 w-full">
      <Frame6 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e82ebf] box-border content-stretch flex gap-[8px] h-[62px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-[198px]" data-name="button [1.0]">
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Continue
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[95px] items-start relative shrink-0 w-[1207px]">
      <Frame3 />
      <Button />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[107px] top-[134px] w-[1207px]">
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[96px] relative shrink-0 text-[#e82ebf] text-[64px] w-[1172px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose your pictures
      </p>
      <Frame4 />
    </div>
  );
}

export default function PhotoboothCostumize() {
  return (
    <div className="bg-[#ecebeb] relative size-full" data-name="Photobooth costumize">
      <Frame5 />
    </div>
  );
}