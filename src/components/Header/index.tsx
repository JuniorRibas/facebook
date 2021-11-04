import React from "react";
import { View } from "react-native";

import {
  Container,
  TextHeader,
  IconSearch,
  IconsContainer,
  IconMessage,
  ContainerIcon,
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container
      style={{
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 1,
      }}
    >
      <TextHeader>facebook</TextHeader>
      <IconsContainer>
        <ContainerIcon>
          <IconSearch name="search" />
        </ContainerIcon>
        <ContainerIcon>
          <IconMessage name="message-circle" />
        </ContainerIcon>
      </IconsContainer>
    </Container>
  );
};

export default Header;
