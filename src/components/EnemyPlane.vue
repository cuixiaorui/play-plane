<template>
  <Container :x="enemyPlane.position.x" :y="enemyPlane.position.y">
    <Sprite :texture="EnemyPlaneImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import EnemyPlaneImg from '../assets/enemyPlane.png'

const { enemyPlane } = defineProps(["enemyPlane"]);


</script>

<style scoped></style>
