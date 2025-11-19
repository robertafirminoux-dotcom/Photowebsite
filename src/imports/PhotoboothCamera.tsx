import { useState, useRef, useEffect } from 'react';

interface PhotoboothCameraProps {
  onNavigate: (page: string) => void;
}

export default function PhotoboothCamera({ onNavigate }: PhotoboothCameraProps) {
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      // Cleanup: stop the camera stream when component unmounts
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const requestCameraAccess = async () => {
    try {
      setError('');
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setHasPermission(true);
      
      // Auto-navigate to capture screen after getting permission
      setTimeout(() => {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
        onNavigate('photobooth-capture');
      }, 1500);
    } catch (err: any) {
      const error = err as Error;
      if (error.name === 'NotAllowedError') {
        setError('Camera access denied. Please allow camera access in your browser settings and try again.');
      } else if (error.name === 'NotFoundError') {
        setError('No camera found. Please make sure your device has a camera.');
      } else if (error.name === 'NotReadableError') {
        setError('Camera is already in use by another application.');
      } else {
        setError('Unable to access camera. Please check your browser settings and try again.');
      }
      // Don't log to console - the error is handled in the UI
    }
  };

  return (
    <div className="bg-[#ecebeb] relative min-h-screen w-full flex flex-col items-center justify-center overflow-auto p-4" data-name="Photobooth Camera">
      <div className="max-w-2xl w-full flex flex-col gap-8 items-center">
        <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[1.2] text-center text-[#e82ebf] text-[36px] md:text-[64px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Camera Access
        </p>
        
        {!hasPermission && !error && (
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-white rounded-full p-8 mb-4">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#e82ebf" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <p className="font-['Archivo:Regular',sans-serif] text-center text-gray-600 text-[18px] max-w-md" style={{ fontVariationSettings: "'wdth' 100" }}>
              We need access to your camera to take your photobooth pictures
            </p>
            <button
              onClick={requestCameraAccess}
              className="bg-[#e82ebf] box-border content-stretch flex gap-[8px] h-[62px] items-center justify-center overflow-clip p-[12px] relative rounded-[8px] w-full md:w-[250px] cursor-pointer hover:opacity-90 transition-opacity"
            >
              <p className="font-['Archivo:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
                Allow Camera Access
              </p>
            </button>
          </div>
        )}

        {error && (
          <div className="flex flex-col gap-6 items-center">
            <div className="bg-red-100 rounded-full p-8 mb-4">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </div>
            <p className="font-['Archivo:Regular',sans-serif] text-center text-red-600 text-[18px] max-w-md" style={{ fontVariationSettings: "'wdth' 100" }}>
              {error}
            </p>
            <div className="flex gap-4">
              <button
                onClick={requestCameraAccess}
                className="bg-[#e82ebf] box-border flex gap-[8px] h-[62px] items-center justify-center p-[12px] rounded-[8px] w-[180px] cursor-pointer hover:opacity-90 transition-opacity"
              >
                <p className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Try Again
                </p>
              </button>
              <button
                onClick={() => onNavigate('photobooth')}
                className="bg-gray-400 box-border flex gap-[8px] h-[62px] items-center justify-center p-[12px] rounded-[8px] w-[180px] cursor-pointer hover:opacity-90 transition-opacity"
              >
                <p className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[14px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                  Go Back
                </p>
              </button>
            </div>
          </div>
        )}

        {hasPermission && (
          <div className="flex flex-col gap-6 items-center">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="rounded-lg shadow-lg max-w-md w-full"
              style={{ transform: 'scaleX(-1)' }}
            />
            <p className="font-['Archivo:Regular',sans-serif] text-center text-green-600 text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Camera access granted! Preparing...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}