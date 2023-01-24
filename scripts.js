const { createApp } = Vue;

createApp({

    data() {

        return {
                
            newTodo: '',

            todos: [ {
                text: 'Fare la spesa',
                done: 'False',
                
            }, {
                text: 'Andare in banca',
                done: 'True',
                
            }, {
                text: 'Chiamare meccanico',
                done: 'False',
                
            }, {
                text: 'Fare la lavatrice',
                done: 'True',
                
            }, {
                text: 'Comprare inchiostro nero',
                done: 'False',
                
            }, 
            ]      
                
        }

        
    },

    methods: {

        addTodo() {

            if (this.newTodo != 0) {

                this.todos.push(this.newTodo);
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


