import React, { useState } from 'react'
import "./todolist.css"
import {
    Button,
    Container,
    Text,
    Title,
    TextInput,
    Group,
    Card,
    ActionIcon,
    Grid
} from '@mantine/core';
import { useForm } from '@mantine/form';
import AddIcon from '@mui/icons-material/Add';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';


export default function Todolist() {
    const taskForm = useForm({
        initialValues: {
            task: '',
        }
    });


    const [tasksList, setTasksList] = useState([])

    const addTask = (e) => {
        e.preventDefault()
        const task = { taskDesc: taskForm.values.task, taskCompleted: false }
        setTasksList([...tasksList, task])
        taskForm.setFieldValue('task', '');
    }

    const removeTask = (e) => {
        const newTasksList = tasksList.filter((_, i) => i !== e);
        setTasksList(newTasksList);
    }
    const markComplete = (e) => {
        const newTasksList = tasksList.map((task, i) => {
            if (i === e) {
                return { ...task, taskCompleted: !task.taskCompleted };
            }
            return task;
        });
        setTasksList(newTasksList);
    }
    return (
        <>
            <Container size={550} my={40}>
                <Group position='apart'>
                    <Title style={{color: '#C1C2C5'}}>My Tasks</Title>
                    <PostAddIcon fontSize='large' style={{color: "#C1C2C5"}} />
                </Group>
                <Container size={500} my={40}>
                    <form onSubmit={taskForm.onSubmit(addTask)}>
                        <Grid align='center'>
                            <Grid.Col span={8}>
                                <TextInput name='task' placeholder={'Enter your task'} value={taskForm.values.task} onChange={(event) => taskForm.setFieldValue('task', event.target.value)} />
                            </Grid.Col>
                            <Grid.Col onClick={addTask} span={4}>
                                <Button type='submit'>Add Task <AddIcon /></Button>
                            </Grid.Col>
                        </Grid>
                    </form>
                </Container>

                {tasksList.map((task, index) => { 
                    return (    
                    <Card withBorder shadow="sm" padding="lg" radius="md" key={index} mt={'sm'} className='myCard'>
                        <Group position={'apart'}>
                            <Text weight={500} size={18} className={task.taskCompleted ? 'completedTask' : 'incompleteTask'}>{index + 1}. {task.taskDesc}</Text>
                            <Group>
                                <ActionIcon onClick={() => {
                                    markComplete(index);
                                }} aria-label='Mark Done' title='Mark Done' color={'green'}>
                                    <DoneAllIcon />
                                </ActionIcon>
                                <ActionIcon onClick={() => {
                                    removeTask(index);
                                }} aria-label='Delete Task' title='Delete Task'
                                color={'red'}>
                                    <DeleteIcon />
                                </ActionIcon>
                            </Group>
                        </Group>
                    </Card>
                    )
                })}

            </Container>
            {/* <div className='mainContainer'>
                <ul>
                    {tasksList.map((task, index) => (
                        <li key={index} className={task.taskCompleted ? 'completedTask' : 'incompleteTask'}>
                            <span>{task.taskDesc}</span>

                            <button onClick={() => markComplete(index)}>Mark Done</button>
                            <button onClick={() => removeTask(index)}>Delete Task</button>
                        </li>
                    ))}
                </ul>
            </div> */}
        </>
    )
}
