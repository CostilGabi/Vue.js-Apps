<template>

    <div class="blogs">

        <h1>The most useless blog ever.</h1>

        <p>And here's why you should read it... ofc and here's why you should read it And here's why you should read it And here's why you should read it.</p>

        <div class="blogs-items" v-if="blogs">

            <div class="blogs-items-i" v-for="blog in blogs" :key="blog.id">

                <div class="blogs-items-i-img">

                    <img :src="blog.img" :alt="blog.title">

                </div>

                <div class="blogs-items-i-con">

                    <h3>{{ blog.title }}</h3>

                    <p>{{ blog.description }}</p>

                    <router-link :to="{ name: 'Blog', params: { id: blog.id } }">Read more</router-link>

                </div>

            </div>

        </div>

    </div>

</template>

<script>
export default {
    name: "Blogs",
    data() {
        return {
            blogs: []
        }
    },
    mounted() {

        fetch('http://localhost:3000/blogs')
            .then( res => res.json() )
            .then( data => this.blogs = data )
            .then( err => console.log(err.message) )
    }
}
</script>

<style>

    .blogs {
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: column;
        background: #292d35;
    }

    .blogs h1 {
        color: #fff;
        font-size: 48px;
        margin-bottom: 20px;
    }

    .blogs p {
        color: #fff;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
    }

    .blogs-items {
        position: relative;
        margin-top: 50px;
        width: 100%;
        max-width: 760px;
        margin-left: auto;
        margin-right: auto;
    }

    .blogs-items-i {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        background: #2c3e50;
        -webkit-box-shadow: 0px 0px 205px -20px rgba(0,128,255,0.71);
        -moz-box-shadow: 0px 0px 205px -20px rgba(0,128,255,0.71);
        box-shadow: 0px 0px 205px -20px rgba(0,128,255,0.71);
        border-radius: 5px;
    }

    .blogs-items-i:not(:last-child) {
        margin-bottom: 60px;
    }

    .blogs-items-i-img {
        display: flex;
        width: 45%;
        height: 220px;
    }

    .blogs-items-i-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .blogs-items-i-con {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 49%;
    }

    .blogs-items-i-con h3 {
        color: #fff;
        text-align: left;
        margin-bottom: 15px;
        font-size: 22px;
    }

    .blogs-items-i-con p {
        color: #fff;
        text-align: left;
        margin-bottom: 30px;
        font-size: 18px;
    }

    .blogs-items-i-con a {
        color: #fff;
        background: #000;
        border-radius: 20px;
        text-decoration: none;
        padding: 8px 20px;
        font-size: 14px;
    }

</style>
