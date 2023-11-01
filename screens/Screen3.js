import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function Screen3({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://65095dabf6553137159b4826.mockapi.io/role")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setData(json);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View 
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          flex:2,
          marginTop:'20px'
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen2");
          }}
        >
          <Image
            style={styles.imgH}
            source={require("../assets/img/Frame.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.textH}>Drinks</Text>
        <TouchableOpacity>
          <Image
            style={styles.img1H}
            source={require("../assets/img/Image 177.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      
      {data.map((item) => {
        return (
          <View style={{ marginTop: "20px", alignItems: "center" , flex:6}}>
            <View style={styles.content}>
              <Image style={styles.imgC} source={item.imgDirnk}></Image>
              <View style={{ marginLeft: "10px", marginTop: "5px", flex: 2 }}>
                <Text style={styles.textC}>{item.nameDrink}</Text>
                <View style={{ flexDirection: "row", marginTop: "10px" }}>
                  <Image style={styles.img1C} source={item.icon1}></Image>
                  <Text style={styles.text1C}>{item.price}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity>
                  <Image style={styles.img2C} source={item.iconTru}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.img3C} source={item.iconCong}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
      
      <View style={{flex:6, alignItems:'center', marginTop:'28px'}}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.textBtn}>GO TO CART</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "390px",
    height: "844px",
    backgroundColor: "white",
  },

  imgH: {
    height: "20px",
    width: "20px",
    resizeMode: "contain",
  },
  img1H: {
    height: "24px",
    width: "24px",
    resizeMode: "contain",
  },
  textH: {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "36px",
    right: "30px",
  },
  content: {
    width: "350px",
    height: "64px",
    borderColor: "rgba(144, 149, 160, 1)",
    borderWidth: "1px",
    borderRadius: "4px",
    justifyContent: "center",
    flexDirection: "row",
  },
  imgC: {
    height: "60px",
    width: "60px",
    resizeMode: "contain",
  },
  img2C: {
    height: "20px",
    width: "20px",
    resizeMode: "contain",
  },

  img3C: {
    height: "20px",
    width: "20px",
    resizeMode: "contain",
  },
  img1C: {
    height: "12px",
    width: "12px",
    resizeMode: "contain",
    marginTop: "5px",
  },
  textC: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "26px",
  },

  text1C: {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: "400",
    marginLeft: "5px",
  },

  btn:{
    width:'347px',
    height:'44px',
    backgroundColor:'rgba(239, 176, 52, 1)',
    borderRadius:'6px',
    alignItems:'center',
    justifyContent:'center'
  },
  textBtn:{
    lineHeight:'26px',
    fontSize:'16px',
    color:'rgba(255, 255, 255, 1)'
  },  
});

export default Screen3;
