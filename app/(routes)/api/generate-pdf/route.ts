import { NextResponse } from 'next/server'
import puppeteerCore, { Browser } from 'puppeteer-core'
import chromium from '@sparticuz/chromium-min'

const isProduction: boolean = process.env.NODE_ENV === 'production'

const fileName = 'rich-cookson-cv.pdf'
const chromiumPath = {
  'dev': '/opt/homebrew/bin/chromium',
  'prod': 'https://github.com/Sparticuz/chromium/releases/download/v123.0.1/chromium-v123.0.1-pack.tar',
}
const pageUrl = {
  'dev': 'http://localhost:3000',
  'prod': 'https://www.richcookson.info',
}

async function getBrowser(): Promise<Browser> {
  try {
    const executablePath: string = isProduction ? await chromium.executablePath(chromiumPath.prod): chromiumPath.dev

    return await puppeteerCore.launch({
      args: isProduction ? [...chromium.args] : [],
      executablePath,
      headless: isProduction ? chromium.headless : true,
    })
  } catch (error: unknown) {
    console.error('Failed to launch the browser. Error:', (error as Error).stack)
    throw new Error('Failed to launch the browser')
  }
}

export async function GET(): Promise<NextResponse> {
  let browser: Browser | undefined

  try {
    browser = await getBrowser()
    const pdfUrl: string = isProduction ? pageUrl.prod : pageUrl.dev

    const page = await browser.newPage()
    await page.goto(pdfUrl, { waitUntil: "networkidle0" })

    const pdfBuffer: Buffer = await page.pdf({
      printBackground: true,
      format: 'a4',
    })

    await browser.close()

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=${fileName}`,
      },
    })
  } catch (error: unknown) {
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
