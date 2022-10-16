import { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Image, View } from "react-native";
import { Text } from "@react-native-material/core";

const data = [
  {
    id: 1,
    img: 'https://s3.bmp.ovh/imgs/2022/10/10/2f36d538ebac3aa8.png',
    state: '正在报名',
    deadline: '5',
    title: '2022 第一届 中科院深圳先进院&思为科技 【元宇宙空间计算联合实验室】 -ldeamaker"创造家"软件设计校园竞赛',
    signTime: '2022.09.15 - 2022.10.15',
    competitionTime: '2022.10.15 - 2022.11.30',
    organizers: '中科院深圳先进院&思维科技 【元宇宙空间计算联合实验室】',
    view: '2133',
    focus: '10',
    range: '市级比赛 全国参与',
  },
  {
    id: 2,
    img: 'https://s3.bmp.ovh/imgs/2022/10/10/3d3cb641adaab467.png',
    state: '正在报名',
    deadline: '18',
    title: '2022-2023年度第四届全国大学生算法设计与编程挑战赛（秋季赛）',
    signTime: '2022.08.15 - 2022.10.28',
    competitionTime: '2022.10.30 - 2022.10.30',
    organizers: '中国未来研究会大数据与数学模型专业委员会',
    view: '48526',
    focus: '587',
    range: '全国性比赛 全国参与',
  },
  {
    id: 3,
    img: 'https://s3.bmp.ovh/imgs/2022/10/10/66b6f9caaa5c522d.png',
    state: '正在报名',
    deadline: '11',
    title: '2022年第二届全国大学生物联网智能挑战赛',
    signTime: '2022.08.15 - 2022.10.21',
    competitionTime: '2022.10.22 - 2022.10.22',
    organizers: '物联网产教融合联盟',
    view: '50142',
    focus: '349',
    range: '全国性比赛 全国参与',
  },
  {
    id: 4,
    img: 'https://s3.bmp.ovh/imgs/2022/10/10/52af722c6ebeec11.png',
    state: '正在报名',
    deadline: '15',
    title: '2022年全国大学生技术创新创业大赛【省赛】',
    signTime: '2022.09.01 - 2022.10.25',
    competitionTime: '2022.09.05 - 2022.10.25',
    organizers: '中国技术创新协会企业市场融通工作委员会',
    view: '13万',
    focus: '736',
    range: '全国性比赛 全国参与',
  },
  {
    id: 5,
    img: 'https://s3.bmp.ovh/imgs/2022/10/10/4c3e0adaedda5fc6.png',
    state: '正在报名',
    deadline: '44',
    title: '2022年第十二届APMCM亚太地区大学生数学建模竞赛',
    signTime: '2022.08.09 - 2022.11.23',
    competitionTime: '2022.11.24 - 2022.11.28',
    organizers: '北京图像图形学学会 | 亚太地区大学生数学建模竞赛组委会',
    view: '93030',
    focus: '1220',
    range: '全国性比赛 全国参与',
  },
];

const getData = async () => data;

const Competition = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(data => setData(data))
  }, []);

  return (
    <ScrollView style={{ padding: 10 }}>
      {data.map(data => (
        <View key={data.id} style={styles.card}>
          <Image source={{ uri: data.img }} style={styles.img} />
          <View style={{ padding: 10, paddingBottom: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.stateText}>{data.state}</Text>
              <Text style={styles.deadLineText}>
                {`离报名截止还有${data.deadline}天`}
              </Text>
            </View>
            <Text style={styles.title}>{data.title}</Text>
            <View style={{ height: 5 }} />
            <Text style={styles.timeText}>{data.signTime}</Text>
            <Text style={styles.timeText}>{data.competitionTime}</Text>
            <Text style={styles.organizers}>
              {`主办方：${data.organizers}`}
            </Text>
            <Text style={styles.tagText}>
              {`${data.view} 浏览 | ${data.focus} 关注 | ${data.range}`}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  img: {
    width: 340,
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  stateText: {
    fontSize: 13,
    color: '#08979c',
  },
  deadLineText: {
    marginLeft: 15,
    fontSize: 11,
    color: 'hsl(0 , 0%, 50%)',
  },
  title: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  timeText: {
    marginTop: 4,
    fontSize: 14,
    color: 'hsl(0 , 0%, 40%)',
  },
  organizers: {
    marginTop: 8,
    fontSize: 13,
    color: 'hsl(0 , 0%, 50%)',
  },
  tagText: {
    marginTop: 8,
    fontSize: 12,
    color: 'hsl(0 , 0%, 50%)',
  },
});

export default Competition;
