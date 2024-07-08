import { NextRequest, NextResponse } from 'next/server'
import chromium from 'chrome-aws-lambda'
import playwright from 'playwright-core'

async function getBrowser() {
  const executablePath = process.env.NODE_ENV === 'production'
    ? await chromium.executablePath
    : '/opt/homebrew/bin/chromium' // Adjust path as per your local setup

  return await playwright.chromium.launch({
    executablePath,
  })
}

export async function GET() {
  try {
    const browser = await getBrowser()
    const context = await browser.newContext()
    const page = await context.newPage()

    const pdfUrl = process.env.NODE_ENV === 'production'
      ? 'https://www.richcookson.info'
      : 'http://localhost:3000'

    await page.goto(pdfUrl, { waitUntil: 'load' })

    const pdfBuffer = await page.pdf({
      printBackground: true,
      format: 'a4',
    })

    await browser.close()

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=rich-cookson-cv.pdf',
      },
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Error generating PDF', details: (error as any).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}