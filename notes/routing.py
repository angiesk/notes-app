from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path('ws/notes', consumers.NoteConsumer)
]
