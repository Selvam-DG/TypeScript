#  Chat App -TypeScript

A real-time chat application built using:

-  TypeScript (frontend & backend)
-  Node.js + Express (HTTP server)
-  WebSocket (`ws` library) for real-time communication
-  Vanilla HTML/CSS for the user interface

---

##  Features

-  Real-time messaging across connected clients
-  Broadcast system via WebSocket
-  Simple and responsive UI
-  Easy-to-extend with usernames, timestamps, etc.

---

##  Project Structure
```
chat-app/
├── client/ # Frontend HTML/CSS + TypeScript
├── server/ # Node.js + WebSocket backend
└── README.md # This file
```
--

 Setup & Run the App

### 1.  Clone or Download

```bash
git clone https://github.com/your-username/typescript-chat-app.git
cd typescript-chat-app
```
### 2. Install Backend Dependencies
``` bash
cd server
npm install
```
### 3. Run Server with TypeScript
```bash
npx ts-node src/index.ts
```
### 4. Open the Chat App
Open your browser and go to:
``` arduino
http://localhost:3000

```
Open in multiple tabs or browsers to test real-time messaging.

## Development Tips
Client-side TypeScript (app.ts) must be compiled to JavaScript (app.js)

You can use

````bash
cd client
npx tsc app.ts

```
