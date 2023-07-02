import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Image, Text } from '@chakra-ui/react';
import SocialIcons from './SocialIcons';
import visa from '../../../../../assets/logos/visa.gif';
import elo from '../../../../../assets/logos/elo.gif';
import hipercard from '../../../../../assets/logos/hipercard.gif';
import amex from '../../../../../assets/logos/amex.gif';
import pix from '../../../../../assets/logos/pix.gif';
import master from '../../../../../assets/logos/master.gif';

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
    },
  ];
  return (
    <Box
      display='flex'
      gap={['none', '100']}
      bg='white'
      borderTop='1px'
      borderColor='gray.200'
      flexDirection={['column', 'row']}
    >
      {contactHelpers.map((contactHelper) => (
        <Box
          key={contactHelper.title}
          pl={['10', '200']}
          py={['10', '70']}
          display='flex'
          flexDirection='column'
          gap='2'
        >
          <Text fontSize='larger' fontWeight='600'>
            {contactHelper.title}
          </Text>
          {contactHelper.content?.map((content) => (
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
                  <PhoneIcon /> {`(61) 99999 - 9999`}
                </Text>
              ) : null}
              {content === 'E-mail' ? (
                <EmailIcon fontSize='large' cursor='pointer' />
              ) : null}
            </Text>
          ))}
          {contactHelper.title === 'Nossos Canais' ? <SocialIcons /> : null}
          {contactHelper.title === 'Nossos Canais' ? (
            <Box display='flex' flexDirection='column' pt='10'>
              <Text fontSize='25' fontWeight='600'>
                Pagamento
              </Text>
              <Box pt='5' display='flex' alignItems='center' w='full' gap='4'>
                <Image src={pix} />
                <Image src={elo} />
                <Image src={visa} />
                <Image src={master} />
                <Image src={hipercard} />
                <Image src={amex} />
              </Box>
              <Box display='flex'>
                <Text fontSize='sm' fontWeight='600' pt='5'>
                  Ou pague na entrega com dinheiro, cartão ou boleto.
                </Text>
              </Box>
            </Box>
          ) : null}
        </Box>
      ))}
    </Box>
  );
}
