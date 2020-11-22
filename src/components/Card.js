import React, { Component } from 'react'
import '../App.css'
import Select from '../elements/Select';

function Square(props){
    return(
        <div>
            <div className="gambar">
                <img src= {props.gambar}/>
            </div>
            <h4>{props.nama}</h4>
            <p>{props.nim}</p>
            <Select background="#fafafa">
                <option>Kelas</option>
                <option>Kelas A</option>
                <option>Kelas B</option>
            </Select>
        </div>
    );
}

export default class Card extends Component {
    render() {
        const background={
            backgroundColor : this.props.bgcolor
        }
        return (
            <div className="wrapper">
                <div className="User-info" style={background}>
                    <Square nama="Jonathan I.D.G" nim="21120117130054" gambar="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"/>
                </div>
                <div className="User-info" style={background}>
                    <Square nama="Novazira A.F" nim="21120117130047" gambar="https://cdn.iconscout.com/icon/premium/png-64-thumb/hijab-woman-3-774644.png"/>
                </div>
            </div>
        )
    }
}