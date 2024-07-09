import { NextResponse } from 'next/server'
import puppeteerCore, { Browser } from 'puppeteer-core'
import chromium from '@sparticuz/chromium-min'

const isProduction = process.env.NODE_ENV === 'production'

async function getBrowser(): Promise<Browser> {
  try {
    const executablePath = isProduction
      ? await chromium.executablePath(
          "https://github.com/Sparticuz/chromium/releases/download/v123.0.1/chromium-v123.0.1-pack.tar"
        )
      : '/opt/homebrew/bin/chromium'

    return await puppeteerCore.launch({
      args: isProduction ? [...chromium.args] : [],
      executablePath,
      headless: isProduction ? chromium.headless : true,
    })
  } catch (error) {
    console.error('Failed to launch the browser. Error:', error)
    throw new Error('Failed to launch the browser')
  }
}

export async function GET() {
  let browser: Browser | undefined

  try {
    browser = await getBrowser()
    const pdfUrl = isProduction
      ? 'https://www.richcookson.info'
      : 'http://localhost:3000'

    if (!browser) {
      throw new Error('Browser instance is undefined')
    }

    const page = await browser.newPage()
    await page.goto(pdfUrl, { waitUntil: "networkidle0" })

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
      details: isProduction ? undefined : (error as any).message,
    }

    return new NextResponse(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
