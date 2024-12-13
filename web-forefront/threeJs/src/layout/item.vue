<template>
    <div class="menu-item">
        <router-link :to="item.to" class="menu-link">
            <img v-if="item.icon" :src="item.icon" alt="Icon" class="icon" />
            {{ item.t }}
            <img @click="toggleChild" v-if="item.children" :src="isOpen ? overUrl : openUrl"
                :class="{'open':true,'hover-open':isOpen,'hover-open':!isOpen}">
        </router-link>  

        <div v-if="item.children" :class="{ 'submenu' : true, 'hover-submenu' : isOpen}"
            :style="{ display: isOpen ? 'block' : 'none' }">
            <Item v-for="child in item.children" :key="child.t" :item="child" />
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import openUrl from '@/assets/images/menu-open.png'
    import overUrl from '@/assets/images/menu-over.png'
    const props = defineProps({
        item: {

        },
        t: {
            type: String,
            default: ""
        },
        to: {
            type: String,
            default: "/"
        },
        icon: {

        }
    })

    const isOpen = ref(false);
    const toggleChild = (e) => {
        e.preventDefault(); // 防止 <router-link> 跳转
        isOpen.value = !isOpen.value;
    };
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        font-size: 10px;
    }

    .item {
        width: 100%;
        line-height: 45px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #cccccc;
    }

    .icon {
        max-width: 20px;
        margin-right: 5px;
    }

    .open {
        position: absolute;
        right: 0;
        width: 20px;
        margin-right: 5px;

    }

    .menu-item {
        position: relative;
    }

    .menu-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
        width: 100%;
        line-height: 48px;
        background: #fff;
        display: flex;
        align-items: center;
        position: relative;
        border-bottom: 1px solid #ececec;

        img {
            margin-left: 40px;
        }
    }

    .menu-link:hover {
        background: #f1f1f1;
    }

    .icon {
        margin-right: 5px;
    }

    .submenu {
        position: relative;

        img {
            margin-left: 60px;
        }

        .submenu {
            img {
                margin-left: 80px;
            }
        }
    }

    .submenu::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        height: 20px;
    }
 
    .hover-submenu {
        animation: hs .05s ease-in;
    }

    .hover-open {
        animation: ho .05s ease-in;
    }

    @keyframes hs {
        0% {
            position: relative;
            left: -110px;
        } 

        100% {
            position: relative;
            left: 0px;
        }
    }

    @keyframes ho {
        0% {
            transform: scale(.2);
        }

        100% {
            transform: scale(1);
        }
    }
</style>