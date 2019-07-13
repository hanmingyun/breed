import React, { Component } from 'react';
import TopBar from './topbar';

class Layout extends Component {
    render() {
        return (
            <div>
                <TopBar />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
