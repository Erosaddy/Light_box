//내거
window.addEventListener("DOMContentLoaded", function() {
    const pics = document.querySelectorAll(".pic");
    const lightbox = document.querySelectorAll("#lightbox");
    const lightboxImage = document.querySelectorAll("#lightboxImage");
    const closerBt = document.querySelectorAll("#closer");
    const nextImgBt =  document.querySelectorAll("#next");
    const nextImgBt =  document.querySelectorAll("#prev");
    const pager =  document.querySelectorAll("#pager");
    let lastPicIndex = null;
    //클릭시 라이트박스를 보여주는 함수 : showLightbox
    //for loop vs .forEach()
    //DOM 요소마다 이벤트 반복 추가
    for(i=0;i<pics.length;i++) {
        pics[i].addEventListener("click", showLightbox(i));
    }
    // pics.forEach(function(i) {
    //     this[i].addEventListener("click", showLightbox);
    // });
    //이벤트처리기: 클릭시 실행
    pics.forEach(function(pic, ind) {
        pic.addEventListener("click", showLightbox(ind));
    })

    function showLightbox(i) {
        lastPicIndex = i;
        var bigLocation = this.getAttribute("data-src"); //this.dataset.src
        lightboxImage.setAttribute("src", bigLocation);
        lightbox.style.display = "block";
    }
    //이벤트처리기: 핸들러 방식
    closerBt.onclick = function() {
        lightbox.style.display = "none";
    }

    nextImgBt.onclick = function() {
        lastPicIndex++;
        if(lastPicIndex >= 5) { lastPicIndex = 0; }
    }
});