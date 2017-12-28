//Get UI
const pwd = document.querySelector('#pwd'),
      pwdConfirm = document.querySelector('#pwd-confirm'),
      rulesVisual = document.querySelector('.ui-pwd'),
      ruleMinCar = document.querySelector('.min-car'),
      ruleOneUpper = document.querySelector('.one-upper'),
      ruleOneNumber = document.querySelector('.one-number');

//Event Listener
pwd.addEventListener('keydown', senha);
pwdConfirm.addEventListener('keydown', confirmar);

//senha function
function senha(){
  count = 0;
  let senha = pwd.value;
  if(senha.length < 5){
    ruleMinCar.classList.add('rule-bad');
    pwd.classList.add('bad');
  } else{
    ruleMinCar.classList.remove('rule-bad');
    ruleMinCar.classList.add('rule-good');
    count++;
  }

  if(count > 0){
    blocks = rulesVisual.children;
    if(count === 1){
      rulesVisual.children[0].classList.add('visual-bad');
    }
  }
}

//confirmar function
function confirmar(){}