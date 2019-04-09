<template>
    <div class="data_window">
        <div class="show_window" v-bind:style="{ backgroundColor: backgroundStyle }">
            <div class="show_background">
                <detailed_right_data v-if="isActive('isData')" :key="selected" v-bind:data="dataShow" v-bind:typed="typed"/>
                <detailed_right_info v-else-if="isActive('isInfo')" :key="selected" v-bind:info="infoShow" v-bind:typed="typed"/>
                <detailed_right_gall v-else-if="isActive('isGall')" :key="selected" v-bind:gall="gallShow" v-bind:typed="typed" v-on:image_show="image_show"/>
                <div v-else :key="selected">loading error ...</div>
            </div>
        </div>
        <div class="show_choice" v-bind:style="{ backgroundColor: backgroundStyle }" v-bind:class="isActive('isData') ? 'active' : 'inactive'" v-on:click="choice('isData')"><div class="label">数<br/>据</div></div>
        <div class="show_choice" v-bind:style="{ backgroundColor: backgroundStyle }" v-bind:class="isActive('isInfo') ? 'active' : 'inactive'" v-on:click="choice('isInfo')"><div class="label">信<br/>息</div></div>
        <div class="show_choice" v-bind:style="{ backgroundColor: backgroundStyle }" v-bind:class="isActive('isGall') ? 'active' : 'inactive'" v-on:click="choice('isGall')"><div class="label">装<br/>扮</div></div>
    </div>
</template>

<script>
    import detailed_right_data from './DetailedRightData.vue';
    import detailed_right_info from './DetailedRightInfo.vue';
    import detailed_right_gall from './DetailedRightGall.vue';

    export default {
        name: "DetailedRight",
        props:{ source: Object, typed:String, required: true },
        components: { detailed_right_data, detailed_right_info, detailed_right_gall },
        data: function () {
            return{
                selected: 'isData',
                dataShow:{},
                infoShow:{},
                gallShow:{}
            }
        },
        methods:{
            choice: function (message) {
                this.selected = message;
            },
            isActive:function (message) {
                return message === this.selected;
            },
            image_show:function (source) {
                this.$emit("image_show",source);
            }
        },
        computed:{
            backgroundStyle:function () {
                let style = 'transparent';
                switch (this.typed) {
                    case "fire" : style = 'rgba(238,0,0,1)'; break;
                    case "water" : style = "rgba(102,204,255,1)"; break;
                    case "thunder" : style = "rgba(255,182,30,1)"; break;
                    case "wind" : style = "rgba(57,197,187,1)"; break;
                    case "light" : style = "rgba(255,251,240,1)"; break;
                    case "dark" : style = "rgba(153,153,255,1)"; break;
                    default: console.log('role type undefined'); break;
                }
                return style;
            }
        },
        created:function () {
            this.dataShow = this.source.data;
            this.infoShow = this.source.info;
            this.gallShow = this.source.gallery;
        }
    }
</script>

<style scoped>
    .data_window{ width: 320px; height: 490px; margin-left: 10px; float: right;}
    .show_window{ width: 280px; height: 490px; border-radius: 10px; float: left;}
    .show_background{ width: 250px; height: 460px; margin: 15px; background-color:dimgray;}
    .show_choice{ width: 40px; height: 60px; border-radius:0 10px 10px 0; margin-top: 20px; float: left;}
    .label{ vertical-align:middle; line-height:20px; margin:10px 8px 10px 0; text-align: center;}
    .inactive{opacity: 0.6;}
    .active{opacity: 1;}
</style>