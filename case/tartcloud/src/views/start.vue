<template>
    <div class="fullbackground">
        <div class="mask">
            <div class="getstart-top tsall">
                <p class="gt-h3 tsall">Now UI Kit PRO</p>
                <p class="gt-text tsall">
                    该模板原型由inVision设计，并由Creative Tim编码, Mockplus
                    RP爲您呈現。<br /><br />
                    Now UI Kit PRO是一款高级Bootstrap 4
                    UI套件，具有1000多个组件（例如按钮，输入，通知，版式系统，卡片）和分部（例如标题，功能，博客，推荐词）。
                    它具有平面设计，带有二维元素，高度可读的版式和大胆的颜色。
                    所有元素均设计为像素完美，并且看起来完美无缺。
                    您可以轻松地自定义和组合组件，以适应您的设计愿景。
                </p>
            </div>
            <button class="btn-orange" @click="gotoPage('/home')">Get Started</button>
            <div class="fixed-right tsall">
                <img src="../assets/start/avatar.png" alt="" srcset="" />
                <p class="gt-exp tsall">
                    有关此模板的编码版本以及许多其他UI套件，模板和Dashboard的信息,请访问:<br />
                    <a href="https://www.creative-tim.com/" target="_blank"
                        >https://www.creative-tim.com/</a
                    >
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.fullbackground {
    // width: 100%;  
    height: 100vh;
    overflow: hidden;
    background: url(../assets/start/bg.png);
    background-size: cover;
    color: #fff;
    .mask {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.35);
    }
}
.getstart-top {
    max-width: 60%;
    margin: 0 auto;
    text-align: center;
    .gt-h3 {
        padding-top: 100px;
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 38px;
    }
    .gt-text {
        padding-top: 35px;
        font-size: 16px;
    }
}
.fixed-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
    margin-top: 200px;
    img {
        width: 120px;
        margin-right: 20px;
    }
    .gt-exp {
        width: 280px;
        font-size: 12px;
    }
}
@media (max-width: 768px) {
    .fullbackground {
        .getstart-top {
            max-width: 75%;
            .gt-h3 {
                padding-top: 20px;
                margin-bottom: 5px;
                font-size: 26px;
            }
            .gt-text {
                padding-top: 15px;
                font-size: 14px;
            }
        }
    }
    .fixed-right {
        margin-top: 50px;
        margin-right: 10px;
        img {
            width: 80px;
            margin-right: 5px;
        }
        .gt-exp {
            width: 200px;
            font-size: 10px;
        }
    }
}

.btn-orange {
    display: block;
    margin: 22px auto;
    background-color: #ff7945;
    color: white;
    border: none;
    width: 220px;
    padding: 12px 20px;
    border-radius: 20px;
    cursor: pointer;
}
</style>
 
<script lang="ts" setup>
import router from "@/router";

function gotoPage(url: string) {
    router.push(url) 
}
</script>
