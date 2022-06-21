import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop:50
        
    },
    texto:{
      paddingHorizontal:10,
      paddingVertical:10,
      color: '#ffffff',
      fontSize:20,
      fontStyle: 'italic'
    },
    img:{
        alignSelf: 'center',
        width:350,
        height: 300,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
       
    },
    card:{
        backgroundColor:'#7a7979',
        width:350,
        borderRadius: 20
        
    },

   
});

export default styles;