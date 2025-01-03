export default function initCardEffect() {
  // 獲取所有卡片元素
  const cardElements = document.querySelectorAll('.card')

  // 最大旋轉角度
  const maxRotation = 15
  // 最大 Z 軸旋轉角度
  const maxZRotation = 2

  // 重置 旋轉角度 與 亮面透明度
  function resetCardRotation(card, glossy) {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
    glossy.style.opacity = '0'
  }

  // 更新旋轉角度
  function updateCardRotation(e, card, glossy) {
    const rect = card.getBoundingClientRect()
    const cardCenterX = rect.left + rect.width / 2
    const cardCenterY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY
    const distanceX = mouseX - cardCenterX
    const distanceY = mouseY - cardCenterY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    const maxDistance = Math.sqrt(
      (rect.width / 2) ** 2 + (rect.height / 2) ** 2
    ) // 計算卡片對角線長度
    const angleX = (distanceY / maxDistance) * maxRotation
    const angleY = -(distanceX / maxDistance) * maxRotation
    const angleZ = (distanceX / maxDistance) * maxZRotation

    card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) rotateZ(${angleZ}deg)`

    // 更新 亮面透明度
    const glossyX = ((mouseX - rect.left) / rect.width) * 100
    const glossyY = ((mouseY - rect.top) / rect.height) * 100
    glossy.style.backgroundImage = `radial-gradient(circle at ${glossyX}% ${glossyY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)`
    glossy.style.opacity = '1'
  }

  // 選取所有卡片的glossy
  cardElements.forEach((card) => {
    const glossy = card.querySelector('.glossy')
    if (!glossy) return

    // 將事件監聽器添加到卡片元素上，避免全螢幕觸發效果
    // 添加mousemove事件來更新卡片的旋轉
    card.addEventListener('mousemove', (e) =>
      updateCardRotation(e, card, glossy)
    )

    // 添加mouseleave事件來重置卡片的旋轉
    card.addEventListener('mouseleave', () => resetCardRotation(card, glossy))
  })
}
