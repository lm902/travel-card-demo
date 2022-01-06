const phonebtn = document.querySelector('.phonebtn')
const mint = document.querySelector('.mint-button')

document.querySelector('input[type=tel]').oninput = function (event) {
  if (event.target.value.length === 11) {
    phonebtn.classList.remove('phonebtn-s')
    phonebtn.removeAttribute('disabled')
  } else {
    phonebtn.classList.add('phonebtn-s')
    phonebtn.setAttribute('disabled', 'disabled')
  }
}

phonebtn.onclick = function () {
  let countdown = 60
  const interval = setInterval(function () {
    if (countdown === 0) {
      phonebtn.classList.remove('phonebtn-s')
      phonebtn.removeAttribute('disabled')
      phonebtn.textContent = `获取验证码`
      clearInterval(interval)
    } else {
      phonebtn.classList.add('phonebtn-s')
      phonebtn.setAttribute('disabled', 'disabled')
      phonebtn.textContent = `${--countdown}s后重试`
      if (countdown === 57) {
        document.querySelector('input[placeholder=请输入验证码]').value = Math.floor(Math.random() * 1000000).toString().padStart(6, 0)
      }
    }
  }, 100)
}

document.querySelector('input[name=hobby]').oninput = function (event) {
  if (event.target.checked) {
    mint.classList.remove('is-disabled')
    mint.removeAttribute('disabled')
  } else {
    mint.classList.add('is-disabled')
    mint.setAttribute('disabled', 'disabled')
  }
}

mint.onclick = function () {
  location.href = 'result.html' + location.search
}