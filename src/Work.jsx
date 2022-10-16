import { useState, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { HStack, VStack, Avatar, Text  } from "@react-native-material/core";

const listData = [
  {
    id: 1,
    title: '前端开发实习生',
    descripion: '北京字节跳动 D轮及以上 10000人以上',
    tags: [
      '5天/周',
      '3个月',
      '本科',
      'HTML5',
      'CSS',
    ],
    avatar: {
      label: 'X',
      color: '#597ef7'
    },
    person: '薛先生·hr',
    address: '北京 海淀区 苏州街',
    salary: '300-600元/天',
  },
  {
    id: 2,
    title: '2023届本科实习生',
    descripion: '卓迅科技 未融资 20-99人',
    tags: [
      '本科',
      'Java',
      '后端开发工程师',
      '项目开发',
    ],
    avatar: {
      label: 'T',
      color: '#9254de'
    },
    person: '唐女士·人士',
    address: '西青区 中北',
    salary: '5-9K',
  },
  {
    id: 3,
    title: '前端工程师',
    descripion: '微比木建筑咨询 A轮 20-99人',
    tags: [
      '经验不限',
      '本科',
      'Vue.js',
      'Bootstrap',
      '前端框架'
    ],
    avatar: {
      label: 'W',
      color: '#f759ab'
    },
    person: '吴女士·HR',
    address: '天津',
    salary: '5-10K',
  },
  {
    id: 4,
    title: 'web前端开发实习生',
    descripion: '普斯泰科技 未融资 20-99人',
    tags: [
      '本科',
      'Vue.js',
      'Bootstrap',
      'Vue'
    ],
    avatar: {
      label: 'L',
      color: '#36cfc9'
    },
    person: '刘女士·人士经理',
    address: '天津',
    salary: '2-6K',
  },
  {
    id: 5,
    title: '后端开发实习生',
    descripion: '爱德科技发展 不需要融资 100-499人',
    tags: [
      '5+位校友入职',
      '5天/周',
      '6个月',
      '本科',
      '全栈开发',
    ],
    avatar: {
      label: 'Y',
      color: '#40a9ff'
    },
    person: '杨天智·事业部总经理',
    address: '南开区 天拖',
    salary: '150-300元/天',
  },
  {
    id: 6,
    title: '区块链web3开发实习生',
    descripion: '达不溜科技有限公司 天使轮 20-99轮',
    tags: [
      '4天/周',
      '5个月',
      'SDK',
      '英文文档',
    ],
    avatar: {
      label: 'C',
      color: '#ffc53d'
    },
    person: '陈波·技术总监',
    address: '北京 海淀区 中关村',
    salary: '300-500/天',
  },
  {
    id: 7,
    title: '软件开发（应届/实习）',
    descripion: '天津外服通 未融资 20-99人',
    tags: [
      '本科',
      '.NET',
      '详细设计',
      '软件工程',
    ],
    avatar: {
      label: 'D',
      color: '#ff7a45'
    },
    person: '刁女士·人事',
    address: '滨海新区 开发区',
    salary: '4-5K',
  },
  {
    id: 8,
    title: '前端实习工程师',
    descripion: '未陌AI A轮 20-99人',
    tags: [
      '经验不限',
      '本科',
      'React',
      'Vue',
      'CSS',
    ],
    avatar: {
      label: 'W',
      color: '#bae637'
    },
    person: '王女士·联合创始人',
    address: '北京 朝阳去 CBO',
    salary: '2-5K',
  },
];

const getData = async () => listData;

const Work = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    getData().then(data => setData(data));
  }, []);

  return (
    <ScrollView style={{ padding: 10 }}>
      <VStack spacing={10}>
        {data.map(listItem => (
          <VStack
            key={listItem.id}
            spacing={10}
            style={styles.card}
          >
            <Text variant='body1' style={styles.salaryText}>
              {listItem.salary}
            </Text>
            <Text variant='overline' style={styles.addressText}>
              {listItem.address}
            </Text>
            <Text variant='h6'>{listItem.title}</Text>
            <Text variant='body2' style={styles.descripionText}>
              {listItem.descripion}
            </Text>
            <HStack spacing={10}>
              {listItem.tags.map(tag => (
                <Text
                  key={tag}
                  variant='overline'
                  style={styles.tag}
                >
                  {tag}
                </Text>
              ))}
            </HStack>
            <View style={styles.HRcontainer} >
              <Avatar
                size={25}
                label={listItem.avatar.label}
                tintColor='white'
                color={listItem.avatar.color}
              />
              <Text variant='overline' style={styles.HRname}>{listItem.person}</Text>
            </View>
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  salaryText: {
    position: 'absolute',
    right: 20,
    top: 20,
    fontWeight: 'bold',
    color: '#08979c',
  },
  addressText: {
    position: 'absolute',
    bottom: 5,
    right: 20,
  },
  descripionText: {
    color: 'hsl(0, 0%, 30%)',
  },
  tag: {
    padding: 5,
    backgroundColor: 'hsl(0, 0%, 95%)',
    borderRadius: 5,
  },
  HRcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  HRname: {
    marginLeft: 10,
  },
});

export default Work;
