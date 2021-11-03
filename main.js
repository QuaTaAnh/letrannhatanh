var confirmPassword = () => {
    var password = document.querySelector('input[name=password]')
    var confirm = document.querySelector('input[name=confirm]')
    if (confirm.value === password.value) {
      confirm.setCustomValidity('')
    } else {
      confirm.setCustomValidity('không trùng với password')
    }
  }