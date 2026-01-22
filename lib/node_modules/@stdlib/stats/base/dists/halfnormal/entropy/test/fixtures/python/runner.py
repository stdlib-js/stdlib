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

"""Generate HalfNormal entropy fixtures."""

import os
import json
import numpy as np
from numpy.random import rand
from scipy.stats import halfnorm

# Get the file path
FILE = os.path.realpath(__file__)
DIR = os.path.dirname(FILE)


def gen(sigma, name):
    """Generate entropy fixture data and write to JSON.

    # Arguments
    * `sigma`: scale parameter array
    * `name::str`: output filename

    # Example
    ``` python
    python> sigma = rand(1000) * 10.0 + 1.0
    python> gen(sigma, './data.json')
    ```
    """
    y = []
    for s in np.nditer(sigma):
        y.append(halfnorm.entropy(scale=float(s)))

    data = {
        "sigma": sigma.tolist(),
        "expected": y
    }

    filepath = os.path.join(DIR, name)
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    sigma = rand(1000) * 20.0 + 2.0
    gen(sigma, "data.json")


if __name__ == "__main__":
    main()
