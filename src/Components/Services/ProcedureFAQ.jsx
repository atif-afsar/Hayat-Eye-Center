import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Is cataract surgery safe?",
    answer:
      "Yes. Cataract surgery is one of the safest and most commonly performed procedures worldwide, especially when done with modern phacoemulsification technology."
  },
  {
    question: "How long does LASIK recovery take?",
    answer:
      "Most patients notice improved vision within 24 hours, with complete stabilization over a few weeks depending on the procedure."
  },
  {
    question: "Do you treat children’s eye problems?",
    answer:
      "Yes, our pediatric ophthalmology department specializes in squint, lazy eye, refractive errors, and other childhood eye conditions."
  },
  {
    question: "Is treatment painful?",
    answer:
      "Most procedures are minimally invasive and performed under local or topical anesthesia, ensuring maximum comfort."
  },
];

export default function ProcedureFAQ() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600">
            Clear answers to common concerns about eye treatments and procedures.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
