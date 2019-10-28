import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import Post from './components/Post';
import { tsConstructorType } from '@babel/types';


const width = Dimensions.get('screen').width;

export default class App extends Component {
constructor() {
    super();
    this.state = {
        fotos: []
    }
}
componentDidMount() {
  fetch('ttp://localhost:8080/api/public/fotos/rafael')
    .then(resposta => resposta.json())
    .then(json => this.setState({fotos: json}))
    .catch(e => {
      console.warn('Não foi possível carregar as fotos: ' + e);
      this.setState({status: 'ERRO'})
    });
}
render() {
    return (
      
        <View>
        <FlatList style={styles.container}
            keyExtractor={item => item.id}
            data={this.state.fotos}
            renderItem={ ({item}) =>
                <Post foto={item}/>
            }
        />
        </View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
})