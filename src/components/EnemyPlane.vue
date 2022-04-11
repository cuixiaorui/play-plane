<template>
  <Container :x="enemyPlane.x" :y="enemyPlane.y">
    <Sprite :texture="EnemyPlaneImg" :ref="sprite"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import EnemyPlaneImg from "../assets/enemyPlane.png";

const { enemyPlane } = defineProps(["enemyPlane"]);


// const sprite = ref(null);
// onMounted(() => {

//   console.log("-----------enemyPlane-------------");
//   console.log(sprite);
// });

enemyPlane.width = 172
enemyPlane.height = 115
</script>

<style scoped></style>
