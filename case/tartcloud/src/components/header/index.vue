<template>
    <div class="header">
        <div class="header-links">
            <router-link to="/" class="hl-menu tsall">
                <img src="@/assets/home/icon-menu.png" alt="Logo" />
                <span>NOW UI KIT PRO</span>
            </router-link>

            <div class="mobile-show tsall">
                <img
                    class="icon-menu1"
                    src="@/assets/home/icon-menu1.png"
                    alt="Menu"
                    id="menuController"
                    @click="showMenu()"
                    v-show="isMobile"
                />

                <ul
                    :class="{
                        'links-ul-mobile': isMobile,
                        'links-ul': !isMobile,
                        tsall: true,
                    }"
                    id="luMobile"
                >
                    <li>
                        <router-link to="/dashboard">
                            <span>HOME</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard">
                            <span>ABOUT US</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard">
                            <span>COMPONENTS</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard">
                            <span>SECTIONS</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard">
                            <span>EXAMPLES</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard">
                            <span>CONTACT US</span>
                        </router-link>
                    </li>
                </ul>
            </div>

            <button class="bn-btn">Buy Now</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, onUnmounted } from "vue";
let isMobile = ref(false);
function getImg(name: string) {
    return new URL(`../../assets/home/${name}`, import.meta.url).href;
}

function showMenu() {
    const menuIcon = document.getElementById(
        "menuController"
    ) as HTMLImageElement;
    const luMobile = document.getElementById("luMobile") as HTMLElement;
    if (menuIcon.className.includes("icon-menu1-active")) {
        menuIcon.src = getImg("icon-menu1.png");
        luMobile.style.display = "none";
        menuIcon.classList.remove("icon-menu1-active");
    } else {
        luMobile.style.display = "block";
        menuIcon.classList.add("icon-menu1-active");
        menuIcon.src = getImg("icon-menu1-active.png");
    }
}

onMounted(() => {
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    }
    // if (isMobileDevice() && window.innerWidth <= 768) {}
    if (isMobileDevice() && window.innerWidth <= 768) {
        isMobile.value = true;
    } else {
        isMobile.value = false; 
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) {
            isMobile.value = true;
        } else {
            isMobile.value = false;
        }
    }); // 监听窗口大小变化
});

onUnmounted(() => {
    window.removeEventListener("resize", () => {
        if (window.innerWidth <= 768) {
            isMobile.value = true;
        } else {
            isMobile.value = false;
        }
    });
});
</script>

<style lang="scss" scoped>
.header {
    height: 64px;
    width: 100%;
    background: #fff;
}
.header-links {
    max-width: 1440px;
    margin: 0 auto;
    line-height: 64px;
    height: 64px; 
    display: flex;
    justify-content: space-between;
    .hl-menu {
        display: flex;
        align-items: center;
        cursor: pointer;
        max-width: 200px;
        white-space: nowrap;
        img {
            width: 23px;
            height: 23px;
            margin-right: 16px;
        }
        a {
            color: #a3a3a3;
            font-size: 18px;
            transition: color 0.3s;
        }
    }
}

.links-ul {
    margin-left: 300px;
    display: flex;
    justify-content: space-between;
    li {
        white-space: nowrap;
        margin-left: 60px;
    }
}

.bn-btn {
    margin-left: 40px;
    margin-top: 12px;
    width: 120px;
    height: 40px;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: rgb(250, 100, 50);
}

@media (max-width: 768px) {
    .header-links {
        align-items: center;
        position: relative;
        padding: 0 10px;
    }

    .hl-menu {
        margin-top: 6px;
        flex-direction: column;
        span {
            line-height: 30px;
        }
    }
    .mobile-show {
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .icon-menu1 {
        display: block;
        width: 25px;
        height: 25px;
        cursor: pointer;
        animation: rat 0.5s ease;
    }

    @keyframes rat {
        0% {
            transform: rotate(0deg) scale(0);
        }
        100% {
            transform: rotate(360deg) scale(1);
        }
    }

    @keyframes rat1 {
        0% {
            transform: rotate(0deg) scale(0);
        }
        100% {
            transform: rotate(360deg) scale(1);
        }
    }

    .icon-menu1-active {
        display: block;
        width: 25px;
        height: 25px;
        cursor: pointer;
        transition: transform 0.3s;
        animation: rat1 0.5s linear;
    }
    .bn-btn {
        margin-left: 10px;
        margin-top: 0;
    }

    .links-ul-mobile {
        display: none;
        position: absolute;
        top: 65px;
        margin-left: 0;
        justify-content: space-between;
        flex-direction: column;
        font-size: 12px;
        background: #f3f3f3;
        transition: all 0.3s ease;
        li {
            margin-left: 0;
            padding: 0 10px;
        }
    }
}
</style>
