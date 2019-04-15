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
    legend: {
      orient: 'vertical',
      left: 'left',
      bottom: '10',
      data: ['能耗值', '排名']
    },
    xAxis: {
      type: 'category',
      data: ['智能插座', '智能面板', '智能网关', '门磁', '灯光', '温湿度传感器', 'PM2.5传感器', '智能红外遥控', '教师控制面板', '分贝仪传感器', '智能电动窗帘']
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0.1, 0.1],
      splitNumber: 4     
    },
    series: [{
      name: 'anzhuo',
      type: 'bar',
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