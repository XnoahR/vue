const app = Vue.createApp({
    // template: `<h2>This is a template from app.js</h2>`
    data() {
        return {
            url: 'https://www.google.com',
            name : 'Raychi',
            age : 21,
            job : 'Student',
            buttons : true,
            x : 0,
            y : 0,
            laptops : [
                {name: "Asus Tuf", brand: "Asus", isRTX: false},
                {name: "Legion", brand: "Lenovo", isRTX: true},
                {name: "Predator", brand: "Acer", isRTX: true},
            ]
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

const challenge = Vue.createApp({
    data(){
        return{
            musics:[{
                title: "Lost Boy",
                artist: "Ruth B.",
                cover: "Gawr Gura",
                isFavorite: true
            },
            {
                title: "December",
                artist: "Neck Deep",
                cover: "Hu Tao",
                isFavorite: false
            },
            {
                title: "Another Love",
                artist: "Tom Odell",
                cover: "Hu Tao",
                isFavorite: true
            },
            {
                title: "Fix You",
                artist: "Coldplay",
                cover: "Gawr Gura",
                isFavorite: false
            }
        ]
        }
    },
    methods:{
    changeFavorite(music){
        music.isFavorite = !music.isFavorite;
    }
}
})

app.mount('#app')
challenge.mount('#challenge')