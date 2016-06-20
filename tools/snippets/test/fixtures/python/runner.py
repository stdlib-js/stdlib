#!/usr/bin/env python

import numpy as np
from scipy import special
import math as m
import json
import os

"""gen( x, filepath )

Generate fixture data and write to file.

# Arguments

* `x`: domain
* `filepath::AbstractString`: filepath of the output file

# Examples

``` python
python> x = linspace( -1000, 1000, 2001 );
python> gen( x, \"./data.json\" );
```
"""
def gen( x, filepath ):
    # TODO: generate fixtures

    # Store data to be written to file as a dictionary:
    data = {
        "x": x.tolist(),
        "expected": y.tolist()
    };
    with open( filepath, 'w' ) as outfile:
        json.dump( data, outfile )

# Get the file path:
file = os.path.realpath( __file__ )

# Extract the directory in which this file resides:
dir = os.path.dirname( file )

# Generate fixture data:
# TODO: generate input data (`x`)
gen( x, "TODO" );
