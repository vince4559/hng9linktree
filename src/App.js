import { Box, Button, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import profile from './img/profile.jpg';
import github from './img/github.png';
import slack from './img/slack.png';
import menu from './img/menu.png';
import share from './img/share.png';
import ifg from './img/ifg.jpg';
import zuri from './img/zuri.jpg';
import './App.css'


function App() {
  return (

     <Stack m={5} p={5}>
      <Box>
      <Image  src={share} alt={'share'} w={'40px'} 
      position={'absolute'} right={['20px', '20px', '200px', '200px']} display={["none", "none", 'block', "block"]} />

      <Image src={menu} alt={'menu'} w={'40px'} 
      position={'absolute'} right={['20px', '20px', '200px', '200px']} display={['block', "block","none", "none"]} />
      </Box>
     <VStack spacing={4} mb={6}>
     <Image id="profile_img" src={profile} alt={'profile_img'} w={100} h={100} rounded={'full'} />
      <Text fontWeight={'bold'} p={2} pb={5} fontSize={'xl'} fontFamily={'cursive'} >Vincent King's</Text>
     </VStack>
      <Stack spacing={5} p={2}>
       <Button size={'lg'} id={'twitter'}>
        <Link _hover={'none'} href={"https://twitter.com/DaVinci25419866"} isExternal>Twitter Link</Link>
      </Button>
        <Button size={'lg'} id={'btn__zuri'}>
          <Link _hover={'none'} href={'https://training.zuri.team/'} isExternal>
            Zuri Team</Link>
        </Button>
        <Button size={'lg'} id={'books'}>
          <Link _hover={'none'} href={'https://books.zuri.team'} isExternal>
            Zuri Books</Link>
        </Button>
        <Button size={'lg'} id={'book__python'}>
          <Link _hover={'none'} href={"https://books.zuri.team/python/for/beginners?ref_id=<aigbojevincent>"} isExternal>Python Books</Link>
          </Button>
        <Button size={'lg'} id={'pitch'}>
          <Link _hover={'none'} fontSize={'0.9em'} href={'https://books.zuri.team'} isExternal>
            Background Checks For Coders</Link>
        </Button>
        <Button size={'lg'}>
          <Link _hover={'none'} href={'https://books.zuri.team/design-rules'} isExternal>Design Books</Link>
        </Button>
      </Stack>
      <Stack spacing={6} pb={'4em'} direction={'row'} justifyContent={'center'}>
        <Image src={slack} alt={'slack_img'} boxSize={'6'}  rounded={'full'} />
        <Image src={github} alt={'github_img'} boxSize={'6'} rounded={'full'} />
      </Stack>
        <Stack direction={['column', 'column','row', 'row']} justifyContent={'space-between'} 
          borderTop={'solid 1px gray'} pt={'2em'}>
        <Image src={zuri} alt={'slack_img'} w={150} />
        <Text>HNG Internship 9 Frontend Task</Text>
        <Image src={ifg} alt={'github_img'} w={150} h={'40px'} />
        </Stack >
     </Stack>
  );
}

export default App;
