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

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(x, y, name):
    """Generate fixture data and write to file.

    # Arguments

    * `x`: domain
    * `y`: domain
    * `name::str`: filepath of the output file

    # Examples

    ``` python
    python> x = np.linspace(-100.0, 100.0, 1)
    python> y = np.linspace(100.0, -100.0, 1)
    python> gen(x, y, 'data.json')
    ```
    """
    z = np.logaddexp(x, y)

    # Store data to be written to file as a dictionary:
    data = {
        "x": x.tolist(),
        "y": y.tolist(),
        "expected": z.tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    x = (np.random.random(1000) * 200.0) - 100.0
    y = (np.random.random(1000) * 200.0) - 100.0
    gen(x, y, "data.json")


if __name__ == "__main__":
    main()
