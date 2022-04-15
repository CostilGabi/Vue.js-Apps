<template>

    <div class="form">

        <h2>{{ title }}</h2>

        <form class="f" @submit.prevent="handleForm">

            <div class="f-item">

                <label>Full name</label>

                <input type="text" name="fname" v-model="name">

                <p class="error" v-if="errorName">Please add your name</p>

            </div>

            <div class="f-item">

                <label>Email</label>

                <input type="email" name="experience" v-model="email">

                <p class="error" v-if="errorEmail">Please add your email</p>

            </div>

            <div class="f-item">

                <label>Years in the field</label>

                <input type="text" name="experience" v-model="experience">

            </div>

            <div class="f-item">

                <label>Skills</label>

                <input type="text" name="skill" v-model="tempSkill">

                <span class="plus" @click="addSkill">+</span>

                <div class="f-item-skills">

                    <div class="f-item-skills-i" v-for="skill in skills">

                        <span>{{ skill }}</span>

                    </div>

                </div>

            </div>

            <div class="f-item">

                <label>Job</label>

                <select v-model="jobs">

                    <option value="Web Developer">Web Developer</option>

                    <option value="Vue.js Developer">Vue.js Developer</option>

                    <option value="React.js Developer">React.js Developer</option>

                </select>

            </div>

            <button type="submit" name="f-btn">Submit your application</button>

        </form>

    </div>

</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            title: "Contact form",
            name: '',
            experience: '',
            email: '',
            tempSkill: '',
            skills: [],
            jobs: '',
            errorName: false,
            errorEmail: false
      }
    },
    methods: {

        addSkill() {

            if ( !this.skills.includes( this.tempSkill ) ) {

                this.skills.push(this.tempSkill)

            }

            this.errorSkills = false
            this.tempSkill = ''

        },

        handleForm() {

            this.name === '' ? this.errorName = true : false
            this.email === '' ? this.errorEmail = true : false

            console.log('Full name: ' + this.name)
            console.log('Experience: ' + this.experience)
            console.log('Email: ' + this.email)
            console.log('Skills: ' + this.skills)
            console.log('Job: ' + this.jobs)

        }

    }
}
</script>

<style>

    .form {
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: column;
        background: #292d35;
    }

    .form h2 {
        font-size: 48px;
        color: #fff;
    }

    .form .f {
        position: relative;
        width: 100%;
        max-width: 500px;
        background: #edf6ff;
        border-radius: 5px;
        padding: 40px 35px;
        margin: 30px auto 0 auto;
        -webkit-box-shadow: 0px 0px 205px -20px rgba(0,128,255,0.71);
        -moz-box-shadow: 0px 0px 205px -20px rgba(0,128,255,0.71);
        box-shadow: 0px 0px 205px -20px rgba(0,128,255,0.71);
    }

    .form .f-item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    .form .f-item:not(:last-child) {
        margin-bottom: 25px;
    }

    .form .f-item label {
        font-size: 15px;
        color: #2c3e50;
        margin-bottom: 10px;
    }

    .form .f-item input,
    .form .f-item select {
        border: 1px solid #daedff;
        width: 100%;
        padding: 10px 15px;
        border-radius: 3px;
    }

    .form .plus {
        border: none;
        background: blue;
        color: #fff;
        border-radius: 5px;
        width: 20px;
        height: 20px;
        line-height: 0;
        text-align: center;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 38px;
    }

    .form button {
        border: none;
        background: blue;
        color: #fff;
        border-radius: 5px;
        padding: 20px 30px;
        width: 100%;
        text-align: center;
        font-weight: bold;
        margin-top: 20px;
        text-transform: uppercase;
        cursor: pointer;
    }

    .form .error {
        font-size: 12px;
        color: #ff4747b8;
        text-align: left;
        font-weight: 500;
    }

    .form .f-item-skills {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .form .f-item-skills-i {
        width: fit-content;
        border-radius: 5px;
        background: #cbe3fb;
        color: #000;
        text-align: center;
        font-size: 12px;
        padding: 7px 12px;
        margin-top: 8px;
    }

    .form .f-item-skills-i:not(:last-child) {
        margin-right: 7px;
    }

</style>
