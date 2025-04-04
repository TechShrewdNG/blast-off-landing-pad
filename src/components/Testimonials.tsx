
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "MailBlast transformed our email marketing strategy. We've seen a 35% increase in open rates and 20% more conversions since switching.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "GrowthTech"
  },
  {
    quote: "The ease of use combined with powerful analytics gives us everything we need. The automation features save us countless hours every week.",
    author: "Michael Chen",
    role: "E-commerce Manager",
    company: "Urban Outfitters"
  },
  {
    quote: "We tried several email platforms before finding MailBlast. The deliverability rates are outstanding, and our engagement has never been higher.",
    author: "Jessica Williams",
    role: "Digital Strategist",
    company: "Creative Solutions"
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Leading Brands</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers say about their experience with MailBlast.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm">
              <CardContent className="pt-8">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 flex-1">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {[1, 2, 3, 4, 5, 6].map((logo) => (
              <div key={logo} className="h-12 w-36 bg-gray-200 rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
