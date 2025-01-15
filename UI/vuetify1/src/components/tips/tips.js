// src/components/tips/index.js
import { createApp, h } from 'vue';
import Tips from './tips.vue'; 
export function showTips(message, delay) {  
    // 创建一个临时的容器元素
    let container = document.createElement('div');
    let appdom = document.getElementById('app');
    let isTipsNODE = document.querySelector('#app .cl-tips');
    if (isTipsNODE) {
        return;
    }
    appdom?.appendChild(container);
    // 创建并挂载 Tips 组件实例
    const app = createApp({
        render() {
            return h(Tips, { message });
        }
    });
    // 挂载组件
    app.mount(container);
    let timer = setTimeout(() => {
        clearTimeout(timer);
        container.remove();
    }, delay);
}
