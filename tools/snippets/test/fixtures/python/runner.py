#!/usr/bin/env python

import numpy as np
from scipy import special
import math as m
import json
import os

"""gen( x, name )

Generate fixture data and write to file.

# Arguments

* `x`: domain
* `name::str`: output filename

# Examples

``` python
python> x = linspace( -1000, 1000, 2001 );
python> gen( x, \"./data.json\" );
```
"""
def gen( x, name ):
    # TODO: generate fixtures

    # Store data to be written to file as a dictionary:
    data = {
        "x": x.tolist(),
        "expected": y.tolist()
    };

    # Based on the script directory, create an output filepath:
    filepath = os.path.join( dir, name )

    with open( filepath, 'w' ) as outfile:
        json.dump( data, outfile )

# Get the file path:
file = os.path.realpath( __file__ )

# Extract the directory in which this file resides:
dir = os.path.dirname( file )

# Generate fixture data:
# TODO: generate input data (`x`)
gen( x, "TODO" );
