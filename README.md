# Twilio-Messaging
> Messaging your phone number from the Twilio api using Javscript  ![Code used](https://raw.githubusercontent.com/aguin467/Twilio-Messaging-Javscript/master/js.jpg)


* <i>This assumes that you know how to use the cli/terminal in GNU/Linux</i>
* <i>This also assumes that you use vscode as your IDE</i>
* <i>Finally, this assumes that you already have obtained your TWILIO_ACCOUNT_SID and AUTH_TOKEN</i>
----------------------------------------------------------------------------------------------------------------------------------------

<p>&nbsp;
  
- Install nodejs

```
sudo apt install nodejs -y
```

<p>&nbsp;
  
- Install npm

```
sudo apt install npm -y
```

<p>&nbsp;

- Install Twilio

```
npm install twilio
```

<p>&nbsp;

- Create a folder in the terminal

```
mkdir folder name
```

<p>&nbsp;
  
- CD into that folder
```
cd folder name
```

<p>&nbsp;

- Make sure to input your twilio_sid_token and auth_token

```
const client = new Twilio("TWILIO_ACCOUNT_SID", "AUTH_TOKEN");
```

<p>&nbsp;
  

- Open up vscode in the terminal

```
code .
```

<p>&nbsp;
  
- Then run the command
```
node explore.js
```

<p>&nbsp;
  
- This will gather your most recent sent messages in Twilio

```
client.messages
.list()
    .then(messages => console.log(`The most recent message is ${messages[0].body}`)
    ).catch(err => console.error(err));
```

<p>&nbsp;


- You are done :shipit:
