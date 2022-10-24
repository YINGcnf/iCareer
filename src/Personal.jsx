import { View } from "react-native";
import { Avatar, ListItem, Text, Box } from "@react-native-material/core";
import Ionicons from "react-native-vector-icons/Ionicons"

const Personal = () => {
  return (
    <View>
      <Box style={{ marginTop: 15 }} />
      <ListItem
        title='头像'
        meta={<Avatar image={{ uri: 'https://pic1.imgdb.cn/item/633ff05116f2c2beb1bcbff9.jpg' }} />}
        trailing={() => <Ionicons name='ios-chevron-forward' size={20} />}
      />
      <ListItem
        title='昵称'
        meta='YING'
        trailing={() => <Ionicons name='ios-chevron-forward' size={20} />}
      />
      <ListItem
        title='性别'
        meta='保密'
        trailing={() => <Ionicons name='ios-chevron-forward' size={20} />}
      />
      <ListItem
        title='个性签名'
        meta='Stars and moon are all for you'
        trailing={() => <Ionicons name='ios-chevron-forward' size={20} />}
      />
      <ListItem
        title='学校'
        meta='天津工业大学'
        trailing={() => <Ionicons name='ios-chevron-forward' size={20} />}
      />
      <Box style={{ marginTop: 15 }} />
      <ListItem
        title='UID'
        meta='251090572'
        trailing={() => <Ionicons name='ios-chevron-forward' size={20} />}
      />
      <ListItem
        title='二维码名片'
        meta={<Ionicons name='ios-qr-code-outline' size={20} />}
        trailing={() => <Ionicons name='ios-chevron-forward' size={20} />}
      />
      <ListItem
        title='好友邀请码'
        meta='28e76845-2e82-4851-9bdf'
        trailing={() => <Ionicons name='ios-chevron-forward' size={20} />}
      />
      <Box style={{ marginTop: 15 }} />
      <ListItem
        title='首要能力'
        meta="计算机类 前端开发"
        trailing={() => <Ionicons name='ios-chevron-forward' size={20} />}
      />
      <ListItem
        title='次要能力'
        meta='管理学类 事务管理'
        trailing={() => <Ionicons name='ios-chevron-forward' size={20} />}
      />
    </View>
  );
};

export default Personal;
