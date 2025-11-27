build app - 
eas build to apk --profile development --platform android
if you want production just profile production instead
you can eas submit after i think for playstore but not necessary for now



ok apparently it did not do what i expected it to do, but build config is here so i'm pushing this


How to test the app:

you will need three terminals:
server, DB and client (app).
- to start the server, navigate to liftinglog/backend and run: npm run dev
- to start the DB, navigate to liftinglog/backend and run: mysql -u root -p and enter your password
- to start the client, navigate to the root project directory (/lifting-log) and run npx expo start. if you run into readable stream errors, just run nvm use 24 and then rerun the command. press s to switch from development build to expo go, and then scan the QR code. 