import { Link } from "expo-router";
import "@/global.css";
import { Text, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-3xl font-bold text-white">NativeWind Works!</Text>
      <Link href="/onboard" className="mt-4 rounded-md px-4 py-2 bg-green-500">
        {" "}
        Go to Onboard
      </Link>
      <Link
        href="/(tabs)/subscription"
        className="mt-4 rounded-md px-4 py-2 bg-green-500"
      >
        {" "}
        Go to Subscription
      </Link>
      {/* <Link
        href={{
          pathname: "/(tabs)/subscriptions/[id]",
          params: { id: "sporify" },
        }}
        className="mt-4 rounded-md px-4 py-2 bg-green-500"
      >
        {" "}
        Subscription spotify
      </Link> */}
    </View>
  );
}
