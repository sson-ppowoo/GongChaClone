let mediaQueryS = window.matchMedia('(max-width: 600px)');
let mediaQueryM = window.matchMedia('(max-width: 850px)');
let mediaQueryL = window.matchMedia('(max-width: 1024px)');

function handleScreenSizeChange() {
  let element = document.getElementById('myElement');

  if (mediaQueryS.matches) {
    // 화면이 600px 이하일 때
    element.style.backgroundColor = 'lightblue';
    element.textContent = 'Small screen';
  } else if (mediaQueryM.matches) {
    // 화면이 600px 이상 850px 이하일 때
    element.style.backgroundColor = 'lightgreen';
    element.textContent = 'Medium screen';
  } else if (mediaQueryL.matches) {
    // 화면이 850px 이상 1024px 이하일 때
    element.style.backgroundColor = 'lightgreen';
    element.textContent = 'Medium screen';
  }else {
    // 화면이 1024px 이상일 때
    element.style.backgroundColor = 'lightcoral';
    element.textContent = 'Large screen';
  }
}

// 화면 크기 변화에 따라 이벤트 처리
mediaQueryS.addEventListener('change', handleScreenSizeChange);
mediaQueryM.addEventListener('change', handleScreenSizeChange);
mediaQueryL.addEventListener('change', handleScreenSizeChange);

// 초기 화면 크기에 맞춰 한 번 실행
handleScreenSizeChange();
