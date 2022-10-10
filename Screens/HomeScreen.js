import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  Button,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function HomeScreen() {
  useEffect(() => {
    getLaunches();

    return () => {};
  }, []);

  const getLaunches = () => {
    axios
      .post("https://api.spacexdata.com/v4/launches/query", {
        query: {
          date_utc: {
            $gte: "2017-06-22T00:00:00.000Z",
            $lte: "2017-06-25T00:00:00.000Z",
          },
        },
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      })
      .finally(function () {
        alert("Finally called");
      });
  };

  const renderLaunch = ({ item }) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <FlatList
        data={getLaunches}
        renderItem={({ item }) => <Text> {item}</Text>}
        keyExtractor={() => item}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  modalText: {
    color: "black",
  },
  launchItem: {
    backgroundColor: "#fff",
    height: 50,
    flex: 1,
    padding: 15,
    margin: 5,
    color: "#fff",
    borderRadius: 5,
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  launchItemText: {
    color: "black",
  },
});
