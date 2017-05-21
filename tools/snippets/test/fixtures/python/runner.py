#!/usr/bin/env python
"""Generate fixtures."""

import os
import json

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)


def gen(x, name):
    """Generate fixture data and write to file.

    # Arguments

    * `x`: domain
    * `name::str`: output filename

    # Examples

    ``` python
    python> x = linspace(-1000, 1000, 2001)
    python> gen(x, './data.json')
    ```
    """
    # TODO: generate fixtures

    # Store data to be written to file as a dictionary:
    data = {
        "x": x.tolist(),
        "expected": y.tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    gen(x, "TODO")


if __name__ == "__main__":
    main()
