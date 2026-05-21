import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  return (
    <>
      <Image
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" ,}]}
        source={require("../assets/images/Gemini_Generated_Image_6skymz6skymz6sky.png")}
      />
      <View style={Styles.parrenteA}>
        <View style={Styles.firstview}>
          <Text style={Styles.h1style}> le petit souk </Text>
          <Text style={Styles.Titelstyle}>
          
            Restaurant traditional marocain beni mellal
          </Text>
          <Image
            source={require("../assets/images/12.png")}
            style={Styles.image2}
          />
          <Text style={Styles.textp2}>
            bienvenue au coeur des saveurs authentiques du maroc . decouvrez une
            cuisine genereuse et traditionelle preparee avec passion.
          </Text>
          <TouchableOpacity style={Styles.buttons1} onPress={()=>router.push("/Menu")}>
            <Text style={Styles.titlebutton}>test now
            </Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({

  parrenteA: {
    paddingHorizontal: 40,
    marginTop: 120,
   


  },
  firstview: {
    alignItems: "center",
    backgroundColor: "#e9e4e4",
    height: 700,
    paddingHorizontal: 10,
    borderWidth: 4,
    borderColor: "#FA8500",
    borderRadius: 30,
    
  },
  Titelstyle: {
    fontSize: 30,
    textAlign: "center",
    color: "#060606",
    marginTop: 20,
  },
  h1style: {
    color: "#005B00",
    fontSize: 65,
    marginTop: 40,
    textAlign: "center",
    borderColor: "#FA8500",
  },
  image2: {
    width: 400,
    height: 300,
  },
  textp2: {
    fontSize: 20,
    textAlign: "center",
  },
  buttons1: {
    backgroundColor: "#1D4A33",
    marginTop: 25,
    padding: 15,
    borderRadius: 20,
  },
  titlebutton: {
    color: "#ffffff",
    fontSize: 30,
  },
});
