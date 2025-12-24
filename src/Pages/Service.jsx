import React, { useState } from "react";

import ServicesHero from "../Components/Services/ServicesHero";
import ServiceCategoryTabs from "../Components/Services/ServiceCategoryTabs";
import ServicesGrid from "../Components/Services/ServicesGrid";
import WhyChooseUs from "../Components/Services/WhyChooseUs";
import ProcedureFAQ from "../Components/Services/ProcedureFAQ";
import CTASection from "../Components/Services/CTASection";

const Service = () => {
 
  const [category, setCategory] = useState("All Services");

  return (
    <div>
      <ServicesHero />

      <ServiceCategoryTabs onChange={setCategory} />

      <ServicesGrid activeCategory={category} />

      <WhyChooseUs />

      <ProcedureFAQ />

      <CTASection />
    </div>
  );
};

export default Service;
