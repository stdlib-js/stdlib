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
from scipy.stats import fisk

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(x, alpha, beta, name):
    """Generate fixture data and write to file.

    # Arguments

    * `x`: domain
    * `alpha`: scale parameter
    * `beta`: shape parameter (c in scipy.stats.fisk)
    * `name::str`: output filename

    # Examples

    ``` python
    python> x = linspace(0.01, 5, 1000)
    python> alpha = rand(1000) * 2.0 + 0.5
    python> beta = rand(1000) * 1.0
    python> gen(x, alpha, beta, './data.json')
    ```
    """
    y = fisk.pdf(x, beta, scale=alpha)

    # Store data to be written to file as a dictionary:
    data = {
        "x": x.tolist(),
        "alpha": alpha.tolist(),
        "beta": beta.tolist(),
        "expected": y.tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    x = np.random.rand(2000) * 5.0

    # Small scale parameter:
    alpha_small = np.random.rand(1000) * 1.0 + 0.5
    beta_small = np.random.rand(1000) * 1.0 + 0.1

    # Large scale parameter:
    alpha_large = np.random.rand(1000) * 5.0 + 2.0
    beta_large = np.random.rand(1000) * 5.0 + 5.0

    alpha = np.concatenate([alpha_small, alpha_large])
    beta = np.concatenate([beta_small, beta_large])

    gen(x, alpha, beta, "data.json")


if __name__ == "__main__":
    main()
