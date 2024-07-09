import { NextResponse } from 'next/server'
import playwright, { Browser } from 'playwright-core'
import chromium from '@sparticuz/chromium-min'

async function getBrowser(): Promise<Browser | undefined> {
  try {
    const isProduction = process.env.NODE_ENV === 'production'

    const executablePath = isProduction
      ? await chromium.executablePath(
        "https://github.com/Sparticuz/chromium/releases/download/v110.0.1/chromium-v110.0.1-pack.tar"
      )
      : '/opt/homebrew/bin/chromium'

    console.log('Executable Path:', executablePath)

    return await playwright.chromium.launch({
      args: isProduction ? [...chromium.args] : [],
      executablePath,
      headless: true,
    })
  } catch (error) {
    // Log the error with additional context or stack for better debugging
    console.error('Failed to launch the browser. Error:', error instanceof Error ? error.stack : error)
    return undefined // Return undefined to indicate failure
  }
}

export async function GET() {
  let browser: Browser | undefined

  try {
    browser = await getBrowser()
    if (!browser) {
      throw new Error('Browser instance is undefined')
    }

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
    console.error('Error generating PDF:', error)

    if (browser) {
      await browser.close()
    }

    const errorResponse = {
      error: 'Error generating PDF',
      details: process.env.NODE_ENV === 'development' ? (error as any).message : undefined,
    }

    return new NextResponse(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}