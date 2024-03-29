

/*比例公式：设计图的大小/自己设定的Html的fontsize大小 = 当前的屏幕大小/这个屏幕对应的fontsize的大小*/
// 这里面一定不能添加入口函数
var oHtml = document.documentElement;
// 设计图的宽度
var imgWidth = 400;
// 自己基于这个设计图设定的fontsize的大小
var font = 40;
var timer = null;
function getSize(){
  // 获取屏幕的宽度
  var screenWidth = oHtml.offsetWidth;
  // 当屏幕超过设计图的大小的时候让fontsize定在这个设计图对应的font值
  if(screenWidth > imgWidth){
    oHtml.style.fontSize = '40px';
  }else if(screenWidth < 320){
    oHtml.style.fontSize = '30px';
  }else{
    // 在合理的区间之内让font跟随屏幕大小发生改变
    oHtml.style.fontSize = screenWidth/(imgWidth/font) + 'px';
  }
}
// 初始化
getSize();
window.addEventListener('resize', function(){
  clearTimeout(timer);
  timer = setTimeout(function(){
    getSize();
    // 重新加载当前页面
    window.location.reload();
  },300);
})