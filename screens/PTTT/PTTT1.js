import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  FlatList,TextInput
} from "react-native";
import React from "react";

const SLIDER_WIDTH = Dimensions.get("window").width;
const data = [
  {
    id: 1,
    title: "Ẩm Thực",
    src: require("../../assets/images/carousel/pic3.jpg"),
  },
  {
    id: 2,
    title: "Phong Tục",
    src: require("../../assets/images/carousel/pic6.jpg"),
  },
  {
    id: 3,
    title: "Kiến Trúc",
    src: require("../../assets/images/carousel/pic5.jpg"),
  },
  {
    id: 4,
    title: "Trải Nghiệm",
    src: require("../../assets/images/carousel/pic4.jpg"),
  },
  // Add more items as needed
];
const Item = ({ item, navigation }) => (
  <View style={styles.itemContainer}>
    <ImageBackground source={item.src} resizeMode="cover" style={styles.image}>
      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() => navigation.navigate("PTTT2")}
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);
export default function PTTT1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View></View>
        <View>
          <Text style={styles.logo}>Phong Tục Truyền Thống</Text>
        </View>
        <View></View>
      </View>
      <View>
        <TextInput
          style={styles.input}
          // onChangeText={}
          // value={number}
          placeholder="Search"
          keyboardType="ascii-capable"
        />
      </View>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    paddingHorizontal: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
  itemContainer: {
    height: 200,
    marginTop: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
