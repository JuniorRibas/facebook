import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import {
  Container,
  CardStory,
  Profile,
  StoryGif,
  TextStory,
  ProfilePrincipal,
  IconPluss,
  ContainerIconPlus,
  TextPrincipal,
} from "./styles";

const StorysContent = [
  {
    key: 999,
    gif: "https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    principal: true,
  },
  { key: 1, gif: "https://img.ibxk.com.br/2021/06/09/09104542797072.gif" },
  {
    key: 2,
    gif: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif",
  },
  {
    key: 3,
    gif: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4029a055389655.59822ff823c19.gif",
  },
  {
    key: 4,
    gif: "https://i.pinimg.com/originals/4d/95/60/4d9560b061a27f15b341ab0b2bf3e856.gif",
  },
  { key: 5, gif: "https://media.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.gif" },
  {
    key: 6,
    gif: "https://veja.abril.com.br/wp-content/uploads/2016/05/giphy-3-original.gif",
  },
  {
    key: 7,
    gif: "https://i1.wp.com/iphaids.org/wp-content/uploads/2021/02/contando-dinheiro.gif?resize=398%2C478&ssl=1",
  },
  {
    key: 8,
    gif: "https://www.tecnoveste.com.br/wp-content/uploads/2015/05/anigif_enhanced-buzz-22799-1405693809-7.gif",
  },
];

const Storys: React.FC = () => {
  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
        }}
        data={StorysContent}
        keyExtractor={(item) => item.key}
        renderItem={(item) => (
          <Card gif={item.item.gif} principal={item.item.principal} />
        )}
      />
    </Container>
  );
};

const Card: React.FC<{ gif: string; principal?: boolean }> = ({
  gif,
  principal,
}) => {
  const seed = Math.round(Math.random() * 100);

  if (principal) {
    return (
      <CardStory>
        <ProfilePrincipal
          source={{
            uri: `${gif}`,
          }}
        />
        <ContainerIconPlus>
          <IconPluss />
        </ContainerIconPlus>
        <TextPrincipal>Create a Story</TextPrincipal>
      </CardStory>
    );
  }
  return (
    <CardStory>
      <Profile
        source={{
          uri: `https://i.pravatar.cc/300`,
        }}
      />
      <StoryGif
        source={{
          uri: `${gif}`,
        }}
      />
      <TextStory
        style={{
          textShadowColor: "black",
          textShadowOffset: {
            width: 1,
            height: 1,
          },
          textShadowRadius: 5,
        }}
      >
        Mariazinha
      </TextStory>
    </CardStory>
  );
};

export default Storys;
