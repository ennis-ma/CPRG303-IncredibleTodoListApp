import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const ToDoForm = ({addTask}) => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from tasks.json
    const fetchTasks = async () => {
      try {
        const response = await fetch('path/to/tasks.json');
        const data = await response.json();
        setTasks(data.tasks); // assuming the JSON has a "tasks" array
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleAddTask = () => {
    // Check if there are tasks available to add
    if (tasks.length > 0) {
      const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
      setTaskText(randomTask);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={text => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
      <Button title="Generate Random Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
