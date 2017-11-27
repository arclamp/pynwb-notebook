import ipywidgets as widgets
from traitlets import Unicode, validate


class Messager(widgets.DOMWidget):
    _view_name = Unicode('Messager').tag(sync=True)
    _view_module = Unicode('messager').tag(sync=True)
    _view_module_version = Unicode('0.1.0').tag(sync=True)

    message = Unicode('hello, world').tag(sync=True)

    def __init__(self, initial_message=None):
        super(Messager, self).__init__()

        if initial_message is not None:
            self.message = initial_message
