import React, { Component } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";






export default class RegisterScreen extends Component{
     handleNavigation=()=>{
        this.props.navigation.navigate("Bottom")
    }
    render() {
        return(
            <View>
                <View>
                <Image source={require("../assets/Images/Gaouri.jpg")} style={{height:100,width:100,alignSelf:"center",marginTop:80}}/>
                <Text style={{alignSelf:"center",marginTop:10,fontSize:18,fontWeight:"bold"}}>रजिस्ट्रेशन फॉर्म</Text>
                 </View>
                 <View style={{marginTop:20,height:40,width:"90%",alignSelf:"center",borderRadius:10,backgroundColor:"lightgrey"}}>
                 <TextInput placeholder="नाम" style={{height:"40",width:"200",marginLeft:10}}/>
                 </View>
                 <View style={{marginTop:10,height:40,width:"90%",alignSelf:"center",borderRadius:10,backgroundColor:"lightgrey"}}>
                 <TextInput placeholder="जगह" style={{height:"40",width:"200",marginLeft:10}}/>
                 </View>
                 <View style={{marginTop:10,height:40,width:"90%",alignSelf:"center",borderRadius:10,backgroundColor:"lightgrey"}}>
                 <TextInput placeholder="गाँव का नाम" style={{height:"40",width:"200",marginLeft:10}}/>
                 </View>
                 <View style={{marginTop:10,height:40,width:"90%",alignSelf:"center",borderRadius:10,backgroundColor:"lightgrey"}}>
                 <TextInput placeholder="स्थान चुने" style={{height:"40",width:"200",marginLeft:10}}/>
                 </View>
                 <View style={{marginTop:10,height:40,width:"90%",alignSelf:"center",borderRadius:10,backgroundColor:"lightgrey"}}>
                 <TextInput placeholder="फ़ोन नंबर" style={{height:"40",width:"200",marginLeft:10}}/>
                 </View>
                 <View style={{marginTop:10,height:40,width:"90%",alignSelf:"center",borderRadius:10,backgroundColor:"lightgrey"}}>
                 <TextInput placeholder="पशुओ की शंख्य्या" style={{height:"40",width:"200",marginLeft:10}}/>
                 </View>
                 <View style={{marginTop:10,height:40,width:"90%",alignSelf:"center",borderRadius:10,backgroundColor:"lightgrey"}}>
                 <TextInput placeholder="रोज का दूध का उत्तपाद" style={{height:"40",width:"200",marginLeft:10}}/>
                 </View>
                 <View style={{marginTop:10,height:40,width:"90%",alignSelf:"center",borderRadius:10,backgroundColor:"lightgrey"}}>
                 <TextInput placeholder="रेफ़रल कोड यदी आपके पास है" style={{height:"40",width:"200",marginLeft:10}}/>
                 </View>
                 <View style={{backgroundColor:"#2e8b57",height:40,width:"60%",alignSelf:"center",borderRadius:20,marginTop:30,justifyContent:"center"}}>
                    <TouchableOpacity onPress={this.handleNavigation}>
                    <Text style={{color:"#fff",alignSelf:"center",fontWeight:"bold",fontSize:17}}>रजिस्टर करे</Text>
                    </TouchableOpacity>
                 </View>
            </View>
        )
    }
}