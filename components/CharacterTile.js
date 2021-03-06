import React from "react";
import Expo from "expo";
import PropTypes from "prop-types";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import assets from "../assets";

export default class CharacterTile extends React.Component {
  static propTypes = {
    char: PropTypes.string,
    color: PropTypes.string
  };

  render() {
    const { char, color } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: color }]}
          onPress={() => {
            Expo.Audio.Sound.create(assets.sounds[char], { shouldPlay: true });
          }}
        >
          <Text style={styles.text}>{char}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "white"
  },
  button: {
    width: Dimensions.get("window").width * 0.3, // TODO: customizable with grid size
    height: Dimensions.get("window").width * 0.3, // TODO: customizable with grid size
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 24
  }
});
