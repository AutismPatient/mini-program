// components/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    select_color: "#07c160",
    list:[
      {
        "pagePath": "pages/index/index",
        "iconPath": "images/食堂.png",
        "selectedIconPath": "images/食堂_s.png",
        "text": "组件"
      },
      {
        "pagePath": "pages/logs/logs",
        "iconPath": "images/饮料.png",
        "selectedIconPath": "images/饮料_s.png",
        "text": "接口"
      }
      // {
      //   path: "/pages/index",
      //   icon: "/images/食堂.png",
      //   selectIcon: "/images/食堂_s.png",
      //   text: "首页",
      // },
      // {
      //   path: "",
      //   icon: "/images/饮料.png",
      //   selectIcon: "/images/饮料_s.png",
      //   text: "奶茶",
      // },
      // {
      //   path: "",
      //   icon: "/images/订单.png",
      //   selectIcon: "/images/订单_s.png",
      //   text: "订单",
      // },
      // {
      //   path: "/pages/logs",
      //   icon: "/images/棋牌.png",
      //   selectIcon: "/images/棋牌_s.png",
      //   text: "日志",
      // }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectedTab(e){
      const data = e.target.dataset
      const path = data.path
      wx.switchTab({
        url: path,
      })
      this.setData({
        selected : data.index
      })
    }
  }
})
