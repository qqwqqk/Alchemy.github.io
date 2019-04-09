<template>
    <div class="select_list">
            <template v-for="val in list">
                <div class="icon_base" v-bind:class="val.color">
                    <img v-bind:src="val.image" v-bind:alt="val.value" v-on:click="selected(val.value)"/>
                </div>
            </template>
    </div>
</template>

<script>
    export default {
        name: "RoleSelect",
        data: function () {
            return{
                list:[
                    {"key":"0","value":"undefined","color":"icon_undefined","image":"src/images/icon_undefined.png"},
                    {"key":"1","value":"fire","color":"icon_fire","image":"src/images/icon_fire.png"},
                    {"key":"2","value":"water","color":"icon_water","image":"src/images/icon_water.png"},
                    {"key":"3","value":"thunder","color":"icon_thunder","image":"src/images/icon_thunder.png"},
                    {"key":"4","value":"wind","color":"icon_wind","image":"src/images/icon_wind.png"},
                    {"key":"5","value":"light","color":"icon_light","image":"src/images/icon_light.png"},
                    {"key":"6","value":"dark","color":"icon_dark","image":"src/images/icon_dark.png"}
                ]
            }
        },
        methods: {
            selected: function (message) {
                this.$emit("selected_type",message);
            }
        }
    }
</script>

<style scoped>
    .select_list{ width: 740px; height:60px;}
    .icon_base{width: 80px; height: 60px; margin: 0 10px; float: left; border-radius: 10px; overflow:hidden;}
    .icon_undefined{ border: 5px solid transparent; background-color:transparent;}
    .icon_fire{ border: 5px solid #EE0000; background-color:rgba(238,0,0,0.4);}
    .icon_water{ border: 5px solid #66CCFF; background-color:rgba(102,204,255,0.4);}
    .icon_thunder{ border: 5px solid #FFB61E; background-color:rgba(255,182,30,0.4);}
    .icon_wind{ border: 5px solid #39C5BB; background-color:rgba(57,197,187,0.4);}
    .icon_light{ border: 5px solid #FFFBF0; background-color:rgba(255,251,240,0.4);}
    .icon_dark{ border: 5px solid #9999FF; background-color:rgba(153,153,255,0.4);}
</style>