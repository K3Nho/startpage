let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Guangzhou',
    scale: "C",
  },
  clock: {
    format: "h:i",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://shared.oaifree.com/?temporary-chat=true",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "KENHO",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [{
        name: "Media",
        links: [
          {
            name: "bilibili",
            url: "https://www.bilibili.com",
            icon: "brand-bilibili",
            icon_color: "#7daea3",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "linuxdo",
            url: "https://linux.do/new",
            icon: "brand-debian",
            icon_color: "#a9b665",
          },
          {
            name: "ns",
            url: "https://www.nodeseek.com",
            icon: "server-2",
            icon_color: "#89b482",
          },
          {
            name: "v2ex",
            url: "https://v2ex.com/?tab=hot",
            icon: "code",
            icon_color: "#e78a4e",
          },
          {
            name: "x",
            url: "https://x.com",
            icon: "brand-x",
            icon_color: "#d3869b",
          },
        ],
      },
          {
            name: "Workspace",
            links: [
          {
            name: "github",
            url: "https://github.com/",
            icon: "brand-github",
            icon_color: "#7daea3",
          },
          {
            name: "gmail",
            url: "https://mail.google.com/",
            icon: "brand-gmail",
            icon_color: "#ea6962",
          },
          {
            name: "qmail",
            url: "https://mail.qq.com",
            icon: "mail",
            icon_color: "#a9b665",
          },
          {
            name: "lmsys",
            url: "https://chat.lmsys.org/?leaderboard",
            icon: "brand-twitch",
            icon_color: "#e78a4e",
          },
          {
            name: "gpt",
            url: "https://shared.oaifree.com/?temporary-chat=true",
            icon: "brand-openai",
            icon_color: "#d3869b",
          },
        ],
      },
          {
            name: "Crypto",
            links: [
          {
            name: "coinmarketcap",
            url: "https://coinmarketcap.com/zh/watchlist/",
            icon: "brand-coinbase",
            icon_color: "#7daea3",
          },
          {
            name: "binance",
            url: "https://www.binance.com/zh-CN/my/wallet/account/overview",
            icon: "brand-binance",
            icon_color: "#e78a4e",
          },
          {
            name: "mexc",
            url: "https://www.mexc.com/zh-CN/assets/spot",
            icon: "coin-monero",
            icon_color: "#a9b665",
          },
          {
            name: "okx",
            url: "https://www.okx.com/zh-hans/balance/funding",
            icon: "currency-ethereum",
            icon_color: "#d3869b",
          },
          ],
        },
      ],
    },        
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
