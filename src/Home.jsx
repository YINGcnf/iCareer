import { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View, Image } from "react-native";
import { VStack, Text } from "@react-native-material/core";
import Swiper from "react-native-swiper";
import Ionicons from "react-native-vector-icons/Ionicons"

const data = [
  {
    id: 1,
    title: '哎，今天在公司的最后一天了',
    author: '程序员黑黑',
    date: '3月前',
    detail: '“啊！“我今天居然被通知裁员了！！！虽然之前一直盛传我们这边要裁员，但我想着...',
    img: 'https://s3.bmp.ovh/imgs/2022/10/14/4318a4d6473d8499.png',
    kudos: '542',
    comments: '57',
    tag: '前端',
  },
  {
    id: 2,
    title: 'iPad 编程生产力',
    author: '狂奔滴小马',
    date: '1月前',
    detail: '前言 iPad 有个口号，就是“买前上产力，买后爱奇艺”，使用 iPad， 配合 Procreate...',
    img: 'https://s3.bmp.ovh/imgs/2022/10/14/fa0df8823ab52c01.png',
    kudos: '56',
    comments: '31',
    tag: '前端',
  },
  {
    id: 3,
    title: '用了这些 css 命名小技巧，我的代码优雅了不少！',
    author: '柳衫',
    date: '2月前',
    detail: '如果您使用 CSS 有一段时间，那么您就会知道继承、特异性和命名是一些最难处理...',
    img: 'https://s3.bmp.ovh/imgs/2022/10/14/081b55c5209ef72e.png',
    kudos: '241',
    comments: '30',
    tag: '前端',
  },
  {
    id: 4,
    title: '尤雨溪主题演讲《2022前端生态趋势》全记录',
    author: '清秋',
    date: '2月前',
    detail: '7月22日观看了第二届稀土开发者大会尤大关于《2022 Web 前端生态趋势》的主...',
    img: 'https://s3.bmp.ovh/imgs/2022/10/14/f86b5a457f839511.png',
    kudos: '402',
    comments: '67',
    tag: '前端',
  },
  {
    id: 5,
    title: '错的不是世界，是我',
    author: '很饿的男朋友',
    date: '1月前',
    detail: '本人95前端菜鸟一枚，目前正在广东打工混口饭吃。刚好换了工作，感觉生活节奏...',
    img: 'https://s3.bmp.ovh/imgs/2022/10/14/5c822605674f729c.png',
    kudos: '63',
    comments: '65',
    tag: '前端',
  },
];

const getData = async () => data;

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(data => setData(data))
  }, []);

  return (
    <ScrollView style={{ padding: 10 }}>
      <Swiper
        height={220}
        horizontal={true}
        paginationStyle={{ top: -220, left: 290, }}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={8}
      >
        <Image source={{ uri: 'https://s3.bmp.ovh/imgs/2022/10/10/2f36d538ebac3aa8.png' }} style={styles.img} />
        <Image source={{ uri: 'https://s3.bmp.ovh/imgs/2022/10/10/3d3cb641adaab467.png' }} style={styles.img} />
        <Image source={{ uri: 'https://s3.bmp.ovh/imgs/2022/10/10/66b6f9caaa5c522d.png' }} style={styles.img} />
      </Swiper>

      <VStack spacing={10} style={styles.articleContainer}>
        {data.map(data => (
          <View key={data.id} style={styles.card}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.main}>
              <View style={styles.textContainer}>
                <Text style={styles.subtitle}>{data.author}  |  {data.date}</Text>
                <Text style={styles.detail}>{data.detail}</Text>
              </View>
              <Image style={styles.mainImg} source={{ uri: data.img }} />
            </View>
            <View style={styles.footer}>
              <Ionicons style={styles.icon} name='ios-thumbs-up-outline' size={15} color='hsl(0, 0%, 60%)' />
              <Text style={styles.textData}>{data.kudos}</Text>
              <Ionicons style={styles.icon} name='ios-chatbox-ellipses-outline' size={15} color='hsl(0, 0%, 60%)' />
              <Text style={styles.textData}>{data.comments}</Text>
              <Text variant='overline' style={styles.tag}>{data.tag}</Text>
            </View>
          </View>
        ))}
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    borderRadius: 8,
    width: 340,
    height: 180,
  },
  articleContainer: {
    marginTop: -30,
  },
  card: {
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white'
  },
  title: {
    fontWeight: 'bold',
  },
  main: {
    flexDirection: 'row',
    marginTop: 5,
  },
  textContainer: {
    flex: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'hsl(0, 0%, 40%)',
  },
  detail: {
    marginTop: 5,
    paddingRight: 10,
    fontSize: 15,
    color: 'hsl(0, 0%, 30%)',
  },
  mainImg: {
    borderRadius: 5,
    flex: 2,
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textData: {
    marginLeft: 3,
    marginRight: 20,
    fontSize: 13,
    color: 'hsl(0, 0%, 60%)',
  },
  tag: {
    marginLeft: 165,
    padding: 5,
    paddingTop: 2,
    paddingBottom: 2,
    color: 'hsl(0, 0%, 50%)',
    backgroundColor: 'hsl(0, 0%, 95%)',
    fontSize: 13,
    borderRadius: 5,
  },
});

export default Home;
