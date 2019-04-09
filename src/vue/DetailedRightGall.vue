<template>
    <div class="show_gall" v-bind:style="{ backgroundColor: backgroundStyle }">
        <template v-for="val in gall">
            <input class="gall_title" type="text" v-bind:value="val.title" v-bind:style="{ borderColor: borderStyle, backgroundColor: isActive(val.title) ? borderStyle : 'transparent'}" readonly/>
            <div class="gall_box" v-bind:style="{ borderColor: borderStyle}">
                <img class="gall_img" v-bind:src="val.img" v-on:click="choice(val.title, val)"/>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "DetailedRightGall",
        props:{ gall: Object, typed:String, required: true },
        data: function () {
            return{
                selected: '通常装扮'
            }
        },
        methods:{
            choice: function (message,source) {
                this.selected = message;
                this.$emit("image_show",source);
            },
            isActive:function (message) {
                return message === this.selected;
            }
        },
        computed:{
            backgroundStyle:function () {
                let style = 'transparent';
                switch (this.typed) {
                    case "fire" : style = 'rgba(238,0,0,0.6)'; break;
                    case "water" : style = "rgba(102,204,255,0.6)"; break;
                    case "thunder" : style = "rgba(255,182,30,0.6)"; break;
                    case "wind" : style = "rgba(57,197,187,0.6)"; break;
                    case "light" : style = "rgba(255,251,240,0.6)"; break;
                    case "dark" : style = "rgba(153,153,255,0.6)"; break;
                    default: console.log('role type undefined'); break;
                }
                return style;
            },
            borderStyle:function () {
                let style = 'transparent';
                switch (this.typed) {
                    case "fire" : style = '#EE0000'; break;
                    case "water" : style = "#66CCFF"; break;
                    case "thunder" : style = "#FFB61E"; break;
                    case "wind" : style = "#39C5BB"; break;
                    case "light" : style = "#FFFBF0"; break;
                    case "dark" : style = "#9999FF"; break;
                    default: console.log('role type undefined'); break;
                }
                return style;
            }
        }
    }
</script>

<style scoped>
    .show_gall{ position: fixed; width: 250px; height: 460px; z-index: 6;}
    .gall_title{ width: 80px; height: 30px; border-radius: 8px 8px 0 0; border: 5px; border-right-style:solid; border-top-style:solid; border-left-style:solid; margin: 10px 40px 0 40px; text-align: center; outline: none; background-color: transparent;}
    .gall_box{ width: 210px; height: 90px; border-radius: 8px; border: 5px solid; margin: 0 20px 10px 20px; overflow: hidden;}
    .gall_img{ width:200px; height: 80px;}
</style>