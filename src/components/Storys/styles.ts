import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

export const Container = styled.View`
  height: ${RFPercentage(30)}px;
  margin: 10px 0px;
  flex-direction: row;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;
export const CardStory = styled.View`
  position: relative;
  height: 90%;
  width: ${RFValue(100)}px;
  border-radius: ${RFValue(15)}px;

  margin-left: 15px;
`;

export const Profile = styled.Image`
  position: absolute;
  z-index: 1;
  height: ${RFValue(30)}px;
  width: ${RFValue(30)}px;

  border-radius: 50px;

  border-width: 4px;
  border-color: ${({ theme }) => theme.colors.secondary};
  margin: 5px;
`;
export const StoryGif = styled.Image`
  position: absolute;
  border-radius: ${RFValue(15)}px;

  height: 100%;
  width: 100%;
`;

export const TextStory = styled.Text`
  width: 100%;

  position: absolute;
  text-align: center;
  bottom: 2px;

  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.white};
`;

export const ProfilePrincipal = styled.Image`
  height: 65%;

  border-top-left-radius: ${RFValue(15)}px;
  border-top-right-radius: ${RFValue(15)}px;
`;

export const ContainerIconPlus = styled.View`
  border-radius: ${RFValue(15)}px;
  margin-top: -${RFValue(15)}px;

  position: absolute;
  top: ${RFValue(120)}px;
  left: ${RFValue(35)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const IconPluss = styled(Entypo).attrs({
  name: "circle-with-plus",
})`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextPrincipal = styled.Text`
  position: absolute;
  bottom: ${RFValue(5)}px;
  width: 100%;
  text-align: center;
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
