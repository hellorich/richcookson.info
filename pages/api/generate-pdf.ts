import { NextApiRequest, NextApiResponse } from 'next'
import chromium from 'chrome-aws-lambda'
import playwright from 'playwright-core'

export default async function generatePdf(req: NextApiRequest, res: NextApiResponse) {
  try {
    const browser = await playwright.chromium.launch({
      args: [...chromium.args, '--font-render-hinting=none'],
      executablePath:
        process.env.NODE_ENV === 'production'
          ? await chromium.executablePath
          : '/opt/homebrew/bin/chromium', // Adjust path as per your local setup
      headless:
        process.env.NODE_ENV === 'production' ? chromium.headless : true,
    })

    const context = await browser.newContext()
    const page = await context.newPage()

    // Define the URL to convert to PDF
    const pdfUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://www.richcookson.info'
        : 'http://localhost:3000'

    await page.goto(pdfUrl, { waitUntil: 'load' })

    // Generate the PDF
    const pdfBuffer = await page.pdf({
      printBackground: true,
      format: 'a4',
    })

    await browser.close()

    // Respond with the PDF
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=rich-cookson-cv.pdf')
    res.status(200).send(pdfBuffer)
  } catch (error) {
    console.error('Error generating PDF:', error)
    res.status((error as { statusCode?: number }).statusCode || 500).json({ error: (error as Error).message })
  }
}

