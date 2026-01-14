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
from scipy.special import eval_hermitenorm

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(n, x, name):
    """Generate fixture data and write to file.

    # Arguments

    * `n`: degree(s)
    * `x`: domain
    * `name::str`: output filename

    # Examples

    ``` python
    python> n = 1
    python> x = linspace(-1000, 1000, 2001)
    python> gen(n, x, './data.json')
    ```
    """
    y = eval_hermitenorm(n, x)
    if isinstance(n, np.ndarray):
        data = {
            "n": n.tolist(),
            "x": x.tolist(),
            "expected": y.tolist()
        }
    else:
        data = {
            "n": n,
            "x": x.tolist(),
            "expected": y.tolist()
        }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    # Random values across `n` and `x`:
    n = np.random.randint(1, 20, 100)
    x = np.float32(np.random.random(100)*50.0)
    gen(n, x, "random2.json")

    # Medium negative:
    x = np.linspace(-709.78, -1.0, 1000, dtype=np.float32)
    gen(1, x, "medium_negative_1.json")
    gen(2, x, "medium_negative_2.json")
    gen(5, x, "medium_negative_5.json")

    # Medium positive:
    x = np.linspace(1.0, 709.78, 1000, dtype=np.float32)
    gen(1, x, "medium_positive_1.json")
    gen(2, x, "medium_positive_2.json")
    gen(5, x, "medium_positive_5.json")

    # Small positive:
    x = np.linspace(2.0**-30, 0.1, 1000, dtype=np.float32)
    gen(1, x, "small_positive_1.json")
    gen(2, x, "small_positive_2.json")
    gen(5, x, "small_positive_5.json")

    # Small negative:
    x = np.linspace(-0.1, -2.0**-30, 1000, dtype=np.float32)
    gen(1, x, "small_negative_1.json")
    gen(2, x, "small_negative_2.json")
    gen(5, x, "small_negative_5.json")

    # Tiny values:
    x = np.linspace(-2.0**-30, 2.0**-30, 1000, dtype=np.float32)
    gen(1, x, "tiny_1.json")
    gen(2, x, "tiny_2.json")
    gen(5, x, "tiny_5.json")


if __name__ == "__main__":
    main()
