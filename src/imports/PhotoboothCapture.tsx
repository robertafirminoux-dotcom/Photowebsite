import { useState, useRef, useEffect } from 'react';

interface PhotoboothCaptureProps {
  onNavigate: (page: string) => void;
}

export default function PhotoboothCapture({ onNavigate }: PhotoboothCaptureProps) {
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [countdownPhase, setCountdownPhase] = useState<'ready' | 3 | 2 | 1 | 'smile' | 'flash' | 'printing' | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [currentPhotoData, setCurrentPhotoData] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    startCamera();
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err: any) {
      const error = err as Error;
      let errorMessage = 'Could not access camera. ';
      
      if (error.name === 'NotAllowedError') {
        errorMessage += 'Please allow camera access in your browser settings.';
      } else if (error.name === 'NotFoundError') {
        errorMessage += 'No camera found on your device.';
      } else if (error.name === 'NotReadableError') {
        errorMessage += 'Camera is already in use.';
      } else {
        errorMessage += 'Please check your browser settings and try again.';
      }
      
      alert(errorMessage);
      onNavigate('photobooth');
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');
    
    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Flip horizontally and apply grayscale
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.filter = 'grayscale(100%)';
    context.drawImage(video, 0, 0);
    
    // Add film grain effect
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const grain = (Math.random() - 0.5) * 20;
      data[i] = Math.max(0, Math.min(255, data[i] + grain));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + grain));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + grain));
    }
    context.putImageData(imageData, 0, 0);
    
    const photo = canvas.toDataURL('image/png');
    return photo;
  };

  const startCountdownSequence = () => {
    if (isCapturing || capturedPhotos.length >= 4) return;
    
    setIsCapturing(true);
    setCurrentPhotoData(null);
    
    // "Ready?" phase
    setCountdownPhase('ready');
    
    setTimeout(() => {
      setCountdownPhase(3);
      
      setTimeout(() => {
        setCountdownPhase(2);
        
        setTimeout(() => {
          setCountdownPhase(1);
          
          setTimeout(() => {
            setCountdownPhase('smile');
            
            setTimeout(() => {
              // Flash effect
              setCountdownPhase('flash');
              
              setTimeout(() => {
                const photo = capturePhoto();
                if (photo) {
                  setCurrentPhotoData(photo);
                  setCountdownPhase('printing');
                  
                  setTimeout(() => {
                    const newPhotos = [...capturedPhotos, photo];
                    setCapturedPhotos(newPhotos);
                    setCountdownPhase(null);
                    setCurrentPhotoData(null);
                    
                    if (newPhotos.length === 4) {
                      setTimeout(() => {
                        if (streamRef.current) {
                          streamRef.current.getTracks().forEach(track => track.stop());
                        }
                        onNavigate('photobooth-customize');
                      }, 1500);
                    } else {
                      setIsCapturing(false);
                    }
                  }, 2000);
                }
              }, 100);
            }, 400);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 800);
  };

  return (
    <div className="bg-[#ecebeb] relative min-h-screen w-full flex flex-col md:flex-row overflow-auto" data-name="Photobooth Capture">
      {/* Camera View */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative">
        <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[1.2] text-center text-[#e82ebf] text-[28px] md:text-[48px] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
          Take 4 Photos
        </p>
        
        <div className="relative">
          {/* Polaroid Frame */}
          <div className={`bg-white p-4 pb-16 shadow-2xl rounded-sm ${countdownPhase === 'printing' ? 'animate-shake' : ''}`}>
            <div className="relative bg-black">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full max-w-md aspect-square object-cover"
                style={{ transform: 'scaleX(-1)', filter: 'grayscale(100%)' }}
              />
              
              {/* Countdown Overlay */}
              {countdownPhase && countdownPhase !== 'flash' && countdownPhase !== 'printing' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                  <div className={`text-white animate-bounce-scale ${
                    countdownPhase === 'ready' || countdownPhase === 'smile' 
                      ? 'text-[48px] md:text-[72px]' 
                      : 'text-[120px] md:text-[180px]'
                  } font-black tracking-tight`}>
                    {countdownPhase === 'ready' && 'Ready?'}
                    {countdownPhase === 'smile' && '📸 Smile!'}
                    {typeof countdownPhase === 'number' && countdownPhase}
                  </div>
                </div>
              )}
              
              {/* Flash Effect */}
              {countdownPhase === 'flash' && (
                <div className="absolute inset-0 bg-white animate-flash"></div>
              )}
              
              {/* Printing Effect */}
              {countdownPhase === 'printing' && currentPhotoData && (
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={currentPhotoData} 
                    alt="Captured" 
                    className="absolute inset-0 w-full h-full object-cover animate-print-slide"
                  />
                </div>
              )}
            </div>
            
            {/* Polaroid bottom white space */}
            <div className="mt-2 text-center text-gray-400 text-sm font-handwriting">
              {capturedPhotos.length < 4 ? `Photo ${capturedPhotos.length + 1}/4` : 'Complete!'}
            </div>
          </div>
        </div>

        <canvas ref={canvasRef} className="hidden" />

        <button
          onClick={startCountdownSequence}
          disabled={isCapturing || capturedPhotos.length >= 4}
          className={`mt-6 ${
            isCapturing || capturedPhotos.length >= 4
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#e82ebf] cursor-pointer hover:opacity-90 hover:scale-105'
          } box-border flex gap-[8px] h-[62px] items-center justify-center p-[12px] rounded-[8px] w-full md:w-[250px] transition-all duration-200 shadow-lg`}
        >
          <p className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            {capturedPhotos.length === 0 ? '📷 Start Taking Photos' : `Take Photo ${capturedPhotos.length + 1}/4`}
          </p>
        </button>

        <p className="mt-4 font-['Archivo:Regular',sans-serif] text-gray-600 text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          {capturedPhotos.length}/4 photos captured
        </p>
      </div>

      {/* Photo Strip Preview */}
      <div className="flex md:flex-col items-center justify-center gap-2 p-4 md:p-8 bg-white md:bg-transparent overflow-x-auto md:overflow-visible">
        <div className="flex md:flex-col gap-2 bg-[#030303] p-5 rounded-lg shadow-xl">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`bg-gray-200 h-[80px] md:h-[113px] w-[100px] md:w-[140px] rounded flex items-center justify-center overflow-hidden transition-all duration-300 ${
                capturedPhotos[index] ? 'scale-100' : 'scale-95 opacity-50'
              }`}
            >
              {capturedPhotos[index] ? (
                <img src={capturedPhotos[index]} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400 text-xs">Photo {index + 1}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(-4px) rotate(-2deg); }
          75% { transform: translateX(4px) rotate(2deg); }
        }
        
        @keyframes print-slide {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        
        @keyframes bounce-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .animate-flash {
          animation: flash 0.3s ease-in-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out infinite;
        }
        
        .animate-print-slide {
          animation: print-slide 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .animate-bounce-scale {
          animation: bounce-scale 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}
