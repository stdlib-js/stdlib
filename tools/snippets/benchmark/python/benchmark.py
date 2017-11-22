#!/usr/bin/env python
"""Benchmark TODO."""

from __future__ import print_function
import timeit

NAME = "TODO"
REPEATS = 3
ITERATIONS = 1000000
COUNT = [0]  # use a list to allow modification within nested scopes


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


def print_results(iterations, elapsed):
    """Print benchmark results.

    # Arguments

    * `iterations`: number of iterations
    * `elapsed`: elapsed time (in seconds)

    # Examples

    ``` python
    python> print_results(100000, 0.131009101868)
    ```
    """
    rate = iterations / elapsed

    print("  ---")
    print("  iterations: " + str(iterations))
    print("  elapsed: " + str(elapsed))
    print("  rate: " + str(rate))
    print("  ...")


def benchmark(name, setup, stmt, iterations):
    """Run the benchmark and print benchmark results.

    # Arguments

    * `name`: benchmark name (suffix)
    * `setup`: benchmark setup
    * `stmt`: statement to benchmark
    * `iterations`: number of iterations

    # Examples

    ``` python
    python> benchmark("::random", "from random import random;", "y = random()", 1000000)
    ```
    """
    t = timeit.Timer(stmt, setup=setup)

    i = 0
    while i < REPEATS:
        print("# python::" + NAME + name)
        COUNT[0] += 1
        elapsed = t.timeit(number=iterations)
        print_results(iterations, elapsed)
        print("ok " + str(COUNT[0]) + " benchmark finished")
        i += 1


def main():
    """Run the benchmarks."""
    print_version()

    name = ":TODO"
    setup = "from math import TODO; from random import random;"
    stmt = "y = TODO(random())"
    benchmark(name, setup, stmt, ITERATIONS)

    print_summary(COUNT[0], COUNT[0])


if __name__ == "__main__":
    main()
