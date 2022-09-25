export function calculateDropStyle(scrollPosition, dropPosition) {
  let backgroundDropPosition = dropPosition
  let displaybackgroundDrop =
    scrollPosition > dropPosition - 1000 ? 'flex' : 'none'
  const isMobile = window.innerWidth < 900
  let dropImgWidth = isMobile ? 100 : 65
  if (scrollPosition > dropPosition && !isMobile) {
    const calculateWidthImg = 65 + Math.abs(scrollPosition - dropPosition) / 20
    dropImgWidth = calculateWidthImg > 100 ? 100 : calculateWidthImg
  }

  return { dropImgWidth, backgroundDropPosition, displaybackgroundDrop }
}
