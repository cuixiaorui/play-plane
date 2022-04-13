<template>
  <Container class="Bullet" :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import bulletImg from "../assets/bullet.png";
import { Bullet } from "../game";

const { bullet } = defineProps({
  bullet: {
    type: Object as PropType<Bullet>,
    required: true,
  },
});

// TODO 需要动态的获取width 和 height
// 解决 ref 的问题
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
