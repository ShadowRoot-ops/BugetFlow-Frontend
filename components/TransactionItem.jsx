import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../assets/styles/home.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { formatDate } from "../lib/utils";

const CATEGORY_ICONS = {
  "food & drinks": "fast-food",
  shopping: "cart",
  transportation: "car",
  entertainment: "film",
  bills: "receipt",
  income: "cash",
  expense: "card", // 👈 you can choose better icon here
  other: "ellipsis-horizontal",
};
export const TransactionItem = ({ item, onDelete }) => {
  const isInconme = parseFloat(item.amount || 0) > 0;
  const iconName =
    CATEGORY_ICONS[item.category.toLowerCase()] || "pricetag-outline";
  if (!CATEGORY_ICONS[item.category]) {
    console.warn(`Unknown category: ${item.category}`);
  }
  return (
    <View style={styles.transactionCard} key={item.id}>
      <TouchableOpacity style={styles.transactionContent}>
        <View style={styles.categoryIconContainer}>
          <Ionicons
            name={iconName}
            size={22}
            color={isInconme ? COLORS.income : COLORS.expense}
          />
        </View>
        <View style={styles.transactionLeft}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionCategory}>{item.category}</Text>
        </View>
        <View style={styles.transactionRight}>
          <Text
            style={[
              styles.transactionAmount,
              { color: isInconme ? COLORS.income : COLORS.expense },
            ]}
          >
            {isInconme ? "+" : "-"}$
            {Math.abs(parseFloat(item.amount)).toFixed(2)}
          </Text>
          <Text style={styles.transactionDate}>
            {formatDate(item.created_at)}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Ionicons name="trash-outline" size={20} color={COLORS.expense} />
      </TouchableOpacity>
    </View>
  );
};
