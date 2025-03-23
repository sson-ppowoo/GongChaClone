

//<!-- swiper -->
let swiper = new Swiper(".swiper.mySwiper", {
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  loop:true,
  autoplay:{
    delay:30000,
    disableOnInteraction:false,
  },
});


// // slidebox 

// let slideContainer = document.querySelector('.swiper-wrapper'); // 슬라이드 이미지 컨테이너
// let slides = document.querySelectorAll('.swiper-wrapper > swiper-slide'); // 개별 슬라이드
// let prevButton = document.querySelector('.swiper-button-prev'); // 이전 버튼
// let nextButton = document.querySelector('.swiper-button-next'); // 다음 버튼

// let currentIndex = 0; // 현재 슬라이드 인덱스
// //이미지 슬라이드 이동 함수
// function moveSlide() {  
//   let slideWidth = getSlideWidth(); // 현재 화면에 맞는 슬라이드 이동 폭
//   // 슬라이드 컨테이너를 이동
//   slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;   
// };

// // 슬라이드 자동 넘김 설정
// let autoSwiperInterval = setInterval(function () {
//   if (currentIndex === slides.length - 1) {
//     // 마지막 슬라이드일 때 첫 번째 슬라이드로 돌아감
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }
//   moveSlide();
// }, 30000); // 3초마다 슬라이드가 자동으로 넘어감

// window.addEventListener('resize', moveSlide);
// // 화면 크기가 변경되었을 때 슬라이드 이동 폭 다시 계산

// function getSlideWidth() {            
//     let Width = window.innerWidth
//   // 화면 너비에 따라 슬라이드 너비를 다르게 설정
//   if (Width > 1250){
//     return 1900;
//   } else if (Width <= 1250){
//     return 750;
//   }
// };
// // 이전 버튼 클릭 시
// prevButton.addEventListener('click', function () {
//   if (currentIndex === 0) {
//     // 첫 번째 슬라이드일 때 마지막 슬라이드로 돌아감
//     currentIndex = slides.length - 1;
//   } else {
//     currentIndex--;
//   }
//   moveSlide();
// });

// // 다음 버튼 클릭 시
// nextButton.addEventListener('click', function () {
//   if (currentIndex === slides.length - 1) {
//     // 마지막 슬라이드일 때 첫 번째 슬라이드로 돌아감
//     currentIndex = 0;
//   } else {
//     currentIndex++;
//   }
//   moveSlide();
// });

// //slidebox 
  