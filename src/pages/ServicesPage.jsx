import React from "react";
import { useNavigate } from "react-router-dom";
import solarModel from "../assets/savorkarenewable.png";
import blurimg from "../assets/blurserviceimg.png";
import namesimg from "../assets/nameimg.png";
import ContactFormSection from "../components/ContactFormSection";
import service1 from "../assets/serviceimg1.png";
import service2 from "../assets/serviceimg1.png";
import service3 from "../assets/serviceimg1.png";
import service4 from "../assets/serviceimg1.png";
import { AboutHero } from "../pages/AboutPage";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      img: service1,
      title: "On-grid Solar Solutions",
      Subtitle: "Best for Residents",
      desc: `An on-grid solar system, also called a grid-tied system, is connected to the main electricity grid. One major benefit of installing an on-grid rooftop solar system is the government subsidy, which ranges from ₹30,000 to ₹78,000, depending on the system capacity.

It is the most common choice for Indian homes with a reliable electricity supply, as it can efficiently meet household energy needs.

The system includes key components such as solar panels, a solar inverter, mounting structures, a bi-directional meter, and solar accessories like AC/DC cables, combiner boxes, conduit trays, lightning arresters, and MC4 connectors - working together to convert sunlight into usable electricity.

Our Expertise:
• Site survey and feasibility assessment
• Customized solar system design and engineering
• Support with net metering documentation
• Supply of high-efficiency solar modules and inverters
• Rooftop and ground-mounted solar installations
• System testing, commissioning, and grid integration

Savorka boasts an impressive rating of 4.8 from 70+ genuine On-grid customers.

FAQs

Q. Does an on-grid solar system require a battery?
A. No. On-grid solar systems do not require batteries, making them easier to maintain and more affordable compared to off-grid and hybrid systems.

Q. Do solar panels work at night?
A. No. Solar panels generate electricity only when exposed to sunlight. At night, an on-grid system draws electricity from the main grid.

Q. What is the difference between on-grid and hybrid solar systems?
A. An on-grid solar system is connected only to the utility grid, whereas a hybrid solar system is connected to both the grid and battery storage.`,
    },
    {
      id: 2,
      img: service2,
      title: "Off-Grid & Hybrid Solar Solutions",
      Subtitle: "Ideal for Remote Locations",
      desc: `An off-grid solar system, also called a standalone system, generates electricity from sunlight using solar panels. Unlike an on-grid system, it is not connected to the utility grid and instead uses batteries to store energy for use when sunlight is unavailable.

An off-grid solar system is ideal for remote areas without utility grid access or locations that experience frequent power cuts and unreliable electricity supply.

The system consists of solar panels, mounting structures, batteries, a solar charge controller, a solar inverter, and essential solar accessories, all working together to convert and store energy from sunlight.

What is covered?
• Evaluation of power load and energy needs
• Design of off-grid and hybrid solar solutions
• Selection and integration of suitable battery banks
• Setup and configuration of hybrid inverters
• Complete system installation and commissioning
• Testing and optimization for efficient performance

At Savorka Solar, we create smart and scalable energy systems that deliver the right balance of performance, storage, and cost efficiency for your power requirements.

FAQs

Q. Is there a subsidy for off-grid solar systems?
A. No. Under the PM Surya Ghar Muft Bijli Yojana, the Indian government currently provides subsidies only for on-grid rooftop solar systems, not for off-grid systems.

Q. How many batteries are required for an off-grid solar system?
A. The number of batteries depends on the system size and energy requirements. An approximate estimate is:
• 3 kW system: 8–9 batteries of 100 AH capacity
• 5 kW system: 10–11 batteries of 500 AH capacity`,
    },
    {
      id: 3,
      img: service3,
      title: "Solar Operation & Maintenance (O&M)",
      Subtitle: "Ensuring Peak System Performance",
      desc: `Savorka Solar provides reliable Operation & Maintenance (O&M) services to ensure solar power plants deliver consistent performance and maximum efficiency. Our proactive approach helps reduce downtime, detect issues early, and maintain optimal energy output throughout the system's lifecycle.

We support both rooftop and large-scale solar installations with regular inspections, preventive care, and prompt corrective services to keep your solar system running smoothly.

What is covered?
• Regular solar panel cleaning and system inspections
• Evaluation of electrical components and inverter performance
• Continuous monitoring of system output with detailed reporting
• Early detection of system faults and irregularities
• Prompt troubleshooting and corrective maintenance
• Spare parts management and warranty coordination for optimal performance`,
    },
    {
      id: 4,
      img: service4,
      title: "Solar Structure Manufacturing",
      Subtitle: "Strong Foundations for Solar Installations",
      desc: `Savorka Solar builds strong and reliable solar mounting structures that are made to perform well in different weather conditions. Designed for stability, safety, and long-term use, our structures keep solar panels properly aligned for better energy generation.

We provide customized mounting solutions for RCC rooftops, tin sheds, and ground-mounted solar systems, ensuring the structures meet all required strength and load standards.

What is covered?
• Designing and engineering robust solar mounting structures tailored for different installations
• Providing specialized mounting solutions for both tin shed and RCC rooftop systems
• Developing durable ground-mounted structures for large-scale solar installations
• Creating structure designs based on wind load factors and specific site conditions
• Fabricating and galvanizing structures to ensure durability and corrosion resistance
• Offering complete support for the supply and installation of mounting structures`,
    },
  ];

  return (
    <>
      <AboutHero />

      <section className="bg-[#f4f6f0] px-5 sm:px-10 py-10">

        {/* Top section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex-1 max-w-xl">
            <h2 className="text-[#1a7a3c] font-semibold text-3xl sm:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              We're among the largest EPC contractor in the country that delivers high-performance On-Grid, Off-Grid, and Hybrid solar systems. With 150+ MWp installed capacity and 70+ satisfied clients, we don't just install solar - we power long-term, sustainable energy solutions.
              <ul className="list-disc pl-6">
                <li className="mt-2">On-Grid Solar Power Solutions</li>
                <li className="mt-2">Off-Grid & Hybrid Solar Solutions</li>
                <li className="mt-2">Solar Operation & Maintenance (O&M)</li>
                <li className="mt-2">Solar Structure Manufacturing</li>
              </ul>
              We partner closely with our customers to build long-lasting relationships and energy solutions designed to perform for 25 years and beyond.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={solarModel}
              alt="solar model"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          {services.map((svc) => {
            const isLong = svc.desc.length > 90;

            return (
              <div
                key={svc.id}
                className="bg-white rounded-[20px] p-[3px] shadow-md flex items-center justify-center"
              >
                <div
                  className="bg-white rounded-[20px] overflow-hidden flex flex-col w-full shadow-sm"
                  style={{ minHeight: "346px" }}
                >
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full object-cover rounded-t-[20px]"
                    style={{ height: "210px" }}
                  />

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-gray-900 font-bold text-base mb-2">
                      {svc.title}
                    </h3>
                    <h4 className="text-gray-900 Manropetext-base mb-2">
                      {svc.Subtitle}
                    </h4>

                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {svc.desc}
                    </p>

                    {isLong && (
                      <button
                        onClick={() => navigate(`/service/${svc.id}`, { state: svc })}
                        className="text-green-600 text-sm font-semibold mt-2 hover:underline self-start"
                      >
                        More →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <NameImage />
          <ContactFormSection />
        </div>
      </section>
    </>
  );
};

export function BlurImage() {
  return (
    <div>
      <img src={blurimg} alt="Blur" className="w-full h-auto opacity-100" />
    </div>
  );
}

export function NameImage() {
  return (
    <div className="flex justify-center">
      <img src={namesimg} alt="Names" className="w-4/5 sm:w-3/5 h-auto" />
    </div>
  );
}

export default ServicesSection;