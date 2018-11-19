<template>
  <div>
    <p>
      ここはヘッダーです。
    </p>
    <ul>
    <li v-for="item in 10" v-bind:key="item">
    <p>{{ item }} は {{ item }}円</p>
    </li>
    </ul>
  </div>
</template>
