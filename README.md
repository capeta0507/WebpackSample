# webpack 基本安裝與使用(手刻)
###### tags: `webpack`
#### 教學影片(從30分開始觀看)
https://www.youtube.com/watch?v=YN2hwa4_ins&list=FLpBJ0PQiK5z-WWyoeRtM8vw&index=2&t=0s
1. 安裝 node.js
2. 建立專案資料夾 webpack-live(自行命名)
3. 在 visual studio code 中使用 cmd 指令
4. 初始化專案:
```
npm init -y
```
5. 安裝 webpack, webpack-cli :
```
npm install webpack webpack-cli --save-dev
```
6. 設置 package.json, 用來執行 webpack。(script加入build指令)。
```
    "script": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack"
    }
```
7. 基本專案資料夾結構與運作概念 :
(建置 src , dist 兩個資料夾)/src/原始碼檔案 => webpack => /dist/可執行檔案
8. 測試基本的 webpack 使用。 
```
執行語法: npm run build 
```
-------------------------------------
# 搭配 React 使用 不包含 JSX
1. 使用 npm 安裝 react, react-dom 
```
npm install react react-dom --save
```
2. 完成 React 網頁開發流程 (不包含 JSX)
--------------------------------------
# 搭配 React JSX 使用，設置 Babel
1. 使用 npm 安裝 babel-core, babel-loader
```
    npm install babel-core babel-loader --save-dev
```
2. 使用 npm 安裝 babel-preset-env, babel-preset-react
```
    npm install babel-preset-env babel-preset-react --save-dev
```
3. 在專案描述擋中設置 babel。
```
"babel": {
        "presets":["env","react"]
    }
```
4. 在專案描述擋中重設 babel-loader 的版本到 7.1.5
(暫時性小問題，版本過高以至於babel相容性會出小問題)
```    
    ("babel-loader": "^8.0.2" => "babel-loader": "^7.1.5")
```
重新執行: (為了讓babel裝我們指定的版本)
```
    npm install babel-loader --save-dev
```
5. 建立 webpack 基本設定擋: webpack.config.js (搜尋webpack網站)
6. 在 webpack 設定擋中加入 babel-loader 設定，以支援 JSX 語法
7. 測試、並完成所有建置工作。

設定 webpack.config.js 
```javascript=
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
         test: /\.js$/,
         use: [
           'babel-loader'
         ]
       }
     ]
   }
};
```

撰寫 index.js
```javascript=
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Todo from './todo'

const todos = ["英文","React練習","UDemy上課"]

class Title extends Component {
  render() {
    return (
      <div>
        <h1>React Webpack</h1>
        <Todo todos={todos}/>
      </div>
    )
  }
}

ReactDOM.render(
    <Title/>,document.getElementById("root")
)
````
撰寫 todo.js
```javascript=
import React, { Component } from 'react'

class Todo extends Component {
  render() {
      const myTodo = this.props.todos
      console.log(myTodo);
    return (
      <div>
        <ol>
            {myTodo.map(
                (item,index) => (<li key={index}>{item}</li>)
            )}
        </ol>
      </div>
    )
  }
}
export default Todo

```
```
    執行語法:npm run build
```

8. 系統在 dist資料夾產生 bundle.js (index.js 的'打包檔)
9. dist/index.html 連結' bundle.js 

```htmlmixed=
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack</title>
</head>
<body>
    <div id = "root"></div>
</body>
<script src="bundle.js"></script>
</html>
```

--------------------------------------

(https://webpack.js.org/guides/getting-started/#using-a-configuration)
