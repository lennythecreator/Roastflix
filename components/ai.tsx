import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const ACTIONS = [
  { label: "Change Movie", icon: "swap" as const },
  { label: "Review Conversation", icon: "book" as const },
];

const AI = () => {
  const [isListening, setIsListening] = useState(false);

  const handleMicPress = () => {
    setIsListening((prev) => !prev);
  };

  return (
    <View className="rounded-t-3xl bg-surface h-96 mt-auto px-6 pt-5 pb-8 border border-white/5">
      <View className="items-center">
        <Text className="text-white font-jakarta-semibold text-lg">
          Nolly Voice AI
        </Text>
        <Text className="text-white/70 text-xs mt-1">
          {isListening ? "Listening..." : "Tap the mic to speak"}
        </Text>
      </View>

      <View className="flex-row items-center justify-center mt-6">
        <Pressable
          onPress={handleMicPress}
          className="w-20 h-20 rounded-full bg-white/10 items-center justify-center border border-white/20"
        >
          <AntDesign
            name={isListening ? "pause" : "sound"}
            size={28}
            color="white"
          />
        </Pressable>
      </View>

      <View className="mt-8 gap-3">
        {ACTIONS.map((action) => (
          <Pressable
            key={action.label}
            className="flex-row items-center justify-between bg-white/10 rounded-2xl px-4 py-3"
          >
            <View className="flex-row items-center gap-3">
              <View className="w-9 h-9 rounded-full bg-white/10 items-center justify-center">
                <AntDesign name={action.icon} size={16} color="white" />
              </View>
              <Text className="text-white font-jakarta-semibold">
                {action.label}
              </Text>
            </View>
            <AntDesign name="right" size={16} color="white" />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default AI;