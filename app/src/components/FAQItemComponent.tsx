// components/FAQItem.tsx
import React, { useState, memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// types.ts
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQItemComponent: React.FC<{ item: FAQItem }> = memo(({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsExpanded(!isExpanded)}
        style={styles.questionContainer}
      >
        <Text style={styles.questionText}>{item.question}</Text>
        <Text style={styles.icon}>{isExpanded ? '−' : '+'}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  questionText: {
    fontWeight: 'bold',
    flexShrink: 1,
  },
  icon: {
    fontSize: 20,
    marginLeft: 10,
  },
  answerContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  answerText: {
    color: '#555',
  },
});

export default FAQItemComponent;
