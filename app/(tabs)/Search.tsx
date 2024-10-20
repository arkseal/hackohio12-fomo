import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import getItemsFromDynamoDB from '../(src)/awsConfig';

const SearchScreen = () => { 

    const [names, setNames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedNames : any = await getItemsFromDynamoDB();
            setNames(fetchedNames);
        };
        fetchData();
    }, []);
    
    return (
        <View>
            {names && names.length > 0 ? (
                names.map((name, index) => <Text key={index}>{name}</Text>)
            ) : (
                <Text>No names found</Text>
            )}
            <Text>Search Screen</Text>
        </View>
    );
}

export default SearchScreen;