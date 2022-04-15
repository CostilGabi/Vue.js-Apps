<template>

    <div class="todo">

        <div class="todo-header">

            <input type="text" ref="todoinput" name="main" v-model="todo" placeholder="Go to church">

            <button @click="addToDo" type="button" name="button">Add to list</button>

        </div>

        <div class="todo-main" ref="todo">

            <h2>Here's your list for today</h2>

            <p v-if="showMsg">There are no todo's at the moment. You can add them from the top input.</p>

            <div class="todo-main-item" v-for="todo in todos">

                {{todo}}

            </div>

        </div>

    </div>

</template>

<script>

export default {
  name: 'TodoPart',

  data() {
        return {
            todo: '',
            todos: [],
            showMsg: true
        }
  },

  methods: {

      addToDo() {

          this.todos.push(this.todo)

          if ( this.todos ) {

              this.showMsg = false

          }

          this.todo = ''

      }

  }
}

</script>

<style>

    * {
        outline: none;
    }

    .todo {
        position: relative;
        min-height: calc( 100vh - 84px );
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        background: #282c34;
        padding-top: 150px;
        width: 100%;
    }

    .todo-header {
        display: flex;
        align-items: center;
        font-weight: 16px;
        color: #000;
        width: 100%;
        max-width: 1024px;
    }

    .todo-header input {
        width: 80%;
        border: none;
        border-bottom: 1px solid #7cc296;
        padding: 20px 0;
        background: none;
        font-size: 30px;
        color: #fff;
    }

    .todo-header input::placeholder {
        color: #999;
    }

    .todo-header button {
        width: 20%;
        background: #be686d;
        padding: 26px 20px;
        text-align: center;
        border: none;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        transition: .34s;
    }

    .todo-header button:hover {
        background: #7cc296;
    }

    .todo-main {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .todo h2 {
        font-size: 48px;
        color: #fff;
        margin-bottom: 10px;
    }

    .todo p {
        text-align: left;
        color: #999;
        font-size: 20px;
    }

    .todo-main {
        width: 100%;
        max-width: 1024px;
        margin-top: 80px;
    }

    .todo-main-item {
        position: relative;
        font-size: 15px;
        padding: 10px 30px;
        font-size: 22px;
        background: #fff;
        text-align: left;
        border-radius: 10px;
        width: 100%;
    }

    .todo-main-item:first-of-type {
        margin-top: 50px;
    }

    .todo-main-item:not(:last-child) {
        margin-bottom: 20px;
    }

</style>
