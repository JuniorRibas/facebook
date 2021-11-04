import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Status from "../../components/Status";
import Storys from "../../components/Storys";

import { Container } from "./styles";

const LIST = [
  {
    type: "header",
  },
  {
    type: "status",
  },
  {
    type: "storys",
  },
  {
    type: "posts",
  },
];

const TimeLine: React.FC = () => {
  return (
    <Container>
      <FlatList
        data={LIST}
        keyExtractor={(item) => item.type}
        renderItem={({ item }) => {
          return <SwitchComponent type={item.type}></SwitchComponent>;
        }}
      />
    </Container>
  );
};

const SwitchComponent: React.FC<{ type: string }> = ({ type }) => {
  if (type === "header") {
    return <Header />;
  }
  if (type === "status") {
    return <Status />;
  }
  if (type === "storys") {
    return <Storys />;
  }
  if (type === "posts") {
    return (
      <View
        style={{
          paddingBottom: 150,
        }}
      >
        <Posts />
        <Posts />
      </View>
    );
  }

  return null;
};

export default TimeLine;
