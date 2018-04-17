import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
  
export default class budaya extends React.Component {
  constructor()
    {
        super();
 
        this.state = { 
          nim: '',
          nama: '',
          judul: '', 
          jenis: '', 
          ActivityIndicator_Loading: false, 

        }
    }
    //fungsi mengirim data ke database
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://gusnando.com/mobile/ayu/tambahpkm.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nim : this.state.nim,
                  nama : this.state.nama,
                  judul : this.state.judul,
                  jenis : this.state.jenis,

                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                /*Alert.alert(
                  'Oops!',
                  'Something went wrong!',
                  [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ],
                  { cancelable: false }
                )*/
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }


    




  render() {
    return (
      <View style={styles.containerMain}>
          <View style={styles.box1}>
              <Text style={{ padding: 30, fontSize: 20, color: 'white', textAlign: 'center'}} >UPLOAD PKM UNDIKSHA</Text>
          </View>

          <View style={styles.box2}>
            <Text style={styles.text}>NIM</Text>
             <TextInput
              style={{ height: 40, width: 150, textAlign:'center' }}
              placeholder="Masukan NIM "
               onChangeText={(nim) => this.setState({ nim })}
            />
          </View>

          <View style={styles.box2}>
            <Text style={styles.text}>Nama</Text>
            <TextInput
              style={{ height: 40, width: 150, textAlign:'center' }}
              placeholder="Masukan Nama "
              onChangeText={(nama) => this.setState({ nama })}
            />
          </View>
          <View style={styles.box2}>
             <Text style={styles.text}>Judul</Text>
             <TextInput
                style={{ height: 40, width: 150, textAlign:'center' }}
                placeholder="Masukan Judul"
                onChangeText={(judul) => this.setState({ judul })}
              />

          </View>
          <View style={styles.box2}>
              <Text style={styles.text}>Jenis PKM</Text>
              <TextInput
                style={{ height: 40, width: 150, textAlign:'center' }}
                placeholder="Masukan Jenis PKM"
                onChangeText={(jenis) => this.setState({ jenis })}
               />
          </View>
          <View style={styles.box2}>
            <TouchableOpacity style={styles.button} onPress={this.Insert_Data_Into_MySQL} >
              <Text style={styles.buttonText}> Input </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box2}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('pkmundiksha')} >
              <Text style={styles.buttonText}> Detail </Text>
            </TouchableOpacity>
          </View>

          
               
      </View>
       );
      }
  }

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  box1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 350        
  },

  box2: {
    flex: 1,
    backgroundColor: '#00cec9',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 350
  },

  box3: {
    flex: 1,
    backgroundColor: '#00cec9',
     justifyContent: 'space-around',
      alignItems: 'center',
    margin: 30
  },

   box4: {
    flex: 1,
    backgroundColor: '#00cec9',
     justifyContent: 'space-around',
      alignItems: 'center',
    margin: 30
  },

  
  button: {
    backgroundColor: 'black',
    marginTop: 10,
    padding: 20,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: '500'
  },
  
  box5: {
    flex: 1,
    backgroundColor: '#00cec9',
    justifyContent: 'space-around',
      alignItems: 'center',
    margin: 30
  },


  text: {
    fontSize: 25
  },
});
