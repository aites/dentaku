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
    <div id="repeat-object">
      <button v-repeat="primitiveValues">{{$key}}{{$value}}</button>
    </div>
  </div>
</template>
