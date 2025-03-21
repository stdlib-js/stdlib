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
from scipy.stats import logistic


# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(mu, s, name):
    """Generate fixture data and write to file.

    # Arguments

    * `mu`: location parameter
    * `s`: scale parameter
    * `name::str`: output filename

    # Examples

    ``` python
    python> mu = rand(1000) * 10.0 - 5.0
    python> s = rand(1000) * 10.0 + 1.0
    python> gen(mu, s, './data.json')
    ```
    """
    y = list()
    for a, b in np.nditer([mu, s]):
        y.append(logistic.std(a, b))

    # Store data to be written to file as a dictionary:
    data = {
        "mu": mu.tolist(),
        "s": s.tolist(),
        "expected": y
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    mu = rand(1000) * 10.0 - 5.0
    s = rand(1000) * 10.0 + 1.0
    gen(mu, s, "data.json")


if __name__ == "__main__":
    main()
