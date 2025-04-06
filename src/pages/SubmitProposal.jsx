
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send } from "lucide-react";

const SubmitProposal = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      projectName: "",
      projectInfo: "",
      projectSocial: "",
      investmentSize: "",
      proposerName: "",
    },
  });

  const onSubmit = (data) => {
    // This would typically connect to a backend to store the proposal
    console.log("Proposal submitted:", data);
    toast.success("Proposal submitted successfully!");
    setTimeout(() => navigate('/proposals'), 1500);
  };

  return (
    <div className="min-h-screen bg-sonic-primary pt-20">
      <Navbar />
      <main className="sonic-container py-16">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/proposals')}
            className="text-sonic-secondary hover:text-opacity-80 mr-4"
          >
            <ArrowLeft size={18} className="mr-1" />
            Back
          </Button>
          <h1 className="text-4xl font-bold">Submit Proposal</h1>
        </div>

        <div className="max-w-2xl mx-auto bg-black/20 p-6 rounded-lg border border-sonic-secondary mt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sonic-secondary">Project Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter project name" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sonic-secondary">Project Information</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your project, its goals, and why it should be funded" 
                        className="min-h-[150px]"
                        {...field} 
                        required 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectSocial"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sonic-secondary">Project Website/Twitter</FormLabel>
                    <FormControl>
                      <Input placeholder="https://your-project.com or @TwitterHandle" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="investmentSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sonic-secondary">Proposed Investment Size</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter amount in USD" type="number" min="0" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="proposerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sonic-secondary">Proposer Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full border border-sonic-secondary bg-sonic-primary hover:bg-sonic-secondary hover:text-sonic-primary transition-all"
              >
                <Send size={18} className="mr-2" />
                Submit Proposal
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubmitProposal;
