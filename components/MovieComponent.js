/**
*Ali Yar Khan
*https://www.youtube.com/channel/UC_dgNWW7cBJXqafoNNTYEhw
*Email: aliyark145@gmail.com
*Redux Saga in React Native. Example of query movies list
**/

import React, { Component } from "react";
import { 
    View,
    Text,
    Image,
    Alert,
    Platform,
    TextInput,
    FlatList,
    StyleSheet
} from "react-native";

import Button from 'react-native-button';

export default class MovieComponent extends Component {

    constructor(props){
        super(props);
        this.state = { movieName : '' , releaseYear : '' };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Redux Saga Tutorial -- Movies List</Text>
                <Text style={styles.heading}>New Movie Information</Text>
                <View style={{height: 100 , margin: 10}}>
                    <TextInput style={styles.movieName}
                        onChangeText={(text) => this.setState({ movieName : text})}
                        value={this.state.movieName}
                        placeholder="Enter movie name"
                    />
                    <TextInput style={styles.releaseYear}
                        onChangeText={(text) => this.setState({ releaseYear : text})}
                        value={this.state.releaseYear}
                        placeholder="Enter release year"
                    />
                </View>
                <View style={{ height : 70 , flexDirection : 'row' }}>
                    <Button
                        containerStyle={styles.buttonContainer}
                        style={styles.button}
                        onPress={() => {
                            this.props.onFetchMovies('asc');                            
                        }}>
                        Fetch movies
                    </Button>
                    <Button 
                        containerStyle={styles.buttonContainer}
                        style={styles.button}
                        onPress={()=>{

                        }}>
                        Add Movie
                    </Button>
                </View>
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(item)=> item.name}
                    renderItem={({item, index}) =>
                        <Text style={{
                            padding : 10 ,
                            fontWeight : 'bold' ,
                            fontSize : 17 ,
                            color : 'white' ,
                            backgroundColor : ( index % 2 === 0 ) ? 'doggerblue' : 'mediumseagreen'
                        }}>
                            {`${item.name}, releaseYear=${item.releaseYear}`}
                        </Text>
                    }
                />    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : Platform.OS === 'ios'? 34 : 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        margin: 10,
        fontWeight: 'bold',
        color: 'forestgreen',
        fontSize: 20
    },
    heading:{
        margin: 10,
        color : 'black',
        fontSize : 20
    },
    movieName:{
        flex: 1,
        margin: 5,
        padding: 10, 
        borderColor: 'gray',
        borderWidth:1
    },
    releaseYear:{
        flex: 1,
        margin: 5,
        padding: 10, 
        borderColor: 'gray',
        borderWidth:1,
        width: 120
    },
    buttonContainer:{
        padding :10,
        margin: 10,
        width: 150,
        height : 45,
        borderRadius : 10,
        backgroundColor:'darkviolet'
    },
    button:{
        fontSize :18,
        color: 'white'
    }
});