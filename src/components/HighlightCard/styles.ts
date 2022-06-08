import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
    type: 'up' | 'down' | 'total'
}

export const Container = styled.View<TypeProps>`
    background-color: ${({type}) => 
        type === 'total' ? '#FF872C' : '#FFFFFF'
    };
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.Text<TypeProps>`
    font-size: ${RFValue(14)}px;
    color:  ${({type}) => 
        type === 'total' ? '#FFFFFF' : '#000000'
    };
`

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    ${(props) => props.type === 'up' && css`
        color: #12A454;
    `};
    
    ${(props) => props.type === 'down' && css`
        color: #E83F5B;
    `};
    
    ${(props) => props.type === 'total' && css`
        color: #FFFFFF;
    `};
`

export const Footer = styled.View``

export const Amount = styled.Text<TypeProps>`
    font-size: ${RFValue(32)}px;
    color:  ${({type}) => 
        type === 'total' ? '#FFFFFF' : '#000000'
    };
    margin-top: 38px;
`

export const LastTransaction = styled.Text<TypeProps>`
    font-size: ${RFValue(12)}px;
    color:  ${({type}) => 
        type === 'total' ? '#FFFFFF' : '#969CB2'
    };
`