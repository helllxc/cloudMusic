export default {
    install (Vue,option){
        Vue.prototype.goto =function (url,obj) {
            obj?this.$router.push({path:url,query:obj}): this.$router.push(url)
        }
    }
}