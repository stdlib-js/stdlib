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
from scipy.special import betaincinv, betainccinv

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)

# Seeded random number generator to ensure reproducible fixtures:
RNG = np.random.default_rng(1234)


def gen(a, b, p, name):
    """Generate fixture data and write to file.

    # Arguments

    * `a`: first function parameter
    * `b`: second function parameter
    * `p`: probability values
    * `name::str`: output filename

    # Notes

    * Reference values are computed via SciPy, whose `betaincinv` and
        `betainccinv` routines wrap the `ibeta_inv` and `ibetac_inv`
        routines, respectively, from the Boost Math C++ library.
    * The reference for each output is computed from whichever of `p`
        and `q` is smaller, matching the target selection performed by
        the implementation under test and avoiding loss of precision
        when the complement `q = 1 - p` rounds to unity.

    # Examples

    ``` python
    python> a = np.linspace(1.0, 40.0, 500)
    python> b = np.linspace(1.0, 40.0, 500)
    python> p = np.linspace(0.001, 0.999, 500)
    python> gen(a, b, p, './data.json')
    ```
    """
    a = np.asarray(a, dtype=np.float64)
    b = np.asarray(b, dtype=np.float64)
    p = np.asarray(p, dtype=np.float64)
    q = 1.0 - p

    expected1 = np.where(
        p <= q, betaincinv(a, b, p), betainccinv(a, b, q)
    )
    expected2 = np.where(
        p <= q, betainccinv(b, a, p), betaincinv(b, a, q)
    )

    # Exclude any values for which the reference implementation failed
    # to return a finite reference value:
    keep = np.isfinite(expected1) & np.isfinite(expected2)

    data = {
        "a": a[keep].tolist(),
        "b": b[keep].tolist(),
        "p": p[keep].tolist(),
        "q": q[keep].tolist(),
        "expected1": expected1[keep].tolist(),
        "expected2": expected2[keep].tolist()
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON (terminated by a newline):
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)
        outfile.write("\n")


def log_uniform(low, high, size):
    """Draw log-uniformly distributed values over an interval.

    # Arguments

    * `low`: lower bound (inclusive)
    * `high`: upper bound (exclusive)
    * `size`: number of values to draw

    # Examples

    ``` python
    python> x = log_uniform(10.0, 1.0e6, 500)
    ```
    """
    return np.exp(RNG.uniform(np.log(low), np.log(high), size))


def main():
    """Generate fixture data."""
    n = 500

    # Medium parameters:
    a = RNG.uniform(1.0, 40.0, n)
    b = RNG.uniform(1.0, 40.0, n)
    p = RNG.uniform(0.001, 0.999, n)
    gen(a, b, p, "medium.json")

    # Small parameters (`a` and `b` both less than one):
    a = RNG.uniform(0.01, 1.0, n)
    b = RNG.uniform(0.01, 1.0, n)
    p = RNG.uniform(1.0e-4, 0.9999, n)
    gen(a, b, p, "small.json")

    # Mixed parameters (exactly one of `a` and `b` less than one):
    half = n // 2
    a = np.concatenate([
        RNG.uniform(0.05, 0.95, half),
        RNG.uniform(1.05, 4.0, half)
    ])
    b = np.concatenate([
        RNG.uniform(1.05, 4.0, half),
        RNG.uniform(0.05, 0.95, half)
    ])
    p = RNG.uniform(1.0e-6, 0.999999, n)
    gen(a, b, p, "mixed.json")

    # Large nearly-equal parameters:
    a = log_uniform(10.0, 1.0e6, n)
    b = a * RNG.uniform(0.96, 1.04, n)
    p = RNG.uniform(0.001, 0.999, n)
    gen(a, b, p, "large_symmetric.json")

    # Large asymmetric parameters:
    a = log_uniform(1.0e2, 1.0e5, n)
    b = RNG.uniform(0.55, 5.0, n)
    swap = RNG.integers(0, 2, n).astype(bool)
    p = RNG.uniform(0.001, 0.999, n)
    gen(np.where(swap, b, a), np.where(swap, a, b), p, "large_asymmetric.json")

    # Very large parameters:
    a = log_uniform(1.0e3, 1.0e8, 300)
    b = log_uniform(1.0e3, 1.0e8, 300)
    p = RNG.uniform(0.01, 0.99, 300)
    gen(a, b, p, "huge.json")

    # Student's t special path (`b = 0.5`), including integer degrees
    # of freedom and the deep tail:
    a = np.concatenate([
        np.array([0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 5.0, 7.0, 10.0]),
        log_uniform(0.5, 1.0e5, 440),
        np.array([1.0e9, 1.0e10, 1.0e12])
    ])
    p = np.concatenate([
        RNG.uniform(1.0e-3, 0.999, 353),
        10.0 ** RNG.uniform(-30.0, -3.0, 100)
    ])
    gen(a, np.full(len(a), 0.5), np.resize(p, len(a)), "students_t.json")

    # Closed-form path (`a = 1` or `b = 1`):
    a = log_uniform(0.05, 100.0, 400)
    swap = RNG.integers(0, 2, 400).astype(bool)
    p = RNG.uniform(1.0e-6, 0.999999, 400)
    gen(np.where(swap, 1.0, a), np.where(swap, a, 1.0), p, "linear.json")

    # Very small probabilities:
    a = log_uniform(1.0, 30.0, 400)
    b = log_uniform(1.0, 30.0, 400)
    p = 10.0 ** RNG.uniform(-280.0, -10.0, 400)
    gen(a, b, p, "tiny_p.json")

    # Probabilities near unity:
    a = log_uniform(0.5, 50.0, 400)
    b = log_uniform(0.5, 50.0, 400)
    q = 10.0 ** RNG.uniform(-14.0, -3.0, 400)
    gen(a, b, 1.0 - q, "p_near_one.json")


if __name__ == "__main__":
    main()
