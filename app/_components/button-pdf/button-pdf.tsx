'use client'
import React from 'react'
import { saveAs } from 'file-saver'

const ButtonPDF = () => {
  const handleGeneratePDF = async () => {
    try {
      const res = await fetch('/api/generate-pdf', {
        method: 'GET',
      })

      if (!res.ok) {
        throw new Error('Failed to fetch the PDF')
      }

      const blob = await res.blob()
      saveAs(blob, 'rich-cookson-cv.pdf')
    } catch (error) {
      console.error('Error generating or downloading PDF:', error)
    }
  }

  return (
    <button onClick={handleGeneratePDF}>Generate PDF</button>
  )
}

export default ButtonPDF