import React, { Component } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BASE_URL, makeRequest } from "../../api/ApiInfo";






export default class LoginScreen extends Component{
     
     handleNavigation=()=>{
        this.props.navigation.navigate("Register")
    }
      constructor(props){
        super(props)
        this.state={
            mobile:""
        }
    }
    handleChange=(mobile)=>{
    this.setState({mobile})

}
handleData=async()=>{
    try {
        const{mobile}=this.state

    const params={
        mobile
    }
    console.log(params);
    
    const response=await makeRequest(BASE_URL+'api/mobile/login',params)
    console.log(response);
    const{success,message}=response
    if(success){
        Alert.alert("Success",message)
        this.props.navigation.navigate("LoginOtp")
    }else{
        Alert.alert("Error",message)
    }
    } catch (error) {
        
    }
}
   

   
    render(){
        return(
            <View>
                <View>
                <Image source={require("../../assets/Images/Gaouri.jpg")} style={{height:100,width:100,alignSelf:"center",marginTop:180}}/>
                </View>
                <View style={{backgroundColor:"#2e8b57",height:290,width:330,alignSelf:"center",borderRadius:20,marginTop:30}}>
                <Text style={{alignSelf:"center",marginTop:30,fontSize:18,color:"#fff"}}>हम इस नंबर पर पुष्टिकरण के साथ एक </Text>
                <Text style={{alignSelf:"center",fontSize:18,color:"#fff"}}>एसएमएस भेजेंगे</Text>
                <View style={{}}>
                    <View style={{alignSelf:"center",flexDirection:"row",marginTop:20,}}>
                    <Text style={{color:"#fff"}}>+91 |</Text>
                    <TextInput placeholder="फोन नंबर डालें" placeholderTextColor={"#fff"} style={{marginTop:-10,marginLeft:10,width:100,color:"#fff"}}value={this.state.mobile} onChangeText={this.handleChange} />
                    </View>
                    
                    <Text style={{alignSelf:"center",color:"#fff",marginTop:-15}}>_____________________</Text>
                    
                    <View style={{backgroundColor:"#fff",alignSelf:"center",height:35,width:130,borderRadius:20,marginTop:30}}>
                        <TouchableOpacity onPress={this.handleData}>
                            
                        <Text style={{marginTop:5,alignSelf:"center",fontSize:16}}>लॉग इन करें</Text>
                    
                        </TouchableOpacity>
                        </View>
                        <View>
                        <View style={{backgroundColor:"#fff",marginTop:20,height:35,width:130,borderRadius:20,alignSelf:"center"}}>
                        <TouchableOpacity onPress={this.handleNavigation}>
                        <Text style={{alignSelf:"center",marginTop:5,fontSize:16}}>रजिस्टर करे</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                </View>
            </View>
        )
    }
}