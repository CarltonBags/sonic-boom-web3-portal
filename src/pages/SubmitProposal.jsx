
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import SonicButton from '@/components/SonicButton';

const SubmitProposal = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectInfo: '',
    projectContact: '',
    investmentSize: '',
    proposerName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Proposal submitted:', formData);
    
    toast({
      title: "Proposal Submitted",
      description: "Your investment proposal has been sent for review.",
    });
    
    // Reset form after submission
    setFormData({
      projectName: '',
      projectInfo: '',
      projectContact: '',
      investmentSize: '',
      proposerName: ''
    });
  };

  return (
    <div className="min-h-screen bg-sonic-primary pt-20">
      <Navbar />
      <main className="sonic-container py-16">
        <h1 className="text-4xl font-bold mb-8">Submit a Proposal</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
          <div className="space-y-4">
            <label className="block">
              <span className="text-lg font-medium">Project Name</span>
              <Input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="mt-1 block w-full border-sonic-secondary bg-transparent"
                required
              />
            </label>
            
            <label className="block">
              <span className="text-lg font-medium">Project Information</span>
              <Textarea
                name="projectInfo"
                value={formData.projectInfo}
                onChange={handleChange}
                className="mt-1 block w-full border-sonic-secondary bg-transparent"
                rows={5}
                required
              />
            </label>
            
            <label className="block">
              <span className="text-lg font-medium">Project Website/Twitter</span>
              <Input
                type="text"
                name="projectContact"
                value={formData.projectContact}
                onChange={handleChange}
                className="mt-1 block w-full border-sonic-secondary bg-transparent"
                required
              />
            </label>
            
            <label className="block">
              <span className="text-lg font-medium">Proposed Investment Size</span>
              <Input
                type="text"
                name="investmentSize"
                value={formData.investmentSize}
                onChange={handleChange}
                className="mt-1 block w-full border-sonic-secondary bg-transparent"
                placeholder="e.g., 100,000 $BOOM"
                required
              />
            </label>
            
            <label className="block">
              <span className="text-lg font-medium">Name of Proposer</span>
              <Input
                type="text"
                name="proposerName"
                value={formData.proposerName}
                onChange={handleChange}
                className="mt-1 block w-full border-sonic-secondary bg-transparent"
                required
              />
            </label>
          </div>
          
          <div className="pt-4">
            <SonicButton type="submit" className="w-full md:w-auto">
              Submit Proposal
            </SonicButton>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default SubmitProposal;
