<script setup lang="ts">
import Header_Home from './components/Header_Home.vue'
import Footer_Home from './components/Footer_Home.vue'
</script>

<template>
  <div>
    <!--? Do tính chất là RouterView nên không thể làm giống React được -->
    <!--? Sử dụng RouterView để chuyển đổi các View trong Router -->

    <!--? Vấn đề gần nhất sẽ đặt ra là -> Vậy làm thể nào để chuyển đổi Login sang HomePage dựa trên Access Token ?  -->
    <Header_Home />
    <RouterView />
    <Footer_Home />
  </div>
</template>
