<template>
  <Container class="Bullet" :x="bullet.position.x" :y="bullet.position.y">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import bulletImg from "../assets/bullet.png";

const { bullet } = defineProps(["bullet"]);

</script>

<style scoped>
.Bullet {
  width: 20px;
  height: 20px;
  background: green;
}
</style>
