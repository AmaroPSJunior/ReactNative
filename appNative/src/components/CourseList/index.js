import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title }
}

export default function CourseList() {
  const qty = 2;

  const courses = useSelector(state => state.data.slice(0, qty));
  const dispatch = useDispatch();
  console.log(courses)

  function addCourse() {
    dispatch(addCourseAction('GraphQL'))
    console.log(courses)
  }

  return (
    <>
      <View>
        { courses.map(course => <Text key={course}>{course}</Text>) }
      </View>
      <Button title="Adicionar curso" onPress={addCourse} />
    </>
  );
}
