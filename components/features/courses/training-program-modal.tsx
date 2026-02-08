'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText } from 'lucide-react'

interface TrainingProgramModalProps {
  title: string
  program: string[]
  children: React.ReactNode
}

export function TrainingProgramModal({ title, program, children }: TrainingProgramModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Program szkolenia: {title}
          </DialogTitle>
          <DialogDescription>
            Szczegółowy program szkolenia/kursu
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4">
            {program.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
