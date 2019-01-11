<template>
  <div class="my3">
    <div class="header">
      <span @click="back()">&larr;</span>
      <p>个人资料</p>
    </div>

    <div class="main">
      <ul>
        <li>
          <span class="first">头像</span>
          <span>
            <img src="../../assets/my1.png" alt>
          </span>
          <router-link to="/update0"><span style="color:#848484">&gt;</span></router-link>
        </li>
        <li>
          <span class="first">昵称</span>
          <router-link to='/update1'><span class="last">www &nbsp;&nbsp;&nbsp;&gt;</span></router-link>
        </li>
        <li>
          <span class="first" >性别</span>
          <span class="last" @click="sex()">{{data1}}&nbsp;&nbsp;&nbsp;&gt;</span>
          <van-popup v-model="show" position="bottom" :overlay="true" style="height:190px;"> 
            <header style="display:flex;padding:0 10px;justify-content:space-between;height:49px;background:#c6c6c6;line-height:49px;">
              <span @click="cancel01()">×</span>
              <span>性别</span>
              <span @click="ok()">√</span>
            </header>
            <section>
              <van-picker :columns="columns" @change="onChange" style="height:140px;item-height:20px;background:#e5e5e5"/>
            </section>
          </van-popup>
        </li>
        <li>
          <span class="first">当前身份</span>
          <router-link to='/update2'><span class="last">待完善&nbsp;&nbsp;&nbsp;&gt;</span></router-link>
        </li>
        <li>
          <span class="first">当前地区</span>
          <span class="last" @click="Addarea()">{{area}}&nbsp;&nbsp;&nbsp;&gt;</span>
          <van-popup v-model="show01" position="bottom" :overlay="true" style="height:270px;width:100%;"> 
          <van-area :area-list="areaList"  title="" :columns-num="2" @confirm='onConfirm' @cancel='onCancel' style="background:#e5e5e5;color:#333;"/>
          
          </van-popup>
        </li>
        
        <li>
          <span class="first">感兴趣的行业</span>
          <router-link to="/update4"><span class="last">待完善&nbsp;&nbsp;&nbsp;&gt;</span></router-link>
        </li>
        <li>
          <span class="first">感兴趣的职业</span>
          <router-link to='/update5'><span class="last">移动开发&nbsp;&nbsp;&nbsp;&gt;</span></router-link>
        </li>
        <li>
          <span class="first">自我介绍</span>
         <!--  <span class="zwjs" @click=self()>{{zwjs}}&nbsp;&nbsp;&nbsp;&gt;</span>
           <h1 ></h1> --> 
          <span v-if="this.length>0" class="zwjs" @click=self()>{{this.$store.state.zwjs}}</span>
           <span v-else-if="this.length==0" class="zwjs" @click=self()>{{zwjs}}&nbsp;&nbsp;&nbsp;&gt;</span> 
        </li>
        <li>
          <span class="first">河南科技有限公司.HTML5</span>
          <span class="last">2016- 至今&nbsp;&nbsp;&nbsp;&gt;</span>
        </li>
      </ul>
    </div>

    <div class="footer">
      <router-link to="/update8"><div class="left">
       <span>+</span>
        <span>添加工作履历</span>
      </div></router-link> 
      
      <router-link to="/update9"><div class="right">
        <span>+</span>
        <span>添加教育履历</span>
      </div></router-link>
    </div>
  </div>
</template>

<script>
import Address from "../../assets/js/area.js"

export default {
   name: "My3",
  data() {
    return {
      
      ipt:'',
      data1:'待完善',
      columns: ['男', '女'],
      show:false,
      show01:false,
      areaList:Address,
      area:'待完善',
      zwjs:'待完善',
      length:this.$store.state.zwjs.length
    };
  },
  methods:{
    ok(){
      this.data1=this.ipt;
      this.show=false;
    },
    onChange(picker, value, index) {
      // Toast(`当前值：${value}, 当前索引：${index}`);
      this.ipt=value;
      console.log(value);
      console.log(this.length)
    },
    sex(){
      this.show=true;
    },
    onConfirm(e){
      var str = e[0].name +e[1].name;
      this.area=str;
      this.show01=false;
    },
    cancel01(){
      this.show=false;
    },
    onCancel(){
      
      this.show01=false;
    },
    Addarea(){
      this.show01=true;
    },
    self(){
      this.$router.push({
        path:'/update6'
      })
    },
    back(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.my3 {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f1f0f0;
  width: 100%;
}


.header {
  width: 100%;
  height: 56px;
  line-height: 20px;
  color: #fff;
  font-size: 0.15rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
  border-bottom: 1px solid #ccc;
  background: #0c84f4;
}
.header span {
  float: left;
  width: 24px;
  height: 24px;
  
  line-height:56px;
  font-size: 24px;
  margin-left: 10px;
}

.header p {
  float: left;
  margin-left: 140px;
  line-height: 56px;
}

.main {
  width: 100%;
  flex: 1;
  background: #f1f0f0;
}

.main ul li:first-child {
  height: 60px;
  line-height: 60px;
  padding: 0 10px;
  font-size: 16px;
  border-bottom: 1px solid rgb(231, 229, 229);
}

.main ul li {
  height: 57px;
  margin-bottom: 4px;
  padding: 0 10px;
  font-size: 16px;
  border-bottom: 1px solid rgb(231, 229, 229);
  background: #fff;
}

.main ul li .first {
  float: left;
  display: block;

  height: 35px;

  line-height: 55px;
}

.main ul li .last {
  float: right;
  line-height: 55px;
  color: #848484;
}

.zwjs{
  float: right;
  line-height: 55px;
  color: #848484;
  width:100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.main img {
  float: left;
  margin-left: 323px;
  width: 50px;
  height: 50px;
  margin-top: 5px;
  margin-right: 10px;
}

.footer {
  width: 100%;
  height: 53px;
  line-height: 20px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border: 1px solid rgba(255, 255, 255, 0);
  margin-top: 10px;
  background: #fff;
}

.footer .left {
  margin-top: 20px;
  float: left;
  width: 49%;
  border-right: 1px solid #ccc;
}
.footer .right {
  margin-top: 20px;
  float: left;
  width: 49%;
}
.footer .left span:first-child {
  margin-left: 30px;
  width: 18px;
  height: 18px;
}
</style>
