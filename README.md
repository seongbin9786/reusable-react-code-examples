https://reactjs.org/docs/composition-vs-inheritance.html

1. 리액트는 강력한 Composition 모델을 갖고 있습니다. 페이스북은 컴포넌트를 만들면서 상속을 사용한 적이 없다고 합니다. 리액트는 상속보다 Composition을 사용해서 코드를 재사용하는 것을 권장합니다.

2. 어떤 컴포넌트는 자식 요소가 무엇인지 실행 시간이 되어서야 알 수도 있습니다. Sidebar, Dialog 등 박스 등의 컨테이너 컴포넌트들에게는 자주 나타 나는 경우입니다. 이럴 때는 {props.children}을 사용해서 코드를 재사용하면 됩니다.

3. children 만으로는 안 될 때가 있습니다. 여러 군데를 채워야 할 때인데, 아래처럼 props로 컴포넌트를 전달해야 합니다. 리액트에선 JSX도 props로 보낼 수 있습니다.
```js
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```

4. 가장 기본적인 방법은 props로 값을 전달하는 것입니다. 일반적인 Template처럼 사용하면 됩니다.

5. HOC(Higer Order Component)를 사용하는 방법도 있습니다. 재사용 범위가 컴포넌트 수준이라면, HOC 사용을 고려하는 것이 좋습니다.
