## 安裝

yarn add hf-lightbox

## 元件

<ScrollableLightbox>

## 屬性

show : 顯示/關閉 lightbox
close : close btn 事件的 callback
title : lightbox 的 title

## demo

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
title={"分店位置"} >
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
