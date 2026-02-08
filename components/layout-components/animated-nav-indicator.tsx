'use client'

import { useEffect, useState } from 'react'

interface AnimatedNavIndicatorProps {
  activeSection: string
  sections: string[]
}

export function AnimatedNavIndicator({ activeSection, sections }: AnimatedNavIndicatorProps) {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const activeIndex = sections.indexOf(activeSection)
    if (activeIndex !== -1) {
      const sectionWidth = 100 / sections.length
      setIndicatorStyle({
        left: activeIndex * sectionWidth,
        width: sectionWidth
      })
    }
  }, [activeSection, sections])

  return (
    <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-navy-600 transition-all duration-500 ease-out rounded-full"
         style={{ 
           left: `${indicatorStyle.left}%`, 
           width: `${indicatorStyle.width}%` 
         }} />
  )
}
