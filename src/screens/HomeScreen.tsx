import { View, Text, StyleSheet } from 'react-native';
import { COLOURS } from '../constants/theme';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>HomeScreen Shell</Text>
        <Text style={styles.subtitle}>Dashboard & Reading Metrics</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: COLOURS.background 
    },
    content: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    title: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        color: COLOURS.textMain 
    },
    subtitle: { 
        fontSize: 14, 
        color: COLOURS.textMuted, 
        marginTop: 8 
    },
});

export default HomeScreen;