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

"""Generate entropy fixtures for Anglit distribution."""

import os
import json
import numpy as np
from scipy.stats import anglit


# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(loc, scale, name):
    """Generate fixture data and write to file.

    # Arguments

    * `loc`: location parameter
    * `scale`: scale parameter
    * `name::str`: output filename

    # Examples

    ``` python
    python> loc = np.random.uniform(0.0, 10.0, 300)
    python> scale = np.random.uniform(0.1, 5.0, 300)
    python> gen(loc, scale, './data.json')
    ```
    """
    z = anglit.entropy(loc=loc, scale=scale)

    # Store data to be written to file as a dictionary:
    data = {
        "mu": loc.tolist(),
        "sigma": scale.tolist(),
        "expected": z.tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    # Set seed for reproducibility:
    np.random.seed(457)

    # Generate data for three different ranges of input values and parameters:
    loc_small = np.random.uniform(-5.0, 5.0, 300)
    sigma_small = np.random.uniform(0.1, 5.0, 300)

    loc_med = np.random.uniform(-10.0, 10.0, 300)
    sigma_med = np.random.uniform(0.1, 10.0, 300)

    loc_large = np.random.uniform(-20.0, 20.0, 400)
    sigma_large = np.random.uniform(0.1, 20.0, 400)

    # Concatenate arrays
    loc = np.concatenate([loc_small, loc_med, loc_large])
    sigma = np.concatenate([sigma_small, sigma_med, sigma_large])

    gen(loc, sigma, "data.json")


if __name__ == "__main__":
    main()
