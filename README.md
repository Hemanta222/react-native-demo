# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## set to set fonts

- download the .ttf fonts and paste assets/fonts directory
- include the following in RootLayout (_layout.tsx) as
  const [fontsLoaded] = useFonts({
  "sans-regular": require("../assets/fonts/Inter_18pt-Regular.ttf"),
  "sans-medium": require("../assets/fonts/Inter_18pt-Medium.ttf"),
  "sans-bold": require("../assets/fonts/Inter_18pt-Bold.ttf"),
  "sans-light": require("../assets/fonts/Inter_18pt-Light.ttf"),
  "sans-semibold": require("../assets/fonts/Inter_18pt-SemiBold.ttf"),
  "sans-extrabold": require("../assets/fonts/Inter_24pt-ExtraBold.ttf"),
  });

  useEffect(() => {
  if (fontsLoaded) {
  SplashScreen.hideAsync();
  }
  }, [fontsLoaded]);

- add the follwoing in tailwind.config.js
  theme: {
  extend: {
  fontFamily: {
  sans: ["sans-regular"],
  "sans-light": ["sans-light"],
  "sans-medium": ["sans-medium"],
  "sans-semibold": ["sans-semibold"],
  "sans-bold": ["sans-bold"],
  "sans-extrabold": ["sans-extrabold"],
  },
  },
  },

- apply font styles to text - use classnames like font-sans-bold,font-sans-extrabold,font-sans-regular,font-sans-light,font-sans-semibold
