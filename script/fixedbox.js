// 이미지 요소를 선택합니다.
 let fImg = document.querySelector(".off");
 
 console.log(fImg)

 // 마우스를 올렸을 때 이미지 변경
 fImg.addEventListener("mouseover", () => {
  fImg.setAttribute('src',"./images/brand/quick_img_on.png");
 });
 // 마우스를 뗐을 때 원래 이미지로 변경
 fImg.addEventListener("mouseout", () => {
  fImg.setAttribute('src',"./images/brand/quick_img_off.png");
 });

//  img.addEventListener("mouseover", () => {
//   img.src = "./images/brand/quick_img_on.png";
// });
// // 마우스를 뗐을 때 원래 이미지로 변경
// img.addEventListener("mouseout", () => {
//   img.src = "./images/brand/quick_img_off.png"
// });

//setAttribute ('src',"이미지경로") 정확성

