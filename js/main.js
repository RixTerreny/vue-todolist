const {createApp} = Vue;

createApp({
    data(){
        return{
            toDoList:[
                {testo: "Lavare i panni",       done: false,},
                {testo: "Buttare l'immondizia", done: false,},
                {testo: "Andare alle poste",    done: false,},
            ],
            newTask:{
                text:"",
            },
        };
    },
    methods: {
        checked(){
            this.toDoList.done = true;
        },
        addTask(){
            this.toDoList.push({
                testo: this.newTask.text,
                done:false,
            });
            this.newTask.text="";
        },
        removeTask(indice){
            this.toDoList.splice(indice,1);
        }
    }
}).mount("#app"); 