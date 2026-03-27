import React from 'react';
import { cn } from '@/lib/utils';
import { Plus, Mail, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

function ContactInfo({ icon: Icon, label, value, className, ...props }) {
  return (
    <div className={cn('flex items-center gap-3 py-3', className)} {...props}>
      <div className="bg-purple-500/10 rounded-lg p-3">
        <Icon className="h-5 w-5 text-purple-400" />
      </div>
      <div>
        <p className="font-medium text-white">{label}</p>
        <p className="text-gray-400 text-xs">{value}</p>
      </div>
    </div>
  );
}

function ContactCard({ title, description, contactInfo, className, formSectionClassName, children, ...props }) {
  return (
    <div className={cn('bg-[#0a0a0a] border border-gray-800 relative grid h-full w-full shadow-2xl md:grid-cols-2 lg:grid-cols-3', className)} {...props}>
      <Plus className="absolute -top-3 -left-3 h-6 w-6 text-gray-600" />
      <Plus className="absolute -top-3 -right-3 h-6 w-6 text-gray-600" />
      <Plus className="absolute -bottom-3 -left-3 h-6 w-6 text-gray-600" />
      <Plus className="absolute -right-3 -bottom-3 h-6 w-6 text-gray-600" />
      
      <div className="flex flex-col justify-between lg:col-span-2">
        <div className="relative h-full space-y-6 px-6 py-12 md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">
            {title}
          </h2>
          <p className="text-gray-400 max-w-xl text-sm md:text-base lg:text-lg">
            {description}
          </p>
          <div className="grid gap-6 md:grid md:grid-cols-2 pt-6">
            {contactInfo?.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
      
      <div className={cn('bg-[#111] flex h-full w-full items-center border-t border-gray-800 p-8 md:col-span-1 md:border-t-0 md:border-l', formSectionClassName)}>
        {children}
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative flex w-full items-center justify-center p-4 py-24 bg-black">
      <div className="mx-auto max-w-6xl w-full">
        <ContactCard
          title="Let's build something."
          description="Open to frontend development internships, collaborative projects, and freelance opportunities. Drop a message and I'll get back to you."
          contactInfo={[
            { icon: Mail, label: 'Email', value: 'satyamkrjha5011@gmail.com' },
            { icon: MapPin, label: 'Location', value: 'Muzaffarpur, Bihar, India' }
          ]}
        >
          <form className="w-full space-y-6">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input type="text" placeholder="Your Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" placeholder="you@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Message</Label>
              <Textarea placeholder="How can I help you?" />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0" type="button">
              Send Message
            </Button>
          </form>
        </ContactCard>
      </div>
    </section>
  );
}