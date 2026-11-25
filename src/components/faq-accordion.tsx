"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "Is it really free?",
    answer:
      "Yes. Attendance at the WealthBuilders Conference is completely free: no ticket, no registration fee and no hidden charges. You only need to register to secure your seat.",
  },
 
  {
    question: "Do I need investment experience?",
    answer:
      "Not at all. The conference is crafted for everyone—from complete beginners who want to build a savings habit to experienced earners looking to diversify and protect their income.",
  },
  {
    question: "What should I expect?",
    answer:
      "Expect practical, honest money conversations from founders and practitioners who are building real wealth in Akure. Actionable insights on saving, investing, and growing your income.",
  },
  {
    question: "Will there be investment opportunities?",
    answer:
      "The primary focus is education and practical guidance. You will learn how to evaluate opportunities safely and understand legitimate investment principles before committing your money.",
  },
  {
    question: "Can I bring a friend?",
    answer:
      "Yes, absolutely! Make sure each person registers individually so we can reserve their seat.",
  },
];

export function FaqAccordion({ items = defaultFaqs }: { items?: FaqItem[] }) {
  // First item open by default as in design
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full space-y-3 sm:space-y-3.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-[#0E4547]/15 bg-white transition-colors duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-6 py-4.5 sm:px-7 sm:py-5 text-left cursor-pointer select-none"
              aria-expanded={isOpen}
            >
              <span className="text-[15.5px] sm:text-[17px] font-bold text-[#112324] pr-4">
                {item.question}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center text-[22px] font-semibold transition-colors duration-200 ${
                  isOpen ? "text-[#0E4547]" : "text-[#d49b28]"
                }`}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 pt-0 sm:px-7 sm:pb-6 text-[14px] sm:text-[15px] font-normal leading-[1.6] text-[#506364]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
