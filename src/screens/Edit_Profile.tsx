import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Strings from '../components/constant/Strings'
import ExStyle from '../components/constant/ExStyle'
import SaveBtn from '../components/constant/SaveBtn'

const Edit_Profile = () => {
  return (
    <ScrollView>
      <Text style={ExStyle.main}>{Strings.EditPersonalDetails}</Text>

      <View style={ExStyle.fist} >
        <View style={ExStyle.fist2} >
          <Text style={ExStyle.full}>{Strings.FullName}</Text>
          <Text style={ExStyle.Sall}>{Strings.SallieJohnson}</Text>
        </View>
        <Image source={require("../assets/images/codeProject.jpeg")} style={ExStyle.img1} />
      </View>


      <View style={ExStyle.second}>
        <Text style={ExStyle.dte}>{Strings.DateofBirth}</Text>
        <Text style={ExStyle.dte2} >{Strings.Date2}</Text>
      </View>

      <View style={ExStyle.fistad}>
        <View >
          <Text style={ExStyle.ad2}>{Strings.Address}</Text>
          <Text style={ExStyle.ad3}>{Strings.Rockaway}</Text>
        </View>
        <Image source={require("../assets/images/calder.png")} style={ExStyle.imgcl} />
      </View>

      <View style={ExStyle.fist10}>
        <View  >
          <Text style={ExStyle.sex}>{Strings.Sex}</Text>
          <Text style={ExStyle.male}>{Strings.Male}</Text>
        </View>
        <Image source={require("../assets/images/arrow.png")} style={ExStyle.imgarr} />
      </View>

      <View style={ExStyle.fist11}>
        <View >
          <Text style={ExStyle.pass}>{Strings.Password}</Text>
          <Text style={ExStyle.pass2}>{Strings.Password2}</Text>
        </View>
        <Text style={ExStyle.chg}>{Strings.ChangePassword}</Text>
      </View>


      <View style={ExStyle.fist}>
        <Text style={ExStyle.full}>{Strings.EditSummary}</Text>
      </View>


      <View>
        <Text style={ExStyle.idtity}>{Strings.identity}</Text>
        <Text style={ExStyle.Ventcondition}>{Strings.VentricularSeptalDefect}</Text>
      </View>


      <View style={ExStyle.descrip}>
        <Text style={ExStyle.descrip2}>{Strings.Description}</Text>
        <SaveBtn text={"Incomplete"} buttonStyle={{
          marginTop: 12,
          marginLeft: -212,
          backgroundColor: "#fcc1c1",
          width: 120,
          height: 30,
          borderRadius: 5,
        }} txtStyle={{ color: 'red', marginRight: 13 }} />
      </View>

      <View style={ExStyle.condition}>
        <Text style={ExStyle.con2}>{Strings.Condition}</Text>
        <Text style={ExStyle.Vent2} >{Strings.VentricularSeptalDefect}</Text>
      </View>

{/*  */}
      <View style={ExStyle.condition}>
        <Text style={ExStyle.txtx}>{Strings.HealthStory}</Text>
        <Text style={ExStyle.Vent}>{Strings.No}</Text>
      </View>

      <View style={ExStyle.condition}>
        <Text style={ExStyle.txtx}>{Strings.Interests}</Text>
        <Text style={ExStyle.Vent} >{Strings.VentricularSeptalDefect}</Text>
      </View>

      <View style={ExStyle.condition}>
        <Text style={ExStyle.txtx}>{Strings.ShortTermGoals}</Text>
        <Text style={ExStyle.Vent} >{Strings.LearnWhAT}</Text>
      </View>
      <SaveBtn text={Strings.Save} />
    </ScrollView>
  )
}
export default Edit_Profile