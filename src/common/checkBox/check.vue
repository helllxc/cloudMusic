<template>
    <div>
        <label>
            <input type="checkbox" :value="value" v-model="isClick" @click="handleChange">123
        </label>

    </div>
</template>

<script>
    export default {
        props:['value'],
        data(){
            return{
                isClick:false
            }
        },
        methods:{
            handleChange(e){
                this.$emit('input',e.target.checked)
            }
        }
    }
</script>