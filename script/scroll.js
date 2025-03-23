document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll(".value_section figure img"); 

  // 스크롤 이벤트 감지
  window.addEventListener("scroll", () => {
    images.forEach((img) => {
      let rect = img.getBoundingClientRect(); // 이미지의 위치 정보
      let windowHeight = window.innerHeight; // 브라우저 뷰포트 높이

      // 이미지가 화면에 나타나고 아직 회전하지 않았다면 실행
      if (rect.top < windowHeight && rect.bottom > 0 && !img.classList.contains("rotated")) {
        
        img.style.transform = `rotate(360deg)`; // 한 번 회전
        img.style.transition = "transform 1s ease-out"; // 부드러운 회전 효과
        img.classList.add("rotated"); // 회전 완료 상태를 표시
        img.classList.add("visible"); // 투명도 애니메이션
      }
    });
  });
});
