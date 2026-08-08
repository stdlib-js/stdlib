#!/usr/bin/env python
#
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
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


def gen(n, seed, name):
    """Generate fixture data and write to file.

    # Arguments

    * `n`: number of samples
    * `seed`: random number generator seed
    * `name::str`: output filename

    # Examples

    ``` python
    python> gen(50, 42, './data.json')
    ```
    """
    # Initialize random number generator for reproducibility:
    rng = np.random.default_rng(seed)

    # Generate data:
    x = rng.normal(loc=0.0, scale=10.0, size=n)
    w = rng.uniform(0.1, 5.0, size=n)

    # Store data to be written to file as a list of records:
    records = []

    for k in range(1, n + 1):
        x_vals = x[:k]
        w_vals = w[:k]

        weighted_mean = np.average(x_vals, weights=w_vals)

        records.append({
            "step": k,
            "x": float(x[k - 1]),
            "w": float(w[k - 1]),
            "mean": float(weighted_mean)
        })

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(records, outfile)

    # Include trailing newline:
    with open(filepath, "a", encoding="utf-8") as outfile:
        outfile.write("\n")


def main():
    """Generate fixture data."""
    gen(50, 42, "data.json")


if __name__ == "__main__":
    main()
