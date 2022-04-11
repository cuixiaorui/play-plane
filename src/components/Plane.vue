<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="PlaneImg"></Sprite>
  </Container>
</template>

<script lang="ts" setup>
import PlaneImg from "../assets/plane.png";
import { onMounted, defineProps } from "vue";

// TODO 如何把 type 给传入过来
const { plane } = defineProps(["plane"]);

function keydownHandler(e: KeyboardEvent) {
  switch (e.code) {
    case "ArrowLeft":
      plane.moveLeft();
      break;
    case "ArrowRight":
      plane.moveRight();
      break;
    case "ArrowUp":
      plane.moveUp();
      break;
    case "ArrowDown":
      plane.moveDown();
      break;
    case "Space":
      plane.attack();
      break;
  }
}

onMounted(() => {
  window.addEventListener("keydown", keydownHandler);
});
</script>
