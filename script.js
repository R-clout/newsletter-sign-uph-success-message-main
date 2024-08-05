const email = document.querySelector('#email');
const button = document.querySelector("button");
const form = document.querySelector(".form");




let char = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const unsuccessfulBox = `
<span class="unsuccessful">
        <label class="invalid" for="invalid">Email address</label>
        <label class="valid">Valid email required</label>
      </span>
      <input class="newinput" type="email" id="email" placeholder="email@company.com"></input>
`



button.addEventListener('click', () => {
    const emailInput = email.value;
  if(emailInput === '' || !char.test(emailInput)) {
    form.innerHTML = '';
    form.innerHTML = unsuccessfulBox;
  } else {
    window.location.href = 'successful-mobile.html';
    localStorage.setItem('email', emailInput);
  }
})


