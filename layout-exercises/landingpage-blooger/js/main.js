// 定義一個 responsive 對象，用於設定不同視窗寬度下的項目數量
const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

// 等待文檔完全載入後執行
$(function () {
  // 當點擊 .toggle-collapse 元素時，切換 #myNav 的 'collapse' 類別
  $(".toggle-collapse").click(function () {
    $("#myNav").toggleClass("collapse");
  });

  // 初始化 OwlCarousel
  $(".owl-carousel").owlCarousel({
    loop: true, // 設定為循環播放
    autoplay: true, // 自動播放
    autoplayTimeout: 3000, // 每 3000 毫秒切換一次
    dots: false, // 不顯示點點
    nav: true, // 顯示導航箭頭
    navText: [
      $(".owl-navigation .owl-nav-prev"), // 自定義「上一個」箭頭
      $(".owl-navigation .owl-nav-next"), // 自定義「下一個」箭頭
    ],
  });

  // 當點擊 .move-up span 時，平滑滾動到頁面頂部
  $(".move-up span").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000 // 使用 1000 毫秒的速度回到頂部
    );
  });

  // 初始化 AOS (Animate On Scroll)
  AOS.init();
});
