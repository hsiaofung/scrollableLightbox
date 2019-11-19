## 安裝

yarn add hf-lightbox

## 元件

```javascript
<ScrollableLightbox>
```

## 特性

支援 RWD: 手機，平板<br />
支援動畫，web 版由上到下，手機版右進右出。<br />

## 屬性

show : 顯示/關閉 lightbox<br />
close : close btn 事件的 callback<br />
title : lightbox 的 title<br />

## CSS

.lightbox-close-btn : 可以更換 close btn 的圖形。<br />
.lightbox-header .lightbox-title : 可以設定標題的樣式。<br />
.lightbox-content : 可以設定內容的樣式。<br />
.lightbox-visible : 可以是設定 lightbox 顯示的動畫。<br />
.lightbox-hidden : 可以是設定 lightbox 消失的動畫。<br />

## demo

```javascript
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrollableLightbox from "./ScrollableLightbox";

class App extends React.Component {
  state = { show: false };
  click() {
    this.setState({
      show: true
    });
  }
  close() {
    this.setState({
      show: false
    });
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.click.bind(this)}> Click </button>
        <ScrollableLightbox
          show={this.state.show}
          close={this.close.bind(this)}
          title={"分店位置"}
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.Distinctio possimus dignissimos eos temporibus magni!A
              deleniti maiores iusto voluptate!Reiciendis dolor animi
              repellendus ut.Error qui id, voluptatem quod nihil.
            </p>
            <p>
              Asperiores esse tempore quasi quibusdam, provident vel voluptatum
              nisi sed fugiat quos molestias, doloremque placeat quia
              dignissimos expedita soluta cum alias autem delectus tenetur
              perspiciatis deserunt voluptate, debitis.Asperiores, eius ?
            </p>
          </div>
        </ScrollableLightbox>
      </div>
    );
  }
}

export default App;
```
