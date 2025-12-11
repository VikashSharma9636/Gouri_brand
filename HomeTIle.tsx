import React, { Component } from "react";
import { Text, View,TouchableOpacity,Image } from "react-native";




export default class HomeTile extends Component{
    handleData = () => {
        const {handleData, item, location_id} = this.props;
    
        handleData(item, location_id);
      };
constructor(props){
    super(props)
    this.state={
         location_id:"",
         prDta:''
    }
}

 renderItem=({item})=>{
        return(
            <HomeTile 
             item={item}
            nav={this.props.navigation}
            handleData={this.handleData}
            location_id={this.state.location_id} />
            
        )
    }

    render(){
        const item=this.props.item
        return(
            <TouchableOpacity style={{height:130,marginLeft:10,alignItems:"center",width:100,margin:10,borderRadius:10,backgroundColor:"#E4F0F5",borderWidth:0.5,borderColor:"lightgreen"}} onPress={this.handleData}>
            <Image source={{uri:item.featuredImage}} resizeMode="cover" style={{height:59,width:80,marginTop:20 }}/>
        <Text style={{fontSize:12,marginTop:5}}>{item.name}</Text>
        </TouchableOpacity>



        )
    }
}
