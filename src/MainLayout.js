import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Navbar } from "./components/Navbar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { TodoContext } from "./context/todo/todoContext";
import { ScreenContext } from "./context/screen/screenContext";
import { Todo } from "./components/Todo";

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        {todoId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20
  }
});
