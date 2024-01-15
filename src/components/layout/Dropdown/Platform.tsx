import Image from "next/image";
import LEDemoImage from "../../../../public/images/LE-Demo-Image-for-Web.png";

export default function platform(){
    return(
        <div className="mt-2 w-screen h-auto">
            <div className='w-4/6 justify-center m-auto drop-shadow-2xl flex gap-2 rounded-md bg-white p-2'>
                <div className='bg-green-50 w-1/2 justify-start  h-auto p-7 gap-x-5'>
                    <div className='color-black font-bold'>SOFTWARE PRODUCTS</div>
                    <div className='ml-2 mt-4'>
                        <div>
                            <div className='color-black font-medium text-base'>Litmus Edge</div>
                            <div className="text-[14px] text-[Inter] font-bold">All-in-one industrial edge data platform</div>
                        </div>
                        <div className="mt-4">
                            <div className='color-black font-medium text-base'>Litmus Edge Manager</div>
                            <div className="text-[14px] text-[Inter] font-bold">Centralized edge management platform.</div>
                        </div>
                        <div className="mt-4">
                            <div className='color-black font-medium text-base'>`What&apos;s new`</div>
                            <div className="text-[14px] text-[Inter] font-bold">See our roadmap, releases and new features.</div>
                        </div>
                    </div>
                    <div className="w-full bg-[#032125] h-[1px] mt-4" />
                    <div className='ml-2 mt-5'>
                        <div className='color-black font-medium text-base'>Pricing</div>
                        <div className="text-[14px] text-[Inter] font-bold">All-in-one industrial edge data platform</div>
                    </div>
                    <div className="w-full bg-[#032125] h-[1px] mt-5" />
                    <Image src={LEDemoImage} className="mt-6 max-w-[225px] w-full" alt="..." />
                    <div className="rounded-3xl w-auto h-auto py-1 px-5 mt-5 max-w-[122px] bg-[#3ADB90]">
                        <span className="text-white text-xs font-bold cursor-pointer ">WATCH DEMO</span>
                    </div>
                </div>
                <div className='bg-gray-100 w-1/2 justify-end h-auto p-7 gap-x-5'>
                    <div className='color-black font-bold'>FEATURES</div>
                    <div className='ml-2 mt-4'>
                        <div className=" items-center  gap-3 h-auto">
                            <div className='color-black font-medium text-base'>Industrial Connectivity</div>
                            <div className="text-[14px] text-[Inter] font-bold">Connect ANY industrial asset in minutes.</div>
                        </div>
                        <div className=" items-center  gap-3 mt-2 h-auto">
                            <div className='color-black font-medium text-base'>Data Hub</div>
                            <div className="text-[14px] text-[Inter] font-bold">Collect, normalize and contextualize data.</div>
                        </div>
                        <div className=" items-center  gap-3 mt-2 h-auto">
                            <div className='color-black font-medium text-base'>Real-Time Analytics</div>
                            <div className="text-[14px] text-[Inter] font-bold">Get actionable alerts and event triggers.</div>
                        </div>
                        <div className=" items-center  gap-3 mt-2 h-auto">
                            <div className='color-black font-medium text-base'>Application Marketplace</div>
                            <div className="text-[14px] text-[Inter] font-bold">Deploy and list containerized apps in a central location.</div>
                        </div>
                        <div className=" items-center  gap-3 mt-2 h-auto">
                            <div className='color-black font-medium text-base'>Data Integration</div>
                            <div className="text-[14px] text-[Inter] font-bold">Prebuilt for analytics, cloud and enterprise apps.</div>
                        </div>
                        <div className=" items-center  gap-3 mt-2 h-auto">
                            <div className='color-black font-medium text-base'>Data Intelligence + MLOps</div>
                            <div className="text-[14px] text-[Inter] font-bold">Run machine learning apps on your data at the edge.</div>
                        </div>
                    </div>
                    <div className="w-full bg-[#032125] h-[1px] mt-5" />
                    <div className='ml-2 mt-5'>
                        <div className='color-black font-medium text-base'>Solutions</div>
                        <div className="text-[14px] text-[Inter] font-bold">Accelerate Industry 4.0 implementations to get results.</div>
                    </div>
                    <div className='ml-2 mt-5'>
                        <div className='color-black font-medium text-base'>Deployment</div>
                        <div className="text-[14px] text-[Inter] font-bold">On-premise, cloud and hybrid</div>
                    </div>
                </div>
            </div>
        </div>  
    )
}