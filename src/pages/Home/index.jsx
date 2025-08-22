import React from 'react';
import Header from '../../components/common/Header';

const Home = () => {
  return (
    <div className="w-full bg-global-2 min-h-screen">
      <div className="w-full flex flex-col gap-[10px] sm:gap-[15px] lg:gap-[20px] justify-start items-center px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="w-full max-w-[1392px] mx-auto mb-[12px] sm:mb-[18px] lg:mb-[24px]">
          <div className="flex flex-col lg:flex-row gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-center items-start lg:items-center w-full">
            
            {/* Left Column */}
            <div className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-center w-full lg:flex-1">
              
              {/* Hero Section */}
              <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-center w-full lg:flex-1">
                
                {/* Hero Text Section */}
                <div className="flex flex-col gap-[36px] sm:gap-[54px] lg:gap-[72px] justify-start items-start w-full lg:flex-1 bg-global-3 rounded-[20px] p-[17px] sm:p-[25px] lg:p-[34px] pt-[17px] sm:pt-[25px] lg:pt-[34px] pr-[12px] sm:pr-[18px] lg:pr-[24px] pb-[17px] sm:pb-[25px] lg:pb-[34px] pl-[12px] sm:pl-[18px] lg:pl-[24px]">
                  
                  {/* Flower Icon */}
                  <div className="flex justify-end items-center w-full">
                    <img 
                      src="/images/img_flower_icon.svg" 
                      className="w-[59px] sm:w-[88px] lg:w-[118px] h-[59px] sm:h-[88px] lg:h-[118px] mr-[3px] sm:mr-[4px] lg:mr-[6px]" 
                      alt="Flower icon" 
                    />
                  </div>
                  
                  {/* Hero Title */}
                  <div className="w-full lg:w-[92%] mb-[26px] sm:mb-[39px] lg:mb-[52px]">
                    <h1 className="text-[28px] sm:text-[42px] lg:text-[56px] font-gilroy font-bold leading-[28px] sm:leading-[42px] lg:leading-[56px] text-left text-global-1">
                      <span>Artist Redefining </span>
                      <span className="font-light italic">Architecture</span>
                      <span> with AI-Driven Design</span>
                    </h1>
                  </div>
                </div>
                
                {/* Hero Image */}
                <div className="w-full sm:w-[50%] lg:w-[36%]">
                  <img 
                    src="/images/img_image.png" 
                    className="w-full h-[238px] sm:h-[357px] lg:h-[476px] object-cover rounded-[20px]" 
                    alt="Julia Huang portrait" 
                  />
                </div>
              </div>
              
              {/* Bottom Section */}
              <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-center w-full lg:flex-1">
                
                {/* About Section */}
                <div className="flex flex-col gap-[42px] sm:gap-[63px] lg:gap-[84px] justify-start items-start w-full bg-global-3 rounded-[20px] p-[16px] sm:p-[24px] lg:p-[32px]">
                  
                  {/* Vector Icon */}
                  <img 
                    src="/images/img_vector.svg" 
                    className="w-[19px] sm:w-[28px] lg:w-[38px] h-[19px] sm:h-[28px] lg:h-[38px]" 
                    alt="Vector icon" 
                  />
                  
                  {/* About Text */}
                  <div className="w-full lg:w-[74%] mb-[7px] sm:mb-[10px] lg:mb-[14px]">
                    <p className="text-[15px] sm:text-[17px] lg:text-[20px] font-gilroy font-light leading-[19px] sm:leading-[22px] lg:leading-[25px] text-left text-global-1">
                      Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
                    </p>
                  </div>
                </div>
                
                {/* Contact Section */}
                <div className="flex flex-col gap-[85px] sm:gap-[127px] lg:gap-[170px] justify-center items-start w-full bg-global-1 rounded-[20px] p-[15px] sm:p-[22px] lg:p-[30px] pt-[15px] sm:pt-[22px] lg:pt-[30px] pr-[12px] sm:pr-[18px] lg:pr-[24px] pb-[15px] sm:pb-[22px] lg:pb-[30px] pl-[12px] sm:pl-[18px] lg:pl-[24px]">
                  
                  {/* Contact Header */}
                  <div className="flex flex-row justify-between items-center w-full lg:flex-1">
                    <div className="w-[20%] self-end">
                      <p className="text-[11px] sm:text-[13px] lg:text-[15px] font-gilroy font-light leading-[13px] sm:leading-[15px] lg:leading-[17px] text-left text-global-1">
                        Have some{'\n'}questions?
                      </p>
                    </div>
                    <img 
                      src="/images/img_arrow.svg" 
                      className="w-[19px] sm:w-[28px] lg:w-[38px] h-[19px] sm:h-[28px] lg:h-[38px]" 
                      alt="Arrow icon" 
                    />
                  </div>
                  
                  {/* Contact Title */}
                  <h2 className="text-[28px] sm:text-[41px] lg:text-[55px] font-gilroy font-medium leading-[34px] sm:leading-[50px] lg:leading-[67px] text-left text-global-1 w-auto">
                    Contact me
                  </h2>
                </div>
              </div>
            </div>
            
            {/* Right Column - Projects */}
            <div className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-center w-full lg:w-[32%]">
              
              {/* Projects Section */}
              <div className="flex flex-col gap-[17px] sm:gap-[25px] lg:gap-[34px] justify-start items-start w-full lg:flex-1 bg-global-3 rounded-[20px] p-[14px] sm:p-[21px] lg:p-[28px]">
                
                {/* Musea Project */}
                <div className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px] justify-start items-center w-full lg:flex-1">
                  
                  {/* Musea Header */}
                  <div className="flex flex-row justify-between items-center w-full lg:flex-1">
                    <h3 className="text-[19px] sm:text-[22px] lg:text-[25px] font-gilroy font-medium leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-global-1 w-auto">
                      Musea
                    </h3>
                    <img 
                      src="/images/img_arrow.svg" 
                      className="w-[13px] sm:w-[19px] lg:w-[26px] h-[13px] sm:h-[19px] lg:h-[26px] self-end" 
                      alt="Arrow icon" 
                    />
                  </div>
                  
                  {/* Musea Image */}
                  <img 
                    src="/images/img_lilcoderman_pin.png" 
                    className="w-full lg:flex-1 h-[134px] sm:h-[201px] lg:h-[268px] object-cover rounded-[16px]" 
                    alt="Musea project" 
                  />
                  
                  {/* Divider Line */}
                  <div className="w-full lg:flex-1 h-[1px] sm:h-[1px] lg:h-[2px] bg-global-1"></div>
                </div>
                
                {/* Other Projects */}
                <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[40px] justify-start items-start w-full lg:flex-1">
                  
                  {/* Elara */}
                  <h3 className="text-[19px] sm:text-[22px] lg:text-[25px] font-gilroy font-medium leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-global-1 w-auto">
                    Elara
                  </h3>
                  <div className="w-full lg:flex-1 h-[1px] sm:h-[1px] lg:h-[2px] bg-global-1"></div>
                </div>
                
                <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[40px] justify-start items-start w-full lg:flex-1">
                  
                  {/* Verve */}
                  <h3 className="text-[19px] sm:text-[22px] lg:text-[25px] font-gilroy font-medium leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-global-1 w-auto">
                    Verve
                  </h3>
                  <div className="w-full lg:flex-1 h-[1px] sm:h-[1px] lg:h-[2px] bg-global-1"></div>
                </div>
                
                {/* Zephyr */}
                <div className="mb-[5px] sm:mb-[7px] lg:mb-[10px]">
                  <h3 className="text-[19px] sm:text-[22px] lg:text-[25px] font-gilroy font-medium leading-[23px] sm:leading-[27px] lg:leading-[31px] text-left text-global-1 w-auto">
                    Zephyr
                  </h3>
                </div>
              </div>
              
              {/* Social Media Section */}
              <div className="flex flex-row justify-start items-center w-full lg:flex-1 bg-global-3 rounded-[20px] p-[19px] sm:p-[28px] lg:p-[38px]">
                <div className="flex flex-row justify-between items-center w-full mx-[8px] sm:mx-[12px] lg:mx-[16px]">
                  <button className="text-[11px] sm:text-[13px] lg:text-[15px] font-gilroy font-light leading-[14px] sm:leading-[16px] lg:leading-[19px] text-left uppercase text-global-1 w-auto hover:opacity-70 transition-opacity duration-200">
                    Instagram
                  </button>
                  <button className="text-[11px] sm:text-[13px] lg:text-[15px] font-gilroy font-light leading-[13px] sm:leading-[15px] lg:leading-[18px] text-left uppercase text-global-1 w-auto hover:opacity-70 transition-opacity duration-200">
                    Twitter
                  </button>
                  <button className="text-[11px] sm:text-[13px] lg:text-[15px] font-gilroy font-light leading-[13px] sm:leading-[15px] lg:leading-[18px] text-left uppercase text-global-1 w-auto hover:opacity-70 transition-opacity duration-200">
                    Linkedin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;