#!/usr/bin/env python
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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

from os import path
import json
from scipy.special import boxcox1p
import numpy as np

# Get the file path.
FILE = path.realpath(__file__)

# Get the file's directory.
DIR = path.dirname(FILE)


def generate(x, y, filename):
    """Generate fixture data and write to file.

    # Arguments

    * `x`: domain
    * `y`: domain
    * `name::str`: filename of the output file

    # Examples

    ```python
    python> x = np.linspace(-10.0, 10.0, 2001)
    python> y = np.arange(-5.0, 5.0, 1001)
    python> generate(x, y, './data.json')
    ```
    """
    z = boxcox1p(x, y)
    data = dict(
        x=x.tolist(),
        y=y.tolist(),
        expected=z.tolist()
    )

    filepath = path.join(DIR, filename)

    with open(filepath, 'w') as out:
        json.dump(data, out)


def main():
    """Generate fixture data."""
    # Medium positive values:
    x = np.linspace(1.0, 10.0, 1707)
    lmda = np.linspace(-5.0, 5.0, 1707)
    generate(x, lmda, "medium_positive.json")

    # Small positive values:
    x = np.linspace(2.0**-54, 1.0, 1653)
    lmda = np.linspace(-5.0, 5.0, 1653)
    generate(x, lmda, "small_positive.json")

    # Very small values:
    x = np.linspace(1.0e-54, 2.0e-54, 1431)
    lmda = np.linspace(-5.0, 5.0, 1431)
    generate(x, lmda, "very_small.json")

    # Tiny values:
    x = np.linspace(1.0e-300, 2.0e-300, 1431)
    lmda = np.linspace(-5.0, 5.0, 1431)
    generate(x, lmda, "tiny.json")

    # Tiny values and huge lambda:
    x = np.linspace(1.0e-300, 2.0e-300, 1431)
    lmda = np.linspace(-5.0e300, 5.0e300, 1431)
    generate(x, lmda, "tiny_and_large_lambda.json")

    # Tiny lambda:
    x = np.linspace(1.0, 10.0, 1431)
    lmda = np.linspace(-5.0e-30, 5.0e-30, 1431)
    generate(x, lmda, "tiny_lambda.json")


if __name__ == "__main__":
    main()
