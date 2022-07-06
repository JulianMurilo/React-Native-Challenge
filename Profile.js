import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.ProfilePage}>
      <Text style={styles.Julian}> Julian's Profile</Text>
      <Image source={{uri: "https://mail.google.com/mail/u/0/?ui=2&view=btop&ver=1nfmdm77qufm3#attid%253Datt_17986152e4c02264_0.1_c4fee3b5_724af093_9b4a92b1_451c64fb_8e6284df%25252Fimage1.jpeg"}}/> 
      <Text style={styles.AboutMe}>My name is Julian Murillo, I am a highschooler at the Davinci Schools Branches (DVX), and I seek to become a Geneticist or Molecular Biologist. A few of my hobbies are playing videogames, running track, and reading comic books. In the future, I hope to take with with me at least some of the valuable information that TXT has provided me with, either that, or hopefully take some friends with me!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ProfilePage: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
