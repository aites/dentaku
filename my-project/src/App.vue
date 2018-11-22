<template>
  <div>
    <myheader></myheader>
    <p v-if="msg.length > 0">
      {{msg}}
      {{data}}
    </p>
    <p v-else>
      no text
    </p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
    <dentaku></dentaku>
  </div>
</template>

<script>
import myheader from './components/myheader'
import dentaku from './components/dentaku'

export default {
  components: {
    myheader,
    dentaku
  },
  data () {
    return {
      msg: 'Hello World!',
      primitiveValues: {
        FirstName: 'John',
        LastName: 'Doe',
        Age: 30
      },
      objectValues: {
        one: {
          msg: 'Hello'
        },
        two: {
          msg: 'Bye'
        }
      }
    }
  },
  methods: {
    clear () {
      this.msg = ''
    }
  },
  created () {
    var that = this
    $.getJSON('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US&callback=?', {}, function (json) {
      console.log(json)
      that.msg = json.postalcodes[0].adminName1
    })
  }
}
</script>
