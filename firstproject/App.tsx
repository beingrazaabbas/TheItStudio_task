import React from 'react';
import { View, Alert, StyleSheet, Image } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { TextInput, Button, Headline } from 'react-native-paper';
import axios from 'axios';

type FormData = {
  name: string;
  mobile: string;
  email: string;
  message: string;
};

export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  const api = axios.create({
    baseURL: 'http://localhost:8080',
  });

  const onSubmit = (data: FormData) => {
    api.post('/submit', data)
      .then(() => Alert.alert('Success', 'Email sent successfully'))
      .catch((error) => {
        console.log(error);
        Alert.alert('Success', 'Email sent successfully'));
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./image/logo.png')} />
      <Headline style={styles.title}>Contact Us</Headline>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            label="Name"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            error={!!errors.name}
          />
        )}
        name="name"
        rules={{ required: true }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            label="Mobile Number"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            error={!!errors.mobile}
            keyboardType="numeric"
          />
        )}
        name="mobile"
        rules={{ required: true, minLength: 10, maxLength: 10 }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            label="Email"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            error={!!errors.email}
            keyboardType="email-address"
          />
        )}
        name="email"
        rules={{ required: true, pattern: /^\S+@\S+$/i }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            label="Message"
            mode="outlined"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            error={!!errors.message}
            multiline
            numberOfLines={4}
          />
        )}
        name="message"
        rules={{ required: true }}
        defaultValue=""
      />

      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});