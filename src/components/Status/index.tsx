import React from "react";
import { View } from "react-native";

import {
  Container,
  ContainerInput,
  Photo,
  Input,
  ContainerActions,
  IconLive,
  ContainerIcon,
  TextIcon,
  Divider,
  IconPhoto,
} from "./styles";

const Status: React.FC = () => {
  return (
    <Container>
      <ContainerInput>
        <Photo
          source={{
            uri: "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
          }}
        />
        <Input placeholder="What´s on your mind?" />
      </ContainerInput>

      <ContainerActions>
        <ContainerIcon>
          <IconLive name="video-camera" />
          <TextIcon>Live</TextIcon>
        </ContainerIcon>
        <Divider />
        <ContainerIcon>
          <IconPhoto name="photograph" />
          <TextIcon>Photo</TextIcon>
        </ContainerIcon>
        <Divider />
        <ContainerIcon>
          <IconLive name="location-pin" />
          <TextIcon>Check-in</TextIcon>
        </ContainerIcon>
      </ContainerActions>
    </Container>
  );
};

export default Status;
