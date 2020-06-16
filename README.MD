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
