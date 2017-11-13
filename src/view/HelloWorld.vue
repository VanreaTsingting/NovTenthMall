<template>
  <div class="hello">

    <!--header-->
    <div class="header">
      <nav>
        <ul>
          <li v-for="(item, index) in tab_list" v-bind:class="{tab_logo:index==0}">
            <a href="" v-if="index==0"><img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/html/html.png">{{ item.name }}</a>
            <a href="" v-if="index!=0&&index!=tab_list.length-1">{{ item.name }} |</a>
            <a href="" v-if="index==tab_list.length-1">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
    </div>

    <!--content-->
    <div class="content">
      <div class="content_nav">
        <ul>
          <li v-for="item in tab_list"  @mouseleave="tabLeave" @mouseenter="tabEnter(item)">
            <a @click="tabbtnclick(item)">{{item.name}}</a>
          </li>
        </ul>
        <div class="popupWindowS" v-show="showFlag"><img width="60px" height="60px" src="https://i1.mifile.cn/a4/xmad_14982250861854_iDbOz.jpg"></div>
      </div
      ><div class="content_main"></div>
    </div>

    <!--footer-->
    <div class="footer"></div>

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
        {name: '首页', tab_flag: false},
        {name: '走进xxx', tab_flag: false},
        {name: '山泉水知识', tab_flag: false},
        {name: '产品介绍', tab_flag: false},
        {name: '促销优惠', tab_flag: false},
        {name: '客户服务', tab_flag: false},
        {name: '加入我们', tab_flag: false},
        {name: '精彩分享', tab_flag: false},
        {name: '用户设置', tab_flag: false}
      ],
      showFlag: false
    }
  },
  methods: {
    btnclick () {
      this.$ajax({
        method: 'post',
        url: '/user',
        data: {
          name: 'wise',
          info: 'wrong'
        }
      })
    },
    tabbtnclick (item) {
      console.log('Tab Click：' + item.name)
    },
    tabLeave () {
      console.log('tabLeave')
      this.showFlag = false
    },
    tabEnter (item) {
      console.log('tabEnter' + item.name)
      this.showFlag = true
    }
  }
}
</script>

<style scoped>

body .header{
  display:block;
  background:#66CC00;
  height:50px;
  width:100%;
  padding:10px 0px 0px 0px;
  margin:0px;
  position:fixed;
}


.header nav ul li.tab_logo{
  background:#66CC00;
  list-style:none;
  float:left;
  font-size: 18px;
}

.header nav ul li{
  background:#66CC00;
  display:inline-block;
  list-style:none;
  float:right;
  color: #ffffff;
}

.header nav ul li.tab_logo img{
  width:40px;
  height:40px;
}

.content{
  display: block;
  text-align:center;
}

.content .content_nav{
  background: #06d688;
  width:15%;
  height: 8880px;
  display: inline-block;
}

.content .content_main{
  margin: auto;
  background: #83d65e;
  width:85%;
  height: 80px;
  display: inline-block;
}

.content_nav ul li{
  list-style: none;
}

.popupWindowS{

}

</style>
