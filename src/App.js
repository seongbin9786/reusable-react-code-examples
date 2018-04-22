import React, { Component } from 'react';

// 예제 #0 props 로 값을 바꾸면서 재사용하기
import PropsChangingComponent from './0_use_props/PropsChangingComponent';

// 예제 #1 props.children 사용하기
import UsingComponent from './1_use_props_children/UsingComponent';
import AnotherUsingComponent from './1_use_props_children/AnotherUsingComponent';

// 예제 #2 JSX를 props로 보내기
import ComponentUsingLeftRight from './2_send_jsx_through_props/ComponentUsingLeftRight';

// 예제 #3 HOC 사용하기
import Post from './3_higher_order_component/Post';
import Comment from './3_higher_order_component/Comment';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p style={{ width: '1000px' }}>React는 MVC가 아닌 View에 해당하는 Javascript UI 프레임워크이며, React 개념인 컴포넌트를 단위로
        선언형(혹은 설명형) 프로그래밍을 지원합니다. React에서 코드를 재사용하는 것은 컴포넌트를 재사용하는 것과
        동일한데, 이 때 컴포넌트는 상속을 통해서 재사용하지 않고, 아래와 같은 방법으로 재사용하는 것이 권장사항입니다.</p>
        <p style={{ width: '1000px' }}>개인적으로는 상속을 통해서 재사용하려다, 타 라이브러리가 JSX를 input으로 받아서 엎었던 적이.. 슬픈 기억이 있습니다...</p>

        <h1>예제 #0 props 로 값을 바꾸면서 재사용하기</h1>
        <PropsChangingComponent />
        <hr />

        <h1>예제 #1 props.children 사용하기</h1>
        <UsingComponent />
        <AnotherUsingComponent />
        <hr />

        <h1>예제 #2 JSX를 props로 보내기</h1>
        <ComponentUsingLeftRight />
        <hr />

        <h1>예제 #3 HOC 사용하기</h1>
        <Post />
        <Comment />
        <hr />

      </div>
    );
  }
}

export default App;
