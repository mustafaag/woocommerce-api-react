import React, { Component } from 'react';
import './App.css';
import { woocomApi } from './configs/WoocomConfig';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0
    };
  }
  componentDidMount() {
   this.getAllProducts()
  }

  getAllProducts = () => {
    woocomApi.get('products').then(
      res =>{
        let tot = 0;
        res.data.map(d=>{
          tot = d.stock_quantity? tot+ d.stock_quantity : tot+1
        })
        this.setState({
          data: res.data,
          total: tot
        })
        console.log(res);
      }
    ).catch(e =>{
      console.log(e);
    })
  }

  getProductsWithColor = (id) => {
    woocomApi.get('products/', {
      attribute: "pa_color",
      attribute_term: id
    }).then(
      res =>{
        let tot = 0;
        res.data.map(d=>{
          tot = d.stock_quantity? tot+ d.stock_quantity : tot+1
        })
        this.setState({
          data: res.data,
          total: tot
        })
      }
    ).catch(e =>{
      console.log(e);
    })
  }
  
  renderAttributes = (attributes) => {
    return attributes ? (attributes.map(res =>{
      return(<div key={res.slug}>
        <span>{res.name + " :"}</span>
        {res.options.map(option=>{
          return <span key={option}>{option + ", "}</span>
        })}
      </div>)
    })): null;
  }

  setColor = (e)=>{
    const color = e.target.value; 
    if(color === 'black'){
      this.getProductsWithColor(20)
    }
    if(color === 'red'){
      this.getProductsWithColor(19)
    }   
  }
  render(){
    const datas = this.state.data.length > 0 ? ( this.state.data.map(d=>{
      return (
     
        <div className="row" key={d.id}>
           <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{d.name}</span>
                    <p>{d.description}</p>
                    <p className="grey-text">{d.price}</p>
                    <p>Stock : {d.stock_quantity? d.stock_quantity: 1}</p>
                    {this.renderAttributes(d.attributes)}
                </div>
            </div>
        </div>  
      )
    })): null
    return (
      <div className="dashboard container">
        <h2>Total {this.state.total}</h2>
       {datas}
       <div className="row">
         <input type="text" onChange={this.setColor} placeholder="Set Color"/>
       </div>
      </div>
    );
  }
 
}

export default App;
