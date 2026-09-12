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

"""Generate test fixtures."""

import os
import json
import numpy as np
from scipy.stats import truncnorm

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(x, a, b, loc, sigma, name):  # pylint: disable=too-many-arguments,too-many-positional-arguments
    """
    Generate fixture data and write to file.

    # Arguments

    * `x`: input values.
    * `a`: lower bound of truncation.
    * `b`: upper bound of truncation.
    * `loc`: mean of the normal distribution.
    * `sigma`: standard deviation.
    * `name`: output filename.

    # Examples

    ```python
    python> x = np.linspace(-5, 5, 100)
    python> a, b = -2, 2
    python> loc, sigma = 0, 1
    python> gen(x, a, b, loc, sigma, "data.json")
    ```
    """
    # Compute PDF values using SciPy's truncated normal PDF:
    z = truncnorm.pdf(x, (a-loc)/sigma, (b-loc)/sigma, loc=loc, scale=sigma)

    # Store data to be written to file as a dictionary:
    data = {
        "x": x.tolist(),
        "a": a.tolist(),
        "b": b.tolist(),
        "mu": loc.tolist(),
        "sigma": sigma.tolist(),
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
    # Generate valid `a` and `b` values:
    a = np.random.uniform(-3, 0, 1000)  # Lower bounds
    b = np.random.uniform(0.5, 3, 1000)   # Upper bounds
    a, b = np.minimum(a, b), np.maximum(a, b)  # Ensure a < b

    # Generate `x` values in a reasonable range:
    x = np.linspace(a.min(), b.max(), 1000)

    # Generate `loc` (mu) values around 0:
    loc = np.random.uniform(-1, 1, 1000)

    # Generate positive `sigma`:
    sigma = np.random.uniform(0.5, 2, 1000)

    # Generate fixtures:
    gen(x, a, b, loc, sigma, "data.json")


if __name__ == "__main__":
    main()
