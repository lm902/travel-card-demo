function qs (name) {
  const match = location.search.match(new RegExp(name + "=(.*?)(?:&.*)?$"))
  return match && decodeURIComponent(match[1])
}

document.getElementById('phone').textContent = qs('phone')
document.getElementById('city').textContent = qs('city')
const date = new Date()
document.querySelector('.update').textContent = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')} ${date.toLocaleTimeString('zh-cn', { hour12: false })}`