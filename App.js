
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { CameraRoll, StyleSheet, TouchableOpacity, View } from "react-native";
import { createBoxShadowValue } from "react-native-web/dist/cjs/exports/StyleSheet/preprocess";
var card1 = 'nomr';
var position;

export default function App() {
  const [board, setBoard] = useState([
    { id: 1, status: 0, color: "#8E44AD" },
    { id: 2, status: 0, color: "#DC7633" },
    { id: 3, status: 0, color: "#3498DB" },
    { id: 4, status: 0, color: "#DC7633" },
    { id: 5, status: 0, color: "#3498DB" },
    { id: 6, status: 0, color: "#8E44AD" },
  ]);

  const openCard = (card, index, vira) => {
      let newBoard = [...board];
      card.status = vira;
      newBoard[index] = card;
      setBoard(newBoard);
  };

  const compareCard = (card1, card, index, position) => {
    if (card1.status === 1 && card.status === 1) {
      console.log(1)
      if (card1.color != card.color) {
        console.log(2)
        openCard(card, index, 0)
        openCard(card1, position, 0)
      }
    }
    card1 = 'nomr'
    position = undefined
  }

  const principal = (card, index) => {
    if (card.status === 0){
      openCard(card, index, 1)
      if (card1 === 'nomr') {
        card1 = card
        position = index
        console.log('teste')
      } else if (card1 != 'nomr') {
        compareCard(card1, card, index, position)
      }
    }
    }
   


  /* const closeCard = (card, index) => {
    if (card.status === 1) {
      let newBoard = [...board];
      card.status = 0;
      newBoard[index] = card;
      setBoard(newBoard);
    }
  }
 */
  return (
    <View style={styles.container}>
      {board.map((card, index) => (
        <TouchableOpacity key={card.id} onPress={() => principal(card, index)}>
          <View
            style={[
              styles.card,
              { backgroundColor: card.status === 0 ? "#ABB2B9" : card.color },
            ]}
          ></View>
        </TouchableOpacity>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: 50,
    width: 40,
    borderRadius: 4,
    margin: 4,
  },
});