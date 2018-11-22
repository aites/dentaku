<template>
  <div>
    <p class="dentaku-title">
      電卓です
    </p>
    <div class="dentaku-board">
    <button v-for="item in 9" v-bind:key="item" class="dentaku-board-button" v-bind:id="item" v-on:click="clickNumber(item)">{{ item }}</button>
    <button class="dentaku-board-button" v-on:click="clickOperator('+')">+</button>
    <button class="dentaku-board-button" v-on:click="clickOperator('-')">-</button>
    <button class="dentaku-board-button" v-on:click="clickOperator('*')">*</button>
    <button class="dentaku-board-button" v-on:click="clickOperator('/')">/</button>
    <button class="dentaku-board-button" v-on:click="clickResult('=')">=</button>
    </div>
    <div id="">
      計算結果<input type="number" >
      <p id="result">{{counter}}</P>
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
      beforeNum: 0
    }
  },
  methods: {
        clickNumber: function (item) {
            if (this.operator === '' || this.counter === 0) {
              this.counter = ''
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
            this.counter = eval(this.beforeNum + this.operator + this.counter)
            this.operator = ''
          }
        }
    }
}
</script>
