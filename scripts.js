const { createApp } = Vue;

createApp({

    data() {

        return {
                
            newTodo: '',

            todos: [ {
                text: 'Fare la spesa',
                done: false,
                
            }, {
                text: 'Andare in banca',
                done: true,
                
            }, {
                text: 'Chiamare meccanico',
                done: false,
                
            }, {
                text: 'Fare la lavatrice',
                done: true,
                
            }, {
                text: 'Comprare inchiostro nero',
                done: false,
                
            }, 
            ]      
                
        }

        
    },

    methods: {

        addTodo() {

            if (this.newTodo != 0) {

                this.todos.push({
                    text:this.newTodo,
                    done:false});
                this.newTodo = '';

            }
    
            console.log(this.todos)

        },

        
        removeTodo: function (index) {

            this.todos.splice(index, 1);

        },

    }

}).mount('#app');

// let listItem = document.getElementById('listItem');

// if (this.todos.done = 'True') {

//     listItem.classList.add('check')

// } else {

//     listItem.classList.add('check')

// }


