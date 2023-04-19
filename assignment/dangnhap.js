var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    alert = "<p id='error'>Email không hợp lệ.</p>";
    emailInput.focus();
    return;
  }