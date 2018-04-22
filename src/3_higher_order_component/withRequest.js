import React, { Component } from "react";
import axios from "axios";

// HOC는 컴포넌트를 반환한다.
const withRequest = url => WrappedComponent => {
  // 재사용할 컴포넌트 부분
  return class Post extends Component {
    state = {
      data: null
    };

    async componentDidMount() {
      try {
        const response = await axios.get(url);
        this.setState({
          data: response.data
        });
      } catch (e) {
        console.log(e);
      }
    }

    render() {
      const { data } = this.state;
      if (!data) return null;

      // 매개변수로 온 컴포넌트를 렌더링한다.
      // 이 때, withRequest가 data를 props로 넘긴다.
      return <WrappedComponent {...this.props} data={data} />;
    }
  };
};

export default withRequest;
