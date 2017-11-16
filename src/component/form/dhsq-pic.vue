<template>
  <div class="goods">

    <img :src="picurl" style="width: 800px;">

  </div>
</template>
<script>
  export default {
    data () {
      return {
        picurl: 'http://www.gemmy.com.cn/ZH_CN/images/slider2.jpg'
      }
    },
    methods: {
      insert: function () {
        this.users.push(this.user)
      }
    }
  }
</script>

<style scoped>



</style>
