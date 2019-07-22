const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    template: 'float',
    webrtcroomComponent: null,
    userID: '', // 用户实际输入的用户id
    serverUserID: '', // 服务器上的用户id
    groupID: '', // 用户实际输入的房间id
    roomID: '', // gw服务器返回的房间id
    serverRoomID: '', //  rtcserver返回的roomID
    roomName: '', // 房间名称
    userSig: '',
    sdkAppID: '',
    privateMapKey: '',
    beauty: 5,
    muted: false,
    debug: false,
    frontCamera: true,
    comment: [],
    autoplay: true,
    enableCamera: true,
    userNum: [], // 用于记录房间里的用户数量，来动态改变template,
    timer: null // 获取用户数量的定时器
  },

  /**
   * 监听房间事件
   */
  onRoomEvent(e) {
    var self = this;
    switch (e.detail.tag) {
      case 'error':
        if (this.data.isErrorModalShow) {
          return;
        }
        if (e.detail.code === -10) { // 进房失败，一般为网络切换的过程中
          this.data.isErrorModalShow = true;
          wx.showModal({
            title: '提示',
            content: e.detail.detail,
            confirmText: '重试',
            cancelText: '退出',
            success: function (res) {
              self.data.isErrorModalShow = false
              if (res.confirm) {
                self.joinRoom();
              } else if (res.cancel) { //
                self.goBack();
              }
            }
          });
        } else {
          // 在房间内部才显示提示
          console.error("error:", e.detail.detail);
          var pages = getCurrentPages();
          console.log(pages, pages.length, pages[pages.length - 1].__route__);
          if (pages.length > 1 && (pages[pages.length - 1].__route__ == 'pages/webrtc-room-demo/room/room')) {
            this.data.isErrorModalShow = true;
            wx.showModal({
              title: '提示',
              content: e.detail.detail,
              showCancel: false,
              complete: function () {
                self.data.isErrorModalShow = false
                pages = getCurrentPages();
                if (pages.length > 1 && (pages[pages.length - 1].__route__ == 'pages/webrtc-room-demo/room/room')) {
                  wx.showToast({
                    title: `code:${e.detail.code} content:${e.detail.detail}`
                  });
                  wx.navigateBack({
                    delta: 1
                  });
                }
              }
            });
          }
        }
        break;
    }
  },

  /**
   * 开关摄像头
   */
  openCamera: function () {
    let self = this

    console.log('点击摄像头');
    this.data.enableCamera = !this.data.enableCamera;
    this.setData({
      enableCamera: this.data.enableCamera
    });

    // 只广播视频
    if (self.data.enableCamera) {
      app.$hstEngine.openVideo()
    } else {
      app.$hstEngine.closeVideo()
    }
  },

  /**
   * 切换摄像头
   */
  changeCamera: function () {
    this.data.webrtcroomComponent.switchCamera();
    this.setData({
      frontCamera: !this.data.frontCamera
    })
  },

  /**
   * 设置美颜
   */
  setBeauty: function () {
    this.data.beauty = (this.data.beauty == 0 ? 5 : 0);
    this.setData({
      beauty: this.data.beauty
    });
  },

  /**
   * 切换是否静音
   */
  changeMute: function () {
    let self = this
    self.data.muted = !self.data.muted
    self.setData({
      muted: self.data.muted
    });

    if (self.data.muted) {
      console.log('关闭声音');
      app.$hstEngine.mute()
    } else {
      console.log('开启声音');
      app.$hstEngine.unmute()
    }
  },

  /**
   * 是否显示日志
   */
  // showLog: function () {
  //   this.data.debug = !this.data.debug;
  //   this.setData({
  //     debug: this.data.debug
  //   });
  // },

  /**
   * 模板template初始化
   */
  initTemplate() {
    let self = this;
    if (self.data.userNum < 2) {
      self.setData({
        template: 'float'
      })
    } else if (self.data.userNum < 4) {
      self.setData({
        template: 'grid'
      })
    } else {
      self.setData({
        template: 'mine'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options', options);
    let self = this
    self.data.webrtcroomComponent = self.selectComponent('#webrtcroom');

    self.timer = setInterval(() => {
      self.setData({
        userNum: app.$hstEngine.getUserNum()
      });
      self.initTemplate();
    }, 500);

    this.setData({
      userID: options.userID,
      serverUserID: options.serverUserID,
      groupID: options.groupID,
      roomID: options.roomID,
      serverRoomID: options.serverRoomID,
      roomName: options.roomName,
      sdkAppID: options.sdkAppID,
      userSig: options.userSig,
      privateMapKey: options.privateMapKey
    });

    self.data.webrtcroomComponent.start();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 设置房间标题
    wx.setNavigationBarTitle({
      title: this.data.roomName
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var self = this;
    console.log('room.js onShow');
    // 保持屏幕常亮
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var self = this;
    console.log('room.js onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    // TODO groupID为空
    console.log('room.js onUnload');
    let self = this
    clearInterval(self.timer)
    app.$hstEngine.leave(self.data.groupID, self.data.serverUserID, function () {
      console.log('退出成功');
    }, function (res) {
      console.log('退出失败', res);
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  onBack: function () {
    wx.navigateBack({
      delta: 1
    });
  },
})
