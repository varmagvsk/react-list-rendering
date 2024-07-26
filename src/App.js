import React from "react"
import { products } from './data/products';
import { Card, Segmented } from 'antd';


const {Meta} = Card
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      allproducts: products,
      selectedCat: 'ALL',
    }
  }


  render(){

    const renderProducts = this.state.selectedCat == 'ALL' ? this.state.allproducts : this.state.allproducts.filter((product) => product.catid == this.state.selectedCat)
    return(
      <div>
        <div style={{display:"flex",justifyContent:'center',marginBottom:12}}>
        
        <Segmented onChange={(value)=>{this.setState({selectedCat:value})}}  options={[{label:'All Products',value:'ALL'},{label:'Vegetables',value:'VEG'},{label:'Fruits',value:'FRUIT'}]} />
        
        </div>
        <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',backgroundColor:"#f4f4f4", justifyContent:"center"}}>
        {renderProducts.map((product)=>{
          return(
            <Card
            key={product._id}
            hoverable
            style={{ width: 200,marginRight:8,marginBottom:8 }}
            cover={<img  src={product.image}/>}
            >
            <Meta title={product.name} description={`${product.size} - Rs.${product.price}`} />
            
            </Card>
          )
        })}
        </div>
      </div>
    )
  }

}
