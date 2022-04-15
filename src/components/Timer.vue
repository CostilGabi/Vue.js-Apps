<template>

    <div class="timer">

        <h2>{{ title }}</h2>

        <p v-if="showTheTruth">{{ description }}</p>

        <div class="timer-controls">

            <button type="button" :disabled="isPlaying" @click="playTimer" name="play">Play</button>

            <button type="button" :disabled="isStopped" @click="stopTimer" name="stop">Stop</button>

        </div>

        <span class="timer-main">current time: {{ seconds }} seconds</span>

        <button type="button" class="tbtn" v-if="showTheTruth" @click="realClock">Want to see the real truth ?</button>

        <span v-if="showTheTruthBtn" class="realtime">Real time is: {{ realTimerSeconds }} seconds (can you solve why is that ?)</span>

    </div>

</template>

<script>
export default {
    name: 'Timer',
    data() {
        return {
            title: "A Tricky Timer",
            description: "Is it really that correct ?",
            showTheTruth: false,
            showTheTruthBtn: false,
            timer: 0,
            realTimer: 0,
            realTimerSeconds: 0,
            shit: 0,
            seconds: 0,
            isPlaying: false,
            isStopped: true

      }
    },
    methods: {

        playTimer() {

            this.isPlaying = true
            this.isStopped = false

            this.timer = setInterval( () => {
                this.seconds += 1
            }, 1000 )

            this.shit = setInterval( () => {
                this.seconds += 1
            }, 7000 )

            this.realTimer = setInterval( () => {
                this.realTimerSeconds += 1
            }, 1000 )

        },

        stopTimer() {

            this.isPlaying = false
            this.isStopped = true
            this.showTheTruth = true

            clearInterval(this.timer)
            clearInterval(this.shit)
            clearInterval(this.realTimer)

        },

        realClock() {

            this.showTheTruthBtn = !this.showTheTruthBtn

        }

    }
}
</script>

<style>

    .timer {
        position: relative;
        height: calc( 100vh - 84px );
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #282c34;
    }

    .timer h2 {
        margin-bottom: 20px;
        color: #fff;
    }

    .timer p {
        text-align: center;
        margin-bottom: 20px;
        color: #fff;
    }

    .timer-controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 300px;
        margin: 0 auto 50px auto;
    }

    .timer .tbtn {
        max-width: 300px;
        margin: 50px auto 15px auto;
    }

    .timer button {
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

    .timer button:disabled {
        pointer-events: none;
        opacity: .5;
        background: #2c3e50;
    }

    .timer-controls button {
        width: calc( 50% - 10px );
    }

    .timer button:hover {
        background: #7cc296;
    }

    .timer-main {
        font-size: 22px;
        font-weight: bold;
        color: #7cc296;
    }

    .timer .tbtn {
        background: #fff;
        color: #2c3e50;
    }

    .timer .realtime {
        font-size: 22px;
        color: #7cc296;
        margin-top: 20px;
    }

</style>
