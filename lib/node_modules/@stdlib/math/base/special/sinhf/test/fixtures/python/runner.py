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


def gen(x, name):
    """Generate fixture data and write to file.

    # Arguments

    * `x`: domain
    * `name::str`: filepath of the output file

    # Examples

    ``` python
    python> x = linspace(-10.0, 10.0, 2003)
    python> gen(x, './data.json')
    ```
    """
    y = np.sinh(x)
    data = {
        "x": x.tolist(),
        "expected": y.tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    x = np.linspace(-10.0, 10.0, 2003, dtype=np.float32)
    gen(x, "data.json")

    x = np.linspace(-88.0, 88.0, 2003, dtype=np.float32)
    gen(x, "large.json")

    x = np.linspace(-1.0, 1.0, 2003, dtype=np.float32)
    gen(x, "small.json")


if __name__ == "__main__":
    main()
