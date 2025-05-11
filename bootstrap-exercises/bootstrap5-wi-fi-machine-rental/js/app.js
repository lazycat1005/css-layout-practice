(function () {
  "use strict"; // 啟用嚴格模式，避免使用一些不安全或錯誤的語法

  /**
   * 選取 DOM 元素的輔助函式
   * @param {string} el - CSS 選擇器
   * @param {boolean} all - 是否選取全部匹配的元素（true 為多個，false 為第一個）
   * @returns {Element|Element[]} - 回傳單一或多個 DOM 元素
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * 為 DOM 元素加上事件監聽器的輔助函式
   * @param {string} type - 事件型別（如 click, scroll）
   * @param {string} el - CSS 選擇器
   * @param {function} listener - 事件觸發時的 callback 函式
   * @param {boolean} all - 是否綁定到所有匹配的元素
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * 為指定元素綁定 scroll 事件
   * @param {Element} el - DOM 元素
   * @param {function} listener - 滾動時的 callback
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  // 選取回到頂部按鈕
  let backtotop = select(".back-to-top");
  if (backtotop) {
    /**
     * 當頁面捲動超過 100px 時，顯示「回到頂部」按鈕，否則隱藏
     */
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };

    // 頁面載入完成時檢查是否該顯示按鈕
    window.addEventListener("load", toggleBacktotop);
    // 當頁面滾動時也執行判斷
    onscroll(document, toggleBacktotop);
  }

  // 綁定手機版選單開關按鈕點擊事件
  on("click", ".mobile-nav-toggle", function (e) {
    // 切換主導覽列的樣式（進入 mobile 模式）
    select("#navbar").classList.toggle("navbar-mobile");
    // 切換圖示（選單開關的 icon）
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  // 當手機版選單中點擊有下拉選單的連結時，切換子選單顯示狀態
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        // 防止預設跳轉行為（避免直接導向 href）
        e.preventDefault();
        // 切換下拉選單的展開與收合
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true // 表示選取所有符合的 dropdown > a 元素
  );
})();
