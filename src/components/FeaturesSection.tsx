
import React from 'react';

const FeatureBox: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
  return (
    <div className="border-box h-full">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Investments",
      items: [
        "Focus on Sonic Chain",
        "Early Stage investing",
        "Creating wealth for our Partners and our Community",
      ]
    },
    {
      title: "Community",
      items: [
        "Greatest Community there is.",
        "10k+ Members and growing",
        "Connected with the biggest names in SONIC",
      ]
    },
    {
      title: "$BOOM Token",
      items: [
        "Investment vehicle of the DAO",
        "Transaction Tax of 5% to fund the treasury",
        "Total Supply of 1,000,000,000 $BOOM",
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="sonic-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureBox 
              key={index} 
              title={feature.title} 
              items={feature.items} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
