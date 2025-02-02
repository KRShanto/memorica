'use client'
import { createContext, ReactNode, useState } from 'react'

interface ImageContextType {
  activeImageIndex: number
  setActiveImageIndex: (index: number) => void
}

export const ImageContext = createContext<ImageContextType>({
  activeImageIndex: 0,
  setActiveImageIndex: () => {},
})

export function ImageProvider({ children }: { children: ReactNode }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <ImageContext.Provider value={{ activeImageIndex, setActiveImageIndex }}>
      {children}
    </ImageContext.Provider>
  )
}
