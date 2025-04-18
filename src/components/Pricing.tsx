
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₦200,000 /mo",
    description: "Perfect for small businesses just getting started with email marketing.",
    features: [
      "Unlimited emails/month",
      "1,500 subscriber limit",
      "Basic templates",
      "Email support",
      "Basic analytics",
    ],
    isPopular: false,
    ctaText: "Start Free Trial",
    ctaLink: "https://hub.mail-blast.com/login"
  },
  {
    name: "Professional",
    price: "₦500,000 /mo",
    description: "Ideal for growing businesses that need more advanced features.",
    features: [
      "Unlimited emails/month",
      "20,000 subscriber limit",
      "Premium templates",
      "Priority email support",
      "Advanced analytics",
      "A/B testing",
      "Automation workflows",
    ],
    isPopular: true,
    ctaText: "Start Free Trial",
    ctaLink: "https://hub.mail-blast.com/login"
  },
  {
    name: "Software For Business",
    price: "₦3,500,000",
    description: "For established businesses with large subscriber bases and need an in-house email marketing software.",
    features: [
      "Unlimited emails/month",
      "Unlimited subscribers",
      "Custom templates",
      "Dedicated account rep",
      "Advanced analytics & reporting",
      "Advanced automation",
      "API access",
      "White-labeling options",
    ],
    isPopular: false,
    ctaText: "Contact Sales",
    ctaLink: "tel:+2348165907113"
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`border ${plan.isPopular ? 'border-mailblast-primary shadow-lg' : 'border-gray-100 shadow-sm'} relative`}>
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-mailblast-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className={`${plan.isPopular ? 'bg-blue-50' : ''} pb-8`}>
                <div className="text-sm uppercase font-bold text-gray-500 mb-2">{plan.name}</div>
                <CardTitle className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1"></span>
                </CardTitle>
                <p className="text-gray-600 mt-4">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={plan.ctaLink}>
                <Button 
                  className={`w-full ${plan.isPopular ? 'bg-mailblast-primary hover:bg-mailblast-secondary' : ''}`} 
                  variant={plan.isPopular ? 'default' : 'outline'}
                >
                  {plan.ctaText}
                </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8 text-gray-500 text-sm">
          All plans include a 7-day free trial. No credit card required.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
