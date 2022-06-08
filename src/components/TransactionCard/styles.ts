import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

interface TransactionProps {
    type: 'positive' | 'negative';
}

export const Container = styled.View`
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: 16px;
`

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
`

export const Amount = styled.Text<TransactionProps>`
    font-size: ${RFValue(20)}px;
    margin-top: 2px;
    color: ${({ type }) => type === 'positive' ? '#12A454' : '#E83F5B'} 
`

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;
`

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: #969CB2;
`

export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #969CB2;
    margin-left: 17px;
`

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: #969CB2;
`
