//初始化调用函数
equipSummarySituation()
classroomSummarySituation()
equipPassRate()
equipSummaryEnergyRate()
energyAndRank()


//设备总情况
function equipSummarySituation() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('equip-summary-situation'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '设备总情况',
            subtext: '设备总数：6000',
            x: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            bottom: '10',
            data: ['故障', '正在使用']
        },
        series: [{
            name: '设备状态',
            type: 'pie',
            radius: '55%',
            center: ['65%', '50%'],
            data: [{
                    value: 240,
                    name: '故障'
                },
                {
                    value: 5760,
                    name: '正在使用'
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


//教室总情况
function classroomSummarySituation() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('classroom-summary-situation'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '教室总情况',
            subtext: '教室总数：400',
            x: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            bottom: '10',
            data: ['上课中', '维修中', '闲置中']
        },
        series: [{
            name: '教室状态',
            type: 'pie',
            radius: '55%',
            center: ['65%', '50%'],
            data: [{
                    value: 300,
                    name: '上课中'
                },
                {
                    value: 32,
                    name: '维修中'
                },
                {
                    value: 68,
                    name: '闲置中'
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


//设备及格率
function equipPassRate() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('equip-pass-rate'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '设备合格率',
            subtext: '百分比',
            x: 'left'
        },
        tooltip: {
            formatter: "{a} <br/>合格率 : {c}%"
        },
        series: [{
            name: '设备',
            type: 'gauge',
            radius: '80%',
            center: ['55%', '55%'],
            detail: {
                fontSize: 18,
                formatter: '{value}%'
            },
            splitLine: {
                show: true
            },
            axisLabel: {
                show: false
            },
            pointer: {
                width: 4
            },
            data: [{
                value: 80,
                name: ''
            }],
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0.6, '#c23531'],
                        [0.8, '#63869e'],
                        [1, '#91c7ae']
                    ]
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


//设备总耗能占比
function equipSummaryEnergyRate() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('equip-summary-energy-rate'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '设备总耗能',
            subtext: '占比',
            x: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [{
            name: '耗能占比',
            type: 'pie',
            radius: ['30%', '45%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outside'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data: [{
                    value: 335,
                    name: '智能插座'
                },
                {
                    value: 310,
                    name: '智能面板'
                },
                {
                    value: 234,
                    name: '智能网关'
                },
                {
                    value: 135,
                    name: '门磁'
                },
                {
                    value: 548,
                    name: '灯光'
                },
                {
                    value: 234,
                    name: '温湿度传感器'
                },
                {
                    value: 135,
                    name: 'PM2.5传感器'
                },
                {
                    value: 234,
                    name: '智能红外遥控'
                },
                {
                    value: 135,
                    name: '教师控制面板'
                },
                {
                    value: 234,
                    name: '分贝仪传感器'
                },
                {
                    value: 135,
                    name: '智能电动窗帘'
                },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


//能耗值和排名
function energyAndRank() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('energy-and-rank'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '能耗值和排名',
            subtext: '柱状图',
            x: 'left'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            bottom: '10',
            data: ['能耗值', '排名']
        },
        grid: {
            show: false, //---是否显示直角坐标系网格
            top: 80, //---相对位置，top\bottom\left\right  
            containLabel: false, //---grid 区域是否包含坐标轴的刻度标签
            tooltip: { //---鼠标焦点放在图形上，产生的提示框
                show: true,
                trigger: 'item', //---触发类型
                textStyle: {
                    color: '#fff',
                },
            }
        },
        // xAxis: {
        //     type: 'category',
        //     data: ['智能插座', '智能面板', '智能网关', '门磁', '灯光', '温湿度传感器', 'PM2.5传感器', '智能红外遥控', '教师控制面板', '分贝仪传感器', '智能电动窗帘']
        // },
        xAxis: {
            show: true, //---是否显示
            position: 'bottom', //---x轴位置
            offset: 0, //---x轴相对于默认位置的偏移
            type: 'category', //---轴类型，默认'category'
            name: '设备', //---轴名称
            nameLocation: 'end', //---轴名称相对位置
            nameTextStyle: { //---坐标轴名称样式
                color: "#000",
                padding: [5, 0, 0, -5], //---坐标轴名称相对位置
            },
            nameGap: 20, //---坐标轴名称与轴线之间的距离
            // nameRotate:270,           //---坐标轴名字旋转

            axisLine: { //---坐标轴 轴线
                show: true, //---是否显示

                //------------------- 箭头 -------------------------
                symbol: ['none', 'arrow'], //---是否显示轴线箭头
                symbolSize: [8, 8], //---箭头大小
                symbolOffset: [0, 7], //---箭头位置

                //------------------- 线 -------------------------
                lineStyle: {
                    color: '#000',
                    width: 1,
                    type: 'solid',
                },
            },
            axisTick: { //---坐标轴 刻度
                show: true, //---是否显示
                inside: true, //---是否朝内
                lengt: 3, //---长度
                lineStyle: {
                    // color:'red',          //---默认取轴线的颜色
                    width: 1,
                    type: 'solid',
                },
            },
            axisLabel: { //---坐标轴 标签
                show: true, //---是否显示
                inside: false, //---是否朝内
                interval: 0,  //---间隔多少显示
                rotate: 30, //---旋转角度   
                margin: 5, //---刻度标签与轴线之间的距离
                //color:'red',              //---默认取轴线的颜色
            },
            splitLine: { //---grid 区域中的分隔线
                show: false, //---是否显示，'category'类目轴不显示，此时我的X轴为类目轴，splitLine属性是无意义的
                lineStyle: {
                    color:'#000',
                    width:1,
                    type:'solid',
                },
            },
            splitArea: { //--网格区域
                show: false, //---是否显示，默认false
            },
            data: ['智能插座', '智能面板', '智能网关', '门磁', '灯光', '温湿度传感器', 'PM2.5传感器', '智能红外遥控', '教师控制面板', '分贝仪传感器', '智能电动窗帘']
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0.1, 0.1],
            splitNumber: 4,

            show: true, //---是否显示
            position: 'left', //---y轴位置
            offset: 0, //---y轴相对于默认位置的偏移
            type: 'value', //---轴类型，默认'category'
            name: '耗能', //---轴名称
            nameLocation: 'end', //---轴名称相对位置value
            nameTextStyle: { //---坐标轴名称样式
                color: "#000",
                padding: [5, 0, 0, 5], //---坐标轴名称相对位置
            },
            nameGap: 15, //---坐标轴名称与轴线之间的距离
            //nameRotate:270,           //---坐标轴名字旋转

            axisLine: { //---坐标轴 轴线
                show: true, //---是否显示

                //------------------- 箭头 -------------------------
                symbol: ['none', 'arrow'], //---是否显示轴线箭头
                symbolSize: [8, 8], //---箭头大小
                symbolOffset: [0, 7], //---箭头位置

                //------------------- 线 -------------------------
                lineStyle: {
                    color: '#000',
                    width: 1,
                    type: 'solid',
                },
            },
            axisTick: { //---坐标轴 刻度
                show: true, //---是否显示
                inside: true, //---是否朝内
                lengt: 3, //---长度
                lineStyle: {
                    //color:'red',          //---默认取轴线的颜色
                    width: 1,
                    type: 'solid',
                },
            },
            axisLabel: { //---坐标轴 标签
                show: true, //---是否显示
                inside: false, //---是否朝内
                rotate: 0, //---旋转角度   
                margin: 8, //---刻度标签与轴线之间的距离
                //color:'red',              //---默认取轴线的颜色
            },
            splitLine: { //---grid 区域中的分隔线
                show: true, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
                lineStyle: {
                    color: '#666',
                    width: 1,
                    type: 'dashed', //---类型
                },
            },
            splitArea: { //--网格区域
                show: false, //---是否显示，默认false
            }
        },
        series: [{
            name: '耗能',
            type: 'bar',
            markPoint: {
                data: [{
                        type: 'max',
                        name: '最大值'
                    },
                    {
                        type: 'min',
                        name: '最小值'
                    },
                    {
                        type: 'average',
                        name: '平均值'
                    }
                ]
            },
            data: [{
                    value: 335,
                    name: '智能插座'
                },
                {
                    value: 310,
                    name: '智能面板'
                },
                {
                    value: 234,
                    name: '智能网关'
                },
                {
                    value: 135,
                    name: '门磁'
                },
                {
                    value: 548,
                    name: '灯光'
                },
                {
                    value: 234,
                    name: '温湿度传感器'
                },
                {
                    value: 135,
                    name: 'PM2.5传感器'
                },
                {
                    value: 234,
                    name: '智能红外遥控'
                },
                {
                    value: 135,
                    name: '教师控制面板'
                },
                {
                    value: 234,
                    name: '分贝仪传感器'
                },
                {
                    value: 135,
                    name: '智能电动窗帘'
                }
            ]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}