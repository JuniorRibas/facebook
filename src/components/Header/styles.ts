import styled from "styled-components/native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: ${RFPercentage(12)}px;

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  padding: 0px 10px 7px;
`;

export const TextHeader = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;
export const ContainerIcon = styled.View`
  padding: ${RFValue(5)}px;
  border-radius: ${RFValue(100)}px;
  background-color: ${({ theme }) => theme.colors.shape};

  margin-left: ${RFValue(5)}px;
`;

export const IconSearch = styled(FontAwesome)`
  font-size: ${RFValue(15)}px;
`;

export const IconMessage = styled(Feather)`
  font-size: ${RFValue(15)}px;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;
