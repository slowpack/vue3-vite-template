<template>
  <div class="home">
    <h1>Welcome</h1>
    <p>Thanks for visiting!</p>
    <button @click="startAnimation">Click Me!</button>
  </div>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue';

const startAnimation = (): void => {
  const button = document.querySelector('button') as HTMLButtonElement;
  button.classList.add('animated');
  setTimeout(() => {
    button.classList.remove('animated');
  }, 500);
  showConfetti.value = true;
  setTimeout(() => {
    showConfetti.value = false;
  }, 3000);
}
const showConfetti = ref(true)
</script>
  
<style>
.home {
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0069d9;
}

.animated {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-10px);
  }

  50% {
    transform: translateX(10px);
  }

  75% {
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>