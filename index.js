const { chromium } = require('playwright')
const { SHOPS_SITES } = require('./sites')

async function main() {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  for (const site of SHOPS_SITES) {
    await page.goto(site.url)
    const isAvailable = await site.checkStock({ page })
    if (isAvailable) {
      console.log(`${site.vendor} is available!`)
    }
  }

  await browser.close()
}

main()
