import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
 
const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
 
  return (
    <SafeAreaView style={styles.container}>
      <MaterialTabs
        items={['One', 'Two', 'Three', 'Four', 'Five']}
        selectedIndex={selectedTab}
        onChange={setSelectedTab}
        barColor="#1fbcd2"
        indicatorColor="#fffe94"
        activeTextColor="white"
      />
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Tabs;