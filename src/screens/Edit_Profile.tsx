import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Strings from '../components/constant/Strings'
import ExStyle from '../components/constant/ExStyle'

const Edit_Profile = () => {
  return (
    <ScrollView>
      <Text style={ExStyle.main}>{Strings.EditPersonalDetails}</Text>


      <View style={ExStyle.fist} >
        <View>
          <Text style={ExStyle.full}>{Strings.FullName}</Text>
          <Text style={ExStyle.Sall}>{Strings.SallieJohnson}</Text>
        </View>
        <Image source={require("../assets/images/codeProject.jpeg")} style={ExStyle.img1} />
      </View>


      <View style={ExStyle.second}>
        <Text style={ExStyle.full}>{Strings.DateofBirth}</Text>
        <Text style={ExStyle.Sall} >{Strings.Date2}</Text>
      </View>

      <View style={ExStyle.fist}>
        <View >
          <Text style={ExStyle.full}>{Strings.Address}</Text>
          <Text style={ExStyle.Sall}>{Strings.Rockaway}</Text>
        </View>
        <Image source={require("../assets/images/calder.png")} style={ExStyle.imgcl} />
      </View>

      <View style={ExStyle.fist}>
        <View>
          <Text style={ExStyle.full}>{Strings.Sex}</Text>
          <Text style={ExStyle.Sall}>{Strings.Male}</Text>
        </View>
        <Image source={require("../assets/images/arrow.png")} style={ExStyle.imgarr} />
      </View>

      <View style={ExStyle.fist}>
        <View >
          <Text style={ExStyle.full}>{Strings.Password}</Text>
          <Text style={ExStyle.Sall}>{Strings.Password2}</Text>
        </View>
        <Text style={ExStyle.chg}>{Strings.ChangePassword}</Text>
      </View>


      <View style={ExStyle.fist}>
        <Text style={ExStyle.full}>{Strings.EditSummary}</Text>
      </View>


      <View>
        <Text style={ExStyle.idtity}>{Strings.identity}</Text>
        <Text style={ExStyle.Vent}>{Strings.VentricularSeptalDefect}</Text>
      </View>


      <View style={ExStyle.date}>
        <Text style={ExStyle.txtx}>{Strings.Description}</Text>
        <TouchableOpacity>
          <View style={ExStyle.txt17} >
            <Text style={ExStyle.txt18}>{Strings.Incomplete}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={ExStyle.date}>
        <Text style={ExStyle.txtx}>{Strings.Condition}</Text>
        <Text style={ExStyle.Vent} >{Strings.VentricularSeptalDefect}</Text>
      </View>


      <View style={ExStyle.date}>
        <Text style={ExStyle.txtx}>{Strings.HealthStory}</Text>
        <Text style={ExStyle.Vent}>{Strings.No}</Text>
      </View>

      <View style={ExStyle.date}>
        <Text style={ExStyle.txtx}>{Strings.Interests}</Text>
        <Text style={ExStyle.Vent} >{Strings.VentricularSeptalDefect}</Text>
      </View>

      <View style={ExStyle.date}>
        <Text style={ExStyle.txtx}>{Strings.ShortTermGoals}</Text>
        <Text style={ExStyle.Vent} >{Strings.LearnWhAT}</Text>
      </View>

      <TouchableOpacity>
        <View style={ExStyle.sk} >
          <Text style={ExStyle.last}>{Strings.Save}</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}
export default Edit_Profile