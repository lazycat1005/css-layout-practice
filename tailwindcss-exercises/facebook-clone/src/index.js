import "./index.css";

//! --------------------------------------------------------置頂右側按鈕下拉選單功能
const plusBtn = document.querySelector("#plus-btn");
const msgBtn = document.querySelector("#msg-btn");
const notificationBtn = document.querySelector("#notification-btn");
const moreBtn = document.querySelector("#more-btn");

const plusPanel = document.querySelector("#plus-panel");
const msgPanel = document.querySelector("#msg-panel");
const notificationPanel = document.querySelector("#notification-panel");
const morePanel = document.querySelector("#more-panel");

const panels = [plusPanel, msgPanel, notificationPanel, morePanel];

function openPanel(index) {
  panels.forEach((p, idx) => {
    if (index === idx) {
      p.classList.remove("hidden");
      return;
    }
    if (p.classList.contains("hidden")) {
      return;
    }
    p.classList.add("hidden");
  });
}
//點擊畫面任一處關閉選單
window.addEventListener("click", () => {
  openPanel(-1);
});
//點擊按鈕展開下拉選單
plusBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openPanel(0);
});
msgBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openPanel(1);
});
notificationBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openPanel(2);
});
moreBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  openPanel(3);
});
//取消下拉選單的冒泡事件
plusPanel.addEventListener("click", (e) => {
  e.stopPropagation();
});
msgPanel.addEventListener("click", (e) => {
  e.stopPropagation();
});
notificationPanel.addEventListener("click", (e) => {
  e.stopPropagation();
});
morePanel.addEventListener("click", (e) => {
  e.stopPropagation();
});

//! --------------------------------------------------------資訊欄相關
function renderLeftItem(name, imageUrl) {
  const item = `
  <div class="flex items-center justify-items-center w-full px-2 py-1.5 rounded hover:bg-fb-input cursor-pointer">
    <div class="w-[32px] overflow-hidden rounded-full mr-4">
      <img src="${imageUrl}" />
    </div>
    <p class="text-white text-[.9rem]">${name}</p>
  </div>`;
  return item;
}

function renderLeftBlack() {
  const information = document.querySelector("#information");
  const leftArr = [
    {
      name: "Rex Wang",
      img: "https://bruce-fe-fb.web.app/image/avator.png",
    },
    {
      name: "朋友",
      img: "https://bruce-fe-fb.web.app/image/left/friend.svg",
    },
    {
      name: "活動",
      img: "https://bruce-fe-fb.web.app/image/left/activity.svg",
    },
    {
      name: "天氣",
      img: "https://bruce-fe-fb.web.app/image/left/cloudy.png",
    },
    {
      name: "Marketplace",
      img: "https://bruce-fe-fb.web.app/image/left/store.svg",
    },
    {
      name: "Watch",
      img: "https://bruce-fe-fb.web.app/image/left/watchingTv.svg",
    },
    {
      name: "最愛",
      img: "https://bruce-fe-fb.web.app/image/left/star.svg",
    },
  ];
  const finalItem = `
  <div class="flex items-center justify-items-center w-full px-2 py-1.5 rounded hover:bg-fb-input cursor-pointer">
    <div class="w-[32px] overflow-hidden rounded-full mr-4">
      <button class="w-[32px] h-[32px] p-2.5 rounded-full bg-fb-popover flex justify-center items-center">
        <img src="https://bruce-fe-fb.web.app/image/down.svg" />
      </button>
    </div>
    <p class="text-white text-[.9rem]">顯示更多</p>
  </div>`;

  let htmlStr = "";
  leftArr.forEach((obj) => {
    htmlStr = htmlStr + renderLeftItem(obj.name, obj.img);
  });
  information.innerHTML = htmlStr + finalItem;
}
renderLeftBlack();

//! --------------------------------------------------------聯絡人相關
const rightBlock = document.querySelector("#right-block");

function contact() {
  const rightItem = `
<div class="flex items-center justify-items-center w-full py-2 px-1 rounded hover:bg-fb-input cursor-pointer">
  <div class="w-[45px]">
    <div class="relative w-[32px] cursor-pointer">
      <div class="overflow-hidden rounded-full">
        <img src="https://bruce-fe-fb.web.app/image/avator.png" />
      </div>
      <div class="w-[8px] h-[8px] rounded-full bg-green-500 absolute bottom-0 right-0 ring-gray-900 ring"></div>
    </div>
  </div>
  <p class="text-white text-[.9rem]">Jeff Lin</p>
</div>
`;

  let htmlStr = `<p class="mb-2 text-lg text-gray-400">聯絡人</p>`;
  for (let i = 0; i < 5; i++) {
    htmlStr = htmlStr + rightItem;
  }

  rightBlock.innerHTML = htmlStr;
}

contact();

//! --------------------------------------------------------建立限時動態相關
const storeList = document.querySelector("#store-list");

function renderStoryItem() {
  for (let i = 0; i < 10; i++) {
    const divBox = document.createElement("div");
    divBox.classList.add(
      "flex-1",
      "px-[4px]",
      "min-w-[120px]",
      "cursor-pointer"
    );
    divBox.innerHTML = `
    <div id="story-${i}" class="relative overflow-hidden rounded-lg">
      <div id="story-mask-${i}" class="hidden w-full h-full absolute top-0 left-0 bg-black/20 z-20"></div>
      <div class="w-[32px] h-[32px] absolute top-4 left-4 ring-4 ring-fb bg-fb-card rounded-full flex justify-center items-center z-10">
        <p class="text-white text-sm">黃</p>
      </div>
      <div class="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20"></div>
      <img id="story-img-${i}" class="w-full h-full duration-500 hover:scale-105" src="https://bruce-fe-fb.web.app/image/story.png"/>
      <p class="absolute bottom-2 left-2 text-white z-10">黃小花</p>
    </div>
    `;

    divBox.addEventListener("mouseover", function () {
      const mask = document.getElementById(`story-mask-${i}`);
      const img = document.getElementById(`story-img-${i}`);
      mask.classList.remove("hidden");
      img.classList.add("scale-105");
    });

    divBox.addEventListener("mouseout", function () {
      const mask = document.getElementById(`story-mask-${i}`);
      const img = document.getElementById(`story-img-${i}`);
      mask.classList.add("hidden");
      img.classList.remove("scale-105");
    });

    storeList.appendChild(divBox);
  }
}

renderStoryItem();

//! --------------------------------------------------------建立包廂區塊相關
function renderLiveItem() {
  for (let i = 0; i < 20; i++) {
    const swiperWrapperLive = document.getElementById("swiper-wrapper-live");

    const divBox = document.createElement("div");
    divBox.classList.add("swiper-slide");

    const item = `
      <div class="w-[55px]">
        <div class="relative w-[40px] cursor-pointer">
          <div class="overflow-hidden rounded-full">
            <img src="https://bruce-fe-fb.web.app/image/avator.png">
          </div>
          <div class="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-0 right-0 ring-gray-900 ring"></div>
        </div>
      </div>
    `;

    divBox.innerHTML = item;

    swiperWrapperLive.appendChild(divBox);
  }

  new Swiper(".fb-live", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

renderLiveItem();
