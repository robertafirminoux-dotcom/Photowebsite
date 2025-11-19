import { useState, useRef, useEffect } from 'react';

interface PolaroidCountdownProps {
  onNavigate: (page: 'home' | 'photobooth' | 'polaroid' | 'polaroid-customize' | 'polaroid-countdown' | 'polaroid-result') => void;
}

export default function PolaroidCountdown({ onNavigate }: PolaroidCountdownProps) {
  const [countdownPhase, setCountdownPhase] = useState<'ready' | 3 | 2 | 1 | 'smile' | 'flash' | 'printing' | 'complete' | null>('ready');
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    startCamera();
    startCountdownSequence();
    
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
      onNavigate('polaroid');
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
    
    // Flip horizontally for mirror effect
    context.translate(canvas.width, 0);
    context.scale(-1, 1);
    context.drawImage(video, 0, 0);
    
    // Add subtle film grain effect
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const grain = (Math.random() - 0.5) * 15;
      data[i] = Math.max(0, Math.min(255, data[i] + grain));
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + grain));
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + grain));
    }
    context.putImageData(imageData, 0, 0);
    
    const photo = canvas.toDataURL('image/png');
    return photo;
  };

  const startCountdownSequence = () => {
    // "Ready?" phase - 800ms
    setTimeout(() => {
      setCountdownPhase(3);
      
      // "3" - 1000ms
      setTimeout(() => {
        setCountdownPhase(2);
        
        // "2" - 1000ms
        setTimeout(() => {
          setCountdownPhase(1);
          
          // "1" - 1000ms
          setTimeout(() => {
            setCountdownPhase('smile');
            
            // "Smile!" - 500ms
            setTimeout(() => {
              // Flash effect
              setCountdownPhase('flash');
              
              // Capture after flash - 150ms
              setTimeout(() => {
                const photo = capturePhoto();
                if (photo) {
                  setCapturedPhoto(photo);
                  setCountdownPhase('printing');
                  
                  // Show printing animation - 2500ms
                  setTimeout(() => {
                    setCountdownPhase('complete');
                    
                    // Navigate to customize after showing complete photo - 1000ms
                    setTimeout(() => {
                      if (streamRef.current) {
                        streamRef.current.getTracks().forEach(track => track.stop());
                      }
                      // TODO: Pass photo to customize screen
                      // For now, just navigate
                      onNavigate('polaroid-customize');
                    }, 1000);
                  }, 2500);
                }
              }, 150);
            }, 500);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 800);
  };

  return (
    <div className="bg-[#ecebeb] relative size-full min-h-screen w-full flex items-center justify-center overflow-hidden" data-name="Polaroid Countdown">
      {/* Camera View - Hidden but active */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="hidden"
        style={{ transform: 'scaleX(-1)' }}
      />
      <canvas ref={canvasRef} className="hidden" />
      
      {/* Main Content */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Polaroid Frame Container */}
        <div className={`relative transition-all duration-500 ${
          countdownPhase === 'printing' || countdownPhase === 'complete' 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95'
        }`}>
          <div className={`bg-white p-6 pb-20 shadow-2xl rounded-sm max-w-md mx-auto ${
            countdownPhase === 'printing' ? 'animate-shake-polaroid' : ''
          }`}>
            <div className="relative bg-gray-100 aspect-square overflow-hidden">
              {capturedPhoto && (
                <img 
                  src={capturedPhoto} 
                  alt="Captured Polaroid" 
                  className={`w-full h-full object-cover ${
                    countdownPhase === 'printing' ? 'animate-print-slide-polaroid' : ''
                  }`}
                />
              )}
            </div>
            {/* Polaroid bottom text */}
            <div className="mt-4 text-center text-gray-400 text-lg font-handwriting">
              {countdownPhase === 'printing' ? 'Developing...' : 'Perfect! ✨'}
            </div>
          </div>
        </div>

        {/* Countdown Overlay */}
        {countdownPhase && countdownPhase !== 'printing' && countdownPhase !== 'complete' && (
          <div className={`absolute inset-0 flex items-center justify-center ${
            countdownPhase === 'flash' ? 'bg-white' : 'bg-gradient-to-br from-[#ecebeb] to-[#d8d7d7]'
          }`}>
            {countdownPhase !== 'flash' && (
              <div className="text-center">
                <div className={`font-['Archivo:SemiBold',sans-serif] font-semibold text-[#e82ebf] animate-countdown-bounce ${
                  countdownPhase === 'ready' || countdownPhase === 'smile' 
                    ? 'text-[56px] md:text-[96px]' 
                    : 'text-[120px] md:text-[200px]'
                }`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {countdownPhase === 'ready' && (
                    <div className="flex flex-col items-center gap-4">
                      <span className="text-[64px] md:text-[120px]">📷</span>
                      <span>Ready?</span>
                    </div>
                  )}
                  {countdownPhase === 'smile' && (
                    <div className="flex flex-col items-center gap-4">
                      <span className="text-[80px] md:text-[140px]">😊</span>
                      <span>Smile!</span>
                    </div>
                  )}
                  {typeof countdownPhase === 'number' && countdownPhase}
                </div>
                
                {/* Animated circle pulse for countdown numbers */}
                {typeof countdownPhase === 'number' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-[#e82ebf] animate-pulse-ring opacity-40"></div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes flash-polaroid {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes shake-polaroid {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          20% { transform: translateX(-6px) rotate(-3deg); }
          40% { transform: translateX(6px) rotate(3deg); }
          60% { transform: translateX(-4px) rotate(-2deg); }
          80% { transform: translateX(4px) rotate(2deg); }
        }
        
        @keyframes print-slide-polaroid {
          0% { 
            transform: translateY(100%);
            opacity: 0.8;
          }
          100% { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes countdown-bounce {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.15);
            opacity: 0.9;
          }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-flash-polaroid {
          animation: flash-polaroid 0.3s ease-in-out;
        }
        
        .animate-shake-polaroid {
          animation: shake-polaroid 0.6s ease-in-out infinite;
        }
        
        .animate-print-slide-polaroid {
          animation: print-slide-polaroid 2s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .animate-countdown-bounce {
          animation: countdown-bounce 0.7s ease-in-out;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 1s ease-out infinite;
        }
        
        .font-handwriting {
          font-family: 'Courier New', monospace;
          font-style: italic;
        }
      `}</style>
    </div>
  );
}
