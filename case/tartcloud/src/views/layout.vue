<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <!-- <Footer></Footer> -->
    </div>  
</template> 

<script lang="ts" setup> 
import Header from '../components/header/index.vue'
import { onMounted } from 'vue';

onMounted(()=>{
    // console.log(VueFullPage);
})
</script>