import React from 'react';

// If you put images in src/assets/images and want to import them directly:
// import itilLogo from '../assets/images/itil-4-foundation.png';
// import azureDataFundamentalsLogo from '../assets/images/azure-data-fundamentals.png';
// import azureFundamentalsLogo from '../assets/images/azure-fundamentals.png';
// import powerPlatformFundamentalsLogo from '../assets/images/power-platform-fundamentals.png';
// import leanSixSigmaLogo from '../assets/images/lean-six-sigma-green-belt.png';


const certifications = [
  {
    name: 'ITIL 4 Foundation',
    issuer: 'AXELOS Global Best Practice', // You might want to add an issuer if known
    issued: '2025',
    logo: '/projects/itil.png', // Path for public folder
    // logo: itilLogo, // If importing
  },
  {
    name: 'Microsoft Certified: Azure Data Fundamentals',
    issuer: 'Microsoft',
    issued: '2022',
    logo: '/projects/az900.png',
    // logo: azureDataFundamentalsLogo,
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    issued: '2021',
    logo: '/projects/az.png',
    // logo: azureFundamentalsLogo,
  },
  {
    name: 'Microsoft Certified: Power Platform Fundamentals',
    issuer: 'Microsoft',
    issued: '2022',
    logo: '/projects/pl900.png',
    // logo: powerPlatformFundamentalsLogo,
  },
  {
    name: 'Lean Six Sigma Green Belt',
    issuer: 'Meliora Partners', // Extracted from the logo
    issued: '2023',
    logo: '/projects/melioraconsultinggroup_logo.png',
    // logo: leanSixSigmaLogo,
  },
  {
    name: 'Salesforce Trailblazer: Expeditioner',
    issuer: 'Salesforce', // Extracted from the logo
    issued: '2023',
    logo: '/projects/TH-Flogo.png',
    // logo: trailblazerLogo,
  },
];

const Certifications = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Professional Certifications
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {certifications.map((cert, index) => (
          <div key={index} className="flex items-center space-x-6">
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center">
              <img
                src={cert.logo}
                alt={`${cert.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">
                {cert.name}
              </h3>
              <p className="text-lg text-gray-500">Issued {cert.issued}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

