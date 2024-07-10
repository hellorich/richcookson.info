'use client'

import { saveAs } from 'file-saver'
import { clsx } from 'clsx'
import { FaFilePdf } from 'react-icons/fa6'

import { lato } from '@/app/_utilities/fonts'
import classes from './button-pdf.module.scss'


interface ButtonPDFProps {
  text?: string,
}

const ButtonPDF = ({ text } : ButtonPDFProps) => {
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
    <button className={classes.button} onClick={handleGeneratePDF}>
      <FaFilePdf aria-label="CV PDF" className={classes.download} size="28px"/>
      {text && (
        <span className={clsx(classes.text, lato.className)}>
          {text}
        </span>
      )}
    </button>
  )
}

export default ButtonPDF