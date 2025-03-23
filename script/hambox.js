// ham button 클릭시 hamallbox가 열리고 닽히도록 하기
function hamMenu() {
  let btn = document.querySelector(".ham > button");
  let hamBox = document.querySelector("#hamallbox");
  let dark = document.querySelector(".dark");
  let logo = document.querySelector(".logo");

  btn.addEventListener("click", () => {
    btn.classList.toggle("open");

    if (btn.classList.contains("open")) {

      hamBox.style.display = "block";
      dark.style.display = "block";      
    }
    else {
      hamBox.style.display = "none";
      dark.style.display = "none";     
    }

  });
}
//함수호출
hamMenu();

function hamGnbmenu() {
  // 모든 .hamgnb 요소를 선택 (각 메뉴 항목)
  let hamGnbItems = document.querySelectorAll(".hamgnb");

  hamGnbItems.forEach(item => {
    const hamGnb = item.querySelector("a");  // <a> 태그
    const hamSub = item.querySelector(".hamsubmenu");  // 서브 메뉴

    hamGnb.addEventListener("click", (e) => {
      // e.preventDefault();  // 링크 클릭 시 페이지 이동 방지 (필요하면 제거 가능)

      if (hamSub.style.display === "block") {
        hamSub.style.display = "none"
      } else {
        hamSub.style.display = "block";
      }

      // 토글 클래스 'open' 추가/삭제
      hamGnb.classList.toggle("open");
    });
  });
}

// 함수 호출
hamGnbmenu();


// 메뉴 항목 클릭 시 토글 버튼 적용
let hamItems = document.querySelectorAll(".hamgnb > a");

hamItems.forEach(item => {
  item.addEventListener("click", (e) => {
    // 이전에 선택된 항목에서 스타일을 제거
    hamItems.forEach(item => item.classList.remove("active"));

    // 클릭된 항목에 스타일 추가
    e.target.classList.add("active");
  });
});