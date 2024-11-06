<template>
    <div class="page">
        <leftMenu></leftMenu>
        <div class="page-main">
            <router-view></router-view>
        </div>
    </div>       
</template>
<script setup> 
    import leftMenu from '@/layout/menu.vue'
</script>

<style lang="scss" scoped>
    .page{
        display: flex;
    }   
    .page-main{       
        flex: 1;
        width: 100%;    
        margin: 20px 40px;
    }
</style>