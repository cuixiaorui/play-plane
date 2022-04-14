<template>
  <Container class="Bullet" :x="bullet.x" :y="bullet.y">
    <Sprite :texture="bulletImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import bulletImg from "../assets/bullet.png";
import { Bullet } from "../game";

const { bullet } = defineProps({
  bullet: {
    type: Object as PropType<Bullet>,
    required: true,
  },
});

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
