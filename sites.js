const SHOPS_SITES = [
  {
    vendor: 'Amazon',
    hasSchema: false,
    url: 'https://www.amazon.es/dp/B08H93ZRLL/ref=cm_sw_r_cp_apa_glt_i_91H0Z62WVDRT6FMW033Z?tag=eol00-21',
    checkStock: async ({ page }) => {
      const addToCartButton = await page.$$('#add-to-cart-button')
      return addToCartButton.length > 0
    },
  },
  {
    vendor: 'Microsoft',
    hasSchema: false,
    url: 'https://www.xbox.com/es-es/configure/8WJ714N3RBTL',
    checkStock: async ({ page }) => {
      const content = await page.textContent(
        '[aria-label="Finalizar la compra del pack"]'
      )
      return content.includes('Sin existencias') === false
    },
  },
]

module.exports = { SHOPS_SITES }
