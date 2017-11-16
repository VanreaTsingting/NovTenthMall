<template>
  <div class="goods">

    <table style="border: 2px solid #42b983;border-radius: 3px;background-color: #fff;">
      <thead>
      <tr>
        <th>序号</th>
        <th>用户名</th>
        <th>年龄</th>
        <th>毕业学校</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for ="(user,index) in users">
        <td>{{index+1}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>{{user.school}}</td>
        <td><button v-on:click="remove(index)">remove</button></td>
      </tr>
      <tr>
        <td></td>
        <td><input type="text"  id="name" v-model="user.name"/></td>
        <td><input type="text" id="age"v-model="user.age"/></td>
        <td><input type="text" id="school"v-model="user.school"/></td>
        <td><button @click="insert">insert</button></td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
  export default {
    props: {
      users: {
        type: Object,
        default: [
          {'name': 'default李磊33', 'age': 'default25', 'school': 'default洛阳理工'},
          {'name': 'default张成33', 'age': 'default23', 'school': 'default桂林电子科技'},
          {'name': 'default炼心33', 'age': 'default22', 'school': 'default江西电子科技'}
        ]
      }
    },
    data () {
      return {
        computer: [],
        min: '',
        max: '',
        busy: false,
        timer: null,
        sortType: 1,
        windowHeight: null,
        windowWidth: null,
        params: {
          page: 1,
          sort: ''
        },
        user: {'name': '', 'age': '', 'school': ''}
      }
    },
    methods: {
      insert: function () {
        this.users.push(this.user)
      },
      remove: function (index) {
        this.users.splice(index, 1)
      }
    }
  }
</script>

<style scoped>

  th{
    background-color: #42b983;
    color: rgba(255,255,255,0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -user-select: none;
  }

  td {
    background-color: #f9f9f9;
  }

  th, td {
    min-width: 120px;
    padding: 10px 20px;
  }

  th.active {
    color: #fff;
  }

  th.active .arrow {
    opacity: 1;
  }

</style>
