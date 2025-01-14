#!/usr/bin/env python
#
# @license Apache-2.0
#
# Copyright (c) 2024 The Stdlib Authors.
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
from scipy.special import xlogy

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(x, y, name):
    """Generate fixture data and writes them to file.

    # Arguments

    * `x`: first parameter
    * `y`: second parameter
    * `name::str`: output filename

    # Examples

    ``` python
    python> x = random(500) * 5.0
    python> y = random(500) * 5.0
    python> gen(x, y, './data.json')
    ```
    """
    out = xlogy(x, y)

    # Store data to be written to file as a dictionary:
    data = {
        "x": x.tolist(),
        "y": y.tolist(),
        "expected": out.tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    x = np.random.random(500) * 5.0
    y = np.random.random(500) * 5.0
    gen(x, y, "small_small.json")

    x = np.random.random(500) * 5.0
    y = np.random.random(500) * 100.0
    gen(x, y, "small_large.json")

    x = np.random.random(500) * 100.0
    y = np.random.random(500) * 5.0
    gen(x, y, "large_small.json")

    x = np.random.random(500) * 100.0
    y = np.random.random(500) * 100.0
    gen(x, y, "large_large.json")


if __name__ == "__main__":
    main()
