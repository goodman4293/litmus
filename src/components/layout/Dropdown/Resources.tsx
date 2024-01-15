import Image from "next/image";
import LEDemoImage from "../../../../public/images/LE-Demo-Image-for-Web.png";

export default function platform(){
    return(
        <div className="mt-2 w-screen h-auto">
            <div className='w-4/6 justify-center m-auto drop-shadow-2xl flex gap-2 rounded-md bg-white p-2'>
                <div className='bg-green-50 w-1/2 justify-start  h-auto p-7 gap-x-5'>
                    <div className='ml-2 mt-5'>
                        <div className='text-[14px] text-[Inter] font-bold'>GUIDES, HOW-TO VIDEOS + WEBINARS</div>
                        <div className="text-[14px] text-[Inter] font-bold mt-2">DO MORE WITH DATA</div>
                    </div>
                    <div className="w-full bg-[#032125] h-[1px] mt-5" />
                    <div className="text-[14px] ml-2 mt-3 text-[Inter] font-bold">CENTRAL PORTAL</div>
                    <div className="w-full bg-[#032125] h-[1px] mt-5" />
                    <div className="text-[14px] ml-2 mt-3 text-[Inter] font-bold">LITMUS ACADEMY</div>
                </div>
                <div className='bg-gray-100 w-1/2 justify-end h-auto p-7 gap-x-5'>
                    <div className='color-black font-bold'>CUSTOMER STORIES BY INDUSTRY</div>
                    <div className='ml-2 mt-4'>
                        <div className="text-[14px] text-[Inter] font-bold mt-4">Aerospace</div>
                        <div className="text-[14px] text-[Inter] font-bold mt-4">Transportation + Automotive</div>
                        <div className="text-[14px] text-[Inter] font-bold mt-4">Food + Beverage</div>
                        <div className="text-[14px] text-[Inter] font-bold mt-4">Precision Manufacturing</div>
                        <div className="text-[14px] text-[Inter] font-bold mt-4">Mining + Oil & Gas</div>
                        <div className="text-[14px] text-[Inter] font-bold mt-4">Electronics Manufacturing</div>
                        <div className="text-[14px] text-[Inter] font-bold mt-4">Agriculture + Others</div>
                    </div>
                </div>
            </div>
        </div>  
    )
}