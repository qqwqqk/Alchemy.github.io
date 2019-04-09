<template>
    <div class="show_info" v-bind:style="{ backgroundColor: backgroundStyle }">
        <div class="title_style" v-bind:style="{ borderColor: borderStyle}">
            <input type="text" class="name_style" v-bind:value="info.name" v-bind:style="{ Color: borderStyle}" readonly/>
        </div>
        <div class="row_style" v-bind:style="{ borderColor: borderStyle}">
            <input type="text" class="label_style" value="出生地" readonly/>
            <input type="text" class="value_style" v-bind:value="info.country" readonly/>
        </div>
        <div class="row_null">
            <div class="row_sl_style" v-bind:style="{ borderColor: borderStyle}">
                <input type="text" class="lab_style" value="身高" readonly/>
                <input type="text" class="val_style" v-bind:value="info.height" readonly/>
            </div>
            <div class="row_sr_style" v-bind:style="{ borderColor: borderStyle}">
                <input type="text" class="lab_style" value="体重" readonly/>
                <input type="text" class="val_style" v-bind:value="info.weight" readonly/>
            </div>
        </div>
        <div class="row_null">
            <div class="row_sl_style" v-bind:style="{ borderColor: borderStyle}">
                <input type="text" class="lab_style" value="生日" readonly/>
                <input type="text" class="val_style" v-bind:value="info.birthday" readonly/>
            </div>
            <div class="row_sr_style" v-bind:style="{ borderColor: borderStyle}">
                <input type="text" class="lab_style" value="星座" readonly/>
                <input type="text" class="val_style" v-bind:value="info.constellation" readonly/>
            </div>
        </div>
        <div class="row_null">
            <div class="row_sl_style" v-bind:style="{ borderColor: borderStyle}">
                <input type="text" class="lab_style" value="血型" readonly/>
                <input type="text" class="val_style" v-bind:value="info.blood" readonly/>
            </div>
        </div>
        <div class="row_style" v-bind:style="{ borderColor: borderStyle}">
            <input type="text" class="label_style" value="喜欢" readonly/>
            <input type="text" class="value_style" v-bind:value="info.like" readonly/>
        </div>
        <div class="row_style" v-bind:style="{ borderColor: borderStyle}">
            <input type="text" class="label_style" value="兴趣" readonly/>
            <input type="text" class="value_style" v-bind:value="info.interest" readonly/>
        </div>
        <div class="describe_style" v-bind:style="{ borderColor: borderStyle}">
            <textarea class="text_style"  v-bind:value="info.describe" readonly></textarea>
        </div>

    </div>
</template>

<script>
    export default {
        name: "DetailedRightInfo",
        props:{ info: Object, typed:String, required: true },
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
    .show_info{ position: fixed; width: 250px; height: 460px; z-index: 6;}
    .title_style{ width: 210px; height: 60px; margin: 10px 20px 0 20px;}
    .name_style{ width: 190px; height: 40px; margin: 10px; text-align: center; font-size: 30px; border: none; outline: none; background-color: transparent;}
    .row_style{ width: 210px; height: 26px; margin: 2px 20px; border: 2px; border-bottom-style:dashed;}
    .label_style{ width: 60px; height: 20px; float: left; text-align: left; font-size: 14px; border: none; outline: none; background-color: transparent;}
    .value_style{ width: 140px; height: 20px; float: right; text-align: right; font-size: 14px; border: none; outline: none; background-color: transparent;}
    .row_null{ width: 210px; height: 26px; margin: 2px 20px; border: 2px;}
    .row_sl_style{ width: 100px; height: 26px; border: 2px; border-bottom-style:dashed; float: left;}
    .row_sr_style{ width: 100px; height: 26px; border: 2px; border-bottom-style:dashed; float: right;}
    .lab_style{ width: 30px; height: 20px; float: left; text-align: left; font-size: 14px; border: none; outline: none; background-color: transparent;}
    .val_style{ width: 70px; height: 20px; float: right; text-align: right; font-size: 14px; border: none; outline: none; background-color: transparent;}
    .describe_style{ width: 210px; height: 180px; margin: 20px 20px 10px 20px; border: 2px dashed;}
    .text_style{ width: 200px; height: 160px; font-size: 14px; border: none; outline: none; margin: 3px; background-color: transparent; overflow: hidden; resize:none}
</style>