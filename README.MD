# Steps to Run the project

1.Create a virtual environment

`python3 -m venv .venv`

2.Activate Virtual Environment

`source ./.venv/bin/activate`

3.Install pyhton dependencies

`pip install -r requirements.txt`

4.Make migrations

`python manage.py makemigrations`
`python manage.py migrate`

5.Run local server

`python manage.py runserver 8000`

## For Redis

Use docker to run redis

fetch image

`docker pull redis`

run image with your port number , in this case 6379

`docker run -p 6379:6379 -d redis`

check if the container is running

`docker ps`

## Front End

### NodeJs

**To install nvm visit the below url:**

`https://github.com/nvm-sh/nvm`

- Install node js

      nvm install --lts

- Use installed version

      nvm use --lts

- Deactivate running node version

      nvm deactivate

### Creating a react js app

`npx create-react-app notes-app-front-end`

`cd notes-app-front-end`

`npm start`

Visit react app at :

    http://localhost:3000

Running linting from front-end-directory

    npm run lint --fix src/App.js

Running Auto Pep for py code
autopep8 -i settings.py

autopep8 -ri notes/
