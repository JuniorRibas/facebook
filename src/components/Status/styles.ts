import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Entypo, Fontisto } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0px 10px;
`;

export const Photo = styled.Image`
  height: ${RFValue(30)}px;
  width: ${RFValue(30)}px;
  margin-right: 15px;

  border-radius: ${RFValue(30)}px;
`;

export const Input = styled.TextInput``;

export const ContainerActions = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${RFPercentage(5)}px;
  margin-top: ${RFValue(8)}px;

  border-top-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.shape};
`;

export const ContainerIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 33%;
`;

export const IconLive = styled(Entypo)`
  margin-right: 5px;
`;
export const IconPhoto = styled(Fontisto)`
  margin-right: 5px;
`;

export const TextIcon = styled.Text``;

export const Divider = styled.View`
  width: 1px;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.shape};
`;
