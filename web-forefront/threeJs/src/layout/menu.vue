<template>
    <div class="menu-wrap">
        <menuItem1 v-for="item in menuItems" :key="item.t" :item="item" />
    </div>
</template>

<script setup>
    import menuOpen from '@/assets/images/menu-open.png'
    import menuItem1 from '@/layout/item.vue'
    import { onMounted, ref, reactive } from "vue"

    const menuItems = [
        {   
            to: '/1',
            t: '入门',
            icon: 'https://m.cignacmb.com/d/file/20210810/b5118ca9481fa6a87dce8f9016c9b22a.png'
        },
        {
            to: '/2',
            t: '案例2',
            icon: 'https://m.cignacmb.com/d/file/20210810/b5118ca9481fa6a87dce8f9016c9b22a.png'
        },
        {
            to: '/3',
            t: '撒狗粮火龙果',
            icon: 'https://m.cignacmb.com/d/file/20210810/b5118ca9481fa6a87dce8f9016c9b22a.png',
            children: [
                {
                    to: '/3-1',
                    t: '子案例1',
                    icon: 'https://m.cignacmb.com/d/file/20210810/b5118ca9481fa6a87dce8f9016c9b22a.png'
                },
                {
                    to: '/3-2',
                    t: '子案例2',
                    icon: 'https://m.cignacmb.com/d/file/20210810/b5118ca9481fa6a87dce8f9016c9b22a.png'
                }
            ]
        },
  
        {
            to: '/4',
            t: '案例4',
            icon: 'https://m.cignacmb.com/d/file/20210810/b5118ca9481fa6a87dce8f9016c9b22a.png',
            children: [
                {
                    to: '/4-1',
                    t: '子案例1',
                    icon: 'https://m.cignacmb.com/d/file/20210810/b5118ca9481fa6a87dce8f9016c9b22a.png'
                },
                {
                    to: '/4-2',
                    t: '子案例2',  
                    icon: 'https://m.cignacmb.com/d/file/20210810/b5118ca9481fa6a87dce8f9016c9b22a.png',
                    children: [
                        {
                            to: '/4-2-1', 
                            t: '子案例1',
                            icon: 'https://m.cignacmb.com/d/file/20210810/b5118ca9481fa6a87dce8f9016c9b22a.png'
                        },
                        {
                            to: '/4-2-2',
                            t: '子案例2',
                            icon: 'https://m.cignacmb.com/d/file/20210810/b5118ca9481fa6a87dce8f9016c9b22a.png'
                        }
                    ]
                }
            ]
        }
    ];
    onMounted(() => {

    })
</script>

<style lang="scss" scoped>
    .menu-wrap {   
        height: 100vh;
        width: 200px; 
        background: #ffffff;
    }  
</style>