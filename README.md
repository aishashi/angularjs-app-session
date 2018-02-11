# Distribution-list-app (AngularJS session)

Install latest version of Node.js <br>
https://nodejs.org/en/

Clone this repository<br>
git clone git@github.com:shashankbrgowda/Distribution-list-app.git

cd Distribution-list-app

Download all the dependencies (Even Bower can be used for dependency management)<br>
npm install

Run the app, static content will be served by http-server on http://localhost:8000 <br>
npm start

Package.json<br>
<code>
{
    "name": "Distribution-list-app",
    "private": true,
    "version": "0.0.0",
    "devDependencies": {
        "http-server": "^0.9.0",
        "protractor": "^4.0.9"
    },
    "scripts": {
        "update-deps": "npm update",
        "prestart": "npm install",
        "start": "http-server -a localhost -p 8000 -c-1 ./",
        "pretest": "npm install",
        "preupdate-webdriver": "npm install",
        "update-webdriver": "webdriver-manager update",
        "preprotractor": "npm run update-webdriver",
        "protractor": "protractor e2e-tests/protractor.conf.js"
    }
}

</code>
