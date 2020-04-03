import HstWxEngine from "./lib/HstWxEngine";

//app.js
App({
  onLaunch: function () {
    var self = this

    // 引擎初始化
    wx.request({
      url: 'https://access.paas.hst.com/server/address?appType=15',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log('res', res);
        self.$hstEngine = new HstWxEngine(res.data.result)
      }
    })

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
        // wx.showModal({
        //   title: '提示',
        //   content: '网络连接中断，请重新连接',
        //   confirmText: '返回',
        //   showCancel: false,
        //   success(res) {
        //     if (res.confirm) {
        //       wx.reLaunch({
        //         url: 'pages/webrtc-room-demo/login/login'
        //       })
        //     }
        //   }
        // })
      } else {
        wx.showToast({
          title: '网络类型发生变化，当前网络类型：' + res.networkType,
          icon: 'none',
          duration: 2500
        });
      }
    })

  },

  onShow() {
    let self = this
    console.log('app show');
    if (self.$hstEngine) {
      self.$hstEngine.ws.connectSocket()
      let info = wx.getStorageSync('loginInfo')
      console.log('info', info);
      self.$hstEngine.getAuthentication(info.appID, info.token, function () {
        console.log('获取权限成功');
      })

    }
  },

  onHide() {
    let self = this
    console.log('app hide');
    if (self.$hstEngine) {
      self.$hstEngine.ws.closeSocket()

    }
  },

  $hstEngine: null,

  globalData: {
    userInfo: null,
    network: {
      isConnected: false,
      type: 'none',
    }
  }
})
