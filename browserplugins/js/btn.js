// popup.js
document.addEventListener('DOMContentLoaded', () => {
    // 获取按钮元素
    const button = document.getElementById('changeColor');

    // 添加点击事件监听器
    button.addEventListener('click', () => {
        // 改变背景颜色
        document.body.style.backgroundColor = 'lightblue';
    });
});