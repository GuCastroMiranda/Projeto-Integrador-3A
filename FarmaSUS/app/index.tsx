import { View, Text, StyleSheet } from 'react-native';

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FarmaSUS</Text>
      <Text>hmbahdsah\dvjbh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
