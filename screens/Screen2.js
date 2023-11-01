import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function Screen2({ navigation }) {
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
        }}
      >
        <TouchableOpacity onPress={()=>{navigation.navigate('Screen1')}}>
          <Image
            style={styles.imgH}
            source={require("../assets/img/Frame.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.textH}>Shops Near Me</Text>
        <TouchableOpacity>
          <Image
            style={styles.img1H}
            source={require("../assets/img/Image 177.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      {data.map((item) => {
        return (
          <View key={item.id} style={styles.content}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Screen3')}}>
              <Image source={item.imgQuan} style={styles.imgC}></Image>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={styles.content1}>
                  <Image source={item.img1} style={styles.img1C}></Image>
                  <Text style={styles.text1C}>{item.name1}</Text>
                </View>

                <View style={styles.content2}>
                  <Image source={item.imgThoiGian} style={styles.img2C}></Image>
                  <Text style={styles.text2C}>{item.thoiGian}</Text>
                </View>
                <Image style={styles.imgC1} source={item.imgViTri}></Image>
              </View>
              <View>
                <Text style={styles.textC}>{item.name}</Text>
              </View>
              <Text style={styles.textC1}>{item.viTri}</Text>
            </TouchableOpacity>
          </View>
        );
      })}
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
    marginTop: "19px",
    // alignItems: "center",
  },
  imgC: {
    width: "347px",
    height: "114px",
    alignSelf: "center",
    borderRadius: "6px",
  },
  textC: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "26px",
    marginLeft: "35px",
  },
  content1: {
    width: "161px",
    height: "30px",
    backgroundColor: "#F3F4F6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "7px",
    marginRight: "12px",
  },

  img1C: {
    width: "19px",
    height: "14px",
    resizeMode: "contain",
  },
  text1C: {
    fontWeight: "400",
    lineHeight: "22px",
    fontSize: "14px",
    color: "#1DD75B",
  },

  content2: {
    width: "141px",
    height: "30px",
    backgroundColor: "#F3F4F6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "7px",
  },
  img2C: {
    height: "18px",
    width: "18px",
  },

  text2C: {
    fontWeight: "400",
    lineHeight: "22px",
    fontSize: "14px",
    color: "#DE3B40",
  },

  imgC1: {
    height: "18px",
    width: "14px",
    marginLeft: "5px",
    marginTop: "5px",
  },
  textC1: {
    fontWeight: "400",
    lineHeight: "22px",
    fontSize: "14px",
    color: "#171A1F",
    marginLeft: "35px",
  },
});

export default Screen2;
