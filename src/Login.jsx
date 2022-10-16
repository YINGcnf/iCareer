import { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button, Text } from "@react-native-material/core";

const Login = ({ navigation }) => {

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const date = new Date;

  return (
    <SafeAreaView style={styles.container}>
      <Text variant='h3' style={styles.title}>iCareer</Text>
      <TextInput
        variant='standard'
        label='Mobile'
        value={mobile}
        onChangeText={text => setMobile(text)}
        style={styles.input}
      />
      <TextInput
        variant='standard'
        label='Password'
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <Button 
        title='login' 
        onPress={() => navigation.navigate('Ability')}
        style={styles.button} 
      />
      <Text variant='body2' style={styles.footer}>
        {`${date.getFullYear()} © Design By YING`}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150,
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    marginTop: 20,
  },
  button: {
    marginTop: 40,
    width: 200,
  },
  footer: {
    position: 'absolute',
    bottom: 10,
  },
});

export default Login;
