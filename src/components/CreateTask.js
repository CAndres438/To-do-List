import React from 'react'
import { Input, Stack, Tbody, Td, Tr } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { useForm } from '../hook/useForm'
import { AddTask, AddTask2 } from '../redux/actions/taskActions'
import uuid from 'react-uuid'

export const CreateTask = () => {

    const dispatch = useDispatch()
    const [formValue, handleInputChange, reset] = useForm({
        task: '',
    })
    const { task } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(AddTask({
            ...formValue,
            active: true,
            id: uuid()
        }))
        dispatch(AddTask2({

        }))

        reset()
    }
    return (
        <Tbody className='table'>
            <Tr>
                <Td width=' 10%'>
                    <Stack spacing={5} direction='row'>
                        <input type='radio' checked />
                    </Stack>
                </Td>
                <Td w='90%' p='0'>
                    <Stack spacing={3}>
                        <form className='formAdd' onSubmit={handleSubmit}>
                            <Input w='90%' placeholder='Add Do' size='sm'
                                name="task"
                                onChange={handleInputChange}
                                value={task} />

                            <button className='btnAdd'>

                                <i className="bi bi-check btnC"></i>
                            </button>
                        </form>
                    </Stack>
                </Td>
            </Tr>
        </Tbody >
    )
}