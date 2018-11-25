<template>
  <div>
    <p class="dentaku-title">
      電卓です
    </p>
    <div>
      計算結果:<span id="result">{{counter}}</span>
    </div>
    <div class="dentaku-board">
      <div class="dentaku-board-number">
        <button v-for="item in 9" v-bind:key="item" class="dentaku-board-button" v-bind:id="item" v-on:click="clickNumber(item)">{{ item }}</button>
        <button class="dentaku-board-button dentaku-board-button__w2" v-bind:id="item" v-on:click="clickNumber(0)">{{ 0 }}</button>
        <button class="dentaku-board-button" v-on:click="clickNumber('.')">.</button>
      </div>
      <div class="dentaku-board-otg">
        <button class="dentaku-board-button" v-on:click="clickClear()">C</button>
        <div class="dentaku-board-button"></div>
        <button class="dentaku-board-button" v-on:click="clickOperator('+')">+</button>
        <button class="dentaku-board-button" v-on:click="clickOperator('-')">-</button>
        <button class="dentaku-board-button" v-on:click="clickOperator('*')">*</button>
        <button class="dentaku-board-button" v-on:click="clickOperator('/')">/</button>
        <button class="dentaku-board-button dentaku-board-button__w2" v-on:click="clickResult('=')">=</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
//   el: '#result',
//   question: '',
//   answer: 'I cannot give you an answer until you ask a question!',
//   watch: {
//     // この関数は question が変わるごとに実行されます。
//     question: function (newQuestion, oldQuestion) {
//       this.answer = 'Waiting for you to stop typing...'
//       this.debouncedGetAnswer()
//     }
//   }
  data () {
    return {
      counter: 0,
      operator: '',
      beforeNum: 0,
      equal: '',
      formula: ''
    }
  },
  methods: {
    clickNumber: function (item) {
      if (this.equal === '=' || this.counter === 0) {
        this.counter = ''
        this.equal = ''
        this.formula = ''
      }
      if (item === '.') {
        if (String(this.counter).indexOf('.') !== -1) {
          item = ''
        } else if (String(this.counter) === '') {
          item = '0.'
        }
      }
      this.counter += String(item)
    },
    clickOperator: function (operator) {
      this.operator = operator
      this.beforeNum = this.counter
      this.counter = 0
    },
    clickResult: function () {
      if (this.operator !== '') {
        if(this.formula === '') {
          this.formula = this.operator + this.counter;
        }
        if(this.equal !== '=') {
          this.counter = eval(this.beforeNum + this.formula)
        }
        else {
          this.counter = eval(this.counter + this.formula)
        }
        this.equal = '='
      }
    },
    clickClear: function () {
      this.counter = 0
      this.operator = ''
      this.equal = ''
      this.formula = ''
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
button {
  width: 32px;
  height: 32px;
  margin: 4px;
}

.dentaku-board-button__w2{
  width: 72px;
}

.dentaku-board{
  width: 240px;
  display: flex;
  flex-wrap: wrap;
}

.dentaku-board-number{
  width: 120px;
  display: flex;
  flex-wrap: wrap;
}

.dentaku-board-otg{
  width: 80px;
  display: flex;
  flex-wrap: wrap;
}
</style>
