"use client"
import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Create script element and set attributes
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up
    return () => {
      // Remove the script from the body
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
        <p className="text-5xl text-white text-center md:my-8 font-silkscreen">Get In Touch</p>
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/degencode/kickoff-connect?background_color=1a1a1a&text_color=ffffff&primary_color=fa8b01"
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
    </div>
  );
};

export default CalendlyWidget;
