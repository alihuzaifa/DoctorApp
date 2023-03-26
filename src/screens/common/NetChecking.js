import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import COLORS from '../../style/COLORS';

const NetChecking = ({isConnected, setIsConnected}) => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      {!isConnected ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/network/net.png')}
            style={{width: 200, height: 200, tintColor: COLORS.primary}}
          />
          <Text
            style={{
              color: 'red',
              fontSize: 20,
              marginVertical: 10,
              fontWeight: 'bold',
            }}>
            No Internet Connection
          </Text>
        </View>
      ) : null}
    </>
  );
};

export default NetChecking;

const styles = StyleSheet.create({});
