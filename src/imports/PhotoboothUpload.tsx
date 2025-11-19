import { useState } from 'react';
import imgImage10 from "figma:asset/c58e0ee71e71cc580a5b0f9763c735b220f17eb6.png";

interface PhotoboothUploadProps {
  onNavigate: (page: string) => void;
}

function Image() {
  return (
    <div className="absolute h-[252px] left-0 top-[6px] w-[255px]" data-name="image [1.0]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage10} />
    </div>
  );
}

function Frame({ hasImage, onClick }: { hasImage: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white h-[200px] md:h-[258px] relative rounded-[12px] shrink-0 w-[180px] md:w-[254px] cursor-pointer hover:opacity-80 transition-opacity"
    >
      <div className="h-full overflow-clip relative rounded-[inherit] w-full flex items-center justify-center">
        {hasImage ? (
          <Image />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span className="text-sm">Upload</span>
          </div>
        )}
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#e82ebf] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </button>
  );
}

function Frame2({ uploadedImages, onImageClick }: { uploadedImages: boolean[]; onImageClick: (index: number) => void }) {
  return (
    <div className="content-stretch flex flex-wrap md:flex-nowrap gap-[20px] md:gap-[52px] items-center justify-center relative shrink-0 w-full">
      {uploadedImages.map((hasImage, i) => (
        <Frame key={i} hasImage={hasImage} onClick={() => onImageClick(i)} />
      ))}
    </div>
  );
}

function Frame6({ uploadedImages, onImageClick }: { uploadedImages: boolean[]; onImageClick: (index: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full">
      <p className="font-['Archivo:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#e82ebf] text-[28px] md:text-[40px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Upload 4 pictures from your device
      </p>
      <Frame2 uploadedImages={uploadedImages} onImageClick={onImageClick} />
    </div>
  );
}

function Frame3({ uploadedImages, onImageClick }: { uploadedImages: boolean[]; onImageClick: (index: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[60px] md:gap-[95px] items-start relative shrink-0 w-full">
      <Frame6 uploadedImages={uploadedImages} onImageClick={onImageClick} />
    </div>
  );
}

function Button({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#e82ebf] cursor-pointer hover:opacity-90'} box-border content-stretch flex gap-[8px] h-[62px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full md:w-[198px] transition-opacity`}
      data-name="button [1.0]"
    >
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Continue
      </p>
    </button>
  );
}

function Frame4({ uploadedImages, onImageClick, onContinue }: { uploadedImages: boolean[]; onImageClick: (index: number) => void; onContinue: () => void }) {
  const allImagesUploaded = uploadedImages.every(img => img);
  
  return (
    <div className="content-stretch flex flex-col gap-[60px] md:gap-[95px] items-start relative shrink-0 w-full">
      <Frame3 uploadedImages={uploadedImages} onImageClick={onImageClick} />
      <Button onClick={onContinue} disabled={!allImagesUploaded} />
    </div>
  );
}

function Frame5({ uploadedImages, onImageClick, onContinue }: { uploadedImages: boolean[]; onImageClick: (index: number) => void; onContinue: () => void }) {
  return (
    <div className="w-full px-4 md:px-0 md:absolute md:left-[107px] md:top-[134px] md:w-[1207px] content-stretch flex flex-col gap-[24px] items-start py-8 md:py-0">
      <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#e82ebf] text-[36px] md:text-[64px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Choose your pictures
      </p>
      <Frame4 uploadedImages={uploadedImages} onImageClick={onImageClick} onContinue={onContinue} />
    </div>
  );
}

export default function PhotoboothUpload({ onNavigate }: PhotoboothUploadProps) {
  const [uploadedImages, setUploadedImages] = useState([false, false, false, false]);

  const handleImageClick = (index: number) => {
    // Simulate file upload
    const newUploadedImages = [...uploadedImages];
    newUploadedImages[index] = true;
    setUploadedImages(newUploadedImages);
  };

  const handleContinue = () => {
    if (uploadedImages.every(img => img)) {
      onNavigate('photobooth-customize');
    }
  };

  return (
    <div className="bg-[#ecebeb] relative min-h-screen w-full flex flex-col md:block overflow-auto" data-name="Photobooth costumize">
      <Frame5 uploadedImages={uploadedImages} onImageClick={handleImageClick} onContinue={handleContinue} />
    </div>
  );
}
