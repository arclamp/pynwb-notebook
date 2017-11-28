from IPython.core.magics.display import Javascript
import os.path

_curdir = os.path.normpath(os.path.join(os.path.dirname(os.path.join(os.path.abspath(os.getcwd()), __file__)), '..'))
_loader = None


def makePath(*pathcomp):
    return os.path.join(_curdir, *pathcomp)


def load(path, name=''):
    global _loader

    if _loader is None:
        with open(makePath('common', 'load.js')) as f:
            _loader = f.read()

    display(Javascript(_loader % (path, name)))
