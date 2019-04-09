<template>
    <div class="role_base" >
        <input class="role_name" type="text" v-bind:value="name" readonly/>
        <img class="role_border" v-bind:src="borderUrl"/>
        <img class="role_show" v-bind:src="image" v-bind:style="{ backgroundColor: backgroundStyle }"/>
    </div>
</template>

<script>
    export default {
        name: "RoleThumbnail",
        props:{ name:String, image:String, typed:String ,required: true},
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
            borderUrl:function () {
                let border = 'src/images/border_undefined.png';
                if(this.typed !== 'undefined'){ border = border.replace(/undefined/i,this.typed); }
                return border;
            }
        }
    }
</script>

<style scoped>
    .role_base{ width: 100px; height: 140px; margin: 10px; float: left;}
    .role_show{ position: absolute; width: 100px; height: 140px; z-index: 1;}
    .role_name{ position: absolute; width: 80px; height: 20px; background-color: transparent; margin-top: 6px; margin-left: 12px; text-align: right; border: none; outline: none; font-size: 12px; z-index: 2;}
    .role_border{ position: absolute; width: 100px; height: 140px; z-index: 3;}
</style>