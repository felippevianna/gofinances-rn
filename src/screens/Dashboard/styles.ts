import styled from 'styled-components/native'
import {FlatList} from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

import {DataListProps} from '.'

export const Container = styled.View`
    flex: 1;
    background-color: #F0F2F5;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: #5636D3;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: ${RFValue(28)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`

export const User = styled.View`
    margin-left: 17px;
`

export const UserGreeting = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(18)}px;
`

export const UserName = styled.Text`
    color: #FFFFFF;
    font-size: ${RFValue(18)}px;
    font-weight: bold;
`

export const Icon = styled(Feather)`
    color: #FF872C;
    font-size: ${RFValue(24)}px;
`

export const HighlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{paddingHorizontal: 24}, 
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;

`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    margin-bottom: 16px;
`

export const TransactionsList = styled(FlatList as new() => FlatList<DataListProps>).attrs(
    {
        showsVerticalScrollIndicator:false,
        contentContainerStyle: {paddingBottom: 5}
    }
)``