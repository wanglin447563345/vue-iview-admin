<template>
  <div class="home">
    <div class="counts">
     <count :endVal='512' style='background: lightgray'> </count>
     <count :endVal='2048' style="background: lightgreen"> </count>
     <count :endVal='1024' style='background: yellow'> </count>
     <count :endVal='2018' style='background: lightblue'> </count>
    </div>
    <div class="row">
        <index-chart title='Echarts'>
            <echarts style="height: 400px" :options="eOptions"></echarts>
        </index-chart>
        <index-chart title='HighChart'>
            <high-charts style="height: 400px" :options="hOptions"></high-charts>
        </index-chart>
    </div>
		<div class="row">
        <index-chart title='Echarts'>
            <echarts style="height: 400px" :options="eOptions"></echarts>
        </index-chart>
    </div>
    
  </div>
</template>

<style lang="less">
.home {
  display: grid;
  height: 100%;
}
.counts{
    display: flex;
}
.row{
		display: flex;
		margin-top: 30px;
    >div{
        flex: 1;
        margin: 0 10px
    }
}
</style>

<script>
import { Echarts, HighCharts } from "../../components";
import echarts from 'echarts'
import Count from './components/Count.vue'
import IndexChart from './components/IndexChart.vue'
export default {
  data() {
      var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
    return {
      eOptions: {
        tooltip: {
          trigger: "axis",
          position: function(pt) {
            return [pt[0], "10%"];
          }
        },
        title: {
          left: "center",
          text: "大数据量面积图"
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"]
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 10
          },
          {
            start: 0,
            end: 10,
            handleIcon:
              "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
            handleSize: "80%",
            handleStyle: {
              color: "#fff",
              shadowBlur: 3,
              shadowColor: "rgba(0, 0, 0, 0.6)",
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }
        ],
        series: [
          {
            name: "模拟数据",
            type: "line",
            smooth: true,
            symbol: "none",
            sampling: "average",
            itemStyle: {
              color: "rgb(255, 70, 131)"
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(255, 158, 68)"
                },
                {
                  offset: 1,
                  color: "rgb(255, 70, 131)"
                }
              ])
            },
            data: data
          }
        ]
      },
      hOptions: {
	chart: {
		type: 'spline'
	},
	title: {
		text: '风速变化趋势图'
	},
	subtitle: {
		text: '2009年10月6日和7日两地风速情况'
	},
	xAxis: {
		type: 'datetime',
		labels: {
			overflow: 'justify'
		}
	},
	yAxis: {
		title: {
			text: '风 速 (m/s)'
		},
		min: 0,
		minorGridLineWidth: 0,
		gridLineWidth: 0,
		alternateGridColor: null,
		plotBands: [{ // Light air
			from: 0.3,
			to: 1.5,
			color: 'rgba(68, 170, 213, 0.1)',
			label: {
				text: '轻空气',
				style: {
					color: '#606060'
				}
			}
		}, { // Light breeze
			from: 1.5,
			to: 3.3,
			color: 'rgba(0, 0, 0, 0)',
			label: {
				text: '微风',
				style: {
					color: '#606060'
				}
			}
		}, { // Gentle breeze
			from: 3.3,
			to: 5.5,
			color: 'rgba(68, 170, 213, 0.1)',
			label: {
				text: '柔和风',
				style: {
					color: '#606060'
				}
			}
		}, { // Moderate breeze
			from: 5.5,
			to: 8,
			color: 'rgba(0, 0, 0, 0)',
			label: {
				text: '温和风',
				style: {
					color: '#606060'
				}
			}
		}, { // Fresh breeze
			from: 8,
			to: 11,
			color: 'rgba(68, 170, 213, 0.1)',
			label: {
				text: '清新风',
				style: {
					color: '#606060'
				}
			}
		}, { // Strong breeze
			from: 11,
			to: 14,
			color: 'rgba(0, 0, 0, 0)',
			label: {
				text: '强风',
				style: {
					color: '#606060'
				}
			}
		}, { // High wind
			from: 14,
			to: 15,
			color: 'rgba(68, 170, 213, 0.1)',
			label: {
				text: '狂风',
				style: {
					color: '#606060'
				}
			}
		}]
	},
	tooltip: {
		valueSuffix: ' m/s'
	},
	plotOptions: {
		spline: {
			lineWidth: 4,
			states: {
				hover: {
					lineWidth: 5
				}
			},
			marker: {
				enabled: false
			},
			pointInterval: 3600000, // one hour
			pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
		}
	},
	series: [{
		name: 'Hestavollane',
		data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
			   7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4,
			   8.2, 8.5, 9.4, 8.1, 10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.5,
			   7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
			   3.0, 3.0]
	}, {
		name: 'Voll',
		data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.3, 0.0,
			   0.0, 0.4, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
			   0.0, 0.6, 1.2, 1.7, 0.7, 2.9, 4.1, 2.6, 3.7, 3.9, 1.7, 2.3,
			   3.0, 3.3, 4.8, 5.0, 4.8, 5.0, 3.2, 2.0, 0.9, 0.4, 0.3, 0.5, 0.4]
	}],
	navigation: {
		menuItemStyle: {
			fontSize: '10px'
		}
	}
}
    };
  },
  components: {
    Echarts,
    HighCharts,
    Count,
    IndexChart
  },
  methods: {}
};
</script> 
