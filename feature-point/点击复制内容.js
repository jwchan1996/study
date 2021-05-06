// react
import React from 'react'
import './App.css'
import { Icon, message } from 'antd'

class App extends React.Component{
  
  copy = () => {
    const copyDOM = document.querySelector('.contentText')	// 获取需要复制的节点
    const range = document.createRange()	// 创造 range
    window.getSelection().removeAllRanges()	//清除页面中已有的 selection
    range.selectNode(copyDOM)	// 选中需要复制的节点    
    window.getSelection().addRange(range)	// 执行选中元素
    const successful = document.execCommand('copy')	// 执行 copy 操作  
    if(successful){
      message.success('复制成功！')
    }else{
      message.warning('复制失败，请手动复制！')
    }
    // 移除选中的元素  
    window.getSelection().removeAllRanges()
  }
  
  render() {
  	return (
      <div className="App">
        <div className="content">
          <p className="contentTitle">
            <Icon 
              type="copy" 
              onClick={this.copy}/>
          </p>
          <p id="contentText">
            我是要被复制的内容啊！！！
          </p>
        </div>
      </div>
    )
  }
  
}

export default App