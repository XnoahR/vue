const app = Vue.createApp({
    // template: `<h2>This is a template from app.js</h2>`
    data() {
        return {
            name : 'Raychi',
            age : 21,
            job : 'Student',
        }
    },
    methods: {
        Decrease(){
            this.age--;
        },
        ChangeName(name){
            this.name = name;
        }
    }
})

app.mount('#app')