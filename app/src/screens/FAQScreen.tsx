// app/faq.tsx or screens/FAQScreen.tsx
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FAQItemComponent, { FAQItem } from '../components/FAQItemComponent';

const largeFaqData: FAQItem[] = [
  { id: 1, question: "What is Expo?", answer: "Expo is an open-source platform for making universal native apps for Android, iOS, and web with JavaScript and React." },
  { id: 2, question: "How does Expo Router work?", answer: "Expo Router uses a file-based routing system where each file in the app directory corresponds to a route in the application, similar to file-system routing in web frameworks like Next.js." },
  { id: 3, question: "Do you offer free shipping?", answer: "Yes, we offer free standard shipping on all orders over $50." },
  { id: 4, question: "How can I track my order?", answer: "You can track your order using the tracking link sent to your email after purchase. You can also track it from your account order history." },
  { id: 5, question: "What payment methods do you accept?", answer: "We accept Visa, Mastercard, American Express, PayPal, and Apple Pay." },
  { id: 6, question: "What is your return policy?", answer: "Items can be returned within 30 days of delivery for a full refund, provided they are in original condition. See our [Return Policy](url) page for details." },
  { id: 7, question: "Do you ship internationally?", answer: "We currently ship to the US, Canada, UK, and Australia." },
  { id: 8, question: "How do I reset my password?", answer: "Click the 'Forgot Password' link on the login page and follow the instructions sent to your registered email address." },
  { id: 9, question: "Can I edit my account information?", answer: "Yes, you can update your details in the 'Account Settings' section when logged in." },
  { id: 10, question: "What services do you offer?", answer: "We offer services related to web development, mobile app creation, and cloud consulting." },
  { id: 11, question: "What are your hours of operation?", answer: "Our online support is available 24/7. Our physical offices are open M-F, 9 AM to 5 PM local time." },
  { id: 12, question: "How do you ensure quality?", answer: "We follow a rigorous quality assurance process including peer reviews and automated testing." },
  { id: 13, question: "What is your privacy policy?", answer: "You can read our full [Privacy Policy](url) on our website." },
  { id: 14, question: "Do you have any job openings?", answer: "Check our [Careers page](url) for all current job listings." },
  { id: 15, question: "How can I provide feedback?", answer: "We value your input! You can use the feedback form in the app's settings or contact our support team directly." },
];

export default function FAQScreen() {
  const renderItem = ({ item }: { item: FAQItem }) => (
    <FAQItemComponent item={item} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.header}>Frequently Asked Questions</Text>
      <FlatList
        data={largeFaqData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContainer}
        // Additional performance props for very large lists can be added here
        initialNumToRender={5} // Reduce initial render time
        windowSize={10} // Manage offscreen rendering
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
