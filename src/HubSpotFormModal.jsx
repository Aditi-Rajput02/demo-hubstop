import { useEffect, useRef } from 'react';
import './HubSpotFormModal.css';

export default function HubSpotFormModal({ onClose }) {
  const overlayRef = useRef(null);

  // Load the HubSpot embed script once
  useEffect(() => {
    const SCRIPT_ID = 'hs-form-script';
    // Remove old script if portal changed
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://js-na2.hsforms.net/forms/embed/246164541.js';
    script.defer = true;
    document.body.appendChild(script);
  }, []);


  // Close on Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Close on backdrop click
  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div
      className="hs-modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Get started with HubSpot"
    >
      <div className="hs-modal">
        <div className="hs-modal-header">
          <div className="hs-modal-title">
            <span>🟠</span> Get Started with HubSpot
          </div>
          <button className="hs-modal-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="hs-modal-body">
          <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="77fe130d-984b-4afb-b194-3d3213684e69"
            data-portal-id="246164541"
          />
        </div>
      </div>
    </div>
  );
}
