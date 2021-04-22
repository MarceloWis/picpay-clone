import React from 'react'
import { Container, Img, Label, Options } from './styles'


const items = [
  {
    key: String(Math.random()),
    img: 'https://avatars.githubusercontent.com/u/20583701?v=4',
    label: 'Doação'
  },
  {
    key: String(Math.random()),
    img: 'https://avatars.githubusercontent.com/u/20583701?v=4',
    label: 'Doação'
  },
  {
    key: String(Math.random()),
    img: 'https://avatars.githubusercontent.com/u/20583701?v=4',
    label: 'Doação'
  },
  {
    key: String(Math.random()),
    img: 'https://avatars.githubusercontent.com/u/20583701?v=4',
    label: 'Doação'
  },
  {
    key: String(Math.random()),
    img: 'https://avatars.githubusercontent.com/u/20583701?v=4',
    label: 'Doação'
  },
  {
    key: String(Math.random()),
    img: 'https://avatars.githubusercontent.com/u/20583701?v=4',
    label: 'Doação'
  },
  {
    key: String(Math.random()),
    img: 'https://avatars.githubusercontent.com/u/20583701?v=4',
    label: 'Doação'
  },
]
export default function Seggestions() {
  return (
    <Container horizontal>
      {
        items && items.map(({key, img, label}) => (
          <Options key={key}>
          <Img source={{ uri: img}} />
          <Label>{label}</Label>
        </Options>
        ))
      }

    </Container>
  )
}
