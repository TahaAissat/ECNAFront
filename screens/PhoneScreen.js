import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Patient from "../components/Patient";
import { addpatientToStore } from "../reducers/patients";
import { useDispatch } from "react-redux";

export default function PhoneScreen({navigation}) {
  const dispatch = useDispatch()
  const [patients, setPatient] = useState([]);

  const BACKEND_ADRESS = "http://10.3.0.23:3000";

  useEffect(() => {
    fetch(`${BACKEND_ADRESS}/patients/all`)
      .then((response) => response.json())
      .then((patient) => {
        setPatient(patient.data);
      });
  }, []);
  console.log(patients);

  function hover(patient) {
    console.log('console log du click' +patients)
    dispatch(addpatientToStore(patient));
    navigation.navigate('Infosdupatient');
  }

  const all = patients.map((patient, i) => {
    patients.sort((a, b) => a.lastName - b.lastName);
    patient.lastName = patient.lastName.toUpperCase();
    return (
      <TouchableOpacity onPress={() => hover(patient)}>
        <Patient
          key={i}
          lastName={patient.lastName}
          firstName={patient.firstName}
        />
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}> Répertoire </Text>
      </View>
      {all}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  box: {
    marginTop: 130,
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    fontStyle:'italic'
  },
});
