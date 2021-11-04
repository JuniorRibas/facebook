import React from "react";
import { View } from "react-native";

import {
  Container,
  HeaderPost,
  ContainerPhotoName,
  Profile,
  ContainerName,
  Name,
  ContainerTime,
  Time,
  IconWorld,
  IconConfig,
  TextDescritionContainer,
  TextDescriton,
  Midia,
  Footer,
  ContainerLikesComentents,
  ContainerEmojis,
  ContainerDescritionComentsShares,
  TextDescrition,
  IconLike,
  ContainerBtns,
  ContainerIconBtn,
  TextBtnIcon,
  IconComent,
  IconLike2,
  IconShare,
  Divider,
} from "./styles";

const Posts: React.FC = () => {
  return (
    <Container>
      <HeaderPost>
        <ContainerPhotoName>
          <Profile
            source={{
              uri: "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            }}
          />
          <ContainerName>
            <Name>José Ribeiro</Name>
            <ContainerTime>
              <Time>Just Now</Time>
              <IconWorld />
            </ContainerTime>
          </ContainerName>
        </ContainerPhotoName>

        <IconConfig />
      </HeaderPost>

      <TextDescritionContainer>
        <TextDescriton>
        Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. A ordem dos tratores não altera o pão duris
        </TextDescriton>
      </TextDescritionContainer>

      <Midia
        source={{
          uri: "https://www.tecnoveste.com.br/wp-content/uploads/2015/05/anigif_enhanced-buzz-22799-1405693809-7.gif",
        }}
      />

      <Footer>
        <ContainerLikesComentents>
          <ContainerEmojis>
            <IconLike />
            <TextDescrition>345</TextDescrition>
          </ContainerEmojis>
          <ContainerDescritionComentsShares>
            <TextDescrition>2k Comentes - 1k Shares</TextDescrition>
          </ContainerDescritionComentsShares>
        </ContainerLikesComentents>
        <Divider />
        <ContainerBtns>
          <ContainerIconBtn>
            <IconLike2 />
            <TextBtnIcon>Like</TextBtnIcon>
          </ContainerIconBtn>
          <ContainerIconBtn>
            <IconComent />
            <TextBtnIcon>Comment</TextBtnIcon>
          </ContainerIconBtn>
          <ContainerIconBtn>
            <IconShare />
            <TextBtnIcon>Share</TextBtnIcon>
          </ContainerIconBtn>
        </ContainerBtns>
      </Footer>
    </Container>
  );
};

export default Posts;
