import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, RadioGroup, Stack, Table, TableContainer, Td, Text, Tr, useDisclosure } from '@chakra-ui/react'
import { Wrap, Link, Center, WrapItem, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTask } from '../redux/actions/taskActions'


export const Paint = () => {

    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure()
    const [ident, setIdent] = useState('')
    const { tasks } = useSelector(store => store.tasks)
    const [all, setAll] = useState(tasks)

    const onDelete = (id) => {
        setIdent(id)
        onOpen2()
    }

    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(DeleteTask(id))
        setTimeout(() => {
            onClose2()
            filter1()
        }, 500)
    }

    const handleCheck = () => {
    }

    const clickCheck = (i) => {
        let t = all.filter(ind => ind.id === i)
        if (t[0].active === true) {
            console.log(t[0])
            t[0].active = false
            console.log(t[0])
        }
    }

    const filter1 = () => {
        setAll(tasks)
    }
    const filter2 = () => {

        let filterT = tasks.filter(act => act.active === true)
        setAll(filterT)
    }
    const filter3 = () => {
        let filterT = tasks.filter(act => act.active === false)
        setAll(filterT)
    }

    return (
        <TableContainer className='table'> 
            <Table className='table' size='sm' >
                <tbody className='table'>
                    {
                        all.map(tarea => {
                            const { task, id, active } = tarea
                            return (
                                <Tr key={id}>
                                    <Td>
                                        <RadioGroup defaultValue='2'>
                                            <Stack spacing={5} direction='row'>
                                                <input type='radio'
                                                    onChange={handleCheck}
                                                    onClick={() => clickCheck(id)}
                                                    checked={!active} />
                                            </Stack>
                                        </RadioGroup>
                                    </Td>
                                    <Td>
                                        <Text fontSize='md' color={active === true ? '' : 'gray.500'} as={active === false ? 's' : 'samp'} >{task}</Text>
                                    </Td>
                                    <Td >
                                        <i className="bi bi-trash primary btnD" onClick={() => (onDelete(id))}></i>
                                    </Td>
                                </Tr>
                            )

                        })
                    }
                </tbody>
            </Table>

            <Wrap w='95%' spacing='30px' justify='center' m='10px auto' color='gray.500'>
                <WrapItem>
                    <Center >
                        <Link color='gray.500'>{tasks.length} All task</Link>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Box display='flex' justify='space-between' color='gray.500'>
                        <Link m='auto 10px' onClick={filter1}>All</Link>
                        <Link m='auto 10px' onClick={filter2}>Active</Link>
                        <Link m='auto 10px' onClick={filter3}>Completed</Link>
                    </Box>
                </WrapItem>
            </Wrap>
            <Modal blockScrollOnMount={false} isOpen={isOpen2} onClose={onClose2}>
                <ModalOverlay />
                <ModalContent bg='#2d3748'>
                    <ModalHeader>Do you want delete the Do?</ModalHeader>
                    <ModalCloseButton variant='outline'>
                        No
                    </ModalCloseButton>
                    <ModalBody align=' center'>
                        <Button colorScheme='red' variant='outline' onClick={() => handleDelete(ident)}>Yes</Button>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </TableContainer>
    )
}