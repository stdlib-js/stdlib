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

"""Benchmark numpy.array."""

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
    """Run a benchmark and print benchmark results.

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
        print("# python::numpy" + name)
        COUNT[0] += 1
        elapsed = t.timeit(number=iterations)
        print_results(iterations, elapsed)
        print("ok " + str(COUNT[0]) + " benchmark finished")
        i += 1


def main():
    """Run the benchmarks."""
    # pylint: disable=too-many-statements
    print_version()

    name = "::1d,instantiation,linear_buffer"
    setup = "import numpy as np; x = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0];"
    stmt = "y = np.array(x)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::1d,instantiation,ndarray"
    setup = "import numpy as np; x = np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);"
    stmt = "y = np.array(x)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::1d,instantiation,no_cast"
    setup = "import numpy as np; x = np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::1d,instantiation,default_cast"
    setup = "import numpy as np; x = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0];"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::1d,instantiation,dtype_cast"
    setup = "import numpy as np; x = np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], dtype='float32');"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::1d,instantiation:copy=false"
    setup = "import numpy as np; x = np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);"
    stmt = "y = np.array(x, copy=False)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::1d,instantiation:copy=true"
    setup = "import numpy as np; x = np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);"
    stmt = "y = np.array(x, copy=True)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::2d,instantiation,ndarray"
    setup = "import numpy as np; x = np.array([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]);"
    stmt = "y = np.array(x)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::2d,instantiation,no_cast"
    setup = "import numpy as np; x = np.array([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]], dtype='float64');"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::2d,instantiation,default_cast"
    setup = "import numpy as np; x = [[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]];"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::2d,instantiation,dtype_cast"
    setup = "import numpy as np; x = np.array([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]], dtype='float32');"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::2d,instantiation:copy=false"
    setup = "import numpy as np; x = np.array([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]);"
    stmt = "y = np.array(x, copy=False)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::2d,instantiation:copy=true"
    setup = "import numpy as np; x = np.array([[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]);"
    stmt = "y = np.array(x, copy=True)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::2d,instantiation:flatten=true"
    setup = "import numpy as np; x = [[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]];"
    stmt = "y = np.array(x)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::3d,instantiation,ndarray"
    setup = "import numpy as np; x = np.array([[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]]);"
    stmt = "y = np.array(x)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::3d,instantiation,no_cast"
    setup = "import numpy as np; x = np.array([[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]], dtype='float64');"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::3d,instantiation,default_cast"
    setup = "import numpy as np; x = [[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]];"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::3d,instantiation,dtype_cast"
    setup = "import numpy as np; x = np.array([[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]], dtype='float32');"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::3d,instantiation:copy=false"
    setup = "import numpy as np; x = np.array([[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]]);"
    stmt = "y = np.array(x, copy=False)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::3d,instantiation:copy=true"
    setup = "import numpy as np; x = np.array([[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]]);"
    stmt = "y = np.array(x, copy=True)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::3d,instantiation:flatten=true"
    setup = "import numpy as np; x = [[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]];"
    stmt = "y = np.array(x)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::4d,instantiation,ndarray"
    setup = "import numpy as np; x = np.array([[[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]]]);"
    stmt = "y = np.array(x)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::4d,instantiation,no_cast"
    setup = "import numpy as np; x = np.array([[[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]]], dtype='float64');"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::4d,instantiation,default_cast"
    setup = "import numpy as np; x = [[[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]]];"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::4d,instantiation,dtype_cast"
    setup = "import numpy as np; x = np.array([[[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]]], dtype='float32');"
    stmt = "y = np.array(x, dtype='float64')"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::4d,instantiation:copy=false"
    setup = "import numpy as np; x = np.array([[[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]]]);"
    stmt = "y = np.array(x, copy=False)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::4d,instantiation:copy=true"
    setup = "import numpy as np; x = np.array([[[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]]]);"
    stmt = "y = np.array(x, copy=True)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::4d,instantiation:flatten=true"
    setup = "import numpy as np; x = [[[[1.0, 2.0], [3.0, 4.0], [5.0, 6.0]]]];"
    stmt = "y = np.array(x)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::5d,instantiation:ndmin=5"
    setup = "import numpy as np; x = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0];"
    stmt = "y = np.array(x)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    print_summary(COUNT[0], COUNT[0])


if __name__ == "__main__":
    main()
