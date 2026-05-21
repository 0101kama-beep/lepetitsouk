import { View, Text, Image, StyleSheet, FlatList } from "react-native";

export default function Menu() {
  const MENU_DATA = [
    {
      id: "1",
      title: "Tajine Poulet au Citron",
      description: "(Citrons confits & Olives)",
      image: require("../assets/images/1.png"),
      price: "55 MAD",
    },
    {
      id: "2",
      title: "Harira avec Chebakia",
      description: "(Harira avec Chebakia & Viande)",
      image: require("../assets/images/2.png"),
      price: "75 MAD",
    },
    {
      id: "3",
      title: "Pastilla au Poulet",
      description: "(Amandes & Cannelle)",
      image: require("../assets/images/3.png"),
      price: "60 MAD",
    },
    {
      id: "4",
      title: "Couscous Royal",
      description: "(Couscous Cenevs & Chebakia)",
      image: require("../assets/images/4.png"),
      price: "65 MAD",
    },
    {
      id: "5",
      title: "Thé à la Menthe",
      description: "(Thé à la Menthe)",
      image: require("../assets/images/5.png"),
      price: "20 MAD",
    },
  ];

  
  const MenuHeader = () => (
    <View style={Styles.headerInside}>
      <Image
        source={require("../assets/images/12.png")}
        style={Styles.imgae3}
      />
      <Text style={Styles.h1}>le petit souk</Text>
      <Text style={Styles.h2}>beni mellal, maroc</Text>
      <View style={Styles.separator} />
    </View>
  );

  return (
    <>
    
      <Image
        style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
        source={require("../assets/images/Gemini_Generated_Image_6skymz6skymz6sky.png")}
      />

      <View style={Styles.allview}>
       
        <View style={Styles.view1}>
          
          <FlatList
            data={MENU_DATA}

            ListHeaderComponent={MenuHeader} 
            
            renderItem={({ item }) => (
              
            <View>
              <View style={Styles.container1}>
                <View>
                  <Image source={item.image} style={Styles.imgae4} />
                </View>
                <View style={Styles.textContainer}>
                  <Text style={Styles.tittle}>{item.title}</Text>
                  <Text style={Styles.descriptionText}>{item.description}</Text>
                </View>
                <View>
                  <Text style={Styles.prise}>{item.price}</Text>
                </View>
                
              </View>
              <View style={Styles.separator} />
              </View>

            )}
          />

        </View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  allview: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 110, 
    marginBottom: 30,
  },
  view1: {
    flex: 1,
    backgroundColor: "#e9e4e4",
    borderWidth: 4,
    borderColor: "#FA8500",
    borderRadius: 30,
    paddingHorizontal: 15,
  
  },
  headerInside: {
    alignItems: "center",
    paddingTop: 10,
  },
  imgae3: {
    width: 250,
    height: 120,
  
  },
  h1: {
    color: "#005B00",
    fontSize: 50,
    marginTop: -10,
    textAlign: "center",
    fontWeight: "bold",
  },
  h2: {
    fontSize: 20,
    textAlign: "center",
    color: "#555",
    marginBottom: 15,
  },
  separator: {
    height: 2,
    backgroundColor: "#FA8500",
    width: "100%",
    marginBottom: 20,
    justifyContent:"center",
    alignItems:"center",
  },
 
  container1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderRadius: 15,
    marginVertical: 6,
  },
  imgae4: {
    width: 65,
    height: 65,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  tittle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  descriptionText: {
    fontSize: 13,
    color: "gray",
    marginTop: 2,
  },
  prise: {
    color: "#1F4C35",
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 5,
  },
});