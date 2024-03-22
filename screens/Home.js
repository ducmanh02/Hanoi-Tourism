import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faGopuram } from "@fortawesome/free-solid-svg-icons/faGopuram";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 1);

const data = [
  { id: 1, src: require("../assets/images/carousel/pic1.jpg") },
  { id: 2, src: require("../assets/images/carousel/pic2.jpg") },
  { id: 3, src: require("../assets/images/carousel/pic3.jpg") },
  { id: 4, src: require("../assets/images/carousel/pic4.jpg") },
  // Add more items as needed
];

export default function Home({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.tinyLogo} source={item.src} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <FontAwesomeIcon icon={faBars} size={25} />
        </View>
        <View>
          <Text style={styles.logo}>Hanoi Tourism </Text>
        </View>
        <View>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={25} />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <Carousel
          layout="stack"
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        />
        <View style={styles.containerBtn}>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("PTTT1")}
          >
            <FontAwesomeIcon icon={faGopuram} size={25} />
            <Text style={styles.homeBtnText}>Di Tích</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("PTTT1")}
          >
            <FontAwesomeIcon icon={faGopuram} size={25} />
            <Text style={styles.homeBtnText}>Lễ Hội</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("PTTT1")}
          >
            <FontAwesomeIcon icon={faGopuram} size={25} />
            <Text style={styles.homeBtnText}>Kiến Trúc</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.homeBtn}
            onPress={() => navigation.navigate("PTTT1")}
          >
            <FontAwesomeIcon icon={faGopuram} size={25} />
            <Text style={styles.homeBtnText}>Phong Tục</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.DiscoverContainer}>
          <Text style={styles.DiscoverTitle}>
            Must-See Attractions in Hanoi
          </Text>
          <Carousel
            layout="tinder"
            data={data}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
          />
        </View>
        <View style={styles.DiscoverContainer}>
          <Text style={styles.DiscoverTitle}>
            10 Cool Collectibles to buy in Hanoi
          </Text>
          <Carousel
            layout="tinder"
            data={data}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
          />
        </View>
        <View style={styles.DiscoverContainer}>
          <Text style={styles.DiscoverTitle}>Must-Try Vietnamese Dishes</Text>
          <Carousel
            layout="tinder"
            data={data}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
          />
        </View>
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
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: 200, // Adjust the height as needed
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    borderRadius: 10,
  },
  itemText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: ITEM_WIDTH,
    height: 200,
    
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  homeBtn: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 75,
  },
  homeBtnText: {
    fontSize: 10,
  },
  DiscoverContainer: {
    height: 150,
    marginVertical: 10,
  },
  DiscoverTitle: {
    fontSize: 20,
    marginBottom: 5,
  },
});
