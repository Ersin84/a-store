import { useGoogleOneTapLogin } from 'react-google-one-tap-login';

useGoogleOneTapLogin({
    onError: error => console.log(error),
    onSuccess: response => console.log(response),
    googleAccountConfigs: {
      client_id: 162887562432-b05sed3sm3ajh9h055hp1n5fi667g4i1.apps.googleusercontent.com
    },
  });