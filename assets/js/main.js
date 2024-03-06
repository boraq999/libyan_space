const sliderContainer = document.querySelector(".my_slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}%`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight
    }px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight
    }px)`;
};



// console.log(mobile_icon);

let mobile_item = document.querySelectorAll('.mobile_item');


document.addEventListener('click', function (event) {
  console.log(event.target.classList.contains('mobile_item'));


  if (event.target.classList.contains('mobile_item')) {
    console.log(1);
    mobile_active_remove();
    event.target.classList.add('my_active');
  }



});



function mobile_active_remove() {
  document.querySelectorAll('.mobile_item').forEach(el => {
    el.classList.remove('my_active');
  });
}
