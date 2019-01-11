<template>
<div class="my6">
    <div class="header">
        
        <span @click="back()">取消</span>
        <span>自我介绍</span>
        <span @click="confirm()">保存</span>
    </div>
    <div class="main">
        <textarea placeholder="添加你的个人介绍，提升职场人气~~" maxlength="500" @input="descInput" v-model="desc"></textarea>
         <span class="numberV">{{txtVal}}/500</span>
    </div>
</div>
</template>

<script>
export default {
    
    data(){
        return{
            txtVal: 0,
            desc:'',
        }
    },
    methods:{
        descInput(){
        this.txtVal = this.desc.length;
        },
        back(){
            this.$router.go(-1)
        },
        confirm(){
            this.$router.go(-1)
            this.$store.commit('confirm',this.desc)
        }
    }

    
}
</script>

<style scoped>
.my6{
    height:100vh;
    display: flex;
    flex-direction: column;
    background: #f7f4f4;
}
.header{
    height: 56px;
    background:#0c84f4;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    color: #fff;
    line-height: 56px;
    border-bottom: 1px solid #ccc;
}
.main {
    
    position: relative;
}
.main textarea{
    width: 100%;
    border:none;
    height:300px;
    padding-top: 5px;
    font-size: 16px;
}
.main span{
    position: absolute;
    right: 10px;
    bottom: 10px;
} 
</style>
