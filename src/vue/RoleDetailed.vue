<template>
    <div class="show" v-bind:class = typed >
        <detailed_left v-bind:source="imageShow" v-bind:typed="typed"/>
        <detailed_right v-bind:source="role" v-bind:typed="typed" v-on:image_show="image_show"/>
    </div>
</template>

<script>
    import detailed_left from './DetailedLeft.vue';
    import detailed_right from './DetailedRight.vue';

    export default {
        name: "RoleDetailed",
        props:{ role: Object, required: true },
        components: {
            detailed_left, detailed_right
        },
        data: function () {
            return{
                typed: 'undefined',
                imageShow:{}
            }
        },
        methods:{
            image_show:function (source) {
                this.imageShow = source;
            }
        },
        created:function () {
            this.name = this.role.name;
            if(this.role.type !== 'undefined'){
                this.typed = this.role.type;
            }else{
                this.typed = 'undefined'
            }

            this.imageShow = this.role.role;
        }
    }
</script>

<style scoped>
    .show{ position: fixed; width: 740px; height: 540px; padding: 15px; border-radius: 20px; overflow:hidden; z-index: 9;}
    .undefined{ border: 10px solid transparent; background-color:transparent;}
    .fire{ border: 10px solid #EE0000; background-color:rgba(238,0,0,0.6);}
    .water{ border: 10px solid #66CCFF; background-color:rgba(102,204,255,0.6);}
    .thunder{ border: 10px solid #FFB61E; background-color:rgba(255,182,30,0.6);}
    .wind{ border: 10px solid #39C5BB; background-color:rgba(57,197,187,0.6);}
    .light{ border: 10px solid #FFFBF0; background-color:rgba(255,251,240,0.6);}
    .dark{ border: 10px solid #9999FF; background-color:rgba(153,153,255,0.6);}
</style>