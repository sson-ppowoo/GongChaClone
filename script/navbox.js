// 메뉴 항목을 선택
let menuLinks = document.querySelectorAll('.nav_title ul li a');

// 이미지와 텍스트를 변경할 대상
let recipeImage = document.getElementById('recipe-image');
let recipeTitle = document.getElementById('recipe-title');
let recipeDescription = document.getElementById('recipe-description');

// 메뉴 항목에 맞는 이미지와 텍스트 배열
let recipes = [
  {
    image: './images/brandmain/brand_main_recipe_img1.jpg',
    imageSmall: './images/brandmain/main_recipe_img1_small.png',
    title: '오리지널 티 - Original Tea',
    description: '티백이나 가루가 아닌 황실에 바치던 잎차만 골라 1도 1초도 어기지 않고 차마다 다른 황금률로 우려 한 잔 한 잔 부드러움을 더해 만듭니다.',        
  },
  {
    image: './images/brandmain/brand_main_recipe_img2.jpg',
    imageSmall: './images/brandmain/main_recipe_img2_small.png',
    title: '밀크티 - Milk Tea',
    description: '최적의 자연이 키워낸 입차만 골라 각 차종에 맞는 황금률로 우려 담백한 우유와 허니, 카라멜 등 새로운 맛을 더해 만듦니다.'
  },
  {
    image: './images/brandmain/brand_main_recipe_img3.jpg',
    imageSmall: './images/brandmain/main_recipe_img3_small.png',
    title: '프룻티 - Fruit Tea',
    description: '찻잎의 푸름을 간직한 녹차만 골라 최적의 온도로 우려 달콤상큼한 과일을 더해 만듭니다.'
  }
];

// 페이지 로드 시 첫 번째 메뉴 항목을 기본값으로 설정
let defaultIndex = 0;
menuLinks[defaultIndex].classList.add('active');
recipeImage.src = recipes[defaultIndex].image;
recipeTitle.textContent = recipes[defaultIndex].title;
recipeDescription.textContent = recipes[defaultIndex].description;

// nav_img와 nav_text에 active 클래스를 추가하여 트랜지션 효과 적용
let navImg = document.querySelector('.nav_img');
let navText = document.querySelector('.nav_text');
let navTextH2 = document.querySelector('.nav_text > h2');
let navTextH4 = document.querySelector('.nav_text > h4');
let navTextP = document.querySelector('.nav_text > p');
navImg.classList.add('active');
navText.classList.add('active');
navTextH2.classList.add('active');
navTextH4.classList.add('active');
navTextP.classList.add('active');

// 화면 크기에 맞게 이미지를 변경하는 함수
function adjustNavImageForWindowSize(index) {
  let screenWidth = window.innerWidth;

  // 화면 크기가 1200px 이하일 경우 작은 이미지로 변경
  if (screenWidth <= 1200) {
    navImg.querySelector('img').src = recipes[index].imageSmall;  // 작은 이미지를 사용
  } else {
    navImg.querySelector('img').src = recipes[index].image; // 기본 이미지를 사용
  }
}

// 페이지 로드 시 크기에 맞게 이미지 설정
adjustNavImageForWindowSize(defaultIndex);

// 리사이즈 이벤트가 발생할 때마다 화면 크기에 맞게 이미지 조정
window.addEventListener('resize', function() {
  adjustNavImageForWindowSize(defaultIndex);
});
// 각 메뉴 항목에 클릭 이벤트 추가
menuLinks.forEach((link,index) => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // 링크 클릭 시 페이지 이동 방지

    let index = e.target.dataset.index; // 클릭된 항목의 index 값 가져오기
    

    // 선택된 메뉴 항목에 스타일 추가
    menuLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
    
    // 이미지, 제목, 설명을 클릭된 항목에 맞게 업데이트
    recipeImage.src = recipes[index].image;
    recipeTitle.textContent = recipes[index].title;
    recipeDescription.textContent = recipes[index].description; 
    // nav_img와 nav_text에 active 클래스 추가하여 트랜지션 효과 적용
    // active 클래스를 잠시 제거했다가 다시 추가하여 트랜지션 효과가 보이게 함
    navImg.classList.remove('active');
    navText.classList.remove('active');
    navTextH2.classList.remove('active');
    navTextH4.classList.remove('active');
    navTextP.classList.remove('active');


    // 트랜지션을 적용한 후 다시 active 클래스를 추가
    setTimeout(() => {
      navImg.classList.add('active');
      navText.classList.add('active');
      navTextH2.classList.add('active');
      navTextH4.classList.add('active');
      navTextP.classList.add('active');
    }, 500); // 약간의 딜레이를 주어 효과를 보이게 함
    adjustNavImageForWindowSize(index);
  });
});

