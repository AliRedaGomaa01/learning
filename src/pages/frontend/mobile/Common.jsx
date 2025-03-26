export default function Common() {
  return (
    <pre>
{`
# basic info :
  * In Backend I can work with Firebase Or local Sqlite  Or remote web server
  * In cross platform we depend on prepared tools that fit IOS & Android &&& a custom combination of these tools
  * onboarding screen => contains swiper for users who use app for the first time & usually contains instruction and illustrations


# notes :
  * Vysor for mirroring mobile screen on pc


# running code :
  * we can use Android Emulator ( android studio ) OR IOS simulator ( Mac & Xcode mobile app )

# Routing & Navigation :
  * we can navigate using Global State
  * stack means push to front

# FCM
  * FCM stands for Firebase Cloud Messaging,   used for pushing updates
    - use get for normal fetch and Future type response
    - but use listen & snapshot for realtime to get Stream type response ( queue of Future )

# notifications
  * we can use flutter_local_notifications use firebase_messaging for sending notifications
  * we can notify specific user using firebase_messaging & firebase console and this action responses are
  * we can response in background while app is closed

# native device features ( camera , gps , ... )

# platforms: 
  * integrate native code into cross-platform app
  * can write specific code for each platform
`}

    </pre>
  );
}