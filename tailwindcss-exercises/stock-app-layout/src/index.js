import "./index.css";

//!-------------------------------------------------------股票價格區塊
function renderStockPrice(name, price, upDown) {
  const stockPrice = `
  <div class="flex-none box-border mr-4 p-4 flex flex-col justify-between w-[200px] h-[100px] bg-card shadow-2xl rounded-md">
    <p class="text-white text-xl font-bold">${name}</p>
    <p class="flex justify-between">
      <span class="text-white">NTD ${price}</span>
      <span class="text-red-500">${upDown}</span>
    </p>
  </div>
  `;
  return stockPrice;
}

function renderStockPriceBlock() {
  const stockPriceBlock = document.querySelector("#stockPriceBlock");
  let priceArr = [
    {
      name: "TPE:00878",
      price: "17.03",
      upDown: "+0.29%",
    },
    {
      name: "TPE:00692",
      price: "29.28",
      upDown: "+0.65%",
    },
    {
      name: "TPE:006208",
      price: "67.70",
      upDown: "+0.67%",
    },
    {
      name: "TPE:0050",
      price: "117.60",
      upDown: "+0.73%",
    },
    {
      name: "TPE:0056",
      price: "28.79",
      upDown: "+0.42%",
    },
    {
      name: "TPE:00900",
      price: "10.91",
      upDown: "+0.37%",
    },
  ];
  let htmlStr = "";
  priceArr.forEach((stock) => {
    htmlStr = htmlStr + renderStockPrice(stock.name, stock.price, stock.upDown);
  });
  stockPriceBlock.innerHTML = htmlStr;
}
renderStockPriceBlock();

//!-------------------------------------------------------引入TradingView API
new TradingView.MediumWidget({
  symbols: [
    ["Apple", "AAPL|1D"],
    ["Google", "GOOGL|1D"],
    ["Microsoft", "MSFT|1D"],
    ["AMD", "NASDAQ:AMD|1D"],
    ["Nvidia", "NASDAQ:NVDA|1D"],
    ["Intel", "NASDAQ:INTC|1D"],
  ],
  chartOnly: false,
  width: "100%",
  height: "100%",
  locale: "zh_TW",
  colorTheme: "dark",
  autosize: true,
  showVolume: false,
  hideDateRanges: false,
  scalePosition: "right",
  scaleMode: "Percentage",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
  noTimeScale: false,
  valuesTracking: "1",
  chartType: "line",
  fontColor: "#787b86",
  gridLineColor: "rgba(240, 243, 250, 0.06)",
  backgroundColor: "rgba(255, 255, 255, 0)",
  lineWidth: 3,
  container_id: "tradingview_03a59",
});

//!-------------------------------------------------------股票交易紀錄
function renderStockHistory(name, price, state, amount, date) {
  const stockHistory = `
  <tr class="h-[40px]">
    <td class="w-1/5 text-center">${name}</td>
    <td class="w-1/5 text-center">${price} NTD</td>
    <td class="w-1/5 text-center">${state}</td>
    <td class="w-1/5 text-center">${amount}股</td>
    <td class="w-1/5 text-center">${date}</td>
  </tr>
  `;
  return stockHistory;
}

function renderHistoryBlock() {
  const history = document.querySelector("#history");
  let historyArr = [
    {
      name: "TPE:00900",
      price: "10.91",
      state: "買入",
      amount: "10000",
      date: "2022/08/31 12:30:10",
    },
    {
      name: "TPE:2603",
      price: "79.5",
      state: "賣出",
      amount: "6000",
      date: "2022/07/01 09:53:23",
    },
    {
      name: "TPE:2603",
      price: "206",
      state: "買入",
      amount: "6000",
      date: "2022/07/02 10:13:53",
    },
    {
      name: "TPE:2330",
      price: "683",
      state: "買入",
      amount: "3000",
      date: "2022/01/17 13:03:03",
    },
    {
      name: "TPE:2498",
      price: "1197",
      state: "買入",
      amount: "1000",
      date: "2011/04/22 10:23:03",
    },
  ];

  let htmlStr = "";
  historyArr.forEach((stock) => {
    htmlStr =
      htmlStr +
      renderStockHistory(
        stock.name,
        stock.price,
        stock.state,
        stock.amount,
        stock.date
      );
  });
  history.innerHTML = htmlStr;
}
renderHistoryBlock();
//!-------------------------------------------------------財經新聞列表
function renderNews(title, content) {
  const stockNews = `
  <div class="mt-4">
    <a href="#" class="text-gray-300 font-bold mt-4">${title}</a>
    <p class="text-gray-500 text-sm">${content}</p>
  </div>
`;
  return stockNews;
}

function renderNewsBlock() {
  const newsList = document.querySelector("#newsList");
  let newsArr = [
    {
      title: "修但幾勒！別掏錢買iPhone 14 他曝3關鍵「再等1年」換iPhone 15",
      content:
        "蘋果（Apple）將於台灣時間9月8日凌晨1點舉辦秋季發表會，預期將推出iPhone 14系列",
    },
    {
      title: "富邦金痛失金融股王寶座 被新光產超越 今面臨保衛戰",
      content:
        "富邦金（2881）金融股王寶座一向穩健，但今年上半年受到市場波動、防疫險、淨值下滑等影響",
    },
    {
      title: "魏哲家狠酸死敵3奈米技術 網喊不妙：以前根本無視對方",
      content:
        "晶圓代工龍頭廠台積電總裁魏哲家昨(30)日出席年度技術論壇時表示，3奈米今年下半年會開始放量生產",
    },
    {
      title: "AMD Ryzen 7000 處理器正式發表，預計 9 月底上市",
      content:
        "一如先前預告的，AMD 稍早正式發表了 Ryzen 7000 系列桌機處理器，與 Intel 先一步推出的 12 代 Core i 處理器打對台",
    },
  ];

  let htmlStr = "";
  newsArr.forEach((news) => {
    htmlStr = htmlStr + renderNews(news.title, news.content);
  });

  newsList.innerHTML = htmlStr;
}
renderNewsBlock();
