import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Is cataract surgery safe?",
    answer:
      "Yes. Cataract surgery is one of the safest and most commonly performed eye procedures worldwide. With advanced phacoemulsification technology and experienced surgeons, the success rate is very high."
  },
  {
    question: "How long does cataract surgery take?",
    answer:
      "The actual cataract surgery usually takes around 15–20 minutes per eye. Patients can go home the same day after a short observation period."
  },
  {
    question: "When can I resume normal activities after cataract surgery?",
    answer:
      "Most patients can return to normal daily activities within 1–2 days. However, strenuous activities should be avoided for a short period as advised by the doctor."
  },
  {
    question: "How long does LASIK recovery take?",
    answer:
      "Most patients experience clearer vision within 24 hours after LASIK. Vision continues to stabilize over the next few weeks, depending on individual healing."
  },
  {
    question: "Am I eligible for LASIK surgery?",
    answer:
      "Eligibility for LASIK depends on factors such as age, corneal thickness, stable eye power, and overall eye health. A detailed eye evaluation is required to determine suitability."
  },
  {
    question: "Is LASIK surgery painful?",
    answer:
      "No. LASIK is a painless procedure performed using numbing eye drops. Patients may feel mild pressure during the procedure but no significant pain."
  },
  {
    question: "Do you treat children’s eye problems?",
    answer:
      "Yes, we offer specialized pediatric eye care for conditions such as squint, lazy eye (amblyopia), refractive errors, and other childhood eye disorders."
  },
  {
    question: "Do you provide eye check-ups for diabetes and blood pressure patients?",
    answer:
      "Yes. We provide comprehensive eye examinations for diabetic and hypertensive patients to detect and manage conditions like diabetic retinopathy at an early stage."
  },
  {
    question: "What eye problems require immediate consultation?",
    answer:
      "Sudden vision loss, eye injury, severe eye pain, flashes of light, redness with pain, or sudden increase in floaters require immediate medical attention."
  },
  {
    question: "Is treatment painful?",
    answer:
      "Most eye treatments are minimally invasive and performed under local or topical anesthesia, ensuring maximum patient comfort."
  },
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment in advance to reduce waiting time and ensure timely consultation."
  },
  {
    question: "Where is your eye hospital located?",
    answer:
      "Our eye hospital is conveniently located in Aligarh and is easily accessible. Please visit our Contact page for directions and location details."
  }
];



export default function ProcedureFAQ() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
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
