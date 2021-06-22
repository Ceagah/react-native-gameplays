import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { ButtonIcon } from '../../components/buttonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { Styles } from './style'

const SignIn: React.FC = () => {
  return (
    <View style={Styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Image source={IllustrationImg}
        style={Styles.image}
        resizeMode="stretch"
      />
      <View style={Styles.content}>
        <Text style={Styles.title}>Organize{`\n`}suas jogatinas {`\n`}facilmente</Text>
        <Text style={Styles.subTitle}>Crie grupos para jogar seus games  {`\n`} favoritos com seus amigos</Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>

    </View>
  );
}

export default SignIn;