<template>

    <div class="header">

        <div class="wrapper">

            <div class="header-logo">

                <b>vue.js apps</b>

                <span>by Costil Gabriel</span>

            </div>

            <div class="header-nav">

                <router-link to="/">Home</router-link>

                <router-link :to="{ name: 'Todo' }">Todo</router-link>

                <router-link :to="{ name: 'Counter' }">Ninja Game</router-link>

                <router-link :to="{ name: 'Timer' }">Tricky Timer</router-link>

                <router-link :to="{ name: 'Form' }">Jobs Form</router-link>

                <router-link :to="{ name: 'Blogs' }">Blog</router-link>

                <router-link :to="{ name: 'Food' }">Food</router-link>

            </div>

        </div>

    </div>

    <router-view/>

</template>

<style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .header {
        position: relative;
        width: 100%;
        background: #282c34;
    }

    .header .wrapper {
        width: 100%;
        max-width: 1260px;
        padding-left: 30px;
        padding-right: 30px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .header-logo {
        display: flex;
        align-items: center;
    }

    .header-logo b {
        border-bottom: 2px solid #be686d;
        color: #be686d;
    }

    .header-logo span {
        color: #be686d;
        opacity: .5;
        font-size: 12px;
        margin-left: 10px;
    }

    .header-nav {
        position: relative;
        display: flex;
        align-items: center;
    }

    .header-nav a {
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        color: #fff;
    }

    .header-nav a:not(:last-child) {
        margin-right: 20px;
    }

    .header-nav a.router-link-active {
        color: #7cc296;
    }

</style>
