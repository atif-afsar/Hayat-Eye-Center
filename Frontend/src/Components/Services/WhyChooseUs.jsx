import FeatureItem from "./FeatureItem";
import { Cpu, Stethoscope, Handshake } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">

          <FeatureItem
            icon={<Cpu size={18} />}
            title="Robotic Precision"
            description="Our operation theaters are equipped with advanced robotic and laser-assisted technologies for unmatched surgical accuracy."
          />

          <FeatureItem
            icon={<Stethoscope size={18} />}
            title="Expert Surgeons"
            description="Led by highly experienced ophthalmologists with decades of combined clinical and surgical expertise."
          />

          <FeatureItem
            icon={<Handshake size={18} />}
            title="Patient-Centric Care"
            description="We prioritize your comfort and safety with transparent counseling, ethical practices, and personalized treatment plans."
          />

        </div>
      </div>
    </section>
  );
}
