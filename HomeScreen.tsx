import React, { Component } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, View } from "react-native";
import { BASE_URL, makeRequest } from "../../api/ApiInfo";
import ImageSlider from "react-native-image-slider"


export default class HomeScreen extends Component{

    
    constructor(props){
        super(props)
        this.state={
            location_id:"",
            product:[],
            sliders:[]      
        }
    }
componentDidMount(){
this.homeData()
}
    homeData=async()=>{
        try {
            const{location_id}=this.state
            const params={
                location_id:1
            }
            console.log("ps",params);
            
            const response=await makeRequest(BASE_URL+"api/mobile/home",params)

            console.log("ss",response);
            const{success,product,sliders}=response
            if(success){
                this.setState({product,sliders})
            }
        } catch (error) {
            
        }
    }
    renderItem=({item})=>{
        return(
            <View style={{height:130,marginLeft:10,alignItems:"center",width:100,margin:10,borderRadius:10,backgroundColor:"#E4F0F5",borderWidth:0.5,borderColor:"lightgreen"}}>
                <Image source={{uri:item.featuredImage}} resizeMode="cover" style={{height:59,width:80,marginTop:20 }}/>

            <Text style={{fontSize:12,marginTop:5}}>{item.name}</Text>
            </View>
        )
    }

   
    render(){
        console.log('sssss',this.state.product);
        console.log('sssss',this.state.sliders);
        

        const image=[]
        const nImage=[]
        const {sliders}=this.state
        if(sliders!== undefined){
            sliders.forEach(img=>{
                image.push(Object.values(img))
            })
            image.forEach(ig=>{
                ig.map(val=>{
                    nImage.push(val)
                })
            })
        }


        
        return(
            <ScrollView>
            <><View style={{backgroundColor:"#f0f0f0"}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"white",height:40,width:360,}}>
                <Image source={require("../../assets/icon/menu.png")} style={{height:20,width:20,margin:10}}/>
                <Image source={require("../../assets/icon/notification.png")} style={{height:20,width:20,margin:10}}/>
            </View>
            <View style={{backgroundColor:"#f0f0f0",width:"400",height:5}}></View>

<View style={{backgroundColor:"white",height:40,width:"100%"}}>
            <View style={{marginTop:5,flexDirection:"row",justifyContent:"space-between",height:30,width:"90%",alignSelf:"center",borderRadius:10,paddingLeft:20,backgroundColor:"#f0f0f0"}}>
                <TextInput placeholder="खोज करें" style={{borderRadius:10,height:"37",width:"250",marginTop:-3}}/>
                    
                <Image source={require("../../assets/icon/search.png")} style={{height:15,marginTop:7,marginRight:25,width:15}}/>
            </View>

            </View>

            </View>
            <View style={{height:170,width:"90%",marginLeft:15,marginTop:30}}>
            <ImageSlider
            images={nImage}
            loopBothSides
            autoplaywithInterval={3000}
            style={{borderRadius:20}}/>
            </View>



            <View>
                <Text style={{fontSize:17,marginLeft:10,marginTop:10,fontWeight:"bold"}}>केटेगरी</Text>
            </View>
            <FlatList data={this.state.product} renderItem={this.renderItem} numColumns={3}/>
            
            
            </>
            </ScrollView>
        )
    }
}
