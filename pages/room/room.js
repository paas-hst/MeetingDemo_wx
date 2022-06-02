const app = getApp();
const MediaType = app.hstRtcEngine.MediaType;
const DisplayMode = app.hstRtcEngine.DisplayMode;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //--------------------------------------------------------------------------
    // 音视频
    //--------------------------------------------------------------------------
    txRoomComponnet: null,  // 使用腾讯组件对接音视频
    template: 'float',      // 组件默认模板
    userId: '',             // PaaS用户ID
    txUserId: '',           // 腾讯用户ID（txRoomId + "_" + userId）
    groupId: '',            // PaaS分组ID
    txRoomId: '',           // 腾讯房间ID（服务器分配）
    roomName: '',           // 腾讯房间名称
    userSig: '',            // 登录腾讯房间的用户签名（Token）
    sdkAppId: '',           // 登录腾讯房间AppID
    privateMapKey: '',      // 登录腾讯房间权限控制
    beauty: 5,              // 美颜设置
    muted: true,            // 打开/关闭本地麦克风
    debug: false,           // 调试开关
    isFrontCamera: false,   // 是否前置摄像头
    enableCamera: false,    // 打开/关闭本地摄像头
    autoplay: true,         // 自动播放控制

    //--------------------------------------------------------------------------
    // 底部工具栏
    //--------------------------------------------------------------------------
    selectUserList: false,  // 切换到用户列表
    selectWhiteBoard: false,// 切换到白板
    selectVideo: true,      // 切换到视频
    selectChatMsg: false,   // 切换到聊天

    //--------------------------------------------------------------------------
    // 用户列表
    //--------------------------------------------------------------------------
    // 用户：{userId:xxx, audio:{[]}, video:{[]}, share:{[]}: bord:{[]}}
    groupUserList: [],      // 分组用户（包括自己）

    //--------------------------------------------------------------------------
    // 聊天
    //--------------------------------------------------------------------------
    // 消息：{srcUserId:xxx, dstUserId:xxx, time:xxx, content:xxx}
    groupMsgList: [],       // 分组内发送和接收的消息
    sendMsg: "",            // 输入的待发送消息
    chatSelect: null,       // 用户下拉选择框
    curChatUser: "all",     // 当前选择的聊天用户，all表示分组消息

    //--------------------------------------------------------------------------
    // 白板
    //--------------------------------------------------------------------------
    boardList: [],          // {mediaId:xxx, totalPage:xxx, curPage:xxx}
    canvasLeft: 0,          // canvas显示的相对坐标
    canvasTop: 0,           // 同上
    canvasWidth: 1000,      // canvas显示的大小
    canvasHeight: 100,      // 同上
    curBoardIndex: 0,       // 当前显示的白板索引
    totalBoardCount: 0,     // 接收的白板数量
    curBoardName: "",       // 当前显示的白板名称
    curBoardTotalPage: 1,   // 当前显示的白板总页数
    curBoardPageNo: 1,      // 当前显示的白板页码

    // 绘图的颜色
    color: ['#000000', '#737378', '#1973d8', '#30c5fc', '#19b53e', '#f5c813', '#f66823', '#f43b3b'],
    curLineColor: '#000000',
    isEdit: false,
    colorShow: false,
    eraserActive: false,

    //--------------------------------------------------------------------------
    // 其它
    //--------------------------------------------------------------------------
    selectOpen: false,      // 下拉列表展开标志
    selectMode: "等比完整",  // 当前选择的白板显示模式
    boardScale: 100,        // 等比缩放模式下的缩放比例
    startDistance: 0,       // 等比缩放模式下手势开始时两个手指之间距离
    newDistance: 0,         // 等比缩放模式下手势移动时两个手指之间距离
    startScale: false,      // 等比缩放模式下手势开始标志
    groupPushDone: false,   // 加入分组后的全量通知完成标识
    active: false,

    rotateAngle: 0,
  },

  /**
   * 监听房间事件
   */
  onRoomEvent(e) {
    if (e.detail.tag == 'error') {
      console.error("error:", e.detail.detail);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 将自己加入到分组用户列表
    this.setData({groupUserList: [{
      userId: app.hstData.userId,
      audio: null,
      video: null,
      share: null,
      board: null
    }]});

    // 订阅事件
    app.hstRtcEngine.subEvent('onGroupUserList', this.onGroupUserList);
    app.hstRtcEngine.subEvent('onPublishMedia', this.onPublishMedia);
    app.hstRtcEngine.subEvent('onUnPublishMedia', this.onUnPublishMedia);
    app.hstRtcEngine.subEvent('onRemoteMediaAdd', this.onRemoteMediaAdd);
    app.hstRtcEngine.subEvent('onRecvGroupMsg', this.onRecvGroupMsg);
    app.hstRtcEngine.subEvent('onRecvUserMsg', this.onRecvUserMsg);
    app.hstRtcEngine.subEvent('onUserJoinGroup', this.onUserJoinGroup);
    app.hstRtcEngine.subEvent('onUserLeaveGroup', this.onUserLeaveGroup);
    app.hstRtcEngine.subEvent('onWhiteBoardCurPageChanged', this.onWhiteBoardCurPageChanged);
    app.hstRtcEngine.subEvent('onGroupPushComplete', this.onGroupPushComplete);

    this.data.txRoomComponnet = this.selectComponent('#webrtcroom');
    this.updateTemplate();

    this.setData({
      userId: app.hstData.userId,
      serverUserId: app.txData.serverUserId,
      groupId: app.hstData.groupId,
      txRoomId: app.txData.roomId,
      roomName: "好视通云通信",
      sdkAppId: app.txData.sdkAppId,
      userSig: app.txData.userSig,
      privateMapKey: app.txData.privateMapKey
    });

    this.data.txRoomComponnet.start();
    this.updateWebrtcRoomPubList();

    // 默认等比完整显示白板
    app.hstRtcEngine.setWhiteBoardDisplayMode(
      null,
      DisplayMode.DBWZ,
      null)

    this.setData({active: true})

    // 必须放在active设置之后，否则无法获取组件对象
    this.data.chatSelect = this.selectComponent('#chat-select');
    this.data.chatSelect && this.data.chatSelect.update();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 设置房间标题
    wx.setNavigationBarTitle({
      title: this.data.roomName
    });
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
    console.log('room.js onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    let self = this;
    app.hstRtcEngine.leaveGroup().then(() => {
      console.log('离开分组成功');
      // 取消订阅事件
      app.hstRtcEngine.unsubEvent('onGroupUserList');
      app.hstRtcEngine.unsubEvent('onPublishMedia');
      app.hstRtcEngine.unsubEvent('onUnPublishMedia');
      app.hstRtcEngine.unsubEvent('onRemoteMediaAdd');
      app.hstRtcEngine.unsubEvent('onRecvGroupMsg');
      app.hstRtcEngine.unsubEvent('onUserJoinGroup');
      app.hstRtcEngine.unsubEvent('onUserLeaveGroup');
      app.hstRtcEngine.unsubEvent('onWhiteBoardCurPageChanged');
      app.hstRtcEngine.unsubEvent('onGroupPushComplete');

      // 销毁组件
      self.data.txRoomComponnet.stop();
      self.data.txRoomComponnet = null;
    }).catch((err) => {
      console.error('离开分组失败' + err);
    })
  },

  /**
   * 开关摄像头
   */
  openCamera() {
    this.setData({enableCamera: !this.data.enableCamera});

    // 好视通侧广播视频
    if (this.data.enableCamera) {
      app.hstRtcEngine.startPublishMedia(MediaType.VIDEO, "wechat_cam")
    } else {
      app.hstRtcEngine.stopPublishMedia(MediaType.VIDEO, "wechat_cam")
    }

    // 更新广播状态
    let userList = this.data.groupUserList;
    for (let user of userList) {
      if (user.userId == app.hstData.userId) {
        if (this.data.enableCamera) {
          user.video || (user.video = new Set())
          user.video.add("wechat_cam")
        } else {
          user.video && (user.video = null); // 不支持同时广播多个摄像头
        }
      }
    }
    this.setData({groupUserList: userList});
    this.showVideo();
    this.updateTemplate();
  },

  /**
   * 切换摄像头
   */
  switchCamera() {
    this.data.txRoomComponnet.switchCamera();
    this.setData({isFrontCamera: !this.data.isFrontCamera});
    this.showVideo();
  },

  /**
   * 设置美颜
   */
  setBeauty() {
    this.data.beauty = (this.data.beauty == 0 ? 5 : 0);
    this.setData({beauty: this.data.beauty});
  },

  changeEditStatus() {
    const curWhiteBoardId = this.data.boardList[this.data.curBoardIndex].mediaId
    const whiteBoard = app.hstRtcEngine.getWhiteBoard(curWhiteBoardId)
    if (this.data.eraserActive) {
      this.setData({eraserActive: false})
      whiteBoard.toolType('curve')
    }
    const isEdit = this.data.isEdit
    this.setData({isEdit: !isEdit})

    whiteBoard.edit(this.data.isEdit)
  },

  /**
   * 设置橡皮擦
   */
  setEraser() {
    if (this.data.isEdit) {
      this.setData({isEdit: !this.data.isEdit});
    }
    const curWhiteBoardId = this.data.boardList[this.data.curBoardIndex].mediaId
    const whiteBoard = app.hstRtcEngine.getWhiteBoard(curWhiteBoardId)
    if (this.data.eraserActive) {
      this.setData({eraserActive: false})
      whiteBoard.toolType('curve')
      return
    }
    this.setData({eraserActive: true})
    whiteBoard.toolType('eraser')
  },

  showColorList() {
    const show = this.data.colorShow
    this.setData({
      colorShow: !show
    })
    console.log('colorShow', this.data.colorShow)
  },

  /**
   * 设置颜色
   */
  selectColor(e) {
    // 获取点击画笔的编号
    let colorIndex = e.currentTarget.id;
    const color = this.data.color[colorIndex]
    // 修改默认的颜色编号
    this.setData({
      curLineColor: color
    });
    // 设置颜色
    this.setLineColor(color)
    this.showColorList()
  },

  setLineColor(color) {
    const curWhiteBoardId = this.data.boardList[this.data.curBoardIndex].mediaId
    const whiteBoard = app.hstRtcEngine.getWhiteBoard(curWhiteBoardId)
    whiteBoard.brushColor(color)
  },

  /**
   * 开关麦克风
   */
  changeMute() {
    let self = this
    self.setData({muted: !self.data.muted});

    if (self.data.muted) {
      app.hstRtcEngine.stopPublishMedia(MediaType.AUDIO, "wechat_mic");
    } else {
      app.hstRtcEngine.startPublishMedia(MediaType.AUDIO, "wechat_mic");
    }

    // 更新广播状态
    let userList = this.data.groupUserList;
    for (let user of userList) {
      if (user.userId == app.hstData.userId) {
        if (!this.data.muted) {
          user.audio || (user.audio = new Set())
          user.audio.add("wechat_mic")
        } else {
          user.audio && (user.audio = null)
        }
      }
    }
    this.setData({groupUserList: userList});
    this.showVideo();
  },

  /**
   * 加入分组后，服务器会全量推送分组中所有用户及用户的媒体广播状态
   */
  onGroupPushComplete() {
    this.setData({groupPushDone: true})
    this.updateTemplate()
  },

  /**
   * 设置布局模板
   * @param {*} name
   */
  setTemplate(name) {
    if (name != this.data.template) {
      this.setData({template: name});
      console.log("Set tempalte: " + this.data.template)
    }
  },

  /**
   * 更新视频布局
   */
  updateTemplate() {
    // 注意：小程序通过live-pusher加入房间，在加入房间的过程中
    // 不能频繁切换template，否则可能会导致live-pusher的各种问题，
    // 这里通过监听分组内全量推送完成事件，一次性更新template，
    // 用来规避template的频繁更新
    if (!this.data.groupPushDone) return

    let videoNum = 0;
    for (const user of this.data.groupUserList) {
      user.video && (videoNum += user.video.size)
      user.share && (videoNum += user.share.size)
    }

    if (videoNum <= 1) {
      this.data.enableCamera ? this.setTemplate('1pusher') : this.setTemplate('1player')
    } else if (videoNum <= 2) {
      this.data.enableCamera ? this.setTemplate('1v1') : this.setTemplate('grid4')
    } else if (videoNum <= 3) {
      this.setTemplate('grid4')
    } else if (videoNum <= 4) {
      this.data.enableCamera ? this.setTemplate('grid4') : this.setTemplate('grid6')
    } else {
      this.setTemplate('grid6')
    }
  },

  /**
   * 全量推送分组用户列表
   * @param {} param
   */
  onGroupUserList(param) {
    let userList = this.data.groupUserList;
    for (const user of param) {
      userList.push({
        userId: user,
        audio: null,
        video: null,
        share: null,
        board: null
      });
    }
    this.setData({groupUserList: userList});
  },

  /**
   * 用户加入分组处理
   * @param {*} param
   */
  onUserJoinGroup(param) {
    let userList = this.data.groupUserList;
    userList.push({
      userId: param,
      audio: null,
      video: null,
      share: null,
      board: null
    });
    this.setData({groupUserList: userList});
    this.data.chatSelect && this.data.chatSelect.update();
  },

  /**
   * 用户离开分组处理
   * @param {*} param
   */
  onUserLeaveGroup(param) {
    let userList = this.data.groupUserList;
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].userId == param) {
        userList.splice(i, 1);
        break;
      }
    }
    this.setData({groupUserList: userList});
    this.updateTemplate();
    this.data.chatSelect && this.data.chatSelect.update();
  },

  /**
   * 用户广播（音频、视频、屏幕共享）处理
   * @param {*} param
   */
  onPublishMedia(param) {
    let userList = this.data.groupUserList;
    for (let user of userList) {
      if (user.userId == param.userId) {
        if (param.mediaType == MediaType.SCREEN_SHARE) {
          user.share || (user.share = new Set())
          user.share.add(param.mediaId);
        } else if (param.mediaType == MediaType.AUDIO) {
          user.audio || (user.audio = new Set())
          user.audio.add(param.mediaId);
        } else if (param.mediaType == MediaType.VIDEO) {
          user.video || (user.video = new Set())
          user.video.add(param.mediaId);
        } else if (param.mediaType == MediaType.WHITE_BOARD) {
          user.board || (user.board = new Set())
          user.board.add(param.mediaId)
          app.hstRtcEngine.startReceiveMedia(
            param.userId,
            param.mediaType,
            param.mediaId).then(()=>{
            console.log("Start receive white board success.")
          }).catch(()=>{
            console.warn("Start receive white board failed!")
          })
        } else {
          console.error("Unknown media type: " + param.mediaType);
        }
      }
    }
    this.setData({groupUserList: userList});
    this.updateTemplate();
    this.updateWebrtcRoomPubList();
  },

  /**
   * 通知webrtc-room组件
   */
  updateWebrtcRoomPubList() {
    if (!this.data.txRoomComponnet) return

    let pubList = []
    for (const user of this.data.groupUserList) {
      if ((user.audio && user.audio.size > 0)
        || (user.video && user.video.size > 0)
        || (user.share && user.share.size > 0)) {
        pubList.push(user.userId)
      }
    }
    this.data.txRoomComponnet.updatePaasPubUserList(pubList);
  },

  /**
   * SDK通知白板翻页
   * @param {*} param
   */
  onWhiteBoardCurPageChanged(param) {
    let tmpList = this.data.boardList
    for (let i = 0; i < tmpList.length; i++) {
      if (tmpList[i].mediaId == param.mediaId) {
        // 更新白板的翻页信息
        tmpList[i].curPage = param.curPage
        this.setData({boardList: tmpList})

        // 如果是当前正在显示的白板，更新显示的翻页信息
        if (i == this.data.curBoardIndex) {
          this.setData({
            curBoardPageNo: param.curPage + 1
          })
        }
      }
    }
  },

  /**
   * SDK通知上层设置canvas大小和位置
   */
  onCanvasSizeChange(left, top, width, height) {
    console.warn("canvasSizeChange, width:" + width + ", height:" + height)
    this.setData({
      canvasLeft: left,
      canvasTop: top,
      canvasWidth: width,
      canvasHeight: height
    })
  },

  /**
   * 显示白板
   */
  displayWhiteBoard() {
    let self = this
    let query = wx.createSelectorQuery()
    query.select('#canvas-view').fields({size: true})
    query.select('#my-canvas').fields({node: true})
    query.exec(function(res) {
      self.setData({ // 初始化白板覆盖整个view
        canvasLeft: 0,
        canvasTop: 0,
        canvasWidth: res[0].width,
        canvasHeight: res[0].height
      })
      if (self.data.boardList.length > 0) { // 有白板则显示
        let board = self.data.boardList[self.data.curBoardIndex]
        app.hstRtcEngine.setMediaRender(
          null,
          MediaType.WHITE_BOARD,
          board.mediaId,
          res[1].node,
          {
            parentWidth: res[0].width,
            parentHeight: res[0].height,
            canvasSizeChange: self.onCanvasSizeChange
          }
        )
        self.setData({ // 更新白板翻页信息
          curBoardTotalPage: board.totalPage,
          curBoardPageNo: board.curPage + 1,
          curBoardName: board.mediaName
        })
      }
    })
  },

  /**
   * 收到远端媒体
   * @param {*} param
   */
  onRemoteMediaAdd(param) {
    console.log("onRemoteMediaAdd")
    if (param.mediaType == MediaType.WHITE_BOARD) {
      let list = this.data.boardList;
      list.push({
        mediaId: param.mediaId,
        totalPage: param.totalPage,
        curPage: param.curPage,
        mediaName: param.mediaName
      })
      this.setData({
        boardList: list,
        totalBoardCount: list.length});

      // 显示第一个白板
      if (this.data.selectWhiteBoard && this.data.boardList.length == 1) {
        this.displayWhiteBoard()
      }
    }
  },

  /**
   * 停止广播白板处理
   * @param {*} param
   */
  onUnPubWhiteBoard(param) {
    let tmpList = this.data.boardList;

    // 查找白板
    let removeBoardIndex = null
    for (let i = 0; i < tmpList.length; i++) {
      console.log(tmpList[i])
      if (tmpList[i].mediaId == param.mediaId) {
        removeBoardIndex = i;
        break;
      }
    }

    if (removeBoardIndex == null) return

    console.log("Find to be removed borad index: " + removeBoardIndex)

    app.hstRtcEngine.stopReceiveMedia(
      param.userId,
      MediaType.WHITE_BOARD,
      param.mediaId);

    app.hstRtcEngine.unsetMediaRender(
      null,
      MediaType.WHITE_BOARD,
      param.mediaId)

    console.log("Before board list length: " + this.data.boardList.length)
    tmpList.splice(removeBoardIndex, 1)
    this.setData({
      boardList: tmpList,
      totalBoardCount: tmpList.length})
    console.log("After board list length: " + this.data.boardList.length)

    // 如果删除的是当前显示的白板且还有其他白板存在，则选择第一个白板显示
    if (removeBoardIndex == this.data.curBoardIndex) {
      this.setData({
        curBoardIndex: 0,
        curBoardName: "",
        curBoardPageNo: 0,
        curBoardTotalPage: 0
      })
      this.displayWhiteBoard()
    }
  },

  /**
   * 用户取消广播（音频、视频、屏幕共享）处理
   * @param {*} param
   */
  onUnPublishMedia(param) {
    let userList = this.data.groupUserList;
    for (let user of userList) {
      if (user.userId == param.userId) {
        if (param.mediaType == MediaType.SCREEN_SHARE) {
          user.share && user.share.delete(param.mediaId);
          (user.share.size == 0) && (user.share = null)
        } else if (param.mediaType == MediaType.AUDIO) {
          user.audio && user.audio.delete(param.mediaId);
          (user.audio.size == 0) && (user.audio = null)
        } else if (param.mediaType == MediaType.VIDEO) {
          user.video && user.video.delete(param.mediaId);
          (user.video.size == 0) && (user.video = null)
        } else if (param.mediaType == MediaType.WHITE_BOARD) {
          user.board && user.board.delete(param.mediaId);
          (user.board.size == 0) && (user.board = null)
          this.onUnPubWhiteBoard(param);
        } else {
          console.error("Unknown media type: " + param.mediaType);
        }
      }
    }
    this.setData({groupUserList: userList});
    this.updateTemplate();
    this.updateWebrtcRoomPubList();
  },

  /**
   * 获取HH:MM:SS时间
   */
  getCurTime() {
    let date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  },

  /**
   * 保存待发送消息
   * @param {*} e
   */
  bindSendMsgInput(e) {
    this.setData({sendMsg: e.detail.value});
  },

  /**
   * 发送分组消息处理，暂未实现私聊
   * @param {*} e
   */
  sendGroupMsg(e) {
    if (!this.data.sendMsg) {
      return
    }

    // 分组消息
    if (this.data.curChatUser == 'all') {
      app.hstRtcEngine.sendGroupMsg({
        msg: this.data.sendMsg,
        groupId: app.hstData.groupId
      });
    } else { // 用户消息
      app.hstRtcEngine.sendUserMsg({
        msg: this.data.sendMsg,
        dstUserId: this.data.curChatUser
      });
    }

    let msgList = this.data.groupMsgList;
    msgList.push({
      srcUserId: app.hstData.userId,
      dstUserId: (this.data.curChatUser ? this.data.curChatUser : 'all'),
      time: this.getCurTime(),
      content: this.data.sendMsg
    });
    this.setData({groupMsgList: msgList});
    this.setData({sendMsg: ''});
  },

  /**
   * 收到分组消息处理
   * @param {*} param
   */
  onRecvGroupMsg(param) {
    let msgList = this.data.groupMsgList;
    msgList.push({
      srcUserId: param.srcUserId,
      dstUserId: 'all',
      time: this.getCurTime(),
      content: param.msg
    });

    this.setData({groupMsgList: msgList});
  },

  /**
   * 收到用户消息处理
   * @param {*} param
   */
  onRecvUserMsg(param) {
    let msgList = this.data.groupMsgList;
    msgList.push({
      srcUserId: param.srcUserId,
      dstUserId: this.data.userId,
      time: this.getCurTime(),
      content: param.msg
    });

    this.setData({groupMsgList: msgList});
  },

  /**
   * 直接隐藏canvas的父节点，无法使canvas隐藏，这里通过设置canvas
   * 到屏幕区域外，使得canvas隐藏，但测试发现，还需要配合wx:if
   * @param {*} value
   */
  setSelectWhiteBoard(value) {
    if (value) {
      this.setData({selectWhiteBoard: true});
      this.setData({canvasLeft: 0})
    } else {
      this.setData({selectWhiteBoard: false});
      this.setData({canvasLeft: 9999});
    }
  },

  /**
   * 隐藏所有panel
   */
  hideAllPanels() {
    this.setData({selectVideo: false});
    this.setData({selectChatMsg: false});
    this.setData({selectUserList: false});
    this.setSelectWhiteBoard(false)
  },

  /**
   * 显示视频窗口
   */
  showVideo() {
    this.hideAllPanels()
    this.setData({selectVideo: true});
  },

  createWhiteBoard() {
    app.hstRtcEngine.createWhiteBoard({
      board_name: '测试'
    })
  },

  /**
   * 显示白板窗口
   */
  showWhiteBoard() {
    if (this.data.selectWhiteBoard) {
      this.showVideo()
    } else {
      this.hideAllPanels()
      this.setSelectWhiteBoard(true)
      this.displayWhiteBoard()
    }
  },

  /**
   * 显示分组用户列表
   */
  showUserList() {
    if (this.data.selectUserList) {
      this.showVideo()
    } else {
      this.hideAllPanels()
      this.setData({selectUserList: true});
    }
  },

  /**
   * 显示聊天窗口
   */
  showChatMsg() {
    if (this.data.selectChatMsg) {
      this.showVideo()
    } else {
      this.hideAllPanels()
      this.setData({selectChatMsg: true});
    }
  },

  /**
   * 切换到下一个白板
   */
  onNextWhiteBoard() {
    if (this.data.boardList.length > 1) {
      // 先取消渲染上一个白板
      let oldIndex = this.data.curBoardIndex;
      app.hstRtcEngine.unsetMediaRender(
        null,
        MediaType.WHITE_BOARD,
        this.data.boardList[oldIndex].mediaId
      );

      // 切换到下一个白板
      let newIndex = (++oldIndex) % this.data.boardList.length;
      this.setData({curBoardIndex: newIndex})

      // 重新渲染白板
      this.displayWhiteBoard()
    }
  },

  /**
   * 白板显示模式下拉框控制
   */
  showModeSelection() {
    this.setData({
      selectOpen: !this.data.selectOpen
    })
  },

  /**
   * 设置等比完整
   */
  selectDbwzMode() {
    this.setData({
      selectOpen: false,
      selectMode: "等比完整"
    })
    app.hstRtcEngine.setWhiteBoardDisplayMode(
      this.data.boardList[this.data.curBoardIndex].mediaId,
      DisplayMode.DBWZ,
      null
    )
  },

  /**
   * 设置等比适应
   */
  selectDbsyMode() {
    this.setData({
      selectOpen: false,
      selectMode: "等比适应"
    })
    app.hstRtcEngine.setWhiteBoardDisplayMode(
      this.data.boardList[this.data.curBoardIndex].mediaId,
      DisplayMode.DBSY,
      null
    )
  },

  /**
   * 设置等比缩放
   */
  selectDbsfMode() {
    this.setData({
      selectOpen: false,
      selectMode: "等比缩放"
    })
    app.hstRtcEngine.setWhiteBoardDisplayMode(
      this.data.boardList[this.data.curBoardIndex].mediaId,
      DisplayMode.DBSF,
      100
    )
    this.setData({boardScale: 100})
  },

  /**
   * 手指触摸开始
   * @param {*} e
   */
  onCanvasTouchStart(e) {
    if (this.data.selectMode == "等比缩放") {
      if (e.touches.length == 2) {
        let xMove = e.touches[1].x - e.touches[0].x;
        let yMove = e.touches[1].y - e.touches[0].y;
        let distance = parseInt(Math.sqrt(xMove * xMove + yMove * yMove));
        this.setData({
          startDistance: distance,
          startScale: true
        })
      }
    }

    const curWhiteBoardId = this.data.boardList[this.data.curBoardIndex].mediaId
    const whiteBoard = app.hstRtcEngine.getWhiteBoard(curWhiteBoardId)
    whiteBoard.startPainting(e)
  },

  /**
   * 手指触摸移动
   * @param {*} e
   */
  onCanvasTouchMove(e) {
    const curWhiteBoardId = this.data.boardList[this.data.curBoardIndex].mediaId
    const whiteBoard = app.hstRtcEngine.getWhiteBoard(curWhiteBoardId)
    whiteBoard.painting(e)

    // 缩放
    if (e.touches.length == 2) {
      let xMove = e.touches[1].x - e.touches[0].x;
      let yMove = e.touches[1].y - e.touches[0].y;
      let distance = parseInt(Math.sqrt(xMove * xMove + yMove * yMove));

      if (this.data.startDistance == 0) {
        this.setData({startDistance: distance})
      } else {
        this.setData({newDistance: distance})
      }
    }
  },

  /**
   * 手指触摸结束
   * @param {*} e
   */
  onCanvasTouchEnd(e) {
    if (e.touches.length != 2 && this.data.startScale) {
      this.setData({
        boardScale: parseInt(this.data.boardScale * this.data.newDistance / this.data.startDistance.toFixed(2)),
      })
      app.hstRtcEngine.setWhiteBoardDisplayMode(
        this.data.boardList[this.data.curBoardIndex].mediaId,
        DisplayMode.DBSF,
        this.data.boardScale
      )
      this.setData({startScale: false})
    }

    const curWhiteBoardId = this.data.boardList[this.data.curBoardIndex].mediaId
    const whiteBoard = app.hstRtcEngine.getWhiteBoard(curWhiteBoardId)
    whiteBoard.stopPainting(e)
  },

  /**
   * 选择消息发送对象
   * @param {*} e
   */
  onSelectUser(e) {
    this.setData({curChatUser: e.detail.id})
  },

  rotateCanvas() {
    let rotateAngle = this.data.rotateAngle
    if (rotateAngle >= 270) {
      rotateAngle = 0
    } else {
      rotateAngle += 90
    }
    this.setData({rotateAngle: rotateAngle})
    const curWhiteBoardId = this.data.boardList[this.data.curBoardIndex].mediaId
    app.hstRtcEngine.rotateWhiteBoard(this.data.rotateAngle, curWhiteBoardId)
  },

  generateGuid() {
    const S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
  },

  // 上传照片
  uploadImg() {
    wx.chooseMessageFile({
      count: 1,
      success: (res)=> {
        console.log('res', res)
        const fileInfo = res.tempFiles[0]
        console.log('fileInfo', fileInfo)
        app.hstRtcEngine.startUpload({
          Guid: `${this.generateGuid()}`,
          file_name: fileInfo.name,
          file_size: fileInfo.size,
          file: fileInfo.path,
          onStartUpload: () => {
            wx.showToast({
              title: '正在上传',
              icon: 'none',
              duration: 2000
            })
          },
          onUploadSuccess: (params) => {
            wx.showToast({
              title: '上传成功',
              icon: 'none',
              duration: 2000
            })
            let object = {
              board_name:  params.board_name,
              board_type: 1,
              convert_file_path: params.convert_file_path,
              file_path: params.file_path,
              width: params.width,
              height: params.height,
              page: params.page
            }
            app.hstRtcEngine.createWhiteBoard(object)
            this.showWhiteBoard()
          },
          onFailed: () => {}
        })
      }
    })
  },
})
