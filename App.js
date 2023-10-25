import { GluestackUIProvider, Text, Box, Heading, Input, InputField, Button, ButtonText } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

export default function App() {

  
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" height="100%" justifyContent="center" alignItems="center">
        <Heading>idade</Heading>
        <Input w={'$full'}>
          <InputField placeholder='17' />
        </Input>
        <Button>
          <ButtonText>calcular</ButtonText>
        </Button>
        <Text>resposta</Text>
      </Box>
    </GluestackUIProvider>
  );
}