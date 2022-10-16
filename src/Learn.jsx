import { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import { Text, HStack } from "@react-native-material/core";
import Ionicons from "react-native-vector-icons/AntDesign";

const data = [
  {
    id: 1,
    img: 'https://s3.bmp.ovh/imgs/2022/10/11/c512d4ef246a07e8.png',
    title: '嵌入式软件设计',
    school: '大连理工大学',
    time: '进行至3周',
    people: '655',
  },
  {
    id: 2,
    img: 'https://s3.bmp.ovh/imgs/2022/10/12/479fd8e4d1da6ddd.png',
    title: 'Web前端开发',
    school: '北京林业大学',
    time: '进行至第6周',
    people: '6422',
  },
  {
    id: 3,
    img: 'https://s3.bmp.ovh/imgs/2022/10/12/f11dafc6d3d0e0d3.png',
    title: 'Web前端设计',
    school: '浙江财经大学',
    time: '进行至第4周',
    people: '381',
  },
  {
    id: 4,
    img: 'https://s3.bmp.ovh/imgs/2022/10/12/f4e91413ad09baac.png',
    title: 'Web前端设计基础',
    school: '北京联合大学',
    time: '进行至第4周',
    people: '289',
  },
  {
    id: 5,
    img: 'https://s3.bmp.ovh/imgs/2022/10/12/7951609a5f4c6cd9.png',
    title: 'Web前端开发技术',
    school: '长沙航空技术学院',
    time: '进行至第2周',
    people: '226',
  },
  {
    id: 6,
    img: 'https://s3.bmp.ovh/imgs/2022/10/12/23a9f5c16772f9a0.png',
    title: 'Web前端设计',
    school: '洛阳科技职业学院',
    time: '进行至第6周',
    people: '619',
  },
  {
    id: 7,
    img: 'https://s3.bmp.ovh/imgs/2022/10/12/255a72013f1b751e.png',
    title: 'Web前端技术',
    school: '宁波城市职业技术学院',
    time: '进行至第7周',
    people: '271',
  },
  {
    id: 8,
    img: 'https://s3.bmp.ovh/imgs/2022/10/12/8f15a705ee30849a.png',
    title: 'B/S前端技术基础',
    school: '常州机电职业技术学院',
    time: '进行至第9周',
    people: '201',
  },
  {
    id: 9,
    img: 'https://s3.bmp.ovh/imgs/2022/10/12/cb90d758749cefaa.png',
    title: '电子商务前端开发技术',
    school: '浙江商业职业技术学院',
    time: '进行至第5周',
    people: '87',
  },
  {
    id: 10,
    img: 'https://s3.bmp.ovh/imgs/2022/10/12/b8bf741d1d76da96.png',
    title: 'Angular web前端框架开发基础',
    school: '北方工业大学',
    time: '进行至第8周',
    people: '269',
  },
];

const getData = async () => data;

const Learn = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(data => setData(data))
  }, []);

  return (
    <ScrollView style={{ padding: 10 }}>
      {data.map(data => (
        <View key={data.id} style={styles.card}>
          <Image source={{ uri: data.img }} style={styles.img} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.school}>{data.school}</Text>
            <HStack spacing={3} style={styles.time}>
              <Ionicons name='clockcircleo' color='#08979c' style={{ marginTop: 3 }} />
              <Text style={styles.timeText}>{data.time}</Text>
            </HStack>
          </View>
          <Text style={styles.people}>{`${data.people}人参加`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  img: {
    width: 120,
    height: 80,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  school: {
    marginTop: 6,
    fontSize: 13,
    color: 'hsl(0, 0%, 30%)',
  },
  time: {
    marginTop: 12,
  },
  timeText: {
    fontSize: 12,
    color: '#08979c',
  },
  people: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 12,
    color: 'hsl(0 , 0%, 50%)'
  },
});

export default Learn;
