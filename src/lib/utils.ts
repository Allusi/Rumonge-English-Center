import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Capacitor } from '@capacitor/core';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function downloadQRCode(qrCodeUrl: string, fileName: string) {
  try {
    // Check if running on native platform
    if (Capacitor.isNativePlatform()) {
      // Mobile: Save to internal storage using Capacitor Filesystem
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const base64Data = await blobToBase64(blob);
      
      const result = await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Documents,
        recursive: true,
      });
      
      // Show success message
      alert(`QR Code saved to: ${result.uri}`);
    } else {
      // Web: Use standard download approach
      const link = document.createElement('a');
      link.href = qrCodeUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error('Error downloading QR code:', error);
    alert('Failed to download QR code. Please try again.');
  }
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Remove the 'data:image/png;base64,' prefix
      resolve(base64String.split(',')[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
