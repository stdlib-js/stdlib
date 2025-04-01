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
from scipy.stats import planck

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(r, lam, name):
    """
    Generate fixture data and write to file.

    # Arguments

    * `r`: input values.
    * `lam`: shape parameter.
    * `name::str`: output filename.

    # Examples

    ```python
    python> r = np.random.rand(1000)
    python> lam = np.random.rand(1000)
    python> gen(r, lam, "data.json")
    ```
    """
    # Compute quantile values:
    z = np.array(planck.ppf(r, lam))

    # Store data to be written to file as a dictionary:
    data = {
        "r": r.tolist(),
        "lambda": lam.tolist(),
        "expected": z.tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding='utf-8') as outfile:
        json.dump(data, outfile)

    # Include trailing newline:
    with open(filepath, "a", encoding='utf-8') as outfile:
        outfile.write("\n")


def main():
    """Generate fixture data."""
    # Large shape parameter:
    r = np.random.rand(1000)
    lam = (np.random.rand(1000) * 10.0) + 10.0
    gen(r, lam, "large_lambda.json")

    # Small shape parameter:
    r = np.random.rand(1000)
    lam = np.random.rand(1000) * 0.5
    gen(r, lam, "small_lambda.json")


if __name__ == "__main__":
    main()
