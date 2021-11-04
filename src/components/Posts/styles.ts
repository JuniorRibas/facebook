import styled from "styled-components/native";
import {
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: ${RFValue(500)};
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderPost = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px;
`;

export const ContainerPhotoName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Profile = styled.Image`
  height: ${RFValue(35)}px;
  width: ${RFValue(35)}px;
  margin-right: ${RFValue(10)}px;
  border-radius: ${RFValue(50)}px;
`;

export const ContainerName = styled.View``;

export const Name = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ContainerTime = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Time = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.secondary};

  margin-right: ${RFValue(5)}px;
`;

export const IconWorld = styled(Fontisto).attrs({ name: "world-o" })`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const IconConfig = styled(MaterialCommunityIcons).attrs({
  name: "settings-helper",
})`
  font-size: ${RFValue(30)}px;
  padding-bottom: ${RFValue(30)}px;
`;

export const TextDescritionContainer = styled.View`
  margin: 10px 10px;
`;
export const TextDescriton = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.black};
`;

export const Midia = styled.Image`
  width: 100%;
  height: 56%;

  max-height: ${RFPercentage(40)}px;
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerLikesComentents = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const ContainerEmojis = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const ContainerDescritionComentsShares = styled.View``;
export const TextDescrition = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const IconLike = styled(AntDesign).attrs({ name: "like1" })`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  margin-right: 10px;
`;

export const ContainerBtns = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
`;

export const IconLike2 = styled(AntDesign).attrs({ name: "like2" })`
  font-size: 30px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;
export const IconComent = styled(Ionicons).attrs({ name: "chatbox-outline" })`
  font-size: 30px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const IconShare = styled(FontAwesome).attrs({ name: "share" })`
  font-size: 30px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ContainerIconBtn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TextBtnIcon = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;
