import type { Taxes } from '@/views/cost-form/CostFormView.vue'

interface ProductItem {
  productCost: string
  productName: string
  unit: string
  productUsage: string
}

export const getProductCost = () => {
  const productsList = JSON.parse(localStorage.getItem('productsList') as string) as ProductItem[]
  const taxesList = JSON.parse(localStorage.getItem('taxesList') as string) as Taxes[]

  if (!productsList?.length || !taxesList.length) return `R$ 0,00`

  const productListCosts = productsList.reduce<number>((acc, currentProduct) => {
    const usageAmount = Number(currentProduct.productUsage)
    const productUnitCost = Number(currentProduct.productCost)

    const usedAmountValue = Number(usageAmount * productUnitCost) / 1000

    return (acc += usedAmountValue)
  }, 0)

  const taxesListCosts = taxesList.reduce<number>((acc, currentTaxItem) => {
    return currentTaxItem.sellingCostsUnit === 'R$'
      ? (acc += currentTaxItem.sellingCostsValue)
      : (acc += productListCosts * (currentTaxItem.sellingCostsValue / 100))
  }, 0)

  return `R$ ${productListCosts + taxesListCosts}`
}
