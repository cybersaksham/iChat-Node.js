# iChat-Node.js
Realtime chatting application using node.js &amp; socket.io

## Development server

### Linux

<li>Installing node js & nodemon</li>

```cmd
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash
nvm install node
npm i -g nodemon
```

<li>Downloading project code</li>

```cmd
git clone https://github.com/cybersaksham/iChat-Node.js
cd iChat-Node.js/Socket
npm install
nodemon ./index.js
```

Open index.html inside main folder to run website

<li>Uninstalling Code</li>

First stop server by ctrl+C.

```cmd
cd ../..
rm -rf iChat-Node.js
```

### Windows

<p>Install node js from https://nodejs.org/en/</p>

<li>Installing nodemon</li>
```cmd
npm i -g nodemon
```

<li>Downloading project code</li>

```cmd
git clone https://github.com/cybersaksham/iChat-Node.js
cd iChat-Node.js/Socket
npm install
nodemon ./index.js
```

Open index.html inside main folder to run website

<li>Uninstalling Code</li>

First stop server by ctrl+C.

```cmd
cd ../..
rmdir /S iChat-Node.js
```

