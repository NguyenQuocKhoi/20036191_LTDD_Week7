import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function Screen4({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://65095dabf6553137159b4826.mockapi.io/drinks")
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
          flex: 2,
          marginTop: "20px",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Screen3");
          }}
        >
          <Image
            style={styles.imgH}
            source={require("../assets/img/Frame.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.textH}>Your orders</Text>
        <TouchableOpacity>
          <Image
            style={styles.img1H}
            source={require("../assets/img/Image 177.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      {data.map((item) => {
        return (
          <View style={styles.content}>
            <View style={styles.content1}>
              <Text style={styles.text1C1}>{item.type}</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
              <Text style={styles.text2C1}>{item.order}</Text>
              <Text style={styles.text3C1}>{item.price}</Text>
              </View>
            </View>
            <View style={styles.content2}>
            <Text style={styles.text1C1}>{item.type1}</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
              <Text style={styles.text2C1}>{item.order1}</Text>
              <Text style={styles.text3C1}>{item.price1}</Text>
              </View>
            </View>
          </View>
        );
      })}
      {data.map((item) => {
        return (
          <View>
            <View style={styles.content3}>
              <Image style={styles.imgC} source={item.imgDrink}></Image>
              <View style={{ marginLeft: "10px", marginTop: "5px", flex: 2 }}>
                <Text style={styles.textC}>{item.name}</Text>
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
            <View style={styles.content4}>
              <Image style={styles.imgC} source={item.imgDrink1}></Image>
              <View style={{ marginLeft: "10px", marginTop: "5px", flex: 2 }}>
                <Text style={styles.textC}>{item.name1}</Text>
                <View style={{ flexDirection: "row", marginTop: "10px" }}>
                  <Image style={styles.img1C} source={item.icon1}></Image>
                  <Text style={styles.text1C}>{item.price1}</Text>
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

      <View style={{ flex: 6, alignItems: "center", marginTop: "28px" }}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.textBtn}>PAY NOW</Text>
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
  content: {},

  content1: {
    width: "347px",
    height: "100px",
    backgroundColor: "rgba(0, 189, 214, 1)",
    borderRadius: "6px",
    alignSelf: "center",
    marginTop: "10px",
  },
  text1C1: {
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginLeft:'20px',
   marginTop:'20px'
  },

  text2C1: {
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    marginLeft:'20px',
   
  },

  text3C1: {
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "700",
    marginLeft:'200px',
    color: "rgba(255, 255, 255, 1)",
    marginBottom:'28px'
  },
  content2: {
    width: "347px",
    height: "100px",
    backgroundColor: "rgba(131, 83, 226, 1)",
    borderRadius: "6px",
    alignSelf: "center",
    marginTop: "10px",
  },

  content3: {
    width: "350px",
    height: "64px",
    borderColor: "rgba(144, 149, 160, 1)",
    borderWidth: "1px",
    borderRadius: "4px",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "10px",
    alignItems: "center",
  },
  content4: {
    width: "350px",
    height: "64px",
    borderColor: "rgba(144, 149, 160, 1)",
    borderWidth: "1px",
    borderRadius: "4px",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: "10px",
    alignItems: "center",
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
  btn: {
    width: "347px",
    height: "44px",
    backgroundColor: "rgba(239, 176, 52, 1)",
    borderRadius: "6px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  },
  textBtn: {
    lineHeight: "26px",
    fontSize: "16px",
    color: "rgba(255, 255, 255, 1)",
  },
});

export default Screen4;
