<template>
    <div>
        <header>
            <div class="nav">
                <a href="/">
                    <h1></h1>
                </a>
                <nav>
                    <ul>
                        <li><a href="" style="color: #2384E8;">电影</a></li>
                        <li><a href="" style="color: #9F7860;">图书</a></li>
                        <li><a href="" style="color: #E4A813;">广播</a></li>
                        <li><a href="" style="color: #2AB8CC;">小组</a></li>
                    </ul>
                    <!--<span></span>-->
                </nav>
            </div>
        </header>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                isShow:false
            }
        },
        methods:{
            toggle(){
                this.isShow  = !this.isShow
            }
        }
    }

</script>
<style>
    @import '../../assets/iconfont/iconfont.css';
</style>
<style lang="scss">
    .nav{
        height: 47px;
        align-items: center;
        padding: 0 18px;
        background: #fff;
        display: flex;
        border-bottom: 1px solid #f3f3f3;
        -webkit-box-pack: justify;
        justify-content: space-between;
        h1{
            margin: 0;
            padding: 0;
            color: #00b600;
            font-size: 0;
            background:url("../../assets/img/nav/douban.png") no-repeat;
            background-size: cover;
            height: 22px;
            width: 46px;
            display: inline-block;
        }
        span{
            font-size: 0;
            background:url("../../assets/img/nav/search.png") no-repeat;
            background-size: cover;
            width: 24.57143px;
            height: 18.28571px;
            margin-top: 4px;
            position: relative;
            display: inline-block;
        }
    }

</style>
