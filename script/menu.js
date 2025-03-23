// menu script

//변경이 필요한 항목 불러오기
let gnbItem = document.querySelectorAll(".gnb > a");

//마우스를 올렸을때 영어를 한글텍스트로 변환하기
gnbItem.forEach(item => {
  item.addEventListener("mouseenter",function(){
    if(item.textContent === "Brand"){
        item.textContent = "브랜드";
    }else if
      (item.textContent === "Menu"){
        item.textContent = "메뉴";        
    } else if 
      (item.textContent === "Store"){
        item.textContent = "매장";
      } else if
      (item.textContent === "Menbership"){
        item.textContent = "멤버십";
      } else if
      (item.textContent === "Benefit"){
        item.textContent = "제휴서비스";
      }else if 
      (item.textContent === "Event&News")
        item.textContent = "이벤트&뉴스"
  });
});

//마우스가 떠날때 영어를 다시 한글로 바꿔주기

gnbItem.forEach(item => {
  item.addEventListener("mouseleave",function(){
    if(item.textContent === "브랜드"){
        item.textContent = "Brand";
    }else if
      (item.textContent === "메뉴"){
        item.textContent = "Menu";        
    } else if 
      (item.textContent === "매장"){
        item.textContent = "Store";
      } else if
      (item.textContent === "멤버십"){
        item.textContent = "Menbership";
      } else if
      (item.textContent === "제휴서비스"){
        item.textContent = "Benefit";
      }else if 
      (item.textContent === "이벤트&뉴스"){
        item.textContent = "Event&News";
      } Benefit });
});

// menu script


