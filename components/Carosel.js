import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const Carosel = () => {
    const images = [
      "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mfz2zorpe8in1noybhzo",
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
    ];
  return (
    <View style={styles.container}>
      <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="yellow"
        inactiveDotColor="red"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
      </View>
    </View>
  );
};

export default Carosel

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        // alignItems: "center",
        alignSelf: 'center'
    }
})