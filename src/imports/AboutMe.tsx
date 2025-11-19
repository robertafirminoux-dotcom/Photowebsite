import svgPaths from "./svg-te4nryoucm";
import imgAlert from "figma:asset/2d8fb0e986b85cbc4bb1175d7858ac803f9a828b.png";
import imgAlert1 from "figma:asset/4aef63067c739da52744e677251065b88e52646d.png";

interface AboutMeProps {
  onNavigate: (page: string) => void;
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

function Frame1() {
  return (
    <div className="bg-[rgba(255,37,142,0.4)] box-border content-stretch flex gap-[10px] items-center justify-center p-[13px] relative rounded-[29px] shrink-0 size-[42px] cursor-pointer hover:opacity-80 transition-opacity">
      <Share />
    </div>
  );
}

function Frame3({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end w-full px-4 py-4 md:px-8 md:py-8">
      <p 
        onClick={() => onNavigate('home')}
        className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#e82ebf] text-[20px] text-nowrap whitespace-pre cursor-pointer hover:underline"
      >
        About
      </p>
      <Frame1 />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Header">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.2] not-italic relative shrink-0 text-[#172b4d] text-[24px] w-full">About</p>
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
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAlert1} />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Section">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[32px] md:p-[56px] relative w-full">
          <SectionHeader />
          <Alert />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.7] not-italic relative shrink-0 text-[#626f86] text-[14px] w-full">
            Hi, I'm Roberta Firmino, Product Designer and the creator of Soul:)Prints. This project was born from a curious mind full of ideas — and it's the very first website I designed and developed entirely from scratch. I worked with tools like ChatGPT, Figma Make, and V0, among others.The concept came from a mix of references and a deep desire to capture and celebrate meaningful moments. I hope you enjoy it and use it to preserve your own memories. ✨
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-full">
      <Section />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[40px] cursor-pointer hover:opacity-80 transition-opacity" data-name="youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="youtube">
          <path d={svgPaths.p13eace80} fill="var(--fill-0, #080B12)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[40px] cursor-pointer hover:opacity-80 transition-opacity" data-name="instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="instagram">
          <path d={svgPaths.p3d37d480} fill="var(--fill-0, #080B12)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-[40px] cursor-pointer hover:opacity-80 transition-opacity" data-name="linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="linkedin">
          <path clipRule="evenodd" d={svgPaths.p3a7b0570} fill="var(--fill-0, #080B12)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[44px] items-center relative shrink-0">
      <Youtube />
      <Instagram />
      <Linkedin />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center w-full max-w-[905px] px-4">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

export default function AboutMe({ onNavigate }: AboutMeProps) {
  return (
    <div className="bg-[#ecebeb] relative min-h-screen w-full flex flex-col" data-name="About me">
      <Frame3 onNavigate={onNavigate} />
      <div className="flex-1 flex items-center justify-center py-8">
        <Frame5 />
      </div>
    </div>
  );
}
