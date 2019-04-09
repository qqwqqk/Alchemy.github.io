<template>
    <div class="show_data" v-bind:style="{ backgroundColor: backgroundStyle }">
        <div class="title_style" v-bind:style="{ borderColor: borderStyle}">
            <input type="text" class="name_style" v-bind:value="data.glory" v-bind:style="{ Color: borderStyle}" readonly/>
        </div>
        <div class="data_style" v-bind:style="{ borderColor: borderStyle}">
            <div id="chart" class="charts_show" ></div>
        </div>
        <div class="describe_style" v-bind:style="{ borderColor: borderStyle}">
            <textarea class="text_style"  v-bind:value="data.evaluation" readonly></textarea>
        </div>
    </div>
</template>

<script>
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/radar');
    require('echarts/lib/component/tooltip');

    export default {
        name: "DetailedRightData",
        props:{ data: Object, typed:String, required: true },
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
        },
        mounted(){
            this.drawChars();
        },
        methods: {
            drawChars(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('chart'));
                let backColor = this.borderStyle;
                let dataShow = this.data.style;
                // 绘制图表
                myChart.setOption({
                    tooltip: {},
                    radar: {
                        //shape: 'circle',
                        center: ['50%', '50%'],
                        name: {
                            textStyle: {
                                color:'#000',
                                backgroundColor: 'transparent',
                                borderRadius: 1,
                                padding: [1, 2]
                            }
                        },
                        nameGap: 5,
                        splitNumber: 5,
                        indicator: [
                            { name: '攻击', max: 10},
                            { name: '爆发', max: 10},
                            { name: '机动', max: 10},
                            { name: '防守', max: 10},
                            { name: '辅助', max: 10},
                            { name: '控制', max: 10}
                        ]
                    },
                    series: [{
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                name : '能力定位',
                                value : [dataShow.atk, dataShow.brk, dataShow.dex, dataShow.def, dataShow.ast, dataShow.ctr],
                                itemStyle:{
                                    normal:{
                                        color: backColor,
                                        borderColor: backColor,
                                        borderWidth: 1
                                    }
                                },
                                lineStyle:{
                                    normal:{
                                        color: backColor
                                    }
                                },
                                areaStyle:{
                                    normal:{
                                        color:backColor,
                                        opacity:0.8
                                    }
                                }
                            }
                        ]
                    }]
                });
            }
        }

    }
</script>

<style scoped>
    .show_data{ position: fixed; width: 250px; height: 460px; z-index: 6;}
    .title_style{ width: 210px; height: 60px; margin: 10px 20px 0 20px;}
    .name_style{ width: 190px; height: 40px; margin: 10px; text-align: center; font-size: 30px; border: none; outline: none; background-color: transparent;}
    .data_style{ width: 210px; height: 210px; margin: 20px; border: 2px;}
    .charts_show{ width: 200px; height: 200px; margin: 3px; }
    .describe_style{ width: 210px; height: 120px; margin: 20px 20px 10px 20px; border: 2px dashed;}
    .text_style{ width: 200px; height: 160px; font-size: 14px; border: none; outline: none; margin: 3px; background-color: transparent; overflow: hidden; resize:none}
</style>