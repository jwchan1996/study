//初始化调用函数
equipSummarySituation()
classroomSummarySituation()
equipPassRate()
equipSummaryEnergyRate()
energyAndRank()
averageClassroomAirQuality()
//初始化按钮切换
initEnvironmentBtnSwitch()
averageClassroomTemperatureSituation()
equipOutOfOrder()
classroomOutOfOrder()


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
          ],
          width: 30
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
      center: ['50%', '55%'],
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
          value: 334,
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
      trigger: 'axis',
      formatter: "{a} <br/>{b} : {c} kw"
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
        // symbol: ['none', 'arrow'], //---是否显示轴线箭头
        // symbolSize: [8, 8], //---箭头大小
        // symbolOffset: [0, 7], //---箭头位置

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
        interval: 0, //---间隔多少显示
        rotate: 0, //---旋转角度   
        margin: 5, //---刻度标签与轴线之间的距离
        formatter: function (value) {
          var result = ""; //拼接加换行返回的类目项
          var maxLength = 2; //每行显示的文字个数
          var valLength = value.length; //x轴的文字个数
          var rowNumber = Math.ceil(valLength / maxLength); //需要的行数
          if (rowNumber > 1) {
            //若大于1行
            for (var i = 0; i < rowNumber; i++) {
              var temp = "";
              var start = i * maxLength; //开始截取的位置
              var end = start + maxLength; //结束截取的位置
              temp = value.substring(start, end) + "\n"; //拼成最终显示的字符成
              result += temp;
            }
            return result;
          } else {
            return value;
          }
        }
      },
      splitLine: { //---grid 区域中的分隔线
        show: false, //---是否显示，'category'类目轴不显示，此时我的X轴为类目轴，splitLine属性是无意义的
        lineStyle: {
          color: '#000',
          width: 1,
          type: 'solid',
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
      name: '耗能 kw', //---轴名称
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
        show: false, //---是否显示，'category'类目轴不显示，此时我的y轴为类目轴，splitLine属性是有意义的
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
          }
        ]
      },
      markLine: {
        data: [{
          type: 'average',
          name: '平均值'
        }]
      },
      itemStyle: {
        normal: {
          barBorderWidth: 1,
          barBorderRadius: 0,
          label: {
            show: true,
            position: "top",
            textStyle: {
              color: "#000"
            }
          }
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
          value: 334,
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


//教室平均空气质量
function averageClassroomAirQuality() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('average-classroom-air-quality'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '教室空气质量',
      subtext: '平均值',
      x: 'left'
    },
    tooltip: {
      formatter: "空气质量 : {c}"
    },
    series: [{
      name: '',
      type: 'gauge',
      radius: '80%',
      center: ['55%', '55%'],
      max: 250,
      min: 0,
      detail: {
        fontSize: 50,
        formatter: '{value}',
        padding: [0, 0, 50, 0]
      },
      splitLine: {
        show: true
      },
      splitNumber: 5, // 分割段数，默认为5
      axisLabel: {
        show: true
      },
      pointer: {
        width: 0
      },
      data: [{
        value: 42,
        name: '空气质量指数'
      }],
      axisLine: {
        show: true,
        lineStyle: {
          color: [
            [0.2, '#009688'],
            [0.4, '#FF9900'],
            [0.6, '#1296db'],
            [0.8, '#003333'],
            [1, '#CC0000']
          ],
          width: 14
        }
      }
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


//教室平均温度环境情况
function averageClassroomTemperatureSituation() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('average-classroom-environment-situation'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '',
      subtext: '',
      x: 'left'
    },
    tooltip: {
      trigger: 'axis',
      formatter: "{a} <br/>{b} : {c} ℃"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      name: '温度 ℃' //---轴名称
    },
    series: [{
      name: '平均温度',
      type: 'line',
      smooth: true,
      data: [18, 22, 28, 20, 22, 17, 15]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


//教室平均湿度环境情况
function averageClassroomHumiditySituation() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('average-classroom-environment-situation'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '',
      subtext: '',
      x: 'left'
    },
    tooltip: {
      trigger: 'axis',
      formatter: "{a} <br/>{b} : {c} %"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      name: '相对湿度 %RH' //---轴名称
    },
    series: [{
      name: '平均相对湿度',
      type: 'line',
      smooth: true,
      data: [12, 32, 10, 34, 90, 30, 10]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


//教室平均PM2.5环境情况
function averageClassroomPM2point5Situation() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('average-classroom-environment-situation'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '',
      subtext: '',
      x: 'left'
    },
    tooltip: {
      trigger: 'axis',
      formatter: "{a} <br/>{b} : {c} μg/m3"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      name: 'PM2.5 μg/m3' //---轴名称
    },
    series: [{
      name: '平均PM2.5值',
      type: 'line',
      smooth: true,
      data: [12, 29, 39, 22, 10, 18, 10]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


//教室平均分贝环境情况
function averageClassroomDecibelSituation() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('average-classroom-environment-situation'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '',
      subtext: '',
      x: 'left'
    },
    tooltip: {
      trigger: 'axis',
      formatter: "{a} <br/>{b} : {c} dB"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      name: '分贝 dB' //---轴名称
    },
    series: [{
      name: '平均分贝',
      type: 'line',
      smooth: true,
      data: [2, 6, 12, 2, 5, 6, 4]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


//教室平均亮度环境情况
function averageClassroomLightSituation() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('average-classroom-environment-situation'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '',
      subtext: '',
      x: 'left'
    },
    tooltip: {
      trigger: 'axis',
      formatter: "{a} <br/>{b} : {c} nit"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value',
      name: '亮度 nit'
    },
    series: [{
      name: '平均亮度',
      type: 'line',
      smooth: true,
      data: [250, 200, 230, 228, 210, 240, 180]
    }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


//设备故障
function equipOutOfOrder() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('equip-out-of-order'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '设备故障',
      subtext: '折线图',
      x: 'left'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      type: 'scroll',
      orient: 'horizontal',
      left: 'right',
      top: 20,
      width: 700,
      data: ['智能插座', '智能面板', '智能网关', '门磁', '灯光', '温湿度传感器', 'PM2.5传感器', '智能红外遥控', '教师控制面板', '分贝仪传感器', '智能电动窗帘']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
        name: '智能插座',
        type: 'line',
        smooth: true,
        data: [12, 32, 10, 34, 90, 30, 10]
      },
      {
        name: '智能面板',
        type: 'line',
        smooth: true,
        data: [22, 18, 11, 23, 20, 13, 10]
      },
      {
        name: '智能网关',
        type: 'line',
        smooth: true,
        data: [10, 22, 21, 15, 19, 30, 10]
      },
      {
        name: '门磁',
        type: 'line',
        smooth: true,
        data: [30, 33, 31, 40, 9, 30, 20]
      },
      {
        name: '灯光',
        type: 'line',
        smooth: true,
        data: [80, 93, 91, 93, 120, 130, 150]
      },
      {
        name: '温湿度传感器',
        type: 'line',
        smooth: true,
        data: [12, 12, 11, 34, 10, 30, 20]
      },
      {
        name: 'PM2.5传感器',
        type: 'line',
        smooth: true,
        data: [12, 13, 1, 34, 30, 30, 10]
      },
      {
        name: '智能红外遥控',
        type: 'line',
        smooth: true,
        data: [21, 28, 12, 8, 5, 13, 1]
      },
      {
        name: '教师控制面板',
        type: 'line',
        smooth: true,
        data: [2, 5, 4, 1, 3, 5, 4]
      },
      {
        name: '分贝仪传感器',
        type: 'line',
        smooth: true,
        data: [5, 6, 7, 12, 18, 19, 24]
      },
      {
        name: '智能电动窗帘',
        type: 'line',
        smooth: true,
        data: [14, 13, 18, 6, 8, 10, 1]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


//教室故障
function classroomOutOfOrder() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('classroom-out-of-order'));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '教室故障',
      subtext: '折线图',
      x: 'left'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      type: 'scroll',
      orient: 'horizontal',
      top: 20,
      data: ['故障无法工作', '存在故障']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
        name: '故障无法工作',
        type: 'line',
        // smooth: true,
        data: [22, 18, 11, 23, 20, 13, 10]
      },
      {
        name: '存在故障',
        type: 'line',
        // smooth: true,
        data: [12, 32, 10, 34, 90, 30, 10]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


//按钮切换功能
function initEnvironmentBtnSwitch() {
  //温度
  document.querySelector('.temperature').onclick = function () {
    var that = this
    removeActive(that)
    averageClassroomTemperatureSituation()
  }
  //湿度
  document.querySelector('.humidity').onclick = function () {
    var that = this
    removeActive(that)
    averageClassroomHumiditySituation()
  }
  //PM2.5
  document.querySelector('.pm2point5').onclick = function () {
    var that = this
    removeActive(that)
    averageClassroomPM2point5Situation()
  }
  //分贝
  document.querySelector('.decibel').onclick = function () {
    var that = this
    removeActive(that)
    averageClassroomDecibelSituation()
  }
  //亮度
  document.querySelector('.light').onclick = function () {
    var that = this
    removeActive(that)
    averageClassroomLightSituation()
  }
}


//移除选中样式
function removeActive(that) {
  var btns = document.querySelectorAll('.feature-bar div')
  for (var i = 0; i < btns.length; i++) {
    var classVal = btns[i].getAttribute('class')
    classVal = classVal.replace('active', '')
    btns[i].setAttribute('class', classVal)
  }
  var classVal = that.getAttribute('class')
  classVal = classVal.concat(' active')
  that.setAttribute('class', classVal)
}