const app = Vue.createApp({
    // template: `<h2>This is a template from app.js</h2>`
    data() {
        return {
            name : 'Raychi',
            age : 21,
            job : 'Student',
            buttons : true
        }
    },
    methods: {
        Decrease(){
            this.age--;
        },
        ChangeName(name){
            this.name = name;
        },
        ShowButtons(){
            this.buttons = !this.buttons;
        }
    }
})

app.mount('#app')