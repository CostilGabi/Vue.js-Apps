<template>

    <div class="blog" v-if="blog">

        <h1>{{ blog.title }}</h1>

        <p>{{ blog.description }}</p>

        <img :src="blog.img" :alt="blog.title">

    </div>

</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: null
        }
    },
    mounted() {

        fetch('http://localhost:3000/blogs/' + this.id)
            .then( res => res.json() )
            .then( data => this.blog = data )
            .then( err => console.log(err.message) )
    }
}
</script>

<style>

    .blog {
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: column;
        background: #292d35;
    }

    .blog h1 {
        color: #fff;
        font-size: 48px;
        margin-bottom: 20px;
    }

    .blog p {
        color: #fff;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
    }

    .blog img {
        width: 100%;
        height: auto;
        max-width: 1024px;
        margin: 40px auto 0 auto;
    }

</style>
