const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://www.xbox.com/es-es/configure/8WJ714N3RBTL')

  await page.screenshot({ path: 'xbox.png' })

  await browser.close()
})()
