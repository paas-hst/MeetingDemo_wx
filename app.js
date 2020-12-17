const HstWxRtcEngine = require("./lib/HstWxRtcEngine")

//app.js
App({
  /**
   * 生命周期函数--监听App加载
   */
  onLaunch: function () {
    var self = this

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              self.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (self.userInfoReadyCallback) {
                self.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    // 监听网络状态变化
    wx.onNetworkStatusChange(function (res) {
      console.log("网络类型发生变化，当前网络类型：", res.networkType);

      self.globalData.network.isConnected = res.isConnected;
      self.globalData.network.type = res.networkType;

      if (!res.isConnected) { // 无网络连接
        wx.showToast({
          title: '没有网络，请检查网络连接',
          icon: 'none',
          duration: 2500
        });
      } else {
        wx.showToast({
          title: '网络类型发生变化，当前网络类型：' + res.networkType,
          icon: 'none',
          duration: 2500
        });
      }
    })    
  },

  /**
   * 生命周期函数--监听App显示
   */
  onShow() {
    console.log('app show');

    // 创建RTC引擎
    this.hstRtcEngine = new HstWxRtcEngine();
    this.hstRtcEngine.init().then(()=>{
      console.log("Init rtc engine success.")
    }).catch(()=>{
      console.warn("Init rtc engine failed!")
    })
  },

  /**
   * 生命周期函数--监听App隐藏
   */
  onHide() {
    console.log('app hide');
  },

  // 好视通RTC引擎
  hstRtcEngine: null,
  
  // 好视通相关数据
  hstData: {
    appId: null,
    appSecret: null,
    userId: null,
    groupId: null,
    srvAddress: null
  },

  // 腾讯相关数据
  txData: {
    roomId: null,
    serverRoomId: null,
    userSig: null,
    sdkAppId: null,
    accountType: null,
    privateMapKey: null,
  },

  // 小程序相关数据
  globalData: {
    userInfo: null,
    network: {
      isConnected: false,
      type: 'none'
    }
  }
})
