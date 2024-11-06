// 通用弹窗调用
function pagePup(content, type = 0, text = "") {
  if (type == 1) {
    // type = 1; 通用提示弹窗 文字修改，传入text
    $("#normal-pup .normal-text-sub").html(text);
  }
  layerIndex = layer.open({
    type: 1,
    title: false,
    skin: "layui-nobg", //样式类名
    shift: 2,
    area: ["100%", "auto"],
    scrollbar: false,
    shade: 0.7,
    closeBtn: 0,
    shadeClose: false, //开启遮罩关闭
    move: false, //禁止拖拽
    content: content,
  });
}

// 通用关闭所有弹窗
$(".layer-close,.isee-btn").click(function () {
  layer.closeAll();
});

function css(e) {
  return "-webkit-" + e + e;
}

// 获取属性
function getStyle(e, t) {
  return parseFloat(getComputedStyle(e)[t]);
}
