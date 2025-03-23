// popup script

  // 첫 번째 팝업: 오늘 날짜를 yyyy-mm-dd 형식으로 가져오기
  let today = new Date().toISOString().split('T')[0];

  // 첫 번째 팝업에서 "오늘 하루 보지 않기"가 체크된 경우 팝업을 하루종일 숨깁니다.
  if(localStorage.getItem(`no-show-today-popup1-${today}`)) {
    document.getElementById('popup-box1').style.display = 'none';
  } else {
    document.getElementById('popup-box1').style.display = 'block';
  }

  // 첫 번째 팝업 "닫기" 버튼 클릭 시
  document.getElementById('close1').addEventListener('click', function() {
    if (document.getElementById('today1').checked) {
      localStorage.setItem(`no-show-today-popup1-${today}`, 'true');
    }
    document.getElementById('popup-box1').style.display = 'none';
  });

  // 두 번째 팝업에서 "오늘 하루 보지 않기"가 체크된 경우 팝업을 하루종일 숨깁니다.
  if(localStorage.getItem(`no-show-today-popup2-${today}`)) {
    document.getElementById('popup-box2').style.display = 'none';
  } else {
    document.getElementById('popup-box2').style.display = 'block';
  }

  // 두 번째 팝업 "닫기" 버튼 클릭 시
  document.getElementById('close2').addEventListener('click', function() {
    if (document.getElementById('today2').checked) {
      localStorage.setItem(`no-show-today-popup2-${today}`, 'true');
    }
    document.getElementById('popup-box2').style.display = 'none';
  });

  //// 세 번째 팝업에서 "오늘 하루 보지 않기"가 체크된 경우 팝업을 하루종일 숨깁니다.
  if(localStorage.getItem(`no-show-today-popup3-${today}`)) {
    document.getElementById('popup-box3').style.display = 'none';
  } else {
    document.getElementById('popup-box3').style.display = 'block';
  }

  // 세 번째 팝업 "닫기" 버튼 클릭 시
  document.getElementById('close3').addEventListener('click', function() {
    if (document.getElementById('today3').checked) {
      localStorage.setItem(`no-show-today-popup3-${today}`, 'true');
    }
    document.getElementById('popup-box3').style.display = 'none';
  });
// popup script