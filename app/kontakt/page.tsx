"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout-components/header"
import { Footer } from "@/components/layout-components/footer"
import { ContactSection } from "@/components/sections/contact-section"

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactSection />
      <Footer />
    </>
  )
}
