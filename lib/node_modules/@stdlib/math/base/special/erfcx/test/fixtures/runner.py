#!/usr/bin/env python
#
# @license Apache-2.0
#
# Copyright (c) 2022 The Stdlib Authors.
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
from scipy.special import erfcx
import numpy as np

# Get the file path.
FILE = path.realpath(__file__)

# Get the file's directory.
DIR = path.dirname(FILE)


def generate(x, filename):
    """Generate fixture data and write to file.

    # Arguments

    * `x`: domain
    * `name::str`: filename of the output file

    # Examples

    ```python
    python> x = np.linspace(-10.0, 10.0, 2001)
    python> generate(x, './data.json')
    ```
    """
    y = erfcx(x)
    data = dict(
        x=x.tolist(),
        expected=y.tolist()
    )

    filepath = path.join(DIR, filename)

    with open(filepath, 'w') as out:
        json.dump(data, out)


def main():
    """Generate fixture data."""

    # Large positive values:
    x = np.linspace(40.0, 100.0, 1707)
    generate(x, "large_positive.json")

    # Medium positive values:
    x = np.linspace(1.0, 10.0, 1707)
    generate(x, "medium_positive.json")

    # Small positive values:
    x = np.linspace(2.0**-54, 1.0, 1653)
    generate(x, "small_positive.json")

    # Medium negative values:
    x = np.linspace(-10.0, -1.0, 1707)
    generate(x, "medium_negative.json")

    # Small negative values:
    x = np.linspace(-1.0, -2.0**-54, 1653)
    generate(x, "small_negative.json")

    # Tiny values:
    x = np.linspace(1.9**-54, 2.0**-54, 1431)
    generate(x, "tiny.json")

if __name__ == "__main__":
    main()
