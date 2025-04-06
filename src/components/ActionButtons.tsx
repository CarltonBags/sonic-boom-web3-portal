
import React from 'react';
import SonicButton from './SonicButton';

const ActionButtons: React.FC = () => {
  const actions = [
    {
      title: "Propose an Investment",
      onClick: () => console.log("Propose investment clicked")
    },
    {
      title: "View Past Proposals",
      onClick: () => console.log("View proposals clicked")
    },
    {
      title: "Get $BOOM Token",
      onClick: () => console.log("Get token clicked")
    }
  ];

  return (
    <section className="py-16">
      <div className="sonic-container">
        <div className="space-y-4">
          {actions.map((action, index) => (
            <SonicButton 
              key={index}
              onClick={action.onClick}
              className="w-full"
            >
              {action.title}
            </SonicButton>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionButtons;
