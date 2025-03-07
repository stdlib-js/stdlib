#!/usr/bin/env python
#
# @license Apache-2.0
#
# Copyright (c) 2025 The Stdlib Authors.
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
from scipy.stats import bradford

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(x, c, name):
    """Generate fixture data and write to file.

    # Arguments

    * `x`: domain
    * `c`: domain
    * `name::str`: output filename

    # Examples

    ``` python
    python> x = linspace(0, 1, 2001)
    python> c = linspace(0.1, 1000, 2001)
    python> gen(x, c, './data.json')
    ```
    """
    y = bradford.ppf(x, c)

    # Store data to be written to file as a dictionary:
    data = {
        "p": x.tolist(),
        "c": c.tolist(),
        "expected": y.tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    p = np.linspace(0, 1, 1000)

    # Small shape parameter:
    c = np.linspace(0.1, 1, 1000)
    gen(p, c, "small_c.json")

    # Medium shape parameter:
    c = np.linspace(1, 10, 1000)
    gen(p, c, "medium_c.json")

    # Large shape parameter:
    c = np.linspace(10, 100, 1000)
    gen(p, c, "large_c.json")


if __name__ == "__main__":
    main()
