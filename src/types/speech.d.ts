declare global {
  interface Window {
    // Expose both standard and WebKit-prefixed SpeechRecognition implementations
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
  }

  // Minimal shape so event access in the app can be typed if needed.
  interface SpeechRecognitionEvent {
    results: any;
    error?: string;
  }
}

export {};
