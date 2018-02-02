#!/usr/bin/env python
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Generate fixtures."""

import os
import json
from numpy.random import random_sample
from scipy.stats import betaprime

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(alpha, beta, name):
    """Generate fixture data and write to file.

    # Arguments

    * `alpha`: first shape parameter
    * `alpha`: second shape parameter
    * `name::str`: output filename

    # Examples

    ``` python
    python> alpha = random_sample( 100 ) * 10
    python> beta = random_sample( 100 ) * 10
    python> gen(alpha, beta, './data.json')
    ```
    """
    dist = betaprime(alpha, beta)
    kurtosis = dist.stats(moments="k")

    # Store data to be written to file as a dictionary:
    data = {
        "alpha": alpha.tolist(),
        "beta": beta.tolist(),
        "expected": kurtosis.tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    alpha = random_sample(100)*10.0 + 10.0
    beta = random_sample(100)*10.0 + 10.0
    gen(alpha, beta, "data.json")


if __name__ == "__main__":
    main()
