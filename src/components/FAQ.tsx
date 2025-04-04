
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I get started with MailBlast?",
    answer: "Getting started is easy! Just sign up for a free 14-day trial—no credit card required. You can import your contacts, choose a template, and send your first campaign in minutes."
  },
  {
    question: "Can I import my existing email list?",
    answer: "Yes, you can import contacts from CSV files, Excel, or directly from other platforms like Mailchimp, Constant Contact, and more. Our system will help you clean and validate your list during import."
  },
  {
    question: "How many emails can I send per month?",
    answer: "The number of emails depends on your plan. Our Starter plan includes 5,000 emails/month, Professional includes 25,000 emails/month, and Enterprise offers unlimited emails. You can always upgrade as your needs grow."
  },
  {
    question: "What's your email deliverability rate?",
    answer: "We maintain industry-leading deliverability rates of 99%+. Our infrastructure is optimized to ensure your emails land in the inbox, not the spam folder."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a 14-day free trial on all plans with no credit card required. You'll have full access to all features of your chosen plan during the trial period."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. You can cancel your subscription at any time with no penalties. If you cancel, you'll still have access to your account until the end of your billing cycle."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our service.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">Still have questions?</p>
          <div className="inline-block rounded-full bg-blue-50 px-6 py-3 text-mailblast-primary font-medium">
            Contact our support team at support@mailblast.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
