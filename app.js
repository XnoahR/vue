const app = Vue.createApp({
    // template: `<h2>This is a template from app.js</h2>`
    data() {
        return {
            name : 'Raychi',
            age : 21,
            job : 'Student',
            buttons : true,
            x : 0,
            y : 0
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
        },
        EventHandler(e){
            console.log(e,e.type);
        },
        CursorTracker(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})

app.mount('#app')