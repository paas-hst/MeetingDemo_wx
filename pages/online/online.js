const app = getApp();
const OnlineType = app.hstRtcEngine.OnlineType

Page({
  data: {
    groupId: '',
    roomId: '',
    userId: '',
    inviteUsers: [],
    userName: '',
    roomList: [],
    tapTime: '',
    roomName: '好视通云通信',
    onlineUserList: [] // {userId:xxx, mutexType:xxx, customState:xxx, extendInfo:xxx}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let self = this;

    // 订阅事件
    app.hstRtcEngine.subEvent('onOnlineUserState', this.onOnlineUserState);
    app.hstRtcEngine.subEvent('onCommingInvite', this.onCommintInvite);

    // 获取全量在线用户列表
    app.hstRtcEngine.getOnlineUsers().then(param => {
      self.setData({onlineUserList: param.userInfo});
      console.log("Get online users success.");
    }).catch(error => {
      console.error("Get online users failed!");
    })

    this.setData({userId: app.hstData.userId})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("online.js onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 保持屏幕常亮
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("online.js onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    app.hstRtcEngine.logout().then(() => {
      console.log('登出成功');
      // 取消订阅事件
      app.hstRtcEngine.unsubEvent('onOnlineUserState');
    }).catch(() => {
      console.log('登出失败', res);
    })
  },

  /**
   * 用户上下线事件处理
   * @param {*} param 
   */
  onOnlineUserState(param) {
    let userList = this.data.onlineUserList;    
    if (param.state == OnlineType.ONLINE) { // 上线
      // 查找用户是否存在
      let findUser = null
      for (const user of userList) {
        if (user.userId == param.userId) {
          findUser = user
          break;
        }
      }
      // 用户已存在，则应该是不同mutex类型
      if (findUser) {
        findUser.onlineInfo.push({
          mutexType: param.mutexType,
          customState: param.customState,
          extendInfo: param.extendInfo
        })
      } else { // 新用户上线
        userList.push({
          userId: param.userId,
          onlineInfo: [{
            mutexType: param.mutexType,
            customState: param.customState,
            extendInfo: param.extendInfo
          }]
        });
      }
    } else { // 下线
      for (let i = 0; i < userList.length; i++) {
        if (userList[i].userId == param.userId) {
          if (userList[i].onlineInfo.length == 1) {
            userList.splice(i, 1);
          } else {
            // TODO: 多mutexType处理
          }
          break;
        }
      }
    }
    // 更新在线用户
    this.setData({onlineUserList: userList});
  },

  /**
   * 加入分组
   */
  joinGroup() {
    let self = this

    // 检查是否输入了Group ID
    if (!self.data.groupId) {
      wx.showToast({title: '请输入Group ID', icon: 'none', duration: 2000});
      return;
    } 

    // 加入分组
    wx.showLoading({title: '加入中...'})
    app.hstRtcEngine.joinGroup(self.data.groupId).then(param => {
      console.log("Join group success." + JSON.stringify(param));
      // 加入微信房间所需参数
      app.txData.privateMapKey = param.privateMapKey;
      app.txData.roomId = param.txRoomId;
      app.txData.serverRoomId = param.serverRoomId;
      app.txData.serverUserId = param.serverUserId;
      app.txData.sdkAppId = param.sdkAppId;
      app.txData.userSig = param.userSig;

      // 邀请选择的用户
      this.inviteSelectedUsers();

      // 加入分组成功进入房间页面
      wx.hideLoading()
      wx.navigateTo({url: '../room/room'});
    }).catch((err) => {
      console.error(err)
      wx.hideLoading()
      wx.showToast({title: '加入分组失败', icon: 'none', duration: 2000});
    });
  },

  /**
   * 保存输入的分组ID
   * @param {*} e 
   */
  bindGroupIdInput(e) {
    this.setData({groupId: e.detail.value});
  },

  /**
   * 选择呼叫用户
   * @param {*} e 
   */
  onSelectUser(e) {
    let selectedUsers = []
    e.detail.value.forEach(function(item, index, arr) {
      selectedUsers.push(item)
    })
    this.setData({inviteUsers: selectedUsers})
  },

  /**
   * 邀请用户参会
   */
  inviteSelectedUsers() {
    if (this.data.inviteUsers.length > 0) {
      let params = {
        seqId: parseInt(Math.random() * 1000),
        groupId: this.data.groupId,
        calleeInfo: [],
        extendInfo: "从微信小程序发起的邀请"
      }
      for (const user of this.data.inviteUsers) {
        params.calleeInfo.push(user)
      }
      app.hstRtcEngine.invite(params)
    } 
  },

  /**
   * 收到邀请处理
   */
  onCommintInvite(params) {
    let self = this
    let options = {
      seqId: params.seqId,
      groupId: params.groupId,
      operation: 0, // 接受
      extendInfo: ""
    }
    wx.showModal({
      cancelColor: 'cancelColor',
      title: '用户 ' + params.userId + ' 邀请你加入分组 ' + params.groupId,
      success(res) {
        if (res.confirm) {
          app.hstRtcEngine.replyInvite(options)
          self.setData({groupId: params.groupId})
          self.joinGroup()
        } else {
          options.operation = 1; // 拒绝
          app.hstRtcEngine.replyInvite(options)
        }
      }
    })
  }
})
