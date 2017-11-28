from IPython.core.magics.display import Javascript
import ipywidgets as widgets
from traitlets import Unicode, validate

from ..common import makePath

_name = 'CandelaLineChart'

class CandelaLineChart(widgets.DOMWidget):
    _view_name = Unicode(_name).tag(sync=True)
    _view_module = Unicode(_name).tag(sync=True)
    _view_module_version = Unicode('0.1.0').tag(sync=True)
    
    def __init__(self, **kwargs):
        super(CandelaLineChart, self).__init__()

        with open(makePath('CandelaLineChart', 'widget.js')) as f:
            js = f.read()

        display(Javascript(js))

