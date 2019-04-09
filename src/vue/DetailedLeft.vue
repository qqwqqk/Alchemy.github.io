<template>
    <div class="role_show">
        <img class="role_border" v-bind:src="borderUrl"/>
        <img class="role_show" v-bind:src="source.show" v-bind:style="{ backgroundColor: backgroundStyle }"/>
    </div>
</template>

<script>
    export default {
        name: "DetailedLeft",
        props:{ source: Object, typed:String, required: true },
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
                let border = 'dataset/images/role_show/border_undefined.png';
                if(this.typed !== 'undefined'){ border = border.replace(/undefined/i,this.typed); }
                return border;
            }
        }
    }
</script>

<style scoped>
    .role_show{ width: 350px; height: 490px; margin-right: 10px; float: left; background-color: dimgray;}
    .role_show{ position: absolute; width: 350px; height: 490px; z-index: 6;}
    .role_border{ position: absolute; width: 350px; height: 490px; z-index: 8;}
</style>