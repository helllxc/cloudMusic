<template>
    <div id="page">
        <ul>
            <span class="page-total mr10" v-if="showTotal">共 {{total}} 条</span>
            <!--<li class="pre"><<</li>-->
            <li class="pre mr5" :class="{'notAllowed':isNotAllow}" @click="goPre"><a><</a></li>
            <li class="mr5" v-for="pre in (currentPage-1)" @click="changeCurPage(pre)"><a>{{pre}}</a></li>
            <li class="mr5 active"><a>{{currentPage}}</a></li>
            <li class="mr5" v-for=" back in (allPage-currentPage) " @click="changeCurPage(back+currentPage)"><a>{{back+(currentPage-0)}}</a></li>
            <li class="back mr5" :class="{'notAllowed':backAllow}" @click="goBack()"><a>></a></li>
            <div v-if="showElevator" class="elevator ml15">
                <div class="elevator_content">跳至
                    <input type="text"
                           :value="currentPage"
                           @keydown="keyDown"
                           @keyup="keyUp"
                           @change="keyUp" />页</div>
            </div>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                currentPage:1,
            }
        },
        props:{
            pageSize:{
                type:Number,
                default:10
            },

            total:{
                type:Number,
                default:60
            },
            showTotal:{
                type:Boolean,
                default:false
            },
            showElevator:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            changeCurPage(idx){
                if(idx!=this.currentPage){
                    this.currentPage = idx
                    this.$emit("on-change",idx)
                }
            },
            goPre(){
                let page = this.currentPage
                if(this.currentPage!=1){
                    page-=1
                    this.changeCurPage(page)
                }
            },
            goBack(){
              let page = this.currentPage
              if(this.currentPage!=this.allPage){
                  page+=1
                  this.changeCurPage(page)
              }
            },
            keyDown(e){
//                console.log(e)
            },
            keyUp(e){
                let key = e.keyCode
                if(key==38){

                }else if(key==40){

                }else if(key==13){
                    let value = parseInt(e.target.value)
                    let page = 1
                    if(value>this.allPage){
                        page = this.allPage
                    }else if(value<=0){
                        page = 1
                    }else {
                        page = value
                    }
                    e.target.value = page
                    this.changeCurPage(page)
                }
            }
        },
        computed:{
            allPage(){
                const allPage = Math.ceil(this.total/this.pageSize)
                return (allPage === 0) ? 1:allPage
            },
            isNotAllow(){
                return this.currentPage==1 ? true : false
            },
            backAllow(){
                return this.currentPage==this.allPage ? true : false
            }
        }
    }
</script>
<style lang="scss">
    #page{
        font-size:12px ;
        ul{
            overflow: hidden;
            .page-total{
                float: left;height: 32px;line-height: 32px;
            }
            li{
                float: left;width: 32px;height: 32px;background-color:#fff;border: 1px solid #dddee1;line-height: 30px;text-align: center;cursor: pointer;border-radius: 4px;
                &:hover{
                    border-color:#2d8cf0;
                    a{color:#2d8cf0}
                }
                a{cursor: pointer;font-size: 12px}
            }
            .active{
                background-color:#2d8cf0;
                a{color: #fff;border-color:#2d8cf0}
                &:hover{
                    a{color:#fff}
                }
            }
            .notAllowed{
                cursor: not-allowed;background: #ffffff;
                a{cursor: not-allowed}
                &:hover{
                    border-color: #dddee1 !important;
                    a{color: #000}
                }

            }
            .elevator{
                display: inline-block;
                .elevator_content{
                    display: inline-block;height: 32px;line-height: 32px;
                    input{
                        display: inline-block;
                        width: 100%;
                        height: 32px;
                        line-height: 1.5;
                        padding: 4px 7px;
                        font-size: 12px;
                        border: 1px solid #dddee1;
                        color: #495060;
                        background-color: #fff;
                        background-image: none;
                        position: relative;
                        cursor: text;
                        transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
                        border-radius: 4px;
                        margin: 0 8px;
                        width: 50px;
                    }
                }
            }
        }
    }
</style>