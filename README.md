# requirements

- [git](https://git-scm.com/)
- [node](https://nodejs.org/en/)
- [expo-cli](https://expo.io/tools#cli)
- [expo-client](https://expo.io/tools#client)

# How to run

first clone the repository into a folder on your local machine

then you need to edit theese lines to point to an instance running [this backend](https://github.com/hLudde/backendCrowd)

```
Pages/auth/login.js line 135
Pages/auth/login.js line 152
Pages/auth/signup.js line 177
Pages/chat.js line 7
Pages/match.js line 93
Pages/match.js line 100
Pages/match.js line 182
Pages/updateProfile.js line 179
```

open a terminal in the root folder of the project and install all the dependencies with `npm install`, after this is done you can start the application by running `npm start`

when the expo cli does it thing, you can connect your phone to your instance. 

# notes

You will need to be able to connect to an instance of [this backend](https://github.com/hLudde/backendCrowd) for the application to run properly