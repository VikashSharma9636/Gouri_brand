import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import ImageSlider from "react-native-image-slider"

import get from 'lodash/get'

export default class HomeDetail extends Component{
    constructor(props){
        super(props)
        
        
 
     console.log('Navigation Params:', props.route.params); // Debug statement
    const prDta = get(props.route, 'params.item', {});
    const locationId = get(props.route, 'params.location_id', {});
    console.log('====================================');
    console.log('f', prDta);
    console.log('====================================');
        this.state={
          
 ...prDta,
      ...locationId,
            price:'',
            count:1,
            increPrice:'',
            pId:'',
            slIndex:0,
             
            
        }
        
        
    }        
    render(){
         const {productImage}=this.state
      ;
        return(
            <View>
            <View style={{height:170,width:"90%",marginLeft:15,marginTop:35}}>
                            <ImageSlider  
                            images={productImage}  
                            loopBothSides
                            autoPlayWithInterval={3000}
                           style={{borderRadius:20}}
            />
            
                        </View>
      <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center",marginTop:10}}>{this.state.name}</Text>
      <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>{this.state.brandName}</Text>
      <Text style={{fontSize:18,fontWeight:"bold",textAlign:"center"}}>{this.state.id}</Text>
      <Text style={{fontSize:18,fontWeight:"bold"}}>उत्पाद के बारे में</Text>
      <Text style={{fontSize:14,margin:5}}>{this.state.description}</Text>

            
            
            </View>
        )
    }
}
