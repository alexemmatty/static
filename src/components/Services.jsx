import React, { useEffect } from 'react';
import '../style/Services.css';

function Services() {

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

    const servicesList = [
        'web design',
        'graphic design & branding',
        'digital marketing',
        'support'
    ];

    return (
        <div className="services">
            {servicesList.map((service, index) => (
                <div key={index} className="service-card">
                    <spline-viewer url="https://prod.spline.design/aYX6mk5TVfwhdIRX/scene.splinecode"></spline-viewer>
                    <div className="service-title">{service}</div>
                </div>
            ))}
        </div>
    );
}

export default Services;
