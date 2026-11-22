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
from scipy.stats import anglit


# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(location, scale, name):
    """
    Generate fixture data and write to file.

    # Arguments

    * `location`: location parameters.
    * `scale`: scale parameters.
    * `name::str`: output filename.

    # Examples

    ```python
    python> location = np.random.rand(1000) * 10.0 - 5.0
    python> scale = np.random.rand(1000) * 5.0
    python> gen(location, scale, "data.json")
    ```
    """
    # Compute mean values:
    expected = anglit.mean(loc=location, scale=scale)

    # Store data to be written to file as a dictionary:
    data = {
        "mu": location.tolist(),
        "sigma": scale.tolist(),
        "expected": np.asarray(expected).tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)

    # Include trailing newline:
    with open(filepath, "a", encoding="utf-8") as outfile:
        outfile.write("\n")


def main():
    """Generate fixture data."""
    np.random.seed(12345)

    # Random baseline coverage:
    location = (np.random.rand(100) * 2.0) - 4.0
    scale = np.random.rand(100) * 5.0
    gen(location, scale, "data.json")

    # Small |mu| values:
    location = np.linspace(-1.0e-6, 1.0e-6, 100)
    scale = (np.random.rand(100) * 5.0) + 0.1
    gen(location, scale, "small_mu.json")

    # Large |mu| values:
    location = np.linspace(-1.0e6, 1.0e6, 100)
    scale = (np.random.rand(100) * 5.0) + 0.1
    gen(location, scale, "large_mu.json")

    # Small positive sigma values:
    location = (np.random.rand(100) * 2.0) - 4.0
    scale = np.linspace(1.0e-12, 1.0e-6, 100)
    gen(location, scale, "small_sigma.json")

    # Large sigma values:
    location = (np.random.rand(100) * 2.0) - 4.0
    scale = np.linspace(1.0e3, 1.0e6, 100)
    gen(location, scale, "large_sigma.json")


if __name__ == "__main__":
    main()
