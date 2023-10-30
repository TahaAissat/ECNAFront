import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeInterPlaque } from "../reducers/interVehicules";
import Fiche_intervention from "../components/Fiche_intervention";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Interventions({ navigation }) {
  const dispatch = useDispatch();
  const interventions = useSelector(
    (state) => state.interVehicules.value.interventions
  );
  console.log(interventions) 
  const plaque = useSelector((state) => state.interVehicules.value.plaque);
  
  // const interventionsDisplay = interventions.map((data, i) => {
  //   const day = new Date(data.date).getDate();
  //   const month = new Date(data.date).getMonth();
  //   const year = new Date(data.date).getFullYear();
  //   let date = month + "/" + day + "/" + year;
  //   console.log("ici la data : ", data);
  //   return (
  //     <Fiche_intervention
  //       key={i}
  //       lastName={data.patient.lastName}
  //       firstName={data.patient.firstName}
  //       departure={data.departure}
  //       arrival={data.arrival}
  //       date={date}
  //     />
  //   );
  // });

  function back() {
    navigation.navigate("Véhicules");
    dispatch(removeInterPlaque());
    console.log("retour la page précédente", interventions);
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={["#1a2755", "#1D94AE"]}
      start={{ x: 0.6, y: 0.7 }}
      end={{ x: 0.5, y: 1 }}
    >
      <TouchableOpacity onPress={() => back()}>
        <View style={styles.previous}>
          <MaterialIcons
            name="arrow-back-ios"
            size={(fontSize = 25)}
            color="white"
          />
          <Text style={styles.plaque}>{plaque}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.txt}> Interventions </Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.inter}></Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  previous: {
    flexDirection: "row",
    top: 100,
    marginLeft: 20,
  },
  plaque: {
    marginLeft: 5,
    color: "white",
    fontSize: 20,
  },
  box: {
    top: 150,
    width: "100%",
    marginBottom: 25,
  },
  txt: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    top: 150,
    height: 150,
    color: "black",
  },
  inter: {
    color: "black",
  },
});
