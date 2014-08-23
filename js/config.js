/********************************/
/**** update:2013-5-30 11:50 ****/   //如有改动请修改这里的信息
/**** by: WeiLiu             ****/
/********************************/

seajs.config({ //seajs环境
	//激活
	plugins:["shim","style"],
	
	//预加载预执行
    preload: ['url/jquery/jquery-1.9.1.min.js'],
	
	//别名配置
    alias:{
		"jquery":{  //jquery 类库
			    src:"url/jquery/jquery-1.9.1.min.js",
				exports:"jquery"
			}/*,
			
		"hpcommon":{  //common '类库' 规范中的常用函数库
			    src:"url/plugs/lib/hpcommon.js",
				exports:"hpcommon"
			},
		 "style":{ //插件样式
			    src:"style_url",
				exports:"style"
			},
		 "img":{ //插件图片
			    src:"img_url",
				exports:"img"
			},
			
		"iscroll":{  //iscroll4 类库
			    src:"url/plugs/lib/iscroll.js",
				exports:"iscroll"
			},
		 "iscroll.slidingrefresh":{  //插件 滑动刷新效果
			    src:"url/plugs/slidingrefresh/plug.js",
				deps:["iscroll"]
			},
		 "style.slidingrefresh":{ //滑动刷新效果样式
			    src:"style_url/css/slidingrefresh.css",
				exports:"style"
			},
		 "iscroll.blockswitching2nd":{  //插件 另一种图片切换
			    src:"url/plugs/blockswitching-2nd/plug.js",
				deps:["iscroll"]
			},
		 "iscroll.overflow":{  //插件 惯性滚动
			    src:"url/plugs/overflow/plug.js",
				deps:["iscroll"]
			},
			
		 "swipeview":{  //swipeview 类库
			    src:"url/plugs/lib/swipeview.min.js",
				exports:"swipeview"
			},
		 "swipeview.blockswitching":{  //插件 图片切换
			    src:"url/plugs/blockswitching/plug.js",
				deps:["swipeview"]
		    },
		 "alert":{  //提示插件
			    src:"url/plugs/pointout/plug.js",
				exports:["alert"]
			},
		 "style.alert":{ //提示插件样式
			    src:"style_url/css/pointout.css",
				exports:"style"
			}*/
			
	},
	
	
	//路径配置  相对于sea.js所在目录
	paths:{
		 "url":"../js"
	},
	
	//调试模式打开
	debug:true,
	
	//编码
	charset:"utf-8"
});


/**********************************************************/
/*** 学习资料：https://github.com/seajs/seajs/issues/262 ***/
/**********************************************************/