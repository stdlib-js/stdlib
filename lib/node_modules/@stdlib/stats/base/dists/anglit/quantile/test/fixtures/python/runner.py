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


def gen(p, mu, sigma, name):
    """Generate fixture data and write to file.

    # Arguments

    * `p`: input probabilities
    * `mu`: location parameter values
    * `sigma`: scale parameter values
    * `name::str`: output filename
    """
    y = anglit.ppf(p, loc=mu, scale=sigma)

    # Store data to be written to file as a dictionary:
    data = {
        "p": p.tolist(),
        "mu": mu.tolist(),
        "sigma": sigma.tolist(),
        "expected": y.tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    p = np.linspace(0.0, 1.0, 1000)

    # Positive location parameter:
    mu = np.linspace(0.1, 10.0, 1000)
    sigma = np.linspace(0.1, 5.0, 1000)
    gen(p, mu, sigma, "positive_mu.json")

    # Negative location parameter:
    mu = np.linspace(-10.0, -0.1, 1000)
    sigma = np.linspace(0.1, 5.0, 1000)
    gen(p, mu, sigma, "negative_mu.json")

    # Large scale parameter:
    mu = np.linspace(-2.0, 2.0, 1000)
    sigma = np.linspace(10.0, 100.0, 1000)
    gen(p, mu, sigma, "large_sigma.json")


if __name__ == "__main__":
    main()
