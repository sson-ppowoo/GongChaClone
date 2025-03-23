// Menu script

  let menuItems = document.querySelectorAll('.gnb > a'); // 메뉴 항목을 선택합니다.

  // 메뉴에 마우스를 올렸을 때
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      // 마우스가 올라왔을 때, 텍스트 변경과 트랜지션을 동시에 처리합니다.
      item.classList.add('fade-out'); // fade-out 효과를 적용하여 서서히 사라지게 합니다.
      
      setTimeout(() => {
        // 텍스트 변경
        if (item.textContent === 'Brand') {
          item.textContent = '브랜드';              
        } else if (item.textContent === 'Menu') {
          item.textContent = '메뉴';
        } else if (item.textContent === 'Store') {
          item.textContent = '매장';
        } else if (item.textContent === 'Menbership') {
          item.textContent = '멤버십';
        } else if (item.textContent === 'Benefit') {
          item.textContent = '제휴서비스';
        } else if (item.textContent === 'Event&News') {
          item.textContent = '이벤트&뉴스';
        }

        // 텍스트 변경 후 fade-in 효과를 추가하여 서서히 나타나게 함
        item.classList.remove('fade-out');
        item.classList.add('fade-in');
      }, 150); // 텍스트 변경은 0.15초 후에 이루어짐
    });

    // 메뉴에서 마우스를 뗐을 때 (한글을 다시 영어로 변경)
    item.addEventListener('mouseleave', function() {
      item.classList.add('fade-out'); // fade-out 효과를 적용하여 서서히 사라지게 합니다.
      
      setTimeout(() => {
        // 텍스트 변경
        if (item.textContent === '브랜드') {
          item.textContent = 'Brand';
        } else if (item.textContent === '메뉴') {
          item.textContent = 'Menu';
        } else if (item.textContent === '매장') {
          item.textContent = 'Store';
        } else if (item.textContent === '멤버십') {
          item.textContent = 'Menbership';
        } else if (item.textContent === '제휴서비스') {
          item.textContent = 'Benefit';
        } else if (item.textContent === '이벤트&뉴스') {
          item.textContent = 'Event&News';
        }

        // 텍스트 변경 후 fade-in 효과를 추가하여 서서히 나타나게 함
        item.classList.remove('fade-out');
        item.classList.add('fade-in');
      }, 150); // 텍스트 변경은 0.15초 후에 이루어짐
    });
  });

// Menu script

// ham script

  // 햄버거 메뉴 클릭 이벤트
  let ham = document.querySelector('.ham');  // 햄버거 메뉴
  let menu = document.querySelector('.menu');  // 메뉴
  
  // 햄버거 메뉴 클릭 시
  ham.addEventListener('click', function() {
    menu.classList.toggle('active'); // act 클래스 추가/제거
  });


// ham script


