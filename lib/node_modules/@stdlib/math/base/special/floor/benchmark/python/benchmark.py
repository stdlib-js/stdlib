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

"""Benchmark floor."""

from __future__ import print_function
import timeit

NAME = "floor"
REPEATS = 3
ITERATIONS = 1000000


def print_version():
    """Print the TAP version."""
    print("TAP version 13")


def print_summary(total, passing):
    """Print the benchmark summary.

    # Arguments

    * `total`: total number of tests
    * `passing`: number of passing tests

    """
    print("#")
    print("1.." + str(total))  # TAP plan
    print("# total " + str(total))
    print("# pass  " + str(passing))
    print("#")
    print("# ok")


def print_results(elapsed):
    """Print benchmark results.

    # Arguments

    * `elapsed`: elapsed time (in seconds)

    # Examples

    ``` python
    python> print_results(0.131009101868)
    ```
    """
    rate = ITERATIONS / elapsed

    print("  ---")
    print("  iterations: " + str(ITERATIONS))
    print("  elapsed: " + str(elapsed))
    print("  rate: " + str(rate))
    print("  ...")


def benchmark():
    """Run the benchmark and print benchmark results."""
    setup = "from math import floor; from random import random;"
    stmt = "y = floor(1000.0*random() - 500.0)"

    t = timeit.Timer(stmt, setup=setup)

    print_version()

    for i in range(REPEATS):
        print("# python::" + NAME)
        elapsed = t.timeit(number=ITERATIONS)
        print_results(elapsed)
        print("ok " + str(i+1) + " benchmark finished")

    print_summary(REPEATS, REPEATS)


def main():
    """Run the benchmark."""
    benchmark()


if __name__ == "__main__":
    main()
