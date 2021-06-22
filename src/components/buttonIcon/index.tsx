import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import DiscordImg from '../../assets/discord.png';
import { Styles } from './styles';


type Props = TouchableOpacityProps & {
  title: string,
}
export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={Styles.container} {...rest}>
      <View style={Styles.iconWrapper}>
        <Image source={DiscordImg} style={Styles.icon} />
      </View>
      <Text style={Styles.title}>{title} </Text>
    </TouchableOpacity>
  )
}