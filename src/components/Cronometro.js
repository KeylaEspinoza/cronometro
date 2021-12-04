import React, { useState, useRef } from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';

const Cronometro = () => {
  const [isPlay, setInit] = useState(false);
  const [time, setTime] = useState(0);
    const timer = useRef(null);
    const startStopTimer = () => {
      if (!timer.current) {
        timer.current = setInterval(() => setTime(currentTime => currentTime + 1), 1000);
      } else {
        clearInterval(timer.current);
        timer.current = null;
      }
    };

    const onClick = () => {
       if(!isPlay) startStopTimer();
       else {
        clearInterval(timer.current);
        timer.current = null;
       }
       setInit(!isPlay);
    };

    const reset = () => {
        clearInterval(timer.current);
        timer.current = null;
        setInit(false);
        setTime(0);
    };

  return (
      <View style={styles.container}>
        <View style={styles.containerRow}>
            <Text>Cronometro </Text>
            <Text>{time}</Text>
        </View>
        <View style={styles.btnContainer}>
            <Button
              onPress={() => onClick()}
              title={isPlay ? "Detener" : "Iniciar"}
              color="blue"
            />
            <Button
              onPress={() => reset()}
              title="ReIniciar"
              color="blue"
            />
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
    marginTop: 100,
    flexDirection: 'column',
    },

    containerRow: {
    flexDirection: 'row',
    },

    button: {
    flexDirection: 'row'
    },
});

export default Cronometro;