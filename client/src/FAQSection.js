import { useState, useEffect } from "react";

const FAQs = [
    {
      question: "What is AI Health Clinic?",
      answer: "It's a service using AI to assist doctors in delivering personalized medical consultations."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book directly through our website by clicking the \"Book a Consultation\" button."
    },
    {
      question: "Are the doctors certified?",
      answer: "Yes, all doctors collaborating with AI Health Clinic are licensed and highly experienced in their fields."
    }
  ];

  export default function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState(null);
    const [typedText, setTypedText] = useState("");
    const [typedIndex, setTypedIndex] = useState(0);
    const ToggleFAQ = (index) => {
        if(openFAQ === index) {
          setOpenFAQ(null);
          setTypedIndex(0);
          setTypedText("");
        }
        else {
          setOpenFAQ(index);
          setTypedIndex(0);
          setTypedText("");
        }
    }; 
    useEffect(() => {
        if(openFAQ !== null && typedIndex < FAQs[openFAQ].answer.length) {
          const interval = setInterval(() => {
            setTypedText(prevText => {
              return prevText + FAQs[openFAQ].answer[typedIndex];
            });
            setTypedIndex(typedIndex + 1);
            }, 20);
            return () => clearInterval(interval);
        }
      }, [openFAQ, typedIndex]);
  

  return (
    <section className="faq-section mt-16 max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-700 mb-6">Frequently Asked Questions</h3>
        <div>
            {FAQs.map((faq, index) => (
                <div key={index} className="mb-4 border-b border-gray-300 pb-4">
                    <button className="w-full text-left text-lg font-semibold text-gray-700 hover:text-lightSky transition-colors duration-300 flex justify-between items-center" onClick={() => ToggleFAQ(index)}>
                        <span>{faq.question}</span>
                        <span>{openFAQ === index ? '-' : '+'}</span>
                    </button>
                    {openFAQ === index && <p className="mt-2">{typedText}</p>}
                </div>
            ))}
        </div>
    </section>
  ) 
}