import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var state={
    // username:''
    zwjs:''
}

var mutations={
    login:function(a,b){
        // a.username=b;
    },

    confirm:function (a,b) {
        console.log(a);
        a.zwjs=b;
      }
}


export default new Vuex.Store({
    state,
    mutations

})