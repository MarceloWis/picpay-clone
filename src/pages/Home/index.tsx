import React from 'react'
import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Seggestions from '../../components/Seggestions';
export default function HomePage() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 100.000,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>
        <Seggestions />
      </Container>


    </Wrapper>
  )
}
