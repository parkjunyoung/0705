import React, { Component } from 'react';

class Home extends Component {
    
    render() {
        return (
            <div>
                { this.props.isLogin ? "현재 로그인" : "로그인 안됨" }
            </div>
        );
    }
}

export default Home;