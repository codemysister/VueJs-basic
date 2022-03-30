const app = Vue.createApp({
    data(){
        return {
            userGoalsA: 'finish this course',
            userGoalsB: 'build awesome app',
            vueLinks: 'https://vuejs.org/guide/introduction.html#what-is-vue',
        };
    },
    methods:{
        outputGoals(){
            const rand = Math.random();
            
            if(rand < 0.5){
                return this.userGoalsA;
            }else{
                return this.userGoalsB;
            }
        }
    },
});

app.mount('#user-goal');