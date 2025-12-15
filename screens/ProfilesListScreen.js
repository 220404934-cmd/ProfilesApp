import { View, Text, Button } from 'react-native';

export default function ProfilesListScreen({ navigation }) {
  return (
    <View>
      <Text>Profiles List Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('ProfileDetail')}
      />
    </View>
  );
}
