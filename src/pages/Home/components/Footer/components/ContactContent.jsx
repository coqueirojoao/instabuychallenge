import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';

export default function ContactContent() {
  const contactHelpers = [
    {
      title: 'Institucional',
      content: ['Ínicio', 'Sobre Nós', 'Blog'],
    },
    {
      title: 'Suporte',
      content: ['Fale Conosco', 'Primeira Compra?', 'Telefone', 'E-mail'],
    },
    {
      title: 'Termos',
      content: ['Termos de Uso', 'Política de Privacidade'],
    },
    {
      title: 'Nossos Canais',
      content: ['Logo1', 'Logo2', 'Logo3'],
    },
  ];
  return (
    <Box
      display='flex'
      gap='100'
      bg='white'
      borderTop='1px'
      borderColor='gray.200'
    >
      {contactHelpers.map((contactHelper) => (
        <Box
          key={contactHelper.title}
          pl='200'
          py='70'
          display='flex'
          flexDirection='column'
          gap='2'
        >
          <Text fontSize='larger' fontWeight='600'>
            {contactHelper.title}
          </Text>
          {contactHelper.content.map((content) => (
            <Text
              key={content}
              fontSize='sm'
              fontWeight={
                content === 'Telefone' || content === 'E-mail' ? '600' : null
              }
              display='flex'
              flexDirection='column'
              gap='2'
            >
              {content}
              {content === 'Telefone' ? (
                <Text fontSize='larger'>
                  <PhoneIcon /> {`(61) 99999-9999`}
                </Text>
              ) : null}
              {content === 'E-mail' ? (
                <EmailIcon fontSize='large' cursor='pointer' />
              ) : null}
            </Text>
          ))}
        </Box>
      ))}
    </Box>
  );
}
