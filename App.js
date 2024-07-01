import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  SafeAreaViewComponent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const row1 = [
    {
      type: "extra-operator",
      value: "C",
    },
    {
      type: "extra-operator",
      value: "+/-",
    },
    {
      type: "extra-operator",
      value: "%",
    },
    {
      type: "operator",
      value: "/",
    },
  ];
  const row2 = [
    {
      type: "number",
      value: "7",
    },
    {
      type: "number",
      value: "8",
    },
    {
      type: "number",
      value: "9",
    },
    {
      type: "operator",
      value: "*",
    },
  ];
  const row3 = [
    {
      type: "number",
      value: "4",
    },
    {
      type: "number",
      value: "5",
    },
    {
      type: "number",
      value: "6",
    },
    {
      type: "operator",
      value: "-",
    },
  ];
  const row4 = [
    {
      type: "number",
      value: "1",
    },
    {
      type: "number",
      value: "2",
    },
    {
      type: "number",
      value: "3",
    },
    {
      type: "operator",
      value: "+",
    },
  ];
  const row5 = [
    {
      type: "number",
      value: "0",
    },
    {
      type: "number",
      value: ".",
    },
    {
      type: "operator",
      value: "=",
    },
  ];
  const [result, setResult] = useState(0);
  const [activeOp, setActiveOp] = useState("");
  const getStyles = (type) => {
    switch (type) {
      case "number":
        return styles.number;
      case "operator":
        return styles.operator;
      case "extra-operator":
        return styles.extraOperator;
    }
  };
  const [input, setInput] = useState("");
  const handlePress = (type, value) => {
    switch (type) {
      case "number":
        setInput(input + value);
        break;
      case "operator":
        if (value === "=") {
          setInput(eval(input));
          break;
        }
        setInput(input + value);
        break;
      case "extra-operator":
        switch (value) {
          case "C":
            setInput("");
            break;
          case "+/-":
            setInput(input * -1);
            break;
          case "%":
            setInput(input / 100);
            break;
        }
        break;
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.actionsContainer}>
        <View>
          <Text style={styles.result}>{input}</Text>
        </View>
        <View style={styles.actions}>
          {row1.map((item) => (
            <Pressable
              style={({ pressed }) => [
                getStyles(item.type),
                pressed && styles.pressed,
              ]}
              onPress={() => handlePress(item.type, item.value)}
            >
              <View>
                <Text style={styles.text}>{item.value}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <View style={styles.actions}>
          {row2.map((item) => (
            <Pressable
              style={({ pressed }) => [
                getStyles(item.type),
                pressed && styles.pressed,
              ]}
              onPress={() => handlePress(item.type, item.value)}
            >
              <View>
                <Text style={styles.text}>{item.value}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <View style={styles.actions}>
          {row3.map((item) => (
            <Pressable
              style={({ pressed }) => [
                getStyles(item.type),
                pressed && styles.pressed,
              ]}
              onPress={() => handlePress(item.type, item.value)}
            >
              <View>
                <Text style={styles.text}>{item.value}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <View style={styles.actions}>
          {row4.map((item) => (
            <Pressable
              style={({ pressed }) => [
                getStyles(item.type),
                pressed && styles.pressed,
              ]}
              onPress={() => handlePress(item.type, item.value)}
            >
              <View>
                <Text style={styles.text}>{item.value}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        <View style={styles.actions}>
          {row5.map((item) => (
            <Pressable
              style={({ pressed }) => [
                getStyles(item.type),
                pressed && styles.pressed,
              ]}
              onPress={() => handlePress(item.type, item.value)}
            >
              <View style={[getStyles(item.type)]}>
                <Text style={styles.text}>{item.value}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  actionsContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#1A1A1A",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    justifyItems: "flex-end",
    alignContent: "flex-end",
    marginTop: 300,
  },
  actions: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1A1A1A",
    alignItems: "stretch",
    justifyContent: "stretch",
    justifyItems: "strech",
    alignContent: "strech",
  },
  number: {
    backgroundColor: "#2E2E2E",
    width: 80,
    height: 80,
    borderRadius: 40,
    color: "#FFFFFF",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    marginRight: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  result: {
    textAlign: "center",
    fontSize: 50,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  operator: {
    backgroundColor: "#FF9500",
    width: 80,
    height: 80,
    borderRadius: 40,
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  extraOperator: {
    backgroundColor: "#A6A6A6",
    width: 80,
    height: 80,
    borderRadius: 40,
    color: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
});
