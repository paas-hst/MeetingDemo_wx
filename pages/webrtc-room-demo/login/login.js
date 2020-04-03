import HstWxEngine from "../../../lib/HstWxEngine";

const app = getApp();

Page({
  data: {
    showSetting: false,
    access: false, // 是否有登录权限
    groupID: '',
    roomID: '',
    userID: '',
    reUserID: '',
    userName: '',
    appID: '',
    appSecret: '',
    token: '',
    isDefault: true,
    address: '',
    roomList: [],
    tapTime: '',
    roomName: '好视通云通信',
    isCreate: true,
  },

  onLoad() {
    console.log('登录页onLoad');

    let self = this
    let is_private = 0
    wx.request({
      url: 'https://access.paas.hst.com/server/address?appType=15',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log('res', res);
        app.$hstEngine = new HstWxEngine(res.data.result)
        self.getRoomList() // 先拉一下房间列表
        self.initSetting() // 初始化引擎，获取登录权限
      }
    })
  },

  joinGroup() {
    let self = this

    // 防止两次点击操作间隔太快
    var nowTime = new Date();
    if (nowTime - this.data.tapTime < 1000) {
      return;
    }

    if (!self.data.appID || !self.data.appSecret) {
      wx.showModal({
        title: '提示',
        content: '未获取授权，请前往设置',
        confirmText: '设置',
        success(res) {
          if (res.confirm) {
            self.switchSetting()
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      })
      return
    }

    if (!self.data.groupID) {
      wx.showToast({
        title: '请输入Group ID',
        icon: 'none',
        duration: 2000
      })
      return
    }

    if (!self.data.userID) {
      wx.showToast({
        title: '请输入User ID',
        icon: 'none',
        duration: 2000
      })
      return
    }

    let roomIndex = this.isRoomIDExists(self.data.groupID)
    if (roomIndex === -1) {
      self.setData({
        isCreate: true
      })
    } else {
      self.setData({
        isCreate: false,
        roomName: self.data.roomList[roomIndex]['roomName']
      })
    }


    app.$hstEngine.join(self.data.isCreate, self.data.groupID, self.data.userID, function (res) {
      console.log('join res', res);
      self.setData({
        roomID: res.roomID
      })

      if (self.data.roomID) {
        let url = '../room/room?&roomID=' + self.data.roomID + '&groupID=' + self.data.groupID + '&serverRoomID=' + res.serverRoomID + '&roomName=' + self.data.roomName + '&userID=' + self.data.userID + '&serverUserID=' + res.serverUserID + '&sdkAppID=' + res.sdkAppID + '&userSig=' + res.userSig + '&privateMapKey=' + res.privateMapKey;
        wx.navigateTo({
          url: url
        })
        wx.showToast({
          title: '进入房间',
          icon: 'success',
          duration: 1000
        })
        // 清空输入框
        // self.setData({
        //   groupID: '',
        //   userID: ''
        // })
      }
    }, function (res) {
      if (res == 1000008) {
        wx.showModal({
          title: '提示',
          content: '进入房间失败，用户已登录',
          showCancel: false
        })
      } else if (res == 1000003) {
        wx.showModal({
          title: '提示',
          content: '进入房间失败，设置信息不正确',
          confirmText: '前往设置',
          success(res) {
            if (res.confirm) {
              self.switchSetting()
            }
          }
        })
      } else if (res == 1000007) {
        wx.showModal({
          title: '提示',
          content: '进入房间失败，余额不足',
          showCancel: false
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '登录失败，请重试',
          showCancel: false
        })
      }
    })

    self.setData({
      'tapTime': nowTime
    });
  },

  /**
   * @uses 在控制台输出房间列表， 用于测试
   * @name showListInConsole
   */
  showListInConsole: function () {
    console.log('roomList', this.data.roomList)
  },

  /**
   * @uses 判断房间是不是存在
   * @name isRoomIDExists
   * @param roomID
   * @return int
   */
  isRoomIDExists: function (roomID) {
    let index = 0;
    let roomList = this.data.roomList
    for (let i = 0; i < roomList.length; i++) {
      if (roomList[i]['roomID'] === roomID) {
        return i
      }
    }
    return -1
  },

  // 拉取房间列表
  getRoomList: function () {
    var self = this;
    app.$hstEngine.getRoomList(function (res) {
      console.log('拉取房间列表成功:', res);
      if (res.data && res.data.rooms) {
        self.setData({
          roomList: res.data.rooms
        });
      }
    }, function (res) {});
  },

  // 发送鉴权消息
  sendAccessMsg() {
    let self = this

    app.$hstEngine.init(self.data.appID, self.data.token, function () {
      console.log('获取登录权限');
      self.setData({
        access: true
      })
      wx.showToast({
        title: '获取权限成功',
        icon: 'success',
        success() {
          self.setData({
            showSetting: false
          })
        }
      })
    }, function (res) {
      console.log('错误码', res);
      if (res == 1000000) {
        wx.showModal({
          title: '提示',
          content: 'token有误，获取权限失败',
          confirm: '重新输入',
          showCancel: false,
          success: function () {
            return
          }
        })
      } else if (res == 1000001) {
        wx.showModal({
          title: '提示',
          content: 'appId有误，获取权限失败',
          confirm: '重新输入',
          showCancel: false,
          success: function () {
            return
          }
        })
      } else if (res == 1000002) {
        wx.showModal({
          title: '提示',
          content: '你的应用已下线，获取权限失败',
          confirm: '重新输入',
          showCancel: false,
          success: function () {
            return
          }
        })
      } else if (res == 1000010) {
        wx.showModal({
          title: '提示',
          content: '该产品不支持微信，获取权限失败',
          confirm: '重新输入',
          showCancel: false,
          success: function () {
            return
          }
        })
      }
    })

  },

  initSetting() {
    let self = this
    self.getLoginInfo() // 获取已存储的access信息
    console.log('self.data.appID', self.data.appID);
    if (!self.data.appID || !self.data.token) {
      self.setData({
        showSetting: true
      })
    } else {
      self.sendAccessMsg()
    }
  },

  goBack() {
    this.switchSetting();
  },

  switchSetting() {
    this.setData({
      showSetting: !this.data.showSetting
    })
    this.getLoginInfo()
  },

  getLoginInfo() {
    let info = wx.getStorageSync('loginInfo');
    if (info && !this.data.appID) {
      this.setData({
        appID: info.appID,
        appSecret: info.appSecret,
        token: info.token
      })
    }
  },

  storeSetting() {
    let self = this

    wx.request({
      url: 'https://paas-token-gen.haoshitong.com/generate/token',
      method: 'POST',
      data: {
        appId: self.data.appID,
        appSecret: self.data.appSecret
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log('res', res);
        self.setData({
          token: res.data.result
        })
        console.log('self.data.token', self.data.token);
        wx.setStorageSync('loginInfo', {
          appID: self.data.appID,
          token: self.data.token,
          appSecret: self.data.appSecret
        })

        self.sendAccessMsg()

        if (self.data.access) {
          self.switchSetting();
        }
      }
    })

  },

  /* 这里放input输入事件 */
  bindAppIDInput(e) {
    this.setData({
      appID: e.detail.value
    })
  },

  bindAppSecretInput(e) {
    this.setData({
      appSecret: e.detail.value
    })
  },

  bindGroupIDInput(e) {
    this.setData({
      groupID: e.detail.value
    })
  },

  bindUserIDInput(e) {
    this.setData({
      userID: e.detail.value
    })
  },

  bindDefault(e) {
    this.setData({
      isDefault: !this.data.isDefault
    })
  },

  bindAddressInput(e) {
    this.setData({
      address: e.detail.value
    })
  }
})
