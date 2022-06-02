const app = getApp();

Page({
  data: {
    showSetting: false,
    userId: "",
    nickName: "",
    appId: "925aa51ebf829d49fc98b2fca5d963bc", // 默认APP ID
    appSecret: "d52be60bb810d17e",             // 默认APP Secret
    token: "",
    isAppDefault: true,
    isSrvDefault: true,
    srvAddress: "",
    roomList: [],
    tapTime: "",
    roomName: '好视通云通信'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log("login.js onLoad")
    this.initSetting();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("login.js onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("login.js onShow");
    // 保持屏幕常亮
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("login.js onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("login.js onUnload");
  },

  /**
   * 登录PaaS平台
   */
  login() {
    let self = this

    // 防止两次点击操作间隔太快
    var nowTime = new Date();
    if (nowTime - this.data.tapTime < 1000) {
      return;
    }

    // 检查是否输入了User ID
    if (!self.data.userId) {
      wx.showToast({title: '请输入User ID', icon: 'none', duration: 2000});
      return
    }

    // 检查是否配置了App信息
    if (!self.data.appId || !self.data.appSecret) {
      wx.showToast({title: '请先配置App ID和App Secret', icon: 'none', duration: 2000});
      return
    }

    // 保存信息到全局
    app.hstData.userId = self.data.userId;
    app.hstData.appId = self.data.appId;
    app.hstData.appSecret = self.data.appSecret;

    wx.showLoading({title: '登录中...'})

    // 初始化RTC引擎并登录到好视通平台
    let loginOpts = {
      accessUrl: self.data.srvAddress,
      appId: self.data.appId,
      companyId: "",
      token: self.data.token,
      userId: self.data.userId,
      mutexType: "wechat",
      forceLogin: false,
      extendInfo: self.data.nickName
    }
    app.hstRtcEngine.login(loginOpts).then(param => {
      console.log("Login success.");
      if (param) {
        app.txData.sdkAppId = param.sdkAppId;
        app.txData.userSig = param.userSig;
        app.txData.accountType = param.accountType;
        wx.navigateTo({url: '../online/online'});
      }
      wx.hideLoading()
    }).catch(error => {
      console.error("Login failed!" + error);
      wx.hideLoading()
    })

    self.setData({
      'tapTime': nowTime
    });
  },

  /**
   * 初始化配置信息
   */
  initSetting() {
    let self = this;
    self.getLoginInfo();
    if (!self.data.appId || !self.data.token) {
      self.setData({showSetting: true});
    } else {
      self.setData({showSetting: false});
    }
  },

  /**
   * 控制是否显示配置界面
   */
  switchSetting() {
    this.setData({showSetting: !this.data.showSetting});
  },

  /**
   * 从storage加载配置信息
   */
  getLoginInfo() {
    let info = wx.getStorageSync('loginInfo');
    if (info) {
      this.setData({
        isAppDefault: info.isAppDefault || true,
        appId: info.appId || null,
        appSecret: info.appSecret || null,
        token: info.token || null,
        isSrvDefault: info.isSrvDefault || true,
        srvAddress: info.srvAddress || null
      })
    } else {
      console.warn("Get loginInfo failed!");
    }
  },

  /**
   * 保存App ID配置
   * @param {*} e
   */
  bindAppIDInput(e) {
    this.setData({appId: e.detail.value});
  },

  /**
   * 保存App Secret配置
   * @param {*} e
   */
  bindAppSecretInput(e) {
    this.setData({appSecret: e.detail.value});
  },

  /**
   * 保存输入的User ID
   * @param {*} e
   */
  bindUserIDInput(e) {
    this.setData({userId: e.detail.value});
  },

  /**
   * 保存是否使用默认服务器配置开关
   * @param {*} e
   */
  bindSrvDefault(e) {
    this.setData({isSrvDefault: !this.data.isSrvDefault});
  },

  /**
   * 保存是否使用默认APP配置开关
   * @param {*} e
   */
  bindAppDefault(e) {
    this.setData({isAppDefault: !this.data.isAppDefault});
  },

  /**
   * 保存服务器配置
   * @param {*} e
   */
  bindAddressInput(e) {
    this.setData({srvAddress: e.detail.value});
  },

  /**
   * 保存输入的用户昵称
   * @param {*} e
   */
  bindNickNameInput(e) {
    this.setData({nickName: e.detail.value});
  },

  confirmSetting(e) {
    let self = this;
    wx.showLoading({
      title: '获取token中...',
    })
    wx.request({
      url: 'https://paas-token-gen.haoshitong.com/generate/token',
      method: 'POST',
      data: {
        appId: self.data.appId,
        appSecret: self.data.appSecret
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading()
        console.log('Get token response：', res);
        if (res.data.code == 0) {
          self.setData({token: res.data.result});
          wx.setStorageSync('loginInfo', {
            appId: self.data.appId,
            token: self.data.token,
            appSecret: self.data.appSecret,
            srvAddress: self.data.srvAddress,
            isDefault: self.data.isDefault
          });
          // 只有获取Token后才跳转到登录页
          self.switchSetting();
        } else {
          wx.hideLoading()
          wx.showToast({
            title: '获取Token失败：' + res.data.message,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function(res) {
        wx.hideLoading()
        wx.showToast({
          title: '获取Token失败，请确认App信息是否填写正确或网络是否正常！',
          icon: 'none',
          duration: 2000
        })
      }
    });
  }
})
