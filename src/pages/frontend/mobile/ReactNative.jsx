export default function ReactNative() {
  return (
    <pre>
      ### basic info :
      <span>
        ** depends on React jsx & flex box
        ** uses js bridge before compiling
        ** see docs to start new app
        ** we can use with Expo OR with React CLI
        ** You must see your work on both IOS And Android because of different execution
        ** rely on component api
      </span>

      ### basic topics :
      <span>

      </span>

      ### styling :
      <span>
        ** not inheriting cascading
        ** not scrollable and pressable by default
        ** rely on flex
        ** fonts : expo install expo-front
        ** statusbar ( notification bar ) : light & dark
        ** loading spinner :  {"<ActivityIndicator >"}
        ** icons : expo vector icons & IonIcons
      </span>

      ### platform :
      <span>
        ** pressable : android ripple effect ( hover opacity ) & IOS (  style callback func )
        ** android Elevation && ios shadow
      </span>

      ### running code on mobile :
      <span>
        ** we can run using expo go mobile app
      </span>

      ### packages :
      <span>
        ** react dev tools
      </span>

      ### basic components :
      <span>
        ** StyleSheet
        ** ScrollView & View
        ** Text
        ** InputText
        ** Image
        ** Button
        ** FlatList ( lazy loading [ render seen only ] --- scrollable )
        ** Platform.OS
        ** notes :
        <span>
          ** can't use View  inside Text but use Text inside Text
        </span>
      </span>

      ### native features :
      <span>
        ** native mobile feature ( camera , location , device storage  )
        ** expo-camera expo-location expo-xyz ( more advanced feature )
        **  you can gain permission of each platform before

        ** location
        <span>
          -- make it as UI code "show map" & UX code "get info"
          -- expo-location package
          -- getCurrentPositionAsync()
          -- useForegroundPermission()
          -- get map image for latitude & longitude from google console
          -- expo install react-native-map  for pick a place from map
          -- google map geocode to get human readable address
        </span>

        ** storage :
        <span>
          -- expo-SQLite package {/* ---> */} for local Database
          -- react native asyncStorage {/* ---> */} for cached
        </span>

        ** notification
        <span>
          -- expo notification  &&& setNotificationHandler( )  &&& scheduleNotificationAsync( )
          -- local on device or push on push server
        </span>
      </span>

      ### folders & structure :
      <span>
        ** screens
        ** components/ui
        ** constants to manage colors
      </span>

    </pre>
  );
}