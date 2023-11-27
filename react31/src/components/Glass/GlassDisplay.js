import React, { Component } from 'react';
import './glass.scss'

export default class GlassDisplay extends Component {
    state = {
        glassURL: '',
        glassName: '',
        glassDesc: ''
    }
  render() {
    const arrGlassList = [
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./images/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./images/v2.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./images/v3.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 4,
            price: 70,
            name: "DIOR D6005U",
            url: "./images/v4.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 5,
            price: 40,
            name: "PRADA P8750",
            url: "./images/v5.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 6,
            price: 60,
            name: "PRADA P9700",
            url: "./images/v6.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 7,
            price: 80,
            name: "FENDI F8750",
            url: "./images/v7.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 8,
            price: 100,
            name: "FENDI F8500",
            url: "./images/v8.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 9,
            price: 60,
            name: "FENDI F4300",
            url: "./images/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    return (
      <div className='glass'>
        <div className="container p-5 mx-auto">
            <div className="col-lg-3 px-auto position-relative">
                <img src="./images/model.jpg" alt="#" className='img-fluid w-100 d-block'/>
                <img src={`${this.state.glassURL}`} alt="" className='glass-item img-fluid d-block'/>
                <div className="description">
                    <h5 className='text-white'>{this.state.glassName}</h5>
                    <span className='text-white'>{this.state.glassDesc}</span>
                </div>
            </div>
            <div className="col-lg-8 d-flex my-5 flex-wrap bg-light align-items-center">
                {arrGlassList.map((item,index) =>{
                    const {id,url,name,desc} = item
                        return <div className="col-2">
                            <button onClick={() =>{
                                this.setState({
                                    glassURL: url,
                                    glassName: name,
                                    glassDesc: desc
                                })
                            }} className='btn'>
                            <img src={`./images/g${id}.jpg`} alt="" className='imgBtn'/>
                        </button>
                        </div>
                })}
            </div>
        </div>
        
      </div>
    )
  }
}
