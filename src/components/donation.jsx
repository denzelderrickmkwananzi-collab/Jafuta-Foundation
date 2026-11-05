import 'react';

const leftPlatforms = [
  {
    id: 'paypal',
    name: 'PayPal',
    logoUrl: './images/PayPal_Logo.png',
    buttonText: 'Donate via PayPal',
    link: 'https://www.paypal.com/ncp/payment/BHBMPJP3597V6',
  },
  {
    id: 'givebutter',
    name: 'Givebutter',
    logoUrl: './images/givebutter-logo.png',
    buttonText: 'Donate via Givebutter',
    link: 'https://givebutter.com/jafuta-foundation-inc',
  }
];

export default function Donation() {
  return (
    <section className="bg-[#EFEAE4] h-140 py-16 px-10 md:px-12 w-full flex items-center justify-center font-sans">
      <div className="max-w-4xl w-full flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-12 md:gap-16">
            <div className="w-full md:w-1/2 flex flex-col items-center gap-12 justify-center">
              {leftPlatforms.map((platform) => (
                <div key={platform.id} className="flex flex-col items-center w-full mb-8 max-w-[280px]">
                    <div className="h-12 flex items-center justify-center mb-4">
                        <img
                            src={platform.logoUrl} 
                            alt={`${platform.name} logo`} 
                            className="max-h-full max-w-[160px] object-contain select-none"
                        />
                    </div>
                    <a
                        href={platform.link}
                        className="w-full h-17 pt-5 text-lg block text-center bg-[#36828C] hover:bg-[#2A6770] transition-colors duration-200 text-white font-semibold tracking-wide py-4 px-6 shadow-sm"
                    >{platform.buttonText}</a>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center text-center max-w-[340px] mx-auto md:mx-0">
                <div className="h-12 flex items-center justify-center mb-4">
                    <img
                        src="./images/Trustbridge-Logo.png"
                        alt="" 
                        className="h-full w-full object-contain select-none"
                    />
                </div>
                <a
                    href="https://givingspace.trustbridgeglobal.com/public/donate?id=ba403ba0c0a84e34835f141aa36b57e0"
                    className="w-full h-17 pt-5 block text-center bg-[#36828C] hover:bg-[#2A6770] transition-colors duration-200 text-white font-semibold text-lg tracking-wide py-4 px-6 shadow-sm mb-6"
                >Donate via TrustBridge</a>
                <p className="text-xs text-left md:text-[20px] text-[#5A524E] font-light leading-relaxed max-w-[310px]">
                    *We can receive contributions from any country via <span className="font-semibold text-[#2A2421]">TrustBridge</span>. 
                    TrustBridge provides tax receipts for most countries. By clicking the link you can choose 
                    to request a tax receipt for your country if available.
                </p>
            </div>
        </div>
        <div className="w-full text-center mb-5 pt-8 px-4">
          <p className="text-md md:text-[18px] font-bold text-[#2A2421] tracking-wide">
            *We are registered in the USA as a 501(c)3 foundation, so all USA donations are tax deductible.
          </p>
        </div>
      </div>
    </section>
  );
}
