import Vapi from '@vapi-ai/web';

// Initialize VAPI client with public key
const vapi = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY || import.meta.env.VITE_VAPI_API_KEY);

// Add event listeners for debugging
vapi.on('error', (error) => {
  console.error('VAPI Error:', error);
});

vapi.on('call-start', () => {
  console.log('VAPI Call started');  
});

vapi.on('call-end', () => {
  console.log('VAPI Call ended');
});

export { vapi };