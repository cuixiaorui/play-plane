<template>
  <Container class="Bullet" :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import bulletImg from "../assets/bullet.png";

const { bullet } = defineProps(["bullet"]);


// 需要动态的获取width 和 height
bullet.width = 45;
bullet.height = 75;

</script>

<style scoped>
.Bullet {
  width: 20px;
  height: 20px;
  background: green;
}
</style>
