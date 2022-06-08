import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps{
    id:string;
}

export function Dashboard(){
    const data:DataListProps[] = [{
        id: '1',
        type: "positive",
        title:"Desenvolvimento de site",
        amount:"R$ 12.000,00",
        category:{name: "Vendas", icon:"dollar-sign"},
        date:"16/04/2020",
    },
    {
        id: '2',
        type: "negative",
        title:"Comida",
        amount:"R$ 100,00",
        category:{name: "Alimentação", icon:"coffee"},
        date:"16/04/2020",
    },
    {
        id: '3',
        type: "negative",
        title:"Aluguel",
        amount:"R$ 1.200,00",
        category:{name: "Casa", icon:"home"},
        date:"16/04/2020",
    }
    ]
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri: 'https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png'}}/>
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Felippe</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril"
                    type="up"
                />
                <HighlightCard 
                    title="Saídas" 
                    amount="R$ 1.250,00" 
                    lastTransaction="Última saída dia 03 de abril"
                    type="down"
                />
                <HighlightCard 
                    title="Entradas" 
                    amount="R$ 16.141,00" 
                    lastTransaction="01 à 16 de abril"
                    type="total"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionsList 
                    data={data}
                    keyExtractor = { item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
            </Transactions>
        </Container>
    )
}