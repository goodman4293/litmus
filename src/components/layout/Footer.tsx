"use client"

import Image from "next/image"

import { ArrowRightOutlined, BulbOutlined, TwitterOutlined } from "@ant-design/icons";
import TikImage from "../../../public/images/TikImage.png";
import bottomImage from "../../../public/images/bottom-image.png";
import EnglishImage from "../../../public/images/English.png";
import JapaneseImage from "../../../public/images/Japanese.png";
import inImage from "../../../public/images/in-image.png";
import AdobeImage3 from "../../../public/images/AdobeStock_622738160.jpeg";
import AdobeImage4 from "../../../public/images/AdobeStock_165294159.jpeg"
import aImage from "../../../public/images/2a-1.png";
import AdobeImage2 from "../../../public/images/AdobeStock_388012105-1536x864-1.jpeg";
import AdobeImage1 from "../../../public/images/AdobeStock_419881291-1536x864-1.jpeg";
import AdobeImage from "../../../public/images/AdobeStock_601359663-1536x864-1.jpeg";
import image33 from "../../../public/images/aerospace.png";
import image34 from "../../../public/images/agriculture.png";
import image3 from "../../../public/images/Applied-Control-1.png";
import image4 from "../../../public/images/Arrow-1.png";
import image5 from "../../../public/images/Atos-2.png";
import image6 from "../../../public/images/ATS-Global-1.png";
import image35 from "../../../public/images/Automotive.png";
import image7 from "../../../public/images/Belden-2.png";
import image8 from "../../../public/images/Cloudera-3.png";
import image9 from "../../../public/images/dashboard-image1.png";
import image10 from "../../../public/images/Dell-4.png";
import image36 from "../../../public/images/Electronics.png";
import image37 from "../../../public/images/Food + Beverage.png";
import image11 from "../../../public/images/Fujisoft-1.png";
import image38 from "../../../public/images/Healthcare + Medical.png";
import image12 from "../../../public/images/Hewlett-Packard-Enterprise-2.png";
import image13 from "../../../public/images/Hitachi-Vantara-6.png";
import image14 from "../../../public/images/i-IOT-4.png";
import iconBottomImage from "../../../public/images/icon-bottom-image.png";
import iconTopImage from "../../../public/images/icon-top-image.png";
import image15 from "../../../public/images/Intel-2.png";
import image16 from "../../../public/images/Kaptura-2.png";
import image17 from "../../../public/images/Kyra-Solutions-1.png";
import image18 from "../../../public/images/Lanner-1.png";
import image19 from "../../../public/images/Logo-Google-Cloud-1-1-300x86.png";
import image20 from "../../../public/images/Microsoft-3.png";
import image21 from "../../../public/images/Mitac-1.png";
import image22 from "../../../public/images/Mitsubishi-Corporation-3.png";
import image23 from "../../../public/images/Niagara-4.png";
import image39 from "../../../public/images/Oil + Gas.png";
import image40 from "../../../public/images/OT.png";
import image24 from "../../../public/images/Parker-4.png";
import image25 from "../../../public/images/Royal-Cyber-1.png";
import image2 from "../../../public/images/Saint-Gobain-Logo.png";
import image26 from "../../../public/images/Saint-Gobain-Logo.png";
import image27 from "../../../public/images/SNC-Lavalin-1.png";
import image28 from "../../../public/images/SoftServe-1.png";
import image1 from "../../../public/images/stackpole-logo-500.png";
import image29 from "../../../public/images/stackpole-logo-500.png";
import image30 from "../../../public/images/Supermicro-3.png";
import image31 from "../../../public/images/WideTNS-3.png";
import image32 from "../../../public/images/WPI-2.png";

import ExploreImage1 from "../../../public/images/ExploreImage1.png";
import ExploreImage2 from "../../../public/images/ExploreImage2.png";
import ExploreImage3 from "../../../public/images/ExploreImage3.png";
import ExploreImage4 from "../../../public/images/ExploreImage4.png";
import ExploreImage5 from "../../../public/images/ExploreImage5.png";
import ExploreImage6 from "../../../public/images/ExploreImage6.png";
import ExploreImage7 from "../../../public/images/ExploreImage7.png";
import ExploreImage8 from "../../../public/images/ExploreImage8.png";
import ExploreImage9 from "../../../public/images/ExploreImage9.png";
import ExploreImage10 from "../../../public/images/ExploreImage10.png";
import ExploreImage11 from "../../../public/images/ExploreImage11.png";
import ExploreImage12 from "../../../public/images/ExploreImage12.png";

import React, { useState } from "react";

export default function Footer(){
    const images = [
        image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image23, image24, image25, image26, image27, image28, image29, image30, image31, image32
      ];
    const [content, setContent] = useState(0);
    return(
        <footer className="overflow-auto justify-center bg-green-50 w-full h-auto">
            <div className="items-center justify-center gap-10 flex pt-8 pb-8">
                <div className="max-w-[320px] w-full p-[10px]">
                    <div className="font-bold text-5xl text-[#002F2B]">95%</div>
                    <div className="text-black text-base pt-3">Reduction in Scrap</div>
                    <Image src={image1} alt="image1" className="w-auto h-auto pt-5" />
                </div>
                <div className="max-w-[320px] w-full p-[10px]">
                    <div className="font-bold text-5xl text-[#002F2B]">85%</div>
                    <div className="text-black text-base pt-3">Reduction in Cloud Spend</div>
                    <div className="font-bold pt-5 max-text-lg leading-5 text-[#278A6B]">FAMILY-OWNED FOOD + BEVERAGE MANUFACTURER</div>
                </div>
                <div className="max-w-[320px] w-full p-[10px]">
                    <div className=" font-bold text-5xl text-[#002F2B]">
                        70%
                    </div>
                    <div className="text-black w-full text-base pt-3">
                        Manual OEE Time Savings
                    </div>
                    <div className="font-bold pt-5 max-text-lg leading-5 text-[#278A6B]">
                        TOP 3 AIRCRAFT ENGINE MANUFACTURER
                    </div>
                </div>
                <div className="max-w-[320px] w-full p-[10px]">
                    <div className=" font-bold text-5xl text-[#002F2B]">
                        40 Plants
                    </div>
                    <div className="text-black text-lg pt-3">
                    Rapid Deployment
                    </div>
                    <Image src={image2} alt="image1" className="w-auto h-auto pt-2" />
                </div>   
            </div>
            <div className="w-full h-px bg-green-300 font-thin" />
            <div className="w-2/4 items-center h-40 py-10 m-auto">
                {/* <ImageGallery images={images}  /> */}
                {/* <Carousel /> */}

                {/* <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={image1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={image2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={image3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={image4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <Image src={image5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>
                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div> */}

            </div>
            <div className="w-full h-auto justify-center" style={{backgroundColor: "#032125"}}>
                <div className="w-fit py-10 justify-center m-auto" style={{maxWidth: "1280px"}}>
                    <div className="w-full ">
                        <div className=" items-center justify-center m-auto w-max text-white text-5xl">
                            <span className="items-center justify-center m-auto" style={{fontSize: "40px"}}>Future-proof your industrial data strategy today.</span>
                        </div>
                    </div>
                    <div className="items-center justify-center flex gap-2 m-auto mt-10">
                        <div className="flex gap-1">
                            <Image src={image33} alt="..." />
                            <span className="text-white text-ls">Aerospace</span>
                        </div>
                        <div className="flex gap-1">
                            <Image src={image34} alt="..." />
                            <span className="text-white text-ls">Agriculture</span>
                        </div>
                        <div className="flex gap-1">
                            <Image src={image35} alt="..." />
                            <span className="text-white text-lg">Automotive</span>
                        </div>
                        <div className="flex gap-1">
                            <Image src={image36} alt="..." />
                            <span className="text-white text-lg">Electronics</span>
                        </div>
                        <div className="flex gap-1">
                            <Image src={image37} alt="..." />
                            <span className="text-white text-lg">Food + Beverage</span>
                        </div>
                        <div className="flex gap-1">
                            <Image src={image38} alt="..." />
                            <span className="text-white text-lg">Healthcare + Medical</span>
                        </div>
                        <div className="flex gap-1">
                            <Image src={image39} alt="..." />
                            <span className="text-white text-lg">Oil + Gas</span>
                        </div>
                    </div>
                    <div className="items-center justify-center gap-4 flex mt-10">
                        <div>
                            <Image className="w-fit m-auto" src={image40} alt="..." />
                            <div className="gap-y-2 h-auto w-fit m-auto">
                                <div className="text-white text-xl w-fit m-auto">OT</div>
                                <div className="text-white text-xl text-center">Get more out of existing systems to improve quality, predictive maintenance and more.</div>
                            </div>
                        </div>
                        <div className="gap-y-2">
                            <Image className="w-fit m-auto" src={image40} alt="..." />
                            <div className="gap-y-2 h-auto w-fit m-auto">
                                <div className="text-white text-xl w-fit m-auto">IT</div>
                                <div className="text-white text-xl text-center">Use a robust and secure low/no code environment to streamline data collection, sharing and storage.</div>
                            </div>
                        </div>
                        <div className="gap-y-2">
                            <Image className="w-fit m-auto" src={image40} alt="..." />
                            <div className="gap-y-2 h-auto w-fit m-auto">
                                <div className="text-white text-xl w-fit m-auto">IIoT/DX</div>
                                <div className="text-white text-xl text-center">Take advantage of unparalleled time-to-value out of the box to centralize your Industry 4.0 efforts.</div>
                            </div>
                        </div>
                        <div className="gap-y-2">
                            <Image className="w-fit m-auto" src={image40} alt="..." />
                            <div className="gap-y-2 h-auto w-fit m-auto">
                                <div className="text-white text-xl w-fit m-auto">Leadership</div>
                                <div className="text-white text-xl text-center">Uncover missing links and insights to drive efficiency, scale profitably and compete better.</div>
                            </div>
                        </div>
                    </div>
                    <div className="items-cent justify-center gap-4 flex mt-10">
                        <div className="flex gap-1 items-center">
                            <Image src={iconTopImage} alt="..." className="justify-center" />
                            <span className="text-white" style={{fontSize: "16px"}}>IMPROVE Throughput, Uptime, Yield, Time to Market + ROI</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Image src={iconBottomImage} alt="..." className="justify-center" />
                            <span className="text-white" style={{fontSize: "16px"}}>REDUCE Scrap, Defects, Manual OEE, Energy Consumption + Downtime</span>
                        </div>
                    </div>
                </div>
            </div>
                
            <div className=" m-auto gap-y-20 pt-10" style={{width: "fit-content"}}>
                <div className="text-4xl text-center " style={{color: "#032125"}}>
                    What makes Litmus different?
                </div>
                <div className="my-8 m-auto text-center" style={{ fontSize: "16px", color: "#002F2B"}}>
                    Connect the dots with a centralized software platform for industrial data that’s built for everyone.
                </div>
                <div className="w-4/5 flex gap-16 items-center m-auto py-24 justify-center">
                    <div className="justify-center w-1/2">
                        <div className="leading-9" style={{fontSize: "29px", color: "#002F2B"}}>Imagine data connectivity faster than ever before.</div>
                        <div className="mt-6" style={{fontSize: "16px", color: "#002F2B"}}>Connect all your assets and data sources in minutes not months. Automatically normalize and contextualize data. More efficiently share data with cloud storage and enterprise apps. Our all-in-one software platform eliminates the need to purchase legacy data loggers or OPC software to connect, collect and normalize data.</div>
                    </div>
                    <div className="w-1/2 h-auto">
                        <Image className="w-auto h-auto rounded-lg" src={aImage} alt="..." />
                    </div>
                </div>
                <div style={{backgroundColor: "#E5E5E5"}}>
                    <div className="w-4/5 flex gap-16 items-center m-auto py-24 justify-center">
                        <div className="w-1/2 h-auto">
                            <Image className="w-auto h-auto rounded-lg" src={AdobeImage} alt="..." />
                        </div>
                        <div className="justify-center w-1/2">
                            <div className="leading-9" style={{fontSize: "29px", color: "#002F2B"}}>Edge-first, secure and air-gapped on your industrial network.</div>
                            <div className="mt-6" style={{fontSize: "16px", color: "#002F2B"}}>Leverage OT data for instant low-code analytics in real time at the edge. From OEE to energy consumption and more, use prebuilt KPI workflows, alerts and alarms (or build your own). Enable advanced machine learning runtime for your real-time data stream. Then, leverage your favorite BI tools in the cloud working from a cleaner single source of truth.</div>
                        </div>
                    </div>
                </div>
                <div className="w-4/5 flex gap-16 items-center m-auto py-24 justify-center">
                    <div className="justify-center w-1/2">
                        <div className="leading-9" style={{fontSize: "29px", color: "#002F2B"}}>Deploy and scale with a trusted partner.</div>
                        <div className="mt-6" style={{fontSize: "16px", color: "#002F2B"}}>Manufacturers and industrial sites around the world trust Litmus’ software every day to do more with their data. They avoid one-off project-based solutions that can’t scale across the factory or across geographies with a foundational data layer that scales to millions of tags across multiple sites and flows petabytes of data. We work directly with you or the SIs and consultants you prefer to partner with. We add value to existing OT and IT systems and help you streamline operations and drive growth.</div>
                    </div>
                    <div className="w-1/2 h-auto">
                        <Image className="w-auto h-auto rounded-lg" src={AdobeImage1} alt="..." />
                    </div>
                </div>
                <div style={{backgroundColor: "#E5E5E5"}}>
                    <div className="w-4/5 flex gap-16 items-center m-auto py-24 justify-center">
                        <div className="w-1/2 h-auto">
                            <Image className="w-auto h-auto rounded-lg" src={AdobeImage2} alt="..." />
                        </div>
                        <div className="justify-center w-1/2">
                            <div className="leading-9" style={{fontSize: "29px", color: "#002F2B"}}>No nickel-and-diming DataOps for the data you need.</div>
                            <div className="mt-6" style={{fontSize: "16px", color: "#002F2B"}}>From pilots to large deployments, we meet you where you are in your data maturity and digital transformation journey. With site-based annual software subscriptions and flexible deployment options to meet your business, network and security needs. Instead of requiring multiple products, upsells and add ons, Litmus gives you a centralized solution that can improve ROI and TCO.</div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#032125] m-auto py-10">
                    <div style={{color: "#3AD890", fontSize: "16px"}} className="pt-8 text-center">READY, SET, GO!</div> 
                    <div style={{fontSize: "40px"}} className="pt-8 text-white text-center">Prebuilt integrations with 300+ OT assets, cloud applications and business systems.</div>
                    <div style={{maxWidth: "681px", fontSize: "16px"}} className="pt-16 justify-center m-auto text-white text-center">Connect to the most popular legacy and modern systems on the factory floor, other edge platforms or analytics and enterprise cloud applications in a snap. (If we don’t have connections you’re looking for, we can build them).</div>
                    <div className="p-6">
                        <div className="row w-full h-auto row flex">
                            <div className="col rounded-[10px] bg-white">
                                <Image src={ExploreImage1} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage2} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage3} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage4} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage5} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage6} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage7} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage8} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage9} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage10} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage11} alt="..." className=" w-[84px] h-auto py-[38px] mt-3 m-auto" />
                            </div>
                            <div className=" col rounded-[10px] bg-white">
                                <Image src={ExploreImage12} alt="..." className=" w-[84px] h-auto py-[38px] m-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center justify-center m-auto">
                        <div className=' flex gap-3 border-2 border-white exploreButton cursor-pointer w-auto h-full rounded-3xl text-1xl text-white py-[14px] px-12 text-base font-bold bg-[#002F2B]'>
                            <div>Explore Connectors</div>
                            <ArrowRightOutlined className="font-bold" />
                        </div>
                        <div className=' flex gap-3 border-2 border-white exploreButton cursor-pointer w-auto h-full rounded-3xl text-1xl text-white py-[14px] px-12 text-base font-bold bg-[#002F2B]'>
                            <div>Explore Integrations</div>
                            <ArrowRightOutlined className="font-bold" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto bg-[#E5E5E5]">
                    <div className="max-w-[1280px] flex gap-2 h-auto p-[35px] items-center justify-center m-auto">
                        <div className="w-1/2 items-center justify-start h-full">
                            <div className="bg-white max-w-[480px] p-[40px] h-auto items-center">
                                <div className="text-[27px] text-[Space Grotesk] text-[#0D0925]">
                                    Be disruptive - without disrupting business operations. Start today.
                                </div>
                                <div className="text-[16px] text-[Space Grotesk] text-[#4E4A67]">
                                    Learn how Litmus can help you securely and scalably do more with your industrial data.
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 items-center justify-start h-auto">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                className=" email appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                            />
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2 mt-4">
                                Message
                            </label>
                            <textarea
                                className="email appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your message"
                                maxLength={180}
                                onChange={(e) => {
                                    setContent(e.target.value.length);
                                }}
                                rows={5}
                            />
                            <div className="justify-end flex items-end">
                                <span className="mt-[5px] text-[#777771] text-[12px] items-center">{content}</span>
                                <span className=" text-[#777771] text-[12px] items-center">/ 180</span>
                            </div>
                            <div className="mt-[30px] w-fit bg-[#008FCA] p-[10px] cursor-pointer">
                                <span className="text-[14px]">Send Message</span> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-green-50 py-[35px]">
                    <div className="max-w-[1280px] m-auto">
                        <div className="w-full m-auto items-center flex h-auto">
                            <div className="text-[40px] text-[#002F2B] font-bold text-[Space Gretesk]">News + Trends</div>
                            <div className="ml-auto rounded-[40px] px-[50px] gap-2 bg-[#3AD890] py-[18px] flex cursor-pointer">
                                <BulbOutlined />
                                <span className="text-[16px] text-[Space Grotesk]">Explore Our Resources</span>
                            </div>
                        </div>
                        <div className="w-full h-auto mt-[40px] flex">
                            <div className="w-1/3 pr-[25px] pb-[25px]">
                                <Image src={AdobeImage3} className=" rounded-md w-full max-w-[386px]" alt="..." />
                                <div className="text-[#3ADB90] text-[11px] text-[Inter] mt-[20px] cursor-pointer">BLOG</div>
                                <div className="Adobeimage mt-[11px] text-[Space Grotesk] text-[20px] cursor-pointer text-[#002F2B] font-bold">Edge Computing and Digital Twins: A Match Made for Manufacturing</div>
                                <div className="flex mt-[11px] gap-1">
                                    <div className=" text-[#6E7A84] text-[11px] text-[Inter] cursor-pointer Adobeimage">LITMUS23</div>
                                    <div className=" text-[#6E7A84] text-[11px] text-[Inter]"> • JANUARY 9, 2024</div>
                                </div>
                            </div>
                            <div className="w-1/3 pb-[25px] px-[25px]">
                                <div className="text-[#3ADB90] mt-[20px] text-[11px] cursor-pointer">ARITCLES</div>
                                <div className=" Adobeimage text-[#002F2B] text-[20px] text-[Space Grotesk] mt-[11px]">Working Smarter, Not Harder Launching an expanded library of Litmus Edge integrations.</div>
                                <div className="flex mt-[11px] gap-1">
                                    <div className=" text-[#6E7A84] text-[11px] text-[Inter] cursor-pointer Adobeimage">LITMUS23</div>
                                    <div className=" text-[#6E7A84] text-[11px] text-[Inter]"> • DECEMBER 19, 2023M</div>
                                </div>
                            </div>  
                            <div className="w-1/3 pb-[25px] pl-[25px]">
                                <Image src={AdobeImage4} className=" rounded-md w-full max-w-[386px] cursor-pointer" alt="..." />
                                <div className="text-[#3ADB90] text-[11px] text-[Inter] mt-[20px]">BLOG</div>
                                <div className="Adobeimage mt-[11px] text-[Space Grotesk] text-[20px] cursor-pointer text-[#002F2B] font-bold">Why Digital Transformation Journeys need Digital Twins</div>
                                <div className="flex mt-[11px] gap-1">
                                    <div className=" text-[#6E7A84] text-[11px] text-[Inter] cursor-pointer Adobeimage">LITMUS23</div>
                                    <div className=" text-[#6E7A84] text-[11px] text-[Inter]"> • DECEMBER 19, 2023</div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="bg-[#032125] pt-20 pb-20px">
                    <div className=" max-w-[1280px]  m-auto justify-center gap-20">
                        <div className="flex mr-[100px]">
                            <div className="p-[10px] mr-[100px]">
                                <Image src={bottomImage} className="max-w-[147px] max-h-[47px]" alt="..." />
                                <div className="text-[16px] text-[Inter] text-[#F2F8F6] max-w-[261px] mt-[15px]">Making Industrial Data Make Sense for OT, IT and the Entire Enterprise</div>
                                <div className="flex ml-[4px] mt-4 items-center gap-2">
                                    <Image src={inImage} alt="..." className="w-[50px] h-[50px]" />
                                    <TwitterOutlined className="text-[22px]"  />
                                    <Image src={TikImage} alt="..." className="w-[50px] h-[50px]" />
                                </div>
                                <div className="ml-[2px] items-center gap-2 mt-6">
                                    <div className="flex gap-2 items-center cursor-pointer">
                                        <Image src={EnglishImage} className="w-[18px] h-[12px]" alt="..." />
                                        <div className="text-[15px] text-white">English</div>
                                    </div>
                                    <div className="flex gap-2 items-center mt-2 cursor-pointer">
                                        <Image src={JapaneseImage} className="w-[18px] h-[12px]" alt="..." />
                                        <div className="text-[15px] text-white">日本語 (Japanese)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-[10px]">
                                <div className="text-[#F2F8F6] text-[18px] font-bold">Platform</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-4 cursor-pointer">Litmus Edge</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">Litmus Edge Manager</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">What&apos;s new</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">Pricing</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">Connectors</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">Integrations</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">Solutions</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">Watch Demo</div>
                            </div>
                            <div className="p-[10px]">
                                <div className="text-[#F2F8F6] text-[18px] font-bold">Resources</div>
                                <div className="text-[#F2F8F6] text-[18px] font-bold FooterText mt-4 cursor-pointer">Case Studies</div>
                                <div className="text-[#F2F8F6] text-[18px] font-bold FooterText mt-3 cursor-pointer">Central Portal</div>
                                <div className="text-[#F2F8F6] text-[18px] font-bold FooterText mt-3 cursor-pointer">Platform Documentation</div>
                                <div className="text-[#F2F8F6] text-[18px] font-bold FooterText mt-3 cursor-pointer">Solutions Documentaion</div>
                                <div className="text-[#F2F8F6] text-[18px] font-bold FooterText mt-3 cursor-pointer">Litmus Academy</div>
                                <div className="text-[#F2F8F6] text-[18px] font-bold FooterText mt-3 cursor-pointer">Support Portal</div>
                            </div>
                            <div className="p-[10px]">
                                <div className="text-[#F2F8F6] text-[18px] font-bold">Platform</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-4 cursor-pointer">Company</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">Who We Are</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">Careers</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">Newsroom</div>
                                <div className="text-[#FFFFFF78] text-[18px] FooterText mt-3 cursor-pointer">Partners</div>
                            </div>
                            <div>
                                <div className=' flex gap-3 FooterButton border-[3px] border-white cursor-pointer w-auto rounded-3xl text-1xl text-white py-[14px] px-11 text-base font-bold bg-[#002F2B]'>
                                    <div>Schedule a Demo</div>
                                </div>
                                <div className=' flex gap-3 FooterButton border-[3px] mt-5 border-white cursor-pointer w-auto rounded-3xl text-1xl text-white py-[14px] px-11 text-base font-bold bg-[#002F2B]'>
                                    <div>Try it Free</div>
                                </div>
                                <div className=' flex gap-3 FooterButton border-[3px] mt-5 border-white cursor-pointer w-auto rounded-3xl text-1xl text-white py-[14px] px-11 text-base font-bold bg-[#002F2B]'>
                                    <div>Contact Us</div>
                                </div>
                            </div>
                        </div>
                        <div className="my-[30px] pb-[30px]">
                            <div className="h-[1px] bg-gray-400 w-full" />
                            <div className="mt-5 text-bold text-[F2F8F6] text-[16px]">Worldwide Offices  Silicon Valley • Toronto • Munich • Tokyo</div>
                            <div className="flex mt-5">
                                <div className="text-bold text-[#F2F8F6] text-[16px]">© 2024 Litmus Automation Inc. • All Rights Reserved • </div>
                                <div className="ml-1 text-bold text-[#3ADB90] text-[16px] cursor-pointer">Privacy Policy</div>
                                <div className="ml-1 text-bold text-[#F2F8F6] text-[16px]"> • </div>
                                <div className="ml-1 text-bold text-[#3ADB90] text-[16px] cursor-pointer">Terms and Conditions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}