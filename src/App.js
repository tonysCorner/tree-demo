import React, { Component } from 'react';
import './App.css';
import { Tree } from 'g6-for-react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                roots:[]
            }
        }
    };

    componentDidMount() {
        const data = {
            roots: [{
                label: '根部',
                children: [{
                    label: '子1',
                    children: [
                        {
                            label: '子1.1'
                        }
                    ]
                }, {
                    label: '子2'
                }]
            }]
        };
        this.setState({
            data: data
        })
    }

    render() {
        const data = this.state.data;
        return (
            <div className="App">
                <Tree fitView="cc" animate={true} height={window.innerHeight} data={data}></Tree>
            </div>
        );
    }
}

export default App;
