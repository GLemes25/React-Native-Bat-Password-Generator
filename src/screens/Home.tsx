import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { BatButton } from '../components/BatButton/BatButton';
import { BatLogo } from '../components/BatLogo/BatLogo';
import homeStyles from './HomeStyles';

const Home = () => {
  return (
    <View style={homeStyles.appContainer}>
      <View style={homeStyles.logoContainer}>
        <BatLogo />
      </View>
      <View style={homeStyles.inputContainer}>
        <BatButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
};

export default Home;
