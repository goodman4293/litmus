"use client"

import {CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import Dropdown from 'antd/es/dropdown/dropdown';
import Image from 'next/image';
import React, {useState} from 'react';

import LEDemoImage from "../../../public/images/LE-Demo-Image-for-Web.png";
import topbarImage from '../../../public/images/topbar-icon.png';

import suffle from "../../../public/svg/suffle.svg"
import Platform from "./Dropdown/Platform";
import Resources from "./Dropdown/Resources";



export default function Topbar(){

  const [collapsed, setCollapsed] = useState(false);

  return (
      <header className='fixed shadow-md flex justify-center bg-white h-auto w-full py-[15px] gap-11 '>
        <div className="max-w-[1200px] w-full flex items-center">
          <Image src={topbarImage} className="max-w-[135px] max-h-[42px]" alt='topbarImage' />
          <div className="flex justify-end w-full gap-4">
            <Dropdown
              dropdownRender={() => (
                 <Platform />
              )}
              placement='bottomCenter'
            >
              <div className='items-center justify-center gap-2 flex cursor-pointer'>
                <span style={{color: "#1F2124"}}>Platform</span>
                { collapsed? <CaretUpOutlined className="text-xs mt-1" style={{color: "#1F2124"}} />: <CaretDownOutlined className="text-xs mt-1" />}
              </div>
            </Dropdown>
            <Dropdown
              dropdownRender={() => (
                <Resources />
              )}
              placement='bottomCenter'
              
            >
              <div className='items-center justify-center gap-2 flex cursor-pointer'>
                <span style={{color: "#1F2124"}}>Resources</span>
                { collapsed? <CaretUpOutlined className="text-xs mt-1" style={{color: "#1F2124"}} />: <CaretDownOutlined className="text-xs mt-1" />}
              </div>
            </Dropdown>
            <Dropdown
              dropdownRender={() => (
                <div className="mt-2 w-screen h-auto">
                  <div className='w-4/6 justify-center m-auto flex gap-2 rounded-md shadow-2xl border-2 border-opacity-30 bg-white p-2'>
                    <div className='bg-green-50 w-1/2 justify-start h-auto p-7 gap-x-5'>
                      <div className='color-black font-bold'>
                        SOFTWARE PRODUCTS
                      </div>
                      <div className='ml-2 mt-4'>
                        <div>
                          <div className='color-black font-medium text-base'>
                            Litmus Edge
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            All-in-one industrial edge data platform
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className='color-black font-medium text-base'>
                            Litmus Edge Manager
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            Centralized edge management platform.
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className='color-black font-medium text-base'>
                            `What&apos;s new`
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            See our roadmap, releases and new features.
                          </div>
                        </div>
                      </div>
                      <div style={{backgroundColor: "#032125"}} className="w-full h-px mt-4" />
                      <div className='ml-2 mt-5'>
                        <div className='color-black font-medium text-base'>
                          Pricing
                        </div>
                        <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                          All-in-one industrial edge data platform
                        </div>
                      </div>
                      <div style={{backgroundColor: "#032125"}} className="w-full h-px mt-5" />
                      <Image src={LEDemoImage} style={{ maxWidth: "225px" }} className="mt-6 w-full" alt="..." />
                      <div className="rounded-3xl w-auto h-auto py-1 px-5 mt-5" style={{maxWidth: "122px", backgroundColor: "#3ADB90"}} >
                        <span className="text-white text-xs font-bold ">WATCH DEMO</span>
                      </div>
                    </div>
                    <div className='bg-gray-100 w-1/2 justify-end h-auto p-7 gap-x-5'>
                      <div className='color-black font-bold'>
                        SOFTWARE PRODUCTS
                      </div>
                      <div className='ml-2 mt-5'>
                        <div>
                          <div className='color-black font-medium text-base'>
                            Litmus Edge
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            All-in-one industrial edge data platform
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className='color-black font-medium text-base'>
                            Litmus Edge Manager
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            Centralized edge management platform.
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className='color-black font-medium text-base'>
                            `What&apos;s new`
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            See our roadmap, releases and new features.
                          </div>
                        </div>
                      </div>
                      <div style={{backgroundColor: "#032125"}} className="w-full h-px mt-5" />
                      <div className='ml-2 mt-5'>
                        <div className='color-black font-medium text-base'>
                          Pricing
                        </div>
                        <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                          All-in-one industrial edge data platform
                        </div>
                      </div>
                      <div style={{backgroundColor: "#032125"}} className="w-full h-px mt-5" />
                      <Image src={LEDemoImage} alt="..." />
                    </div>
                  </div>
                </div>
                
              )}
              placement='bottomCenter'
              
            >
              <div className='items-center justify-center gap-2 flex cursor-pointer'>
                <span style={{color: "#1F2124"}}>Company</span>
                { collapsed? <CaretUpOutlined className="text-xs mt-1" style={{color: "#1F2124"}} />: <CaretDownOutlined className="text-xs mt-1" />}
              </div>
            </Dropdown>
            <Dropdown
              dropdownRender={() => (
                <div className="mt-2 w-screen h-auto">
                  <div className='w-4/6 justify-center m-auto flex gap-2 rounded-md shadow-2xl border-2 border-opacity-30 bg-white p-2'>
                    <div className='bg-green-50 w-1/2 justify-start h-auto p-7 gap-x-5'>
                      <div className='color-black font-bold'>
                        SOFTWARE PRODUCTS
                      </div>
                      <div className='ml-2 mt-4'>
                        <div>
                          <div className='color-black font-medium text-base'>
                            Litmus Edge
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            All-in-one industrial edge data platform
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className='color-black font-medium text-base'>
                            Litmus Edge Manager
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            Centralized edge management platform.
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className='color-black font-medium text-base'>
                           `What&apos;s new`
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            See our roadmap, releases and new features.
                          </div>
                        </div>
                      </div>
                      <div style={{backgroundColor: "#032125"}} className="w-full h-px mt-4" />
                      <div className='ml-2 mt-5'>
                        <div className='color-black font-medium text-base'>
                          Pricing
                        </div>
                        <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                          All-in-one industrial edge data platform
                        </div>
                      </div>
                      <div style={{backgroundColor: "#032125"}} className="w-full h-px mt-5" />
                      <Image src={LEDemoImage} style={{ maxWidth: "225px" }} className="mt-6 w-full" alt="..." />
                      <div className="rounded-3xl w-auto h-auto py-1 px-5 mt-5" style={{maxWidth: "122px", backgroundColor: "#3ADB90"}} >
                        <span className="text-white text-xs font-bold ">WATCH DEMO</span>
                      </div>
                    </div>
                    <div className='bg-gray-100 w-1/2 justify-end h-auto p-7 gap-x-5'>
                      <div className='color-black font-bold'>
                        SOFTWARE PRODUCTS
                      </div>
                      <div className='ml-2 mt-5'>
                        <div>
                          <div className='color-black font-medium text-base'>
                            Litmus Edge
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            All-in-one industrial edge data platform
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className='color-black font-medium text-base'>
                            Litmus Edge Manager
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            Centralized edge management platform.
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className='color-black font-medium text-base'>
                            `What&apos;s new`
                          </div>
                          <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                            See our roadmap, releases and new features.
                          </div>
                        </div>
                      </div>
                      <div style={{backgroundColor: "#032125"}} className="w-full h-px mt-5" />
                      <div className='ml-2 mt-5'>
                        <div className='color-black font-medium text-base'>
                          Pricing
                        </div>
                        <div style={{fontSize: "14px", fontFamily: "Inter", fontStyle: "bold"}}>
                          All-in-one industrial edge data platform
                        </div>
                      </div>
                      <div style={{backgroundColor: "#032125"}} className="w-full h-px mt-5" />
                      <Image src={LEDemoImage} alt="..." />
                    </div>
                  </div>
                </div>
              )}
              placement='bottomCenter'
              
            >
              <div className='items-center justify-center gap-2 flex cursor-pointer'>
                <span style={{color: "#1F2124"}}>Contact</span>
                { collapsed? <CaretUpOutlined className="text-xs mt-1" style={{color: "#1F2124"}} />: <CaretDownOutlined className="text-xs mt-1" />}
              </div>
            </Dropdown>
            
            <div className='w-auto h-full rounded-[26px] text-1xl text-white py-[13.5px] px-[49px] text-[16px] font-[Space Grotesk] font-bold bg-[#002F2B] cursor-pointer'>Schedule a Demo</div>
          </div>
        </div>
        
      </header>
  );
}