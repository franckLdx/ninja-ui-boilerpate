export const getVariantClassName = (baseName: string, variant: string) => `button--${variant}`

export const getVariantStyle = (styles: Record<string, string>, baseName: string, variant: string) => {
  const variantClassName = getVariantClassName(baseName, variant);
  return styles[variantClassName]
}