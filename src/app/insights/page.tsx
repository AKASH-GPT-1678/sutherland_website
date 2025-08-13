"use client";
import React from 'react'
import HomeDisplay from '../components/homedisplay';
import BottomFooter from '../components/bottonFooter';

// const industries = [
//     "Banking and Financial Services",
//     "Communications, Media & Entertainment",
//     "Energy and Utilities",
//     "Healthcare",
//     "Insurance",
//     "Manufacturing",
//     "Mortgage Services",
//     "Retail and Consumer Packaged Goods",
//     "Technology",
//     "Travel, Transportation, Hospitality & Logistics"
// ];
// const services = [
//     "Application Services",
//     "Artificial Intelligence",
//     "Automation",
//     "Business Process as a Service",
//     "Cloud",
//     "Content Services",
//     "Data & Analytics",
//     "Digital Consulting",
//     "Digital CX",
//     "Digital Engineering Services",
//     "Digital Operations",
//     "Enterprise Packaged Applications",
//     "Insight & Design Labs",
//     "IoT+ as a Service",
//     "Products x Platforms"
// ];

// const types = [
//     "Advisory",
//     "Implementation",
//     "Managed Services",
//     "Product Engineering",
//     "Research & Innovation",
//     "Support & Maintenance",
//     "System Integration",
//     "Testing & QA"
// ];
// const insightsData = [
//     {
//         typeAndDate: "Blog · July 14, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Agentic AI in Customer Experience: Benefits, Use Cases, and What’s Next"
//     },
//     {
//         typeAndDate: "Video · July 10, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "How Automation is Transforming Enterprise Operations"
//     },
//     {
//         typeAndDate: "Blog · July 5, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Cloud Modernization: The Road to Resilience"
//     },
//     {
//         typeAndDate: "Video · June 30, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Exploring Generative AI in Retail: Opportunities & Challenges"
//     },
//     {
//         typeAndDate: "Blog · June 24, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Next-Gen Digital CX: Personalization at Scale"
//     },
//     {
//         typeAndDate: "Video · June 20, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "AI-Powered Insurance: Real World Innovations"
//     },
//     {
//         typeAndDate: "Blog · June 15, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Data & Analytics in Manufacturing: Unlocking Hidden Potential"
//     },
//     {
//         typeAndDate: "Video · June 10, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "What’s Driving AI Adoption in BFSI Sector?"
//     },
//     {
//         typeAndDate: "Blog · June 5, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Building Scalable IoT+ Solutions for the Future"
//     },
//     {
//         typeAndDate: "Video · June 1, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Product Engineering & Innovation: A CTO’s Perspective"
//     },
//     {
//         typeAndDate: "Blog · May 28, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Digital Engineering Trends: 2025 and Beyond"
//     },
//     {
//         typeAndDate: "Video · May 24, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Understanding Enterprise Cloud Migration"
//     },
//     {
//         typeAndDate: "Blog · May 20, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Automation in Logistics: Delivering Smart at Scale"
//     },
//     {
//         typeAndDate: "Video · May 15, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Future of Content Services: Insights from Industry Experts"
//     },
//     {
//         typeAndDate: "Blog · May 10, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "From Data to Value: A Digital Consulting Perspective"
//     },
//     {
//         typeAndDate: "Video · May 6, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Personalized Healthcare Through AI: A New Era"
//     },
//     {
//         typeAndDate: "Blog · May 1, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Enterprise Apps: Are You Ready for the Next Leap?"
//     },
//     {
//         typeAndDate: "Video · April 27, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Designing for Digital: UX Labs in Action"
//     },
//     {
//         typeAndDate: "Blog · April 22, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Managed Services: Boosting Performance & Reducing Cost"
//     },
//     {
//         typeAndDate: "Video · April 18, 2025",
//         image: "https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png",
//         description: "Testing & QA Automation: Real Results from Real Clients"
//     }
// ];

const page = () => {

 
    // const handleSelectAll = () => {
    //     document.querySelectorAll("input").forEach((input) => {
    //         input.checked = true;
    //     })
    // }
    return (

        <div>
            <div
                style={{ backgroundImage: 'url("https://res.cloudinary.com/dffepahvl/image/upload/v1753357496/u51jdxahi2dbgbdgr56a.png")' }}
                className="w-full h-[300px]"
            >

                <HomeDisplay />
                <h1 className='text-4xl font-bold text-white px-12 pt-12'>Explore Our Insights</h1>
                <p className=' text-white px-12 mt-4 text-sm max-w-[600px]'>Discover thought leadership, emerging trends, actionable insights and real-world success stories.</p>



            </div>



            <div>

                <BottomFooter />
            </div>


        </div>
    )
}

export default page
