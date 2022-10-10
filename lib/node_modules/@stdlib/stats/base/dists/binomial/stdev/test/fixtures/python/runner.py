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
import numpy as np
from numpy.random import rand
from scipy.stats import binom


# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(n, p, name):
    """Generate fixture data and write to file.

    # Arguments

    * `n`: number of trials
    * `p`: success probability
    * `name::str`: output filename

    # Examples

    ``` python
    python> n = np.round( rand(1000) * 100.0 )
    python> p = rand(1000)
    python> gen(n, p, './data.json')
    ```
    """
    y = list()
    for a, b in np.nditer([n,p]):
        y.append(binom.std(a, b))

    # Store data to be written to file as a dictionary:
    data = {
        "n": n.tolist(),
        "p": p.tolist(),
        "expected": y
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    n = np.round( rand(1000) * 100.0 )
    p = rand(1000)
    gen(n, p, "data.json")


if __name__ == "__main__":
    main()
