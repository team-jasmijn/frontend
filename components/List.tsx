import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import { SvgUri } from "react-native-svg";
import { StyleSheet } from "react-native";

export default function List({
  placeHoldeText,
  height,
}: {
  placeHoldeText: string;
  height: number;
}) {
  const [data, setData] = useState([{ item: "Example", key: "Example" }]);
  const [item, setItem] = useState("");

  function remove(itemKey: string) {
    setData((current) =>
      current.filter((item) => {
        return item.key !== itemKey;
      })
    );
  }

  return (
    <View>
      <TextInput
        style={styles.textInputSmall}
        placeholder={placeHoldeText}
        placeholderTextColor="'rgba(51, 65, 85, 58)'"
        maxLength={20}
        onChangeText={(name) => setItem(name)}
        value={item}
        onSubmitEditing={() => {
          if (item) setData([...data, { item: item, key: item }]);
        }}
      />

      <SafeAreaView style={{ height: height }}>
        <ScrollView style={styles.objectiveScrollview} indicatorStyle={"black"}>
          {data.map((item) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 5,
                }}
              >
                <Text>{item.item}</Text>
                <Pressable style={{}} onPress={() => remove(item.key)}>
                  <SvgUri
                    uri={
                      "https://icons.getbootstrap.com/assets/icons/trash.svg"
                    }
                    height={25}
                    width={25}
                    fill={"#334155"}
                  />
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  objectiveScrollview: {},
  textInputSmall: {
    borderColor: "#334155",
    color: "#334155",
    borderWidth: 1,
    height: 40,
    fontSize: 15,
    marginBottom: 10,
    padding: 10,
  },
});
