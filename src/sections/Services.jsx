import React from "react";
import { services } from "../constants";
import OurService from "../components/OurService";

const Services = () => {
  return (
    <section className="flex flex-wrap justify-center gap-4">
      {/* mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-4 */}
      {services.map((service) => (
        <OurService key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
