import OTPInputView from "@twotalltotems/react-native-otp-input";
import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styleotp";






export default class LoginOTP extends Component{
     handleNavigation=()=>{
        this.props.navigation.navigate("Login")
    }
    render() {
         return(<>
            

                 
                <View>
                    <Image source={require("../../assets/Images/Gaouri.jpg")} style={{height:120,width:120,alignSelf:"center",marginTop:100}}/>
                </View>

                <View>
                <OTPInputView style={{alignSelf:"center",width:220,height:100}}
                    pinCount={4}

                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlinestylebase}  
                    codeInputHighlightStyle={styles.underlinehighlight}
                    onCodeChanged={(code)=>{
                        this.setState({otp:code});
                    }}
                    />
                    
                    
                    <View style={{backgroundColor:"#2e8b57",height:40,width:110,alignSelf:"center",borderRadius:20}}>
                        <TouchableOpacity onPress={this.handleNavigation}>
                        <Text style={{color:"#fff",textAlign:"center",marginTop:10}}>ओटीपी ढाले</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{backgroundColor:"#2e8b57",height:40,width:110,alignSelf:"center",borderRadius:20,marginTop:20}}>
                        <Text style={{color:"#fff",textAlign:"center",marginTop:10}}>ओटीपी पुन: भेजे</Text>
                    </View>
                    </View>
                    </>
        
         )
    }
}