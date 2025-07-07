'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import {
  Mail,
  MapPin,
  Linkedin,
  Github,
} from 'lucide-react'
import { Toaster } from '../ui/sonner'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is too short' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message is too short' }),
})

type ContactFormValues = z.infer<typeof formSchema>

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

   const [copied, setCopied] = useState(false)

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      if (result.success) {
        toast.success('Thanks for dropping a message, I will get back to you soon !')
        form.reset()
      } else {
        toast.error('There was an error sending the message. Please use other methods.')
      }
    } catch (err) {
      toast.error('There was an error sending the message. Please use other methods.')
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('developwithbhagirathsinh@gmail.com')
      setCopied(true)
      toast.success("Email Copied !!")
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('Failed to copy email.')
    }
  }

  return (
    <motion.section
      id="contact"
      className="my-10 w-full scroll-mt-28 px-4 sm:px-6 md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl font-semibold">Get in Touch</h2>
        <p className="text-muted-foreground mt-3 text-sm">Let’s Build Something Together — I’m Just a Message Away</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto flex flex-col md:flex-row gap-8"
      >
        {/* Left - Contact Form */}
        <div className="md:w-2/3">
          <Card className='bg-background'>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input className='!bg-background' placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" className='!bg-background' placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea rows={5} className='!bg-background' placeholder="Write your message..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Right - Contact Info */}
        {/* <div className="md:w-1/3 space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="text-muted-foreground mt-1" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground text-sm">Vadodara, Gujarat</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-muted-foreground mt-1" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground text-sm">yourname@example.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Linkedin className="text-muted-foreground mt-1" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                linkedin.com/in/yourprofile
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Github className="text-muted-foreground mt-1" />
            <div>
              <p className="font-medium">GitHub</p>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                github.com/yourusername
              </a>
            </div>
          </div>
        </div> */}
        {/* Location + Icons */}
        <div
          className="md:w-1/3 space-y-6"
        >
          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin className="text-muted-foreground" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground text-sm">Vadodara, Gujarat, India</p>
            </div>
          </div>

          {/* Icons Row */}
          <div className="flex justify-center items-center gap-6 mt-2 mx-auto">
            {/* <a
              href="mailto:developwithbhagirathsinh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a> */}
            <button
              onClick={handleCopy}
              className="hover:text-primary transition-colors relative"
              title={copied ? 'Copied!' : 'Copy email to clipboard'}
            >
              <Mail className="h-5 w-5" />
              {/* {copied && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-black text-white px-2 py-0.5 rounded">
                  Copied!
                </span>
              )} */}
            </button>
            <a
              href="https://www.linkedin.com/in/bhagirathsinh-rathod-646810203/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/t3chwiz4rd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Contact
