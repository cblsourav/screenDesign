import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator, ProgressBarAndroidBase } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Edit_Profile from './Edit_Profile';
import Strings from '../components/constant/Strings';
import ExStyle from '../components/constant/ExStyle';
import SaveBtn from '../components/constant/SaveBtn';
import CircularProgress from 'react-native-circular-progress-indicator';

const My_Profile = ({ navigation }) => {

  const Stack = createNativeStackNavigator();
  return (
    <ScrollView  >
      <Stack.Navigator>
        <Stack.Screen name='Edit_Profile' component={Edit_Profile} />
      </Stack.Navigator>

      <View style={ExStyle.vie} >

        <Image source={require("../assets/images/codeProject.jpeg")} style={ExStyle.img} />
        <Text style={ExStyle.txt}>{Strings.AllanGanzalez}</Text>
        <Text style={ExStyle.txt2} >{Strings.allangmailcom}</Text>
        {/* <Image source={require("../assets/images/percentage.jpeg")} style={ExStyle.img2} /> */}
        <ActivityIndicator />

      </View>

      <View style={ExStyle.sumary}>
        <Text style={ExStyle.txt3}>{Strings.Summary}</Text>
        <Text style={ExStyle.txt4}>{Strings.identity}</Text>
        <Text style={ExStyle.txt5}>{Strings.VentricularSeptalDefect}</Text>
      </View>


      <View>
        <Text style={ExStyle.txt6}>{Strings.Description}</Text>
        <SaveBtn text={"Incomplete"} buttonStyle={{
          marginTop: 12,
          marginLeft: -225,
          backgroundColor: "#fcc1c1",
          width: 120,
          height: 30,
          borderRadius: 5,
        }} txtStyle={{ color: 'red', marginRight: 13 }} />
      </View>

      <View>
        <Text style={ExStyle.txt9}>{Strings.Condition}</Text>
        <Text style={ExStyle.txt10}>{Strings.VentricularSeptalDefect}</Text>
      </View>

      <View>
        <Text style={ExStyle.txt11}>{Strings.HealthStory}</Text>
        <Text style={ExStyle.txt12}>{Strings.No}</Text>
      </View>

      <View>
        <Text style={ExStyle.txt11}>{Strings.Interests}</Text>
        <Text style={ExStyle.txt10}>{Strings.VentricularSeptalDefect}</Text>
      </View>

      <View>
        <Text style={ExStyle.txt11}>{Strings.ShortTermGoals}</Text>
        <Text style={ExStyle.txt10}>{Strings.LearnwhattoexpectfromSurgery}</Text>
      </View>

      <View >
        <SaveBtn text={Strings.EditProfile} onPress={() => navigation.navigate("Edit_Profile")} buttonStyle={{ backgroundColor: 'red', width: 150 }} />
      </View>
      <View style={ExStyle.lst} >
        <Image source={require("../assets/images/cntct.jpeg")} />
        <Text style={ExStyle.ctc}>{Strings.Contactus}</Text>
      </View>


      <View style={ExStyle.lst2}>
        <Image source={require("../assets/images/trm.jpeg")} style={{ borderRadius: 20 }} />
        <Text style={ExStyle.trm}>{Strings.TermandCondition}</Text>
      </View>
      <View style={ExStyle.lst3}>
        <Image source={require("../assets/images/log.jpeg")} />
        <Text style={ExStyle.ctc}>{Strings.Logout}</Text>
      </View>
    </ScrollView>
  )
}
export default My_Profile