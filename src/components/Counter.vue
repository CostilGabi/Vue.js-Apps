<template>

    <div class="counter">

        <div class="wrapper">

            <h2>{{ title }}</h2>

            <p>{{ description }}</p>

            <button type="button" @click="start" :disabled="isPlaying">Start the game</button>

            <div class="counter-box" v-if="showBox" @click="stopTimer" :delay="delay">Test your ninja skills</div>

            <div class="counter-result" v-if="displayScore">

                <span>Your score is: {{ reactionTime }} milliseconds</span>

                <span>Which means you are in the <b>{{ category }} category</b></span>

            </div>

        </div>

    </div>

</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            title: "Counter",
            description: "Click the box when it appear on your screen. The box will appear on a random time and you have to click it as soon as possible",
            isPlaying: false,
            showBox: false,
            delay: 0,
            timer: null,
            reactionTime: 0,
            displayScore: false,
            category: 'default'
      }
    },
    methods: {

        start() {

            this.isPlaying = true
            this.delay = 2000 + Math.random() * 2000

            setTimeout( () => {

                this.showBox = true
                this.startTimer()

            }, this.delay)

        },

        startTimer() {

            this.timer = setInterval( () => {
                this.reactionTime += 10
            }, 10 )

        },

        stopTimer() {
            clearInterval(this.timer)

            //naming for the categories
            if ( this.reactionTime < 350 ) {
                this.category = 'Hamilton... is this you ?'
            } else if ( this.reactionTime < 450 ) {
                this.category = 'wow'
            } else if ( this.reactionTime < 550 ) {
                this.category = 'Great...not like your life tho'
            } else if ( this.reactionTime < 650 ) {
                this.category = 'I\'ve seen worst'
            } else {
                this.category = 'bruh do you like even see ? ( I won\'t even bother trying again )'
            }

            this.displayScore = true
        }
    }
}
</script>

<style>

    .counter {
        position: relative;
        height: calc( 100vh - 84px );

    }

    .counter .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        max-width: 1024px;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 30px;
        padding-right: 30px;
    }

    .counter h2 {
        margin-bottom: 20px;
    }

    .counter p {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    .counter button {
        width: 100%;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        border: 3px solid #2c3e50;
        color: #2c3e50;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 25px 35px;
        background: none;
        margin-top: 30px;
        transition: .34s;
        cursor: pointer;
    }

    .counter button:hover {
        background: #2c3e50;
        color: #fff;
    }

    .counter button:disabled {
        opacity: .5;
        pointer-events: none;
    }

    .counter-box {
        width: 100%;
        max-width: 500px;
        margin-left: auto;
        box-sizing: border-box;
        margin-right: auto;
        margin-top: 30px;
        background: #2c3e50;
        color: #fff;
        text-align: center;
        padding: 40px 80px;
        transition: .34s;
        cursor: pointer;
        font-weight: bold;
    }

    .counter-box:hover {
        opacity: .5;
    }

    .counter-result {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        margin: 30px auto 0 auto;
    }

</style>
