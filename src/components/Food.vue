<template>

    <div class="food">

        <h1>Can't decide what to eat ?</h1>

        <button type="button" v-if="!showMeal" @click="choseTheMeal">Get a meal idea</button>

        <button type="button" v-if="showMeal" @click="getDiffMeal">Get a different idea</button>

        <h2 v-if="showMeal">You should eat today a {{ meal }}</h2>

        <p v-if="showAngryMsg">{{ angryMsg }}</p>

    </div>

</template>

<script>
import { ref } from 'vue'

//Using COMPOSITION API (vue 3)
export default {
    name: "Food",
    setup() {

        const food = ['Avocado and egg sandwich', 'Summer rolls with peanut sauce', 'Protein Salad', 'Loaded Vegetable Sandwich', 'Chicken burrito bowl with rice and beans', 'Pizza', 'Shaormwa', 'Healthy Burger', 'McDonald', 'KFC', 'Subway'];
        const meal = ref( food[Math.floor( Math.random() * food.length )] );
        const showMeal = ref(false);
        const clickOnBtn = ref(1);
        const showAngryMsg = ref(false);
        const angryMsg = ref('Ahmm I know you are angry but man you so picky bruh... like PICK SOMETHING!');

        const choseTheMeal = () => {

            showMeal.value = !showMeal.value;

        }

        const getDiffMeal = () => {

            meal.value = ref( food[Math.floor( Math.random() * food.length )] );

            clickOnBtn.value++

            if ( clickOnBtn.value === 10 ) {

                showAngryMsg.value = true

            }

        }

        return { meal, showMeal, choseTheMeal, getDiffMeal, angryMsg, showAngryMsg }
    }
}

</script>

<style>

    .food {
        position: relative;
        height: calc( 100vh - 84px );
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #282c34;
    }

    .food h1 {
        margin-bottom: 20px;
        color: #fff;
    }

    .food h2 {
        margin-top: 80px;
        color: #fff;
        font-size: 48px;
        max-width: 720px;
        margin-left: auto;
        margin-right: auto;
    }

    .food p {
        margin-top: 30px;
        color: #fff;
        font-size: 22px;
        max-width: 720px;
        margin-left: auto;
        margin-right: auto;
    }

    .food button {
        color: #fff;
        font-size: 13px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 15px 35px;
        background: #e2777a;
        transition: .34s;
        border: none;
        cursor: pointer;
    }

    .food button:hover {
        background: #7cc296;
    }

</style>
