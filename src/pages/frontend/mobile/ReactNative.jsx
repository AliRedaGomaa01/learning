export default function ReactNative() {
  return (
    <pre>
      {`
      
# basic info :
  * depends on React jsx & flex box
  * uses js bridge before compiling
  * see docs to start new app
  * we can use with Expo OR with React CLI
  * You must see your work on both IOS And Android because of different execution
  * rely on component api

# basic topics :


# styling :
  * not inheriting cascading
  * not scrollable and pressable by default
  * rely on flex
  * fonts : expo install expo-front
  * statusbar ( notification bar ) : light & dark
  * loading spinner :  {"<ActivityIndicator >"}
  * icons : expo vector icons & IonIcons
  * useLayoutEffect use sometimes instead of useEffect to prevent layout refresh
  * Dimensions API  
    - ( window “ excluding statusbar “ )  &&& use it with state for ( orientation )  
    - screen orientation ⇒   useWindowDimenstions( )  , keyboardAvoidingView  , separate component part foreach width
    

# platform :
  * pressable : android ripple effect ( hover opacity ) & IOS (  style callback func )
  * android Elevation && ios shadow

# running code on mobile :
  * we can run using expo go mobile app

# packages :
  * react dev tools

# Navigation =>  
  - react navigation docs 
  - no url but buttons && push to front 
  - Stack OR Drawer OR Tabs 
  - Nested Navigator  
  - drawers & tabs 
  - options ( title & headerStyle ) & screenOptions ( all screens ) && setOptions ( inside screen  ) 
  - navigation props 
  - dynamic route     
  - useNavigation( ).replace( 'screenName' )

# basic components :
  * StyleSheet
  * ScrollView & View
  * Text
  * InputText
  * Image
  * Button
  * FlatList ( lazy loading [ render seen only ] --- scrollable )
  * Platform.OS
  * notes :
    - can't use View  inside Text but use Text inside Text

# native features :
  * native mobile feature ( camera , location , device storage  )
  * expo-camera expo-location expo-xyz ( more advanced feature )
  *  you can gain permission of each platform before

  * location
    - make it as UI code "show map" & UX code "get info"
    - expo-location package
    - getCurrentPositionAsync()
    - useForegroundPermission()
    - get map image for latitude & longitude from google console
    - expo install react-native-map  for pick a place from map
    - google map geocode to get human readable address

  * storage :
    - expo-SQLite package => for local Database
    - react native asyncStorage => for cached

  * camera images 
    - expo-image-picker package  
    - launchCameraAsync({ quality:0.5 , aspect: [ 16:9 ] , allowsEditing : true  })  
    - useCameraPermissions() 
    - PermissionStatus.UNDETERMINED

  * notification
    - expo notification  &&& setNotificationHandler( )  &&& scheduleNotificationAsync( )
    - local on device or push on push server

# folders & structure :
  * screens
  * components/ui
  * constants to manage colors
      `}

    </pre>
  );
}