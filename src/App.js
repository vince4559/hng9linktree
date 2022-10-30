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
      <Text fontWeight={'bold'} p={2} pb={5} fontSize={'xl'} >Vincent King's</Text>
     </VStack>
      <Stack spacing={5} p={2}>
      <Link _hover={'none'} id={'twitter'} href={"https://twitter.com/DaVinci25419866"} isExternal>
      <Button size={'lg'} w='full'>Twitter Link</Button>
      </Link>
      <Link display={'none'} id={'slack'} href={'##'} >
      <Button size={'lg'} w='full'>Aigboje Vincent</Button>
      </Link>
      <Link _hover={'none'} id={'btn__zuri'} href={'https://training.zuri.team/'}   isExternal>
        <Button size={'lg'} w='full' > Zuri Team</Button>
        </Link>
        <Link _hover={'none'} id={'books'} href={'https://books.zuri.team'} isExternal>
          <Button size={'lg'} w='full' >Zuri Books</Button>
        </Link>
        <Link _hover={'none'} id={'book__python'} href={"https://books.zuri.team/python/for/beginners?ref_id=<aigbojevincent>"} isExternal>
          <Button size={'lg'} w='full'>Python Books</Button>
        </Link>
        <Link _hover={'none'} id={'pitch'} fontSize={'0.9em'} href={'https://books.zuri.team'} isExternal>
          <Button size={'lg'} w='full' >Background Checks For Coders</Button>
        </Link>
        <Link _hover={'none'} id='book__design' href={'https://books.zuri.team/design-rules'} isExternal>
          <Button size={'lg'} w='full'>Design Books</Button>
        </Link>
      </Stack>
      <Stack spacing={6} pb={'4em'} direction={'row'} justifyContent={'center'}>
        <Link href="##">
        <Image src={slack} alt={'slack_img'} boxSize={'6'}  rounded={'full'} />
        </Link>
        <Link href="##">
        <Image src={github} alt={'github_img'} boxSize={'6'} rounded={'full'} />
        </Link>
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