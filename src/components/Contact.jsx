import React, { useRef, useState } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import emailjs from '@emailjs/browser'

export function ContactSection() {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // REPLACE THESE WITH YOUR ACTUAL IDS FROM EMAILJS
    emailjs.sendForm(
      'service_dkjtpaf', 
      'template_x8xbxwq', 
      form.current, 
      'LbR8q-iqH8hGty18c'
    )
      .then((result) => {
          console.log(result.text)
          setIsSubmitting(false)
          setSubmitStatus('success')
          e.target.reset() 
          
          setTimeout(() => setSubmitStatus(null), 5000)
      }, (error) => {
          console.log(error.text)
          setIsSubmitting(false)
          setSubmitStatus('error')
      })
  }

  return (
    <section id="contact" className="w-full py-24 px-4 bg-[#050505] border-t border-gray-900 text-white relative">
      <div className="container mx-auto max-w-5xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Side: Professional Text */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Let's build something.</h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Open to full-time software engineering roles, collaborative projects, and freelance client work. Drop a message and I'll get back to you.
            </p>
            
            <div className="space-y-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <span className="text-purple-400 text-xl">✉</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-400 text-sm">satyamkrjha5011@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                  <span className="text-purple-400 text-xl">📍</span>
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-400 text-sm">Muzaffarpur, Bihar, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: EmailJS Form */}
          <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl shadow-2xl relative">
            {/* Corner Crosshairs (matching your design) */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-gray-700">+</div>
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-gray-700">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gray-700">+</div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-gray-700">+</div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
              <div className="flex flex-col gap-2">
                <Label htmlFor="from_name" className="text-gray-300">Name</Label>
                {/* Changed name attribute to match {{from_name}} */}
                <Input type="text" id="from_name" name="from_name" placeholder="John Doe" className="bg-black border-gray-800 focus-visible:ring-purple-500" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <Label htmlFor="from_email" className="text-gray-300">Email</Label>
                {/* Changed name attribute to match {{from_email}} */}
                <Input type="email" id="from_email" name="from_email" placeholder="john@example.com" className="bg-black border-gray-800 focus-visible:ring-purple-500" required />
              </div>
              
              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                {/* Name attribute matches {{message}} */}
                <Textarea id="message" name="message" placeholder="How can I help you?" rows={5} className="bg-black border-gray-800 focus-visible:ring-purple-500 resize-none" required />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-6 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm text-center mt-4 font-medium">Message sent successfully! I'll be in touch soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center mt-4 font-medium">Oops! Something went wrong. Please check your console.</p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}