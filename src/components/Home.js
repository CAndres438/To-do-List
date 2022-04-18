import { Box, Button, Stack, Table, TableContainer,Text, } from '@chakra-ui/react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';

import '../style/style.css'
import { CreateTask } from './CreateTask';
import { Paint } from './Paint';

export const Home = () => {

  const [theme, settheme] = useState('t1')
  function color(tema) {

    let rootElement = document.documentElement;
    let text
    let col
    let bg
    let bgAll
    if (theme === 't2') {
      settheme('t1')
    } else {
      settheme('t2')

    }
    if (tema === 't1') {
      text = 'white'
      col = '#25273c'
      bg = '../img/bg-desktop-dark.jpg'
      bgAll = '#181824'
    } else if (tema === 't2') {
      text = 'black'
      col = 'white'
      bgAll = '#eee'
      bg = '../img/bg-desktop-dark.jpg'
    }
    rootElement.style.setProperty('--text', text);
    rootElement.style.setProperty('--col', col);
    rootElement.style.setProperty('--bg', bg);
    rootElement.style.setProperty('--bgAll', bgAll);
    console.log(theme)
  }
  useEffect(() => {
    color(theme)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <Box className='cont'>
      <div className='son' >
        <Box w='100%' m='auto' p={4} >

          <Stack spacing={3}>
            <Text fontSize='4xl' color='white'> TO - DO <Button bg='gray.600' onClick={() => { color(theme) }}>Theme</Button></Text>
          </Stack>
          <Box w='100%' m='20px auto' p={4} className='table'>
            <TableContainer >
              <Table size='sm' variant=' unstyled' >
                {/* añadir task */}
                <CreateTask />
              </Table>
            </TableContainer>
          </Box>

          <Box w='100%' m='auto' p={4}  className='table'>
            <div >
              {/* pintar task */}
              <Paint />
            </div>
          </Box>
        </Box>
      </div>
    </Box >
  )
}