// index.js
// 列表数据
const { indexOf } = require('./data.js');
const classes = require('./data.js');
const totalPage = Math.ceil(classes.length / 10);

Page({
  data: {
    classes: classes.slice(0, 10),
    totalPage,
    curPage: 1,
    pageSize: 10,
    pageSizeArray: [5, 10, 20, 50],
    isHighlight: false,
    isOrange: false,
  },
  updateClasses() {
    this.setData({
      classes: classes.slice((this.data.curPage - 1) * this.data.pageSize, this.data.curPage * this.data.pageSize),
    });
  },
  onPrevTap() {
    if (this.data.curPage <= 1)
        return;
    this.setData({
      curPage: this.data.curPage - 1,
    });
    this.updateClasses();
  },
  onNextTap() {
    if (this.data.curPage >= this.data.totalPage)
        return;
    this.setData({
      curPage: this.data.curPage + 1,
    });
    this.updateClasses();
  },
  
  onPageSizeChange(e) {
    console.log(e.detail.value);
    // write your code here
    this.setData({
        pageSize: this.data.pageSizeArray[e.detail.value],
        curPage: 1,//选择完每页条数后回到第一页
        totalPage: Math.ceil(classes.length / this.data.pageSizeArray[e.detail.value]),
    })
    this.onPrevTap();
    this.updateClasses();
  },
  onHightlightChange(e) {
    console.log(e.detail.value);
    // write your code here
    //在js中判断按钮状态,在wxml中判断价格条件
    if(e.detail.value == true){
        this.setData({
            isOrange: true,
        })
    }
    else{
        this.setData({
            isOrange: false,
        })
    }
  },
  
});
