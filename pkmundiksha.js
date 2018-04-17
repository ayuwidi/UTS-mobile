import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, List, ListView, RefreshControl } from 'react-native';
  
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      cari: '',
      refreshing: false,
      ActivityIndicator_Loading: false, 
    };
}

  componentDidMount()  {
    this.setState({ ActivityIndicator_Loading : true }, () =>
    {
        this.setState({refreshing: true});
        const url = 'http://gusnando.com/mobile/ayu/daftarpkm.php';
       //this.setState({ loading: true });
        fetch (url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("comp");
          console.log(responseJson);
          this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false,
            ActivityIndicator_Loading: false, 

          });
        }
      );
    });
  }
  _keyExtractor = (item, index) => item.nim;

 cariData = () => {
            this.setState({ ActivityIndicator_Loading: true },
                () => {
                    this.setState({ refreshing: true });
                    fetch(
                            "http://gusnando.com/mobile/ayu/search.php", {
                                method: "POST",
                                headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    cari: this.state.cari
                                })
                            }
                        )
                        .then(response => response.json())
                        .then(responseJson => {
                            console.log("comp");
                            console.log(responseJson);
                            this.setState({
                                data: responseJson,
                                error: responseJson.error || null,
                                loading: false,
                                refreshing: false,
                                ActivityIndicator_Loading: false
                            });
                        });
                }
            );
        };


  render() {
    return (
      <View style={styles.containerMain}>
      <TextInput  
        placeholder = "Masukan Kata Kunci" 
        style = { styles.TextInputStyleClass } 
        underlineColorAndroid = "transparent"
        returnKeyType="done"
        onChangeText = {(TextInputText) => this.setState({ cari
          : TextInputText })} 
        onChange = {this.cariData}

        style={{marginVertical: 10, padding: 10}}
                    />
          <FlatList
          data={this.state.data}
          keyExtrafctor={this._keyExtractor}
          renderItem={({item}) =>
            <View style={styles.BoxClass}>
              <Text>NIM : {item.nim}</Text>
              <Text>Nama : {item.nama}</Text>
              <Text>Judul PKM : {item.judul}</Text>
              <Text>Jenis PKM : {item.jenis}</Text>
             
              
            </View>
            
        }
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.componentDidMount.bind(this)}
          />
        }
        /> 
               
      </View>
       );
      }
  }

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 50,
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
  BoxClass:
    {
      alignItems: 'flex-start',
      height: 150,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7 ,
      marginBottom: 10,
      width: 270,
      paddingTop: 5,
      paddingBottom: 5
    },
});
