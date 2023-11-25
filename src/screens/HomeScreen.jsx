import React, {useState} from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import {Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = taskText => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
}

export default HomeScreen;
