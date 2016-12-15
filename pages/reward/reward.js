// pages/reward/reward.js
Page({
  data:{
    activeArr:[],
    activeIndex:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  reward:function(){
    var that = this;
    var i = 0;
    for(i =0;i<20;i++) {
      setTimeout(300);
    }
    // this.timeout(300);
  },
  timeout: function(ms) {
    var that = this;
    setTimeout(()=>{
      var tmp = that.data.activeArr.slice(0);
      var _activeIndex = this.data.activeIndex;
      if(tmp.length === 0) {
        tmp[0] = "active";
        _activeIndex = 0;
      } else {
        tmp[_activeIndex++] = "";
        _activeIndex = _activeIndex % 12;
        tmp[_activeIndex] = "active";
      }
      that.setData({
        activeArr: tmp,
        activeIndex: _activeIndex
      });
      console.log(tmp);
    },ms)
  }
})