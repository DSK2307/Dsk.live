"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, Mail, MapPin, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import CalEmbed from "@calcom/embed-react";
import emailjs from '@emailjs/browser'

// replace these with your actual EmailJS credentials
const SERVICE_ID: any = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID: any = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY: any = process.env.NEXT_PUBLIC_PUBLIC_KEY



export function ContactSection() {


  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    } else {
      console.warn('EmailJS public key is missing. The contact form will not work until you add it to your .env file.');
    }
  }, []);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataWithTime = {
      ...formState,
      time: new Date().toLocaleString(), // add time field
    }
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formDataWithTime, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        // Reset success message
        setTimeout(() => setIsSubmitted(false), 5000)
      })
      .catch((error: any) => {
        setIsSubmitting(false)
        console.error("EmailJS error:", error)
        alert("Failed to send email. Please try again.")
      })
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Send className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
              <p className="text-zinc-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300">
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-zinc-300">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] bg-black/60 border-white/10 text-white focus:border-blue-500/50 focus:ring-blue-500/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-white text-black hover:bg-zinc-200">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </div>
      </div>

      <div>
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full">
          <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Email</h4>
                <p className="text-zinc-400">deosagar150@gmail.com</p>
                <a
                  href="mailto:deosagar150@gmail.com"
                  className="text-blue-400 hover:text-blue-300 text-sm mt-1 inline-block"
                >
                  Send an email
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Phone</h4>
                <p className="text-zinc-400">+91 8789425130</p>
                <a href="tel:+918789425130" className="text-blue-400 hover:text-blue-300 text-sm mt-1 inline-block">
                  Give me a call
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Location</h4>
                <p className="text-zinc-400">India</p>
                <p className="text-zinc-400 text-sm mt-1">Available for remote work worldwide</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Availability</h4>
                <p className="text-zinc-400">Anytime</p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=deosagar150@gmail.com&su=Meeting%20Request%20with%20Deo%20Sagar&body=Hi%20Deo,%0A%0AI%20would%20like%20to%20schedule%20a%20meeting%20with%20you%20to%20discuss...%0A%0AHere%20are%20a%20few%20times%20I'm%20available:%0A-%20[Option%201]%0A-%20[Option%202]%0A%0ALooking%20forward%20to%20speaking%20with%20you!%0A%0ABest,%0A[Your%20Name]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm mt-1 inline-block"
                >
                  Schedule via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
