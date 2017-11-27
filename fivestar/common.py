import os.path

curdir = os.path.dirname(os.path.join(os.path.abspath(os.getcwd()), __file__))


def makePath(*pathcomp):
    return os.path.join(curdir, *pathcomp)
