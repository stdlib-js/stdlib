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

"""Benchmark scipy.stats.norm."""

from __future__ import print_function
import timeit

REPEATS = 3
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
    python> print_results(1000000, 0.131009101868)
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

    * `name`: benchmark name
    * `setup`: benchmark setup
    * `stmt`: statement to benchmark
    * `iterations`: number of iterations

    # Examples

    ``` python
    python> benchmark("random", "from random import random;", "y = random()", 1000000)
    ```
    """
    t = timeit.Timer(stmt, setup=setup)

    print_version()

    i = 0
    while i < REPEATS:
        print("# python::" + name)
        COUNT[0] += 1
        elapsed = t.timeit(number=iterations)
        print_results(iterations, elapsed)
        print("ok " + str(COUNT[0]) + " benchmark finished")
        i += 1


def main():
    """Run the benchmarks."""
    name = "norm:entropy"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.entropy()"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    name = "norm:kurtosis"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.stats(moments='k')"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    name = "norm:mean"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.mean()"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    name = "norm:median"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.median()"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    name = "norm:skewness"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.stats(moments='s')"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    name = "norm:stdev"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.std()"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    name = "norm:variance"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.var()"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    name = "norm:cdf"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.cdf(random())"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    name = "norm:logpdf"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.logpdf(random())"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    name = "norm:pdf"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.pdf(random())"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    name = "norm:quantile"
    setup = "from scipy.stats import norm; from random import random; rv = norm(1.0, 2.3);"
    stmt = "y = rv.ppf(random())"
    iterations = 1000
    benchmark(name, setup, stmt, iterations)

    print_summary(COUNT[0], COUNT[0])


if __name__ == "__main__":
    main()
