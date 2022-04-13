<template>
  <Container :x="enemyPlane.x" :y="enemyPlane.y">
    <Sprite :texture="EnemyPlaneImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import EnemyPlaneImg from "../assets/enemyPlane.png";
import { EnemyPlane } from "../game";

const { enemyPlane } = defineProps({
  enemyPlane: {
    type: Object as PropType<EnemyPlane>,
    required: true,
  },
});

enemyPlane.width = 172;
enemyPlane.height = 115;
</script>

<style scoped></style>
