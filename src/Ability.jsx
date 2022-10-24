import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "@react-native-material/core";
import { Picker } from "@react-native-picker/picker";

const Ability = ({ navigation }) => {

  const [firstAbility, setFirstAbility] = useState();
  const [subFirstAbility, setSubFirstAbility] = useState();
  const [secondAbility, setSecondAbility] = useState();
  const [subSecondAbility, setSubSecondAbility] = useState();

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.title}>Choose your ability</Text>
      <Text variant='h5' style={styles.subTitle}>首要能力</Text>
      <Picker
        prompt='首要能力'
        selectedValue={firstAbility}
        onValueChange={itemValue => setFirstAbility(itemValue)}
      >
        <Picker.Item label="经济学类" value="economics" />
        <Picker.Item label="管理学类" value="management" />
        <Picker.Item label="法学类" value="legal" />
        <Picker.Item label="数学类" value="math" />
        <Picker.Item label="计算机类" value="computer" />
      </Picker>
      <Picker
        prompt='首要能力'
        selectedValue={subFirstAbility}
        onValueChange={itemValue => setSubFirstAbility(itemValue)}
      >
        <Picker.Item label="前端开发" value="frontEnd" />
        <Picker.Item label="后端开发" value="backEnd" />
        <Picker.Item label="嵌入式开发" value="embedded" />
        <Picker.Item label="软件运维" value="operation" />
        <Picker.Item label="软件测试" value="test" />
      </Picker>
      <Text variant='h5' style={styles.subTitle}>次要能力</Text>
      <Picker
        prompt='次要能力'
        selectedValue={secondAbility}
        onValueChange={itemValue => setSecondAbility(itemValue)}
      >
        <Picker.Item label="经济学类" value="economics" />
        <Picker.Item label="管理学类" value="management" />
        <Picker.Item label="法学类" value="legal" />
        <Picker.Item label="数学类" value="math" />
        <Picker.Item label="计算机类" value="computer" />
      </Picker>
      <Picker
        prompt='次要能力'
        selectedValue={subSecondAbility}
        onValueChange={itemValue => setSubSecondAbility(itemValue)}
      >
        <Picker.Item label="经济管理" value="economic" />
        <Picker.Item label="人员管理" value="people" />
        <Picker.Item label="事务管理" value="affair" />
      </Picker>
      <Button
        title='get start'
        onPress={() => navigation.navigate('Main')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 30,
  },
  subTitle: {
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 25,
  },
  button: {
    marginTop: 80,
    marginLeft: 35,
    width: 250,
    textAlign: 'center',
  },
});

export default Ability;
