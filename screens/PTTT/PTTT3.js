import { View, Text, ScrollView, StyleSheet,Button } from "react-native";
import React from "react";

const PTTT3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.mainTitleContainer}>
          <Text style={styles.mainTitle}>Bún Chả</Text>
        </View>
        <Text style={styles.detail}>
          Du lịch Hà Nội, bạn sẽ được chìm đắm vào thiên đường ẩm thực ngon mê
          ly với bún thang Hà Nội, bánh cuốn, bún bò Huế và bún chả siêu hấp
          dẫn. Cách làm bún chả Hà Nội tuy không quá cầu kỳ nhưng cần vô cùng tỉ
          mỉ. Trong một suất bún chả Hà Nội truyền thống thường có 3 thành phần
          chính là: Nước chấm: Bún chả có thơm ngon hay không phần lớn dựa vào
          cách pha nước chấm. Nước chấm cần vừa đủ chua – cay – mặn – ngọt với
          mắm, đường, giấm, tỏi, ớt được pha với phù hợp. Trong bát nước chấm
          thường có thêm nộm đu đủ xanh, cà rốt. Chả nướng: Phần chả nướng
          thường gồm 2 loại là chả viên và chả miếng. Chả miếng được làm từ thịt
          ba chỉ để vừa có độ ngọt, vừa có độ mềm nhất định. Chả viên thường
          được nặn thành khối tròn, to bằng 1/4 bàn tay, được tẩm ướp đậm đà và
          nướng dưới bếp than củi rực lửa đỏ hồng. Bún: Ngày nay, mọi người
          thường dùng bún rối để ăn cùng bún chả. Tuy nhiên, trong nhiều năm về
          trước, bún con là loại bún phổ biến được dùng trong món bún chả.
        </Text>
      </ScrollView>
    </View>
  );
};

export default PTTT3;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop:20,
  },
  mainTitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  mainTitle: {
    fontSize: 30,
  },
});
