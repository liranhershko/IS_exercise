# intSights exercise

### To run

* You'll need to have [git](https://git-scm.com/) , [node](https://nodejs.org/en/) and [mongodb](https://www.mongodb.com/) installed in your system.
* Download the ZIP or clone the project:

```
git clone https://github.com/liranhershko/intSights.git
```

#### Running the client
* Go to the root project folder and install the dependencies:

```
cd intSights/
npm install
npm start
```
This will run the client in dev environment so you can edit the code and see your changes instantly.

#### Running the server
* Go to the server folder and install the dependencies:

```
cd server/
npm install
npm run dev
```

Open the web browser to `http://localhost:8888/` (Be aware that this will create a "dashboard" database with a "dashboard" collection in it so you'll also have to have your mongo client running on your machine).

#### Running a production build
* On the root folder run:

```
npm run build
```
This will create a public folder that the server will point to for serving static files.
You will then be able to open the web browser to `http://localhost:3090/` and run the production build version of the code.
