import { Container, Flex, Heading } from '@radix-ui/themes'

export default function Home() {
  return (
    <Container size='2' asChild>
      <Flex direction='column' align='center' justify='center' py='9' gap='8'>
        <Heading weight='medium'>Mysko</Heading>
      </Flex>
    </Container>
  )
}
