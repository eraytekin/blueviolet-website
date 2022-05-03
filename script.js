new Vue({
    el:"#app",
    data(){
        return{
            isOpenMenu:false,
        }
    },
    methods:{
        openToMenu(){
            this.isOpenMenu = !this.isOpenMenu
        }
    }
});