<template>
  <div class="container" style="background-color: rgb(235,232,232)">

    <!--1. header-->
    <div class="header">
      <div style="padding-left: 300px; padding-right: 320px;" >
        <div v-for="(item, index) in tab_list">
          <a style="float: left;color: #333333" href="" v-if="index==0">
            <img style="width:120px;height:116px;"
                 src="http://www.gemmy.com.cn/ZH_CN/images/logo.png"></a>
          <a style="float: right;padding-top: 15px;color: #333333" href="" v-if="index!=0&&index!=1">{{ item.name }} |</a>
          <a style="float: right;padding-top: 15px;color: #333333" href="" v-if="index==1">{{ item.name }}</a>
        </div>
      </div><br/>
    </div>

    <!--1. header-->
    <div style="margin-top: 55px;">
      <div style="background-color: #094;">
        <div style="padding: 10px 80px 10px 80px;text-align: center;" >
          <div style="display: inline-block;margin-right: 10px;" v-for="(item, index) in tab_list">
            <a style="margin-right: 60px;color: #fff" href="" v-if="index==0">{{ item.name }}</a>
            <a style="color: #8ed399" href="" v-if="index!=0&&index!=1">{{ item.name }} |</a>
            <a style="color: #8ed399" href="" v-if="index==1">{{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>



    <div>
      <!--2. left-->
      <div class="left">
        <div>1导航</div>
        <div>2导航</div>
        <div>3导航</div>
        <div>4导航</div>
      </div>

      <!--3. right-->
      <div class="right">
        <div>sss</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>sss</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>sss</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>sss</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>sss</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
    </div>
    <div></div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tab_list: [
        {name: 'xx电商', tab_flag: true},
        {name: '用户设置', tab_flag: false},
        {name: '精彩分享', tab_flag: false},
        {name: '加入我们', tab_flag: false},
        {name: '客户服务', tab_flag: false},
        {name: '促销优惠', tab_flag: false},
        {name: '产品介绍', tab_flag: false},
        {name: '山泉水知识', tab_flag: false},
        {name: '走进xxx', tab_flag: false},
        {name: '首页', tab_flag: false}
      ],
      showFlag: false
    }
  },
  methods: {
    tabbtnclick (item) {
      console.log('Tab Click：' + item.name)
    },
    tabLeave () {
      console.log('tabLeave')
//      this.showFlag = false
    },
    tabEnter (item) {
      console.log('tabEnter' + item.name)
//      this.showFlag = true
    }
  }
}
</script>

<style scoped>


.container {
  overflow: hidden;
  height: 100%;
}

.left {
  width: 15%;
  margin-left: 5%;
  float: left;
  clear:both;
  background-color: #e2e2e2;
  min-height: 100%;
  margin-bottom: -99999px;
  padding: 0 0 99999px;
}

.left div {
  border-bottom: 1px solid #ccc;
  color: #6f6f6f;
  display: block;
  padding: 20px 2px;
  text-decoration: none;
}

.right {
  width: 75%;
  margin-right: 5%;
  float: left;

}

.right div {
  height: 100px;
  background-color: #ddd;
}

</style>
