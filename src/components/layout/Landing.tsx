import Image from "next/image";

import "../../styles/dashboard.css";
import { ArrowRightOutlined } from "@ant-design/icons";

import dashboardImage from "../../../public/images/dashboard-image1.png";
export default function Landing(){
    return (
      <div className="w-full h-auto bg-white pb-10">
        <div className=" w-fit items-center m-auto h-auto justify-center pt-[114px] max-w-[1600px] ">
          <div className="items-center flex justify-center">
            <div className="pl-[80px]">
              <div className="text-[15px] not-italic leading-[1.2] text-[#9D9AF8] font-bold font-[Montserrat]">DO MORE WITH DATA. DRIVE GROWTH. SCALE.</div>
              <div>
                <div className="flex gap-2 w-auto">
                  <div className="text-[#002F2B] font-semibold not-italic font-[Space Grotesk] text-[40px]">A unified platform for</div>
                  <div className="text-[#B0B8B1] not-italic text-[40px] font-[Space Grotesk] font-bold items-center">Smart Manufacturing</div>
                </div>
                <div className="text-[#032125] w-full max-w-[600px] leading-[30px] mt-5">Navigate a fragmented data landscape, siloed plants and outdated legacy systems with a software platform built for industrial data. Data collection and standardization in minutes, real-time analytics, off the shelf templates to get going quick and integrations across the enterprise to make data actionable. Be more efficient, sustainable and competitive with Litmus.</div>
                <div className="flex gap-5 mt-10">
                  <div className='flex gap-3 cursor-pointer demoButton w-auto h-full rounded-3xl text-1xl text-white py-[14px] px-12 text-base font-bold bg-[#002F2B]'>
                    <div>View Demo</div>
                    <ArrowRightOutlined className="font-bold" />
                  </div>
                  <div className=' flex gap-3 demoButton cursor-pointer w-auto h-full rounded-3xl text-1xl text-white py-[14px] px-12 text-base font-bold bg-[#002F2B]'>
                    <div>Try it Free</div>
                    <ArrowRightOutlined className="font-bold" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-auto h-auto">
              <Image src={dashboardImage} className="max-w-[650px] max-h-[480px] mr-[32px]" alt="dashboard image" />
            </div>
          </div>
          <div className=" w-fit pt-10 m-auto justify-center items-center">
            <span className="w-full justify-center items-center" style={{fontSize: "40px", color: "#002F2B"}}>Trusted by companies worldwide who want to do more with data.</span>
          </div>
        </div>  
      </div>
      
    );
  }