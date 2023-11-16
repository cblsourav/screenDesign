import { View, Text, Button, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Edit_Profile from './Edit_Profile';
import Strings from '../components/constant/Strings';
import ExStyle from '../components/constant/ExStyle';

const My_Profile = ({ navigation }) => {

  const Stack = createNativeStackNavigator();
  return (
    // style={{backgroundColor:"	#dadada"}}
    <ScrollView  >
      <Stack.Navigator>
        <Stack.Screen name='Edit_Profile' component={Edit_Profile} />
      </Stack.Navigator>

      <View style={ExStyle.vie} >

        <Image source={require("../assets/images/codeProject.jpeg")} style={ExStyle.img} />
        <Text style={ExStyle.txt}>{Strings.AllanGanzalez}</Text>
        <Text style={ExStyle.txt2} >{Strings.allangmailcom}</Text>
        <Image source={require("../assets/images/percentage.jpeg")} style={ExStyle.img2} />
      </View>


      <Text style={ExStyle.txt3}>{Strings.Summary}</Text>
      <Text style={ExStyle.txt4}>{Strings.identity}</Text>
      <Text style={ExStyle.txt5}>{Strings.VentricularSeptalDefect}</Text>



      <View>
        <Text style={ExStyle.txt6}>{Strings.Description}</Text>
        <View style={ExStyle.txt7} >
          <TouchableOpacity>
            <Text style={ExStyle.txt8}>{Strings.Incomplete}</Text>
          </TouchableOpacity>
        </View>
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

      <View style={ExStyle.btn} >
        <Button title='Edit Profile' onPress={() => navigation.navigate("Edit_Profile")} />
      </View>
      <View style={ExStyle.lst} >
        <Image source={require("../assets/images/cntct.jpeg")} />
        <Text style={ExStyle.ctc}>{Strings.Contactus}</Text>
      </View>
      <View style={ExStyle.lst2}>
        <Image source={require("../assets/images/trm.jpeg")} />
        <Text style={ExStyle.trm}>{Strings.TermandCondition}</Text>
      </View>
      <View style={ExStyle.lst3}>
        <Image source={require("../assets/images/log.jpeg")} />
        <Text style={ExStyle.ctc}>{Strings.Logout}</Text>
        <View style={{ margin: 50 }}>
        </View>
      </View>
    </ScrollView>
  )
}
export default My_Profile