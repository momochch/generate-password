const submitBtn = document.querySelector('#button')
const message  = document.querySelector('#message');
const lowercase = document.querySelector('#lowercase')
const uppercase = document.querySelector('#uppercase')
const number = document.querySelector('#number')
const symbol = document.querySelector('#symbol')
const length = document.querySelector('#length')

// 生成密碼函式
function generatePassword() {
  const chars = [];
  if (lowercase.checked) chars.push('abcdefghijklmnopqrstuvwxyz');
  if (uppercase.checked) chars.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  if (number.checked) chars.push('0123456789');
  if (symbol.checked) chars.push('~!@#$%^&*()_+=-/?');
  // 確認有沒有抓到length的value
  // console.log(length.value);

  // 隨機組合產生密碼

  // 如果沒有輸入，就預設長度為10
  const passwordLength = parseInt(length.value) || 10; 
  // 確認密碼長度
  // console.log(passwordLength) 
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const set = chars[Math.floor(Math.random() * chars.length)];
    password += set[Math.floor(Math.random() * set.length)];
  }
  return password;
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    !lowercase.checked &&
    !uppercase.checked &&
    !number.checked &&
    !symbol.checked
  ) {
    message.textContent = 'Please select at least one character set';
    message.style.color = 'red';    
    message.style.backgroundColor = '#ffb0b0';
    message.style.display = 'block';
  } else {
    const password = generatePassword();
    message.textContent = `Your password is: ${password}`;
    message.style.color = 'green';       
    message.style.backgroundColor = '#8deea4';    
    message.style.display = 'block';    
  }
});