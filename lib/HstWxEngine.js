// let serverDomain = 'https://fspwxlite.haoshitong.com:8443/weapp/webrtc_room' // 测试用
let serverDomain = 'https://fspwxlite.hst.com:443/weapp/webrtc_room' // 线上用


class HstWxEngine {
  constructor(options) {
    console.log('创建SDK对象成功');
    let self = this
    self.groupID = ''
    self.roomID = ''
    self.serverRoomID = ''
    self.userID = ''
    self.serverUserID = ''
    self.sdkAppID = ''
    self.userSig = ''
    self.privateMapKey = ''
    self.heartBeatFailCount = 0
    self.isCreate = true
    self.isErrorModalShow = false
    self.members = []
    self.successMap = new Map()
    self.failMap = new Map()
    self.ws = new Websocket({
      url: options || 'wss://fspwxlite.haoshitong.com:8080',
      maxReconnectCount: 50,
      onMessage: function (res) {
        // console.log('message res', res)
        let tmp = res.data.toString()
        if (tmp === "{pong}") {
          return
        }
        let data = JSON.parse(tmp)
        // console.log('message data', data)

        // 10001：鉴权
        if (data.id == 10001) {
          if (data.result == 0) {
            // console.log('self.successMap', self.successMap);
            self.successMap.has('login') && self.successMap.get('login')();
          } else {
            self.failMap.has('login') && self.failMap.get('login')(data.result);
          }
        }

        // 14101：加入房间
        if (data.id == 14101) {
          if (data.result == 0) {
            // console.log('data', data);
            self.roomID = data.room_id
            self._transformUserID()

            if (self.successMap.has('join')) {
              wx.showToast({
                icon: 'none',
                title: '获取登录信息中'
              });
              webrtcroom.getLoginInfo(
                self.serverUserID,
                function (res) {
                  // console.log('res', res);
                  // self.data.userID = res.data.userID;
                  // wx.setStorageSync('webrtc_room_userid', self.data.userID);

                  self.sdkAppID = res.data.sdkAppID;
                  self.userSig = res.data.userSig;

                  if (self.isCreate) {
                    webrtcroom.createRoom(self.serverUserID, self.roomID, function (res) {
                      // console.log('创建房间的res', res);
                      self.privateMapKey = res.data.privateMapKey
                      self.serverRoomID = res.data.roomID
                      // self._sendHeartBeat(self.serverUserID, self.serverRoomID);

                      let tmpRes = {
                        roomID: self.roomID,
                        serverRoomID: self.serverRoomID,
                        serverUserID: self.serverUserID,
                        sdkAppID: self.sdkAppID,
                        userSig: self.userSig,
                        privateMapKey: self.privateMapKey,
                      }

                      self.successMap.get('join')(tmpRes)
                    });
                  } else {
                    webrtcroom.enterRoom(self.serverUserID, self.roomID, function (res) {
                      // console.log('创建房间的res', res);
                      self.privateMapKey = res.data.privateMapKey
                      self.serverRoomID = res.data.roomID
                      // self._sendHeartBeat(self.serverUserID, self.serverRoomID);

                      let tmpRes = {
                        roomID: self.roomID,
                        serverRoomID: self.serverRoomID,
                        serverUserID: self.serverUserID,
                        sdkAppID: self.sdkAppID,
                        userSig: self.userSig,
                        privateMapKey: self.privateMapKey,
                      }
                      self.successMap.get('join')(tmpRes)
                    });
                  }

                  self.openVideo()
                  self.unmute()
                },
                function (res) {
                  wx.showToast({
                    icon: 'none',
                    title: '获取登录信息失败，请重试',
                    complete: function () {
                      setTimeout(() => {
                        self.goBack();
                      }, 1500);
                    }
                  });
                });
            }
          } else {
            self.failMap.has('join') && self.failMap.get('join')(data.result);
          }
        }

        // 14103：退出分组
        if (data.id == 14103) {
          if (data.result == 0) {
            // console.log('self.members', self.members);
            self.members = []
            self.successMap.has('leave') && self.successMap.get('leave')();
          } else {
            self.failMap.has('leave') && self.failMap.get('leave')(data.result);
          }
        }

        // 14105: 广播媒体消息
        if (data.id == 14105) {
          self.successMap.has('publish') && self.successMap.get('publish')();
        }

        // 14106：服务器通知小程序端媒体广播消息
        if (data.id == 14106) {
          self._subscribeOne(self.groupID, self.userID, data)
        }

        // 14107：服务器通知小程序端媒体广播消息
        if (data.id == 14107) {
          self._subscribeMulti(self.groupID, self.userID, data.user_info)
        }
      }
    })
  }

  /**
   * 初始化对象
   * @param {String} appID
   * @param {String} token
   * @param {Function} success 成功的回调
   * @param {Function} fail 失败回调
   */
  init(appID, token, success, fail) {
    let self = this
    self.getAuthentication(appID, token, success, fail)
  }

  /**
   * 鉴权
   * @param {String} appID
   * @param {String} token
   * @param {Function} success 成功的回调
   * @param {Function} fail 失败回调
   */
  getAuthentication(appID, token, success, fail) {
    let self = this
    let msg = {
      business: 'BASE',
      id: 10000,
      app_id: appID,
      token: token || '',
      user_id: '001'
    }
    self.ws.sendSocketMessage(msg)
    success && self.successMap.set('login', success)
    fail && self.failMap.set('login', fail)
  }


  /**
   * 加入房间
   * @param {Boolean} isCreate 是否为房间的创建者
   * @param {String} groupID  用户输入的房间ID
   * @param {String} userID 用户输入的用户ID
   * @param {Function} success 成功的回调
   * @param {Function} fail 失败回调
   */
  join(isCreate, groupID, userID, success, fail) {
    let self = this
    self.isCreate = isCreate
    self.groupID = groupID
    self.userID = userID
    let msg = {
      business: 'GC',
      id: 14100,
      group_id: groupID,
      user_id: userID,
      join_group_times: 1
    }
    self.ws.sendSocketMessage(msg)
    success && self.successMap.set('join', success)
    fail && self.failMap.set('join', fail)
  }

  /**
   * 退出房间
   * @param {String} groupID
   * @param {String} userID
   * @param {Function} success 成功的回调
   * @param {Function} fail 失败回调
   */
  leave(groupID, userID, success, fail) {
    let self = this
    let msg = {
      business: 'GC',
      id: 14102
    }
    self.ws.sendSocketMessage(msg)
    success && self.successMap.set('leave', success)
    fail && self.failMap.set('leave', fail)
    webrtcroom.quitRoom(self.serverUserID, self.serverRoomID, function () {})
  }

  /**
   * 停止视频
   */
  closeVideo() {
    let self = this
    let msg = {
      business: 'GC',
      id: 14104,
      user_id: self.userID,
      media_type: 2,
      media_id: 'appdef_vid',
      operation: 0
    }

    self.ws.sendSocketMessage(msg)
  }

  /**
   * 恢复视频
   */
  openVideo() {
    let self = this
    let msg = {
      business: 'GC',
      id: 14104,
      user_id: self.userID,
      media_type: 2,
      media_id: 'appdef_vid',
      operation: 1
    }

    self.ws.sendSocketMessage(msg)
  }

  /**
   * 停止音频
   */
  mute() {
    let self = this
    let msg = {
      business: 'GC',
      id: 14104,
      user_id: self.userID,
      media_type: 1,
      media_id: 'appdef_mic',
      operation: 0
    }

    self.ws.sendSocketMessage(msg)
  }

  /**
   * 恢复音频
   */
  unmute() {
    let self = this
    let msg = {
      business: 'GC',
      id: 14104,
      user_id: self.userID,
      media_type: 1,
      media_id: 'appdef_mic',
      operation: 1
    }

    self.ws.sendSocketMessage(msg)
  }

  /**
   * 当服务器通知其他小程序端广播媒体消息时(14107) 本地小程序应该请求音视频
   */
  _subscribeMulti(groupID, userID, userArr) {
    let self = this
    let tmpMsg = {}
    userArr.forEach(user_info => {
      let mediaArr = user_info.media_info
      mediaArr.forEach(media_info => {
        tmpMsg = {
          business: 'SS',
          id: 18002,
          recv: 1,
          media_type: media_info.media_type,
          group_id: groupID,
          media_id: media_info.media_id,
          user_id: user_info.user_id
        }

        let type = media_info.media_type // 1是音频 2是视频
        let info = media_info.media_id + '_' + user_info.user_id

        if (type == 2) {
          if (!self.members.includes(info)) {
            self.members.push(info)
          }
        }
        self.ws.sendSocketMessage(tmpMsg)
      })
    })
  }

  /**
   * 当服务器通知其他小程序端广播媒体消息时(14106) 本地小程序应该请求音视频
   */
  _subscribeOne(groupID, userID, mediaInfo) {
    let self = this
    let tmpMsg = {}
    tmpMsg = {
      business: 'SS',
      id: 18002,
      recv: mediaInfo.operation,
      media_type: mediaInfo.media_type,
      group_id: groupID,
      media_id: mediaInfo.media_id,
      user_id: mediaInfo.user_id
    }

    let operation = mediaInfo.operation // 0是退出 1是加入
    let type = mediaInfo.media_type // 1是音频 2是视频
    let info = mediaInfo.media_id + '_' + mediaInfo.user_id

    if (type == 2) {
      if (!self.members.includes(info) && operation == 1) {
        self.members.push(info)
      }

      if (self.members.includes(info) && operation == 0) {
        let index = self.members.indexOf(info)
        self.members.splice(index, 1)
      }
    }
    self.ws.sendSocketMessage(tmpMsg)
  }

  /**
   * 停止订阅音视频
   */
  unsubscribe() {

  }

  getUserNum() {
    let self = this
    // console.log('self.members', self.members);
    return self.members.length
  }

  /**
   * 获取房间列表
   */
  getRoomList(success, fail) {
    webrtcroom.getRoomList(0, 20, success, fail)
  }

  /**
   * 发送心跳包
   */
  _sendHeartBeat(userID, roomID) {
    var self = this;
    // console.log('roomID', roomID);
    // 发送心跳
    webrtcroom.startHeartBeat(userID, roomID, function () {
      self.heartBeatFailCount = 0;
    }, function () {
      self.heartBeatFailCount++;
      // wx.navigateTo({
      //   url: '../roomlist/roomlist'
      // });
      // 2次心跳都超时，则认为真正超时了
      if (self.heartBeatFailCount > 2) {
        wx.hideToast();
        wx.showToast({
          icon: 'none',
          title: '心跳超时，请重新进入房间',
          complete: function () {
            setTimeout(() => {
              self.goBack();
            }, 1000);
          }
        });
      } else {
        wx.hideToast();
        wx.showToast({
          icon: 'none',
          title: '心跳超时，正在重试...'
        });
      }
    });
  }

  /**
   * 返回上一页
   */
  goBack() {
    // var pages = getCurrentPages();
    // if (pages.length > 1 && (pages[pages.length - 1].__route__ == 'pages/webrtc-room-demo/room/room')) {
    wx.navigateBack({
      delta: 1
    });
    // }
  }

  // 转化userID----规则
  _transformUserID() {
    let self = this
    self.serverUserID = self.roomID + '_' + self.userID

  }
}

class Websocket {

  /**
   * 创建websocket实例
   * options:
   * {
   *  url: "",
   *  heartbeatInterval: 10, // 心跳间隔，默认为10
   *  heartbeatMsg: {"CmdID":1005, "Data":{}},
   *
   *  onOpen: func,
   *  onMessage: func,
   *  onClose: func,
   *  onError: func,
   *  onFail: func,
   *
   *  maxReconnectCount, // 最大重连次数，默认为3
   *  maxBufferSize, // 缓存消息队列大小，默认为10
   *  reconnectInterval, //重连间隔，默认为5秒
   *
   *  log // 日志实例，默认为console
   *
   * }
   * @param {*} options
   */
  constructor(options) {
    // console.log('options.url', options.url);
    var self = this;
    self.url = options.url;
    self.heartbeatInterval = options.heartbeatInterval || 10;
    self.heartbeatMsg = options.heartbeatMsg || {};

    self.onOpen = options.onOpen || null;
    self.onMessage = options.onMessage || null;
    self.onClose = options.onClose || null;
    self.onError = options.onError || null;
    self.onFail = options.onFail;

    self.maxReconnectCount = options.maxReconnectCount || 3;

    self.maxBufferSize = options.maxBufferSize || 10;
    self.reconnectInterval = options.reconnectInterval || 5; // 重连间隔 5秒

    self.log = options.log || console;

    self.socketId = new Date().getTime() + '_' + Math.random();

    self.heartbeatTask = 0;
    self.reconnectTask = 0;

    self.socketMsgQueue = [];

    self.socketTask = {
      readyState: 3 //初始化为CLOSED状态
    };

    self.needReconnect = true; // 是否需要重连
    self.curReconnectCount = 0; // 当前重连次数
    self.connectSocket()
  }

  /**
   * 连接socket
   */
  connectSocket() {
    this.connect(false);
  }

  /**
   * 当前连接状态为非OPEN，且非CONNECTING，就创建链接
   * isReconnect：是否是重连
   */
  connect(isReconnect) {
    var self = this;

    if (isReconnect) {
      self.log.info("=======================>websocket reconnect, 第 " + (self.curReconnectCount + 1) + " 次重连");
      self.curReconnectCount++;
      // 重连失败，则将错误往上层应用抛，放弃重连
      if (self.curReconnectCount > self.maxReconnectCount) {
        self.log.error("-----------------> reconnectd max count ");
        clearInterval(self.reconnectTask);
        if (typeof self.onFail === 'function') {
          self.onFail();
        }
        return;
      }
    } else {
      self.log.info("=======================>websocket.connect ", "self.socketTask: ", self.socketTask, "self.socketId: ", self.socketId);
    }

    if (self.socketTask.OPEN != self.socketTask.readyState && self.socketTask.readyState != self.socketTask.CONNECTING) {
      self.socketTask = wx.connectSocket({
        url: self.url
      });

      self.onSocketOpen(self.onOpen);
      self.onSocketMessage(self.onMessage);
      self.onSocketClose(self.onClose);
      self.onSocketError(self.onError);
    }
  }

  /**
   * socket.onOpen
   * 1，清除重连定时任务
   * 2，发送队列中的消息
   * 3，回调
   * 4，开始心跳
   */
  onSocketOpen(callback) {
    var self = this;
    self.socketTask.onOpen(function () {
      self.curReconnectCount = 0;
      clearInterval(self.reconnectTask);

      for (let i = 0; i < self.socketMsgQueue.length; i++) {
        var queueObj = self.socketMsgQueue[i];
        // 当前这个socketId的消息，才重发
        if (queueObj.socketId === self.socketId) {
          self.sendSocketMessage(queueObj.msg);
        }
      }
      self.socketMsgQueue = [];

      callback && callback();

      self.heartbeat();
    });
  }

  /**
   * onClose，异常关闭，则重连
   * event code 参见：https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
   */
  onSocketClose(callback) {
    var self = this;
    self.socketTask.onClose(function (event) {
      self.log.info("=======================>websocket.closed ", " event : ", event, " needReconnect : ", self.needReconnect);

      // 如果没有接收到错误码，设为异常错误
      if (event.code == undefined) {
        event.code = 1006;
      }

      //异常关闭，则重连
      if (event.code != 1005 && event.code != 1000 && self.needReconnect) {
        self.reconnect();
      }
      if (typeof callback === 'function') {
        callback();
      }
    });
  }

  /**
   * onMessage
   */
  onSocketMessage(callback) {
    var self = this;
    self.socketTask.onMessage(callback);
  }

  /**
   * 发送消息
   * 如果当前连接无效，则放入队列。
   */
  sendSocketMessage(msg) {
    var self = this;
    if (self.socketTask.readyState == self.socketTask.OPEN) {

      self.log.debug("sendSocketMessage : ", msg);

      self.socketTask.send({
        data: JSON.stringify(msg)
      });
    } else {
      if (self.socketMsgQueue.length <= self.maxBufferSize && msg != self.heartbeatMsg) {
        //self.log.info("=======================>websocket.连接已断，消息放入队列，当前队列大小：" + (self.socketMsgQueue.length + 1));
        var queueObj = {
          "socketId": self.socketId,
          "msg": msg
        };
        self.socketMsgQueue.push(queueObj);
      }
    }
  }

  /**
   * 1，清除心跳
   * 2，延时关闭socket，延时清除消息队列
   */
  closeSocket(options) {
    var self = this;
    clearInterval(self.heartbeatTask);
    self.closeReconnect('room exited normal');
    self.socketTask.close({
      code: 1000,
      reason: '正常关闭连接'
    });
  }

  /**
   * 心跳
   * 1，清除当前心跳任务
   * 2，开始心跳
   */
  heartbeat() {
    var self = this;
    clearInterval(self.heartbeatTask);
    self.heartbeatTask = setInterval(function () {

      self.sendSocketMessage(self.heartbeatMsg);

    }, self.heartbeatInterval * 1000);
  }

  /**
   * socket重连，每self.reconnectInterval秒重连一次
   */
  reconnect() {
    var self = this;
    self.log.info("=======================>websocket.连接异常关闭，将于 " + self.reconnectInterval + " 秒后开始第 " + (self.curReconnectCount + 1) + " 次重连。");
    clearInterval(self.reconnectTask);
    self.reconnectTask = setInterval(function () {
      self.connect(true);
    }, self.reconnectInterval * 1000);
  }

  onSocketError(callback) {
    var self = this;
    self.socketTask.onError(function (event) {
      self.log.info("=======================>websocket.onError ", " event: ", event);
      if (typeof callback === 'function') {
        callback(event);
      }
    });
  }

  /**
   * 关闭重连
   * event：事件描述。例如：app.onHide
   */
  closeReconnect(event) {
    var self = this;
    self.log.info("reconnect closed, event : ", event);
    this.needReconnect = false;
  }

  /**
   * 打开重连
   * evetn: 事件描述。例如：app.onShow
   */
  openReconnect(event) {
    var self = this;
    self.log.info("reconnect opened, event : ", event);
    self.needReconnect = true;
  }

  /**
   * 返回当前socket是否是open状态
   */
  isOpen() {
    var self = this;
    return self.socketTask.OPEN == self.socketTask.readyState;
  }

  isClosed() {
    var self = this;
    return self.socketTask.CLOSED == self.socketTask.readyState;
  }

  setUrl(url) {
    var self = this;
    self.url = url;
  }
}

var webrtcroom = {
  serverDomain: serverDomain,
  requestNum: 0,
  heart: '', // 判断心跳变量
  heartBeatReq: null,
  requestSeq: 0, // 请求id
  requestTask: [], // 请求task

  /**
   * [request 封装request请求]
   * @param {options}
   *   url: 请求接口url
   *   data: 请求参数
   *   success: 成功回调
   *   fail: 失败回调
   *   complete: 完成回调
   */
  request: function (options) {
    var self = this;
    self.requestNum++;
    var req = wx.request({
      url: self.serverDomain + options.url,
      data: options.data || {},
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      // dataType: 'json',
      success: function (res) {
        if (res.data.code) {
          console.error('服务器请求失败' + ', url=' + options.url + ', params = ' + (options.data ? JSON.stringify(options.data) : '') + ', 错误信息=' + JSON.stringify(res));
          options.fail && options.fail({
            errCode: res.data.code,
            errMsg: res.data.message
          })
          return;
        }
        options.success && options.success(res);
      },
      fail: function (res) {
        console.error('请求失败' + ', url=' + options.url + ', 错误信息=' + JSON.stringify(res));
        options.fail && options.fail(res);
      },
      complete: options.complete || function () {
        self.requestNum--;
        // console.log('complete requestNum: ',requestNum);
      }
    });
    self.requestTask[self.requestSeq++] = req;
    return req;
  },

  /**
   * [clearRequest 中断请求]
   * @param {options}
   */
  clearRequest: function () {
    var self = this;
    for (var i = 0; i < self.requestSeq; i++) {
      self.requestTask[i].abort();
    }
    self.requestTask = [];
    self.requestSeq = 0;
  },


  getLoginInfo: function (userID, success, fail) {
    var self = this;
    var data = {};
    if (userID) {
      data.userID = userID;
    }
    self.request({
      url: '/get_login_info',
      data: data,
      success: success,
      fail: fail
    })
  },

  getRoomList: function (index, count, success, fail) {
    var self = this;
    self.request({
      url: '/get_room_list',
      data: {
        index: index,
        count: count,
        roomType: 'trtc'
      },
      success: success,
      fail: fail
    })
  },

  createRoom: function (userID, roomInfo, success, fail) {
    // console.log('roomInfo', roomInfo);
    var self = this;
    self.request({
      url: '/create_room',
      data: {
        userID: userID,
        roomInfo: roomInfo,
        roomType: 'trtc'
      },

      success: function (res) {
        success && success(res);
      },

      fail: fail
    });
  },

  enterRoom: function (userID, roomID, success, fail) {
    var self = this;
    self.request({
      url: '/enter_room',
      data: {
        userID: userID,
        roomID: roomID
      },
      success: function (res) {
        success && success(res);
      },
      fail: fail
    })
  },

  quitRoom: function (userID, roomID, success, fail) {
    var self = this;
    self.request({
      url: '/quit_room',
      data: {
        userID: userID,
        roomID: roomID
      },
      success: success,
      fail: fail
    });
    // self.stopHeartBeat();
  },

  startHeartBeat: function (userID, roomID, success, fail) {
    var self = this;
    self.heart = '1';
    self.heartBeat(userID, roomID, success, fail);
  },

  stopHeartBeat: function () {
    var self = this;
    self.heart = '';
    if (self.heartBeatReq) {
      console.log('停止心跳');
      self.heartBeatReq.abort();
      self.heartBeatReq = null;
    }
  },

  heartBeat: function (userID, roomID, success, fail) {
    var self = this;
    if (!self.heart) {
      self.clearRequest();
      return;
    }
    self.heartBeatReq = self.request({
      url: '/heartbeat',
      data: {
        userID: userID,
        roomID: roomID
      },
      success: function (res) {
        if (self.heart) {
          console.log('心跳成功');
          success && success(res);
          setTimeout(() => {
            self.heartBeat(userID, roomID, success, fail);
          }, 7000);
        }
      },
      fail: function (res) {
        fail && fail(res);
        if (self.heart) {
          setTimeout(() => {
            self.heartBeat(userID, roomID, success, fail);
          }, 7000);
        }
      }
    })
  }
}

export default HstWxEngine
