import React, {Component} from 'react';
import './row.css'

export default class Krestiki extends Component {
    state = {
        xod: '',
        krestici: [
            ['-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-',],
            ['-', '-', '-', '-', '-', '-',]
        ]
    }
    onClickItem = (x) => {
        let xod = (this.state.xod === 'x') ? 'o' : 'x'
        const y = this.state.krestici[x].indexOf('-')
        this.setState({
            xod,
            krestici: this.state.krestici.map((row, xx) => row.map((w, yy) => xx === x && yy === y ? xod : w))
        })
    }

    render() {
        return (
            <div>
                <h1>Ход игрока:{this.state.xod}</h1>
                <div style={{
                    transform: 'rotate(-90deg)',
                    width: 233,
                    height: 233
                }}>
                <span
                >{this.state.krestici.map((row, x) => {
                    return <div key={x}>{row.map((s, y) => <div onClick={() => this.onClickItem(x, y, s)} style={{
                        fontSize: 35,
                        textAlign: 'center',
                        display: 'inline-block',
                        background: s === 'x' ? 'tomato' : '' + s === 'o' ? 'yellow' : 'green',
                        width: 35,
                        height: 35,
                        border: '1px solid black',
                        transform: 'rotate(90deg)'
                    }} className={'cell'} key={y}>{s}</div>)}</div>
                })}</span>
                </div>
            </div>
        )
    }
}