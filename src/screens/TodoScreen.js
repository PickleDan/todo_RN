import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";

export const TodoScreen = () => {
  const { todos, updateTodo, removeTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);
  const [modal, setModal] = useState(false); //данный стейт отвечает за видимость модального окна

  const todo = todos.find(t => t.id === todoId);

  const saveHandler = title => {
    updateTodo(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Ред." onPress={() => setModal(true)} />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="Назад"
            onPress={() => changeScreen(null)}
            color={THEME.GRAY_COLOR}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            color={THEME.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  card: {
    marginBottom: 20,
    padding: 15
  },
  button: {
    width: "40%"
  },
  title: {
    fontSize: 20
  }
});
