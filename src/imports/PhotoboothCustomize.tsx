import { useState } from 'react';

interface PhotoboothCustomizeProps {
  onNavigate: (page: string) => void;
}

function Frame2({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white h-[150px] rounded-[12px] shrink-0 w-[120px] md:w-[148px] cursor-pointer hover:opacity-80 transition-opacity relative"
    >
      {selected && (
        <div aria-hidden="true" className="absolute border-4 border-[#e82ebf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      )}
    </button>
  );
}

function Frame1({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#080b12] h-[150px] relative rounded-[12px] shrink-0 w-[120px] md:w-[148px] cursor-pointer hover:opacity-80 transition-opacity"
    >
      {selected && (
        <div aria-hidden="true" className="absolute border-4 border-[#e82ebf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      )}
    </button>
  );
}

function Frame({ selected, onClick }: { selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="h-[150px] relative shrink-0 w-[120px] md:w-[148px] cursor-pointer hover:opacity-80 transition-opacity"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 150">
        <g id="Frame 31">
          <g clipPath="url(#clip0_1_3187)">
            <rect fill="var(--fill-0, #FFF1D1)" height="150" rx="12" width="148" />
            <circle cx="15.5" cy="24.5" fill="var(--fill-0, #9FEB00)" id="Ellipse 12" r="43.5" />
            <circle cx="148.5" cy="67.5" fill="var(--fill-0, #FFEB3B)" id="Ellipse 14" r="50.5" />
            <ellipse cx="63.5" cy="157.5" fill="var(--fill-0, #8424FF)" id="Ellipse 13" rx="63.5" ry="39.5" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_3187">
            <rect fill="white" height="150" rx="12" width="148" />
          </clipPath>
        </defs>
      </svg>
      {selected && (
        <div aria-hidden="true" className="absolute border-4 border-[#e82ebf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      )}
    </button>
  );
}

function Frame3({ selectedBg, onBgSelect }: { selectedBg: 'white' | 'black' | 'colorful'; onBgSelect: (bg: 'white' | 'black' | 'colorful') => void }) {
  return (
    <div className="content-stretch flex gap-[30px] md:gap-[52px] items-center relative shrink-0 w-full overflow-x-auto pb-2">
      <Frame2 selected={selectedBg === 'white'} onClick={() => onBgSelect('white')} />
      <Frame1 selected={selectedBg === 'black'} onClick={() => onBgSelect('black')} />
      <Frame selected={selectedBg === 'colorful'} onClick={() => onBgSelect('colorful')} />
    </div>
  );
}

function Frame4({ selectedBg, onBgSelect }: { selectedBg: 'white' | 'black' | 'colorful'; onBgSelect: (bg: 'white' | 'black' | 'colorful') => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#e82ebf] text-[28px] md:text-[40px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Background
      </p>
      <Frame3 selectedBg={selectedBg} onBgSelect={onBgSelect} />
    </div>
  );
}

function InputSublabel({ charCount }: { charCount: number }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Input+Sublabel">
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#e82ebf] text-[16px] md:text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add a note in your picture
      </p>
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] md:text-[14px] text-gray-400 tracking-[0.35px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ({charCount}/10 caracteres)
      </p>
    </div>
  );
}

function TextInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="basis-0 bg-white grow min-h-[120px] min-w-px relative rounded-[8px] shrink-0 w-full" data-name="text-input">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-start size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[12px] relative size-full">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value.slice(0, 10))}
            placeholder="Your text here :)"
            maxLength={10}
            className="basis-0 font-['Archivo:SemiBold',sans-serif] font-semibold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-gray-900 placeholder:text-gray-400 border-none outline-none bg-transparent resize-none w-full h-full"
            style={{ fontVariationSettings: "'wdth' 100" }}
          />
        </div>
      </div>
    </div>
  );
}

function TextInput1({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] min-h-[180px] items-start relative shrink-0 w-full" data-name="text-input [1.0]">
      <InputSublabel charCount={value.length} />
      <TextInput value={value} onChange={onChange} />
    </div>
  );
}

function Frame5({ selectedBg, onBgSelect, noteText, onNoteChange }: { 
  selectedBg: 'white' | 'black' | 'colorful'; 
  onBgSelect: (bg: 'white' | 'black' | 'colorful') => void;
  noteText: string;
  onNoteChange: (text: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[60px] md:gap-[95px] items-start relative shrink-0 w-full">
      <Frame4 selectedBg={selectedBg} onBgSelect={onBgSelect} />
      <TextInput1 value={noteText} onChange={onNoteChange} />
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
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Continue
      </p>
    </button>
  );
}

function Frame6({ selectedBg, onBgSelect, noteText, onNoteChange, onContinue }: { 
  selectedBg: 'white' | 'black' | 'colorful'; 
  onBgSelect: (bg: 'white' | 'black' | 'colorful') => void;
  noteText: string;
  onNoteChange: (text: string) => void;
  onContinue: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[60px] md:gap-[95px] items-start relative shrink-0 w-full md:w-[548px]">
      <Frame5 selectedBg={selectedBg} onBgSelect={onBgSelect} noteText={noteText} onNoteChange={onNoteChange} />
      <Button onClick={onContinue} />
    </div>
  );
}

function Frame7({ selectedBg, onBgSelect, noteText, onNoteChange, onContinue }: { 
  selectedBg: 'white' | 'black' | 'colorful'; 
  onBgSelect: (bg: 'white' | 'black' | 'colorful') => void;
  noteText: string;
  onNoteChange: (text: string) => void;
  onContinue: () => void;
}) {
  return (
    <div className="w-full px-4 md:px-0 md:absolute md:left-[107px] md:top-[134px] md:w-[816px] content-stretch flex flex-col gap-[24px] items-start py-8 md:py-0">
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#e82ebf] text-[36px] md:text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Customize your photobooth
      </p>
      <Frame6 selectedBg={selectedBg} onBgSelect={onBgSelect} noteText={noteText} onNoteChange={onNoteChange} onContinue={onContinue} />
    </div>
  );
}

export default function PhotoboothCustomize({ onNavigate }: PhotoboothCustomizeProps) {
  const [selectedBg, setSelectedBg] = useState<'white' | 'black' | 'colorful'>('black');
  const [noteText, setNoteText] = useState('');

  const handleContinue = () => {
    onNavigate('photobooth-result');
  };

  return (
    <div className="bg-[#ecebeb] relative min-h-screen w-full flex flex-col md:block overflow-auto" data-name="Photobooth costumize">
      <Frame7 
        selectedBg={selectedBg} 
        onBgSelect={setSelectedBg}
        noteText={noteText}
        onNoteChange={setNoteText}
        onContinue={handleContinue}
      />
    </div>
  );
}
