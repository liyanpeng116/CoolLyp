window.onload = function(){
	var colorArr = ["#24cbff", "#775ff6", "#484cdc", "#711d8e"];
	startTime("time");
	var myChart = echarts.init(document.getElementById("map"));
	var myChart_1 = echarts.init(document.getElementById("map_1"));
	var myChart_2 = echarts.init(document.getElementById("map_2"));
	var myChart_3 = echarts.init(document.getElementById("map_3"));
	var myChart_4 = echarts.init(document.getElementById("map_4"));
	var myChart_5 = echarts.init(document.getElementById("map_5"));
	var myChart_6 = echarts.init(document.getElementById("map_6"));

	var option = {
		tooltip: {
			formatter: function(params){
				var html = "";
					html += "【第"+params.dataIndex+"名，34】" + "<br />";
					html += params.marker+params.name + ": " + params.value;
				return html;	
			}	
		},
		visualMap: {
			min: 0,
			max: 2500,
			left: 'left',
			top: 'bottom',
			text: ['高','低'],           // 文本，默认为数值文本
			calculable: true,
			color: colorArr,
			textStyle: {
				color: '#fff'
			}
		},
		series: [
			{
				type: 'map',
				mapType: 'china',
				roam: false,
				label: {
					normal: {
						color: '#Fff',
						show: true
					},
					emphasis: {
						show: true
					}
				},
				data:[
					{name: '北京',value: randomData() },
					{name: '天津',value: randomData() },
					{name: '上海',value: randomData() },
					{name: '重庆',value: randomData() },
					{name: '河北',value: randomData() },
					{name: '河南',value: randomData() },
					{name: '云南',value: randomData() },
					{name: '辽宁',value: randomData() },
					{name: '黑龙江',value: randomData() },
					{name: '湖南',value: randomData() },
					{name: '安徽',value: randomData() },
					{name: '山东',value: randomData() },
					{name: '新疆',value: randomData() },
					{name: '江苏',value: randomData() },
					{name: '浙江',value: randomData() },
					{name: '江西',value: randomData() },
					{name: '湖北',value: randomData() },
					{name: '广西',value: randomData() },
					{name: '甘肃',value: randomData() },
					{name: '山西',value: randomData() },
					{name: '内蒙古',value: randomData() },
					{name: '陕西',value: randomData() },
					{name: '吉林',value: randomData() },
					{name: '福建',value: randomData() },
					{name: '贵州',value: randomData() },
					{name: '广东',value: randomData() },
					{name: '青海',value: randomData() },
					{name: '西藏',value: randomData() },
					{name: '四川',value: randomData() },
					{name: '宁夏',value: randomData() },
					{name: '海南',value: randomData() },
					{name: '台湾',value: randomData() },
					{name: '香港',value: randomData() },
					{name: '澳门',value: randomData() }
				]
			}
		]
	}

	var option_1 = {
		title: {
	        text: '80%',
	        x: 'center',
	        y: '25%',
	        textStyle: {
	            fontWeight: 'normal',
	            color: '#fff',
	            fontSize: '24'
	        }
	    },
		series: [{
	        name: 'Line 1',
	        type: 'pie',
	        clockWise: true,
	        radius: ['40%', '56%'],
	        center: ['50%', '30%'],
	        itemStyle: {
	            normal: {
	                label: {
	                    show: false
	                },
	                labelLine: {
	                    show: false
	                }
	            }
	        },
	        hoverAnimation: false, 
	        data: [{
	            value: 80,
	            name: '01',
	            itemStyle: {
	                normal: {
	                    color: { // 完成的圆环的颜色
	                        colorStops: [{
	                            offset: 0,
	                            color: colorArr[0] // 0% 处的颜色
	                        }, {
	                            offset: 0.35,
	                            color: colorArr[1] // 100% 处的颜色
	                        }, {
	                            offset: 0.75,
	                            color: colorArr[2] // 100% 处的颜色
	                        }, {
	                            offset: 1,
	                            color: colorArr[3] // 100% 处的颜色
	                        }]
	                    },
	                    label: {
	                        show: false
	                    },
	                    labelLine: {
	                        show: false
	                    }
	                } 
	            }
	        }, {
	            name: '02',
	            value: 20,
	            itemStyle: {
	                normal: {
	                    color: '#353e5f'
	                }
	            }
	        }]
	    }]
	}

	var option_2 = {
		color: colorArr,
		tooltip: {
			formatter: function(params){
				console.log(params)
				var html = params.marker + params.name + ": " + params.value + "("+params.percent+"%)";
				return html;
			}
		},
		series: [{
			name:'半径模式',
            type:'pie',
            radius : [20, 80],
            center : ['50%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data:[
                {value:39, name:'数码类'},
                {value:31, name:'快消类'},
                {value:17, name:'日用类'},
                {value:13, name:'食品类'}
            ]
		}]
	}

	var option_3 = {
		color: colorArr,
	    tooltip: {
	        trigger: 'axis'
	    },
	    grid: {
	        top: '3%',
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'value',
	        boundaryGap: [0, 0.01],
	        silent: false,
	        splitLine: {
	            show: false
	        },
	        axisLine: {
	        	lineStyle: {
	        		color: "#fff"
	        	}
	        },
	        axisLabel: {
	        	fontSize: 10,
	        	formatter: function(value){
	        		if (value < 1000000){
	        			return value / 10000 + "万";
	        		}
	        		else{
	        			return value / 1000000 + "百万";
	        		}
	        	}
	        }
	    },
	    yAxis: {
	    	inverse: true,
	        type: 'category',
	        data: ['iPhone','小米','华为','oppo','vivo','三星'],
	        axisLine: {
	        	lineStyle: {
	        		color: "#fff"
	        	}
	        }
	    },
	    series: [
	        {
	            type: 'bar',
	            data: [1491366, 1121093, 782527, 700990, 712220, 576893],
	            itemStyle:{
	                normal: {
	                    show: true,
	                    barBorderRadius:50,
	                    borderWidth:0,
	                    borderColor:'#333',
	                }
	            },
	            barGap:'0%',
	            barCategoryGap:'50%'
	        }
	    ]
	}

	var option_4 = {
		color: colorArr,
	    grid: {
	        top: '5%',
	        left: '3%',
	        right: '4%',
	        bottom: '8%',
	        containLabel: true
	    },
	    tooltip: {
	        trigger: 'axis'
	    },
		xAxis: {
	        type: 'category',
	        data: ['北京', '上海', '杭州', '深圳', '广州', '连云港'],
	        splitLine: {
	            show: false
	        },
	        axisLine: {
	        	lineStyle: {
	        		color: "#fff"
	        	}
	        },
	        axisLabel: {
	        	fontSize: 10,
	        	rotate : -30
	        }
	    },
	    yAxis: {
	        type: 'value',
	        splitLine: {
	            show: false
	        },
	        axisLine: {
	        	lineStyle: {
	        		color: "#fff"
	        	}
	        },
	        axisLabel: {
	        	formatter: function(value){
	        		if (value < 1000000){
	        			return value / 10000 + "万";
	        		}
	        		else{
	        			return value / 1000000 + "百万";
	        		}
	        	}
	        }
	    },
	    series: [{
	        data: [1599018, 1008776, 868306, 605527, 530972, 534811],
	        type: 'bar',
	        itemStyle:{
                normal: {
                    show: true,
                    barBorderRadius:50,
                    borderWidth:0,
                    borderColor:'#333',
                    color: new echarts.graphic.LinearGradient(
                    	0, 0, 0, 1,
                        [
                            {offset: 0, color: colorArr[0]},
                            {offset: 0.5, color: colorArr[1]},
                            {offset: 1, color: colorArr[2]}
                        ]
                    )
                }
            },
            barGap:'0%',
            barCategoryGap:'50%'
	    }]
	}

	var option_5 = {
    	color: colorArr,
    	tooltip: {
	        trigger: 'axis'
	    },
    	legend: {
	        data:['手机品牌'],
	        bottom: 'bottom',
	        textStyle: {
	        	color: "#fff"
	        }
    	},
	    grid: {
	        top: '8%',
	        left: '4%',
	        right: '4%',
	        bottom: '10%',
	        containLabel: true
	    },
		xAxis: {
	        data: ['苹果', '三星', '华为', 'oppo', 'vivo', '小米'],
	        axisTick: {show: false},
	        axisLine: {show: false},
	        axisLabel: {
	            textStyle: {
	                color: "#fff"
	            }
	        }
	    },
	    yAxis: {
	        splitLine: {show: false},
	        axisTick: {show: false},
	        axisLine: {show: false},
	        axisLabel: {show: false}
	    },
	    series: [{
	    	name: '手机品牌',
	        type: 'pictorialBar',
	        barCategoryGap: '-130%',
	        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
	        itemStyle: {
	            normal: {
	                opacity: 0.5,
	                color: new echarts.graphic.LinearGradient(
                    	0, 0, 0, 1,
                        [
                            {offset: 0, color: colorArr[0]},
                            {offset: 0.35, color: colorArr[1]},
                            {offset: 0.75, color: colorArr[2]},
                            {offset: 1, color: colorArr[3]}
                        ]
                    ),
                    label: {
                    	show: true,
                    	position:'top',
                    	color: '#fff'
                    }
	            },
	            emphasis: {
	                opacity: 1
	            }
	        },
	        data: [1491366, 1121093, 782527, 700990, 712220, 576893],
        	z: 10
	    }]
	}

	var option_6 = {
		color: colorArr,
	    tooltip : {
	        trigger: 'axis'
	    },
	    grid: {
	        top: '3%'
	    },
	    legend: {
	    	bottom: 'bottom',
	        data:['北京','上海'],
	        textStyle: {
	        	color: "#fff"
	        }
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['2014','2015','2016','2017','2018'],
		        splitLine: {
		            show: false
		        },
		        axisLine: {
		        	lineStyle: {
		        		color: "#fff"
		        	}
		        }
	        }
	    ],
	    yAxis : [
	        {
	        	min: function(value){
	        		return value.min * 0.8
	        	},
	        	max: function(value){
	        		return value.max * 1.2
	        	},
	            type : 'value',
		        splitLine: {
		            show: false
		        },
		        axisLine: {
		        	show: false
		        },
		        axisTick: {
		        	show: false
		        },
		        axisLabel: {
		        	show: false
		        }
	        }
	    ],
	    series : [
	        {
	            name:'北京',
	            type:'line',
	            areaStyle: {
	            	color: 'rgba(36, 203, 255, .5)'
	            },
	            data: [760958, 682401, 655803, 930269, 646125],
	            symbolSize: 12,
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true
	                    }
	                }
	            }
	        },
	        {
	            name: '上海',
	            type: 'line',
	            areaStyle: {
	            	color: 'rgba(119, 95, 246, .5)'
	            },
	            data: [555318, 559539, 621373, 832336, 681525],
	            symbolSize: 12,
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true
	                    }
	                }
	            }
	        }
	    ]
	}

	myChart.setOption(option);
	myChart_1.setOption(option_1);
	myChart_2.setOption(option_2);
	myChart_3.setOption(option_3);
	myChart_4.setOption(option_4);
	myChart_5.setOption(option_5);
	myChart_6.setOption(option_6);
	// 第一个地图的切换
	var count = 0;
	var timer = null;
	var dataLength = option.series[0].data.length;
	timer = setInterval(function(){
		myChart.dispatchAction({
	        type: 'downplay',
	        seriesIndex: 0,
	    });
	    myChart.dispatchAction({
	        type: 'highlight',
	        seriesIndex: 0,
	        dataIndex: (count) % dataLength
	    });
	    myChart.dispatchAction({
	        type: 'showTip',
	        seriesIndex: 0,
	        dataIndex: (count) % dataLength
	    });
		count++;
	}, 2000);
	myChart.on('mouseover', function(params) {
	    clearInterval(timer);
	    myChart.dispatchAction({
	        type: 'downplay',
	        seriesIndex: 0
	    });
	    myChart.dispatchAction({
	        type: 'highlight',
	        seriesIndex: 0,
	        dataIndex: params.dataIndex
	    });
	    myChart.dispatchAction({
	        type: 'showTip',
	        seriesIndex: 0,
	        dataIndex: params.dataIndex,
	    });
	});
	myChart.on('mouseout', function() {
	    clearInterval(timer);
	    timer = setInterval(function() {
	    	myChart.dispatchAction({
		        type: 'downplay',
		        seriesIndex: 0
		    });
		    myChart.dispatchAction({
		        type: 'highlight',
		        seriesIndex: 0,
		        dataIndex: (count) % dataLength
		    });
		    myChart.dispatchAction({
		        type: 'showTip',
		        seriesIndex: 0,
		        dataIndex: (count) % dataLength
		    });
			count++;
		}, 2000);
	});
	var timerData = setInterval(function (){
		myChart.setOption({
			series: [{
				data:[
					{name: '北京',value: randomData() },
					{name: '天津',value: randomData() },
					{name: '上海',value: randomData() },
					{name: '重庆',value: randomData() },
					{name: '河北',value: randomData() },
					{name: '河南',value: randomData() },
					{name: '云南',value: randomData() },
					{name: '辽宁',value: randomData() },
					{name: '黑龙江',value: randomData() },
					{name: '湖南',value: randomData() },
					{name: '安徽',value: randomData() },
					{name: '山东',value: randomData() },
					{name: '新疆',value: randomData() },
					{name: '江苏',value: randomData() },
					{name: '浙江',value: randomData() },
					{name: '江西',value: randomData() },
					{name: '湖北',value: randomData() },
					{name: '广西',value: randomData() },
					{name: '甘肃',value: randomData() },
					{name: '山西',value: randomData() },
					{name: '内蒙古',value: randomData() },
					{name: '陕西',value: randomData() },
					{name: '吉林',value: randomData() },
					{name: '福建',value: randomData() },
					{name: '贵州',value: randomData() },
					{name: '广东',value: randomData() },
					{name: '青海',value: randomData() },
					{name: '西藏',value: randomData() },
					{name: '四川',value: randomData() },
					{name: '宁夏',value: randomData() },
					{name: '海南',value: randomData() },
					{name: '台湾',value: randomData() },
					{name: '香港',value: randomData() },
					{name: '澳门',value: randomData() }
				]
			}]
		});
	}, 10000);
	// 图表缩放
	window.onresize = function(){
		myChart.resize();
		myChart_1.resize();
		myChart_2.resize();
		myChart_3.resize();
		myChart_4.resize();
		myChart_5.resize();
		myChart_6.resize();
	}
}
function randomData() {
	return Math.round(Math.random()*2500);
}