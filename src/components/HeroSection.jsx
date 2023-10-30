import React, { useEffect } from 'react';
import '../style/HeroSection.css';

function HeroSection() {
    
    useEffect(() => {
        // Load the Spline script dynamically
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@splinetool/viewer@0.9.490/build/spline-viewer.js';
        script.type = 'module';
        document.body.appendChild(script);

        // Clean up on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div >
            <spline-viewer url="https://prod.spline.design/aYX6mk5TVfwhdIRX/scene.splinecode"></spline-viewer>
        </div>
    );
}

export default HeroSection;
