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

"""Benchmark numpy.ndarray."""

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

    name = "::instantiation"
    setup = "import numpy as np; x = np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], dtype='float64'); shape = [3, 2]; strides = [2, 1]; offset = 0; order = 'C';"
    stmt = "y = np.ndarray(buffer=x, shape=shape, strides=strides, offset=offset, order=order)"
    iterations = 100000
    benchmark(name, setup, stmt, iterations)

    name = "::get:data"
    setup = "import numpy as np; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape);"
    stmt = "z = y.data"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::get:dtype"
    setup = "import numpy as np; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape);"
    stmt = "z = y.dtype"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::get:flags"
    setup = "import numpy as np; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape);"
    stmt = "z = y.flags"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::get:length"
    setup = "import numpy as np; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape);"
    stmt = "z = y.size"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::get:BYTES_PER_ELEMENT"
    setup = "import numpy as np; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape);"
    stmt = "z = y.itemsize"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::get:byteLength"
    setup = "import numpy as np; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape);"
    stmt = "z = y.nbytes"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::get:ndims"
    setup = "import numpy as np; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape);"
    stmt = "z = y.ndim"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::get:shape"
    setup = "import numpy as np; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape);"
    stmt = "z = y.shape"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::get:strides"
    setup = "import numpy as np; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape);"
    stmt = "z = y.strides"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::1d:get"
    setup = "import numpy as np; from math import floor; from random import random; shape = [6]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "z = y[int(floor(random()*6.0))]"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::2d:get"
    setup = "import numpy as np; from math import floor; from random import random; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "z = y[int(floor(random()*3.0)), 1]"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::3d:get"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "z = y[0, int(floor(random()*3.0)), 1]"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::4d:get"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "z = y[0, 0, int(floor(random()*3.0)), 1]"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::5d:get"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 1, 1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "z = y[0, 0, 0, int(floor(random()*3.0)), 1]"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::1d:set"
    setup = "import numpy as np; from math import floor; from random import random; shape = [6]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "y[int(floor(random()*6.0))] = random()"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::2d:set"
    setup = "import numpy as np; from math import floor; from random import random; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "y[int(floor(random()*3.0)), 1] = random()"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::3d:set"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "y[0, int(floor(random()*3.0)), 1] = random()"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::4d:set"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "y[0, 0, int(floor(random()*3.0)), 1] = random()"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::5d:set"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 1, 1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "y[0, 0, 0, int(floor(random()*3.0)), 1] = random()"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::1d:iget"
    setup = "import numpy as np; from math import floor; from random import random; shape = [6]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "z = y.item(int(floor(random()*6.0)))"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::2d:iget"
    setup = "import numpy as np; from math import floor; from random import random; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "z = y.item(int(floor(random()*6.0)))"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::3d:iget"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "z = y.item(int(floor(random()*6.0)))"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::4d:iget"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "z = y.item(int(floor(random()*6.0)))"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::5d:iget"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 1, 1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "z = y.item(int(floor(random()*6.0)))"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::1d:iset"
    setup = "import numpy as np; from math import floor; from random import random; shape = [6]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "y.itemset(int(floor(random()*6.0)), random())"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::2d:iset"
    setup = "import numpy as np; from math import floor; from random import random; shape = [3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "y.itemset(int(floor(random()*6.0)), random())"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::3d:iset"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "y.itemset(int(floor(random()*6.0)), random())"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::4d:iset"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "y.itemset(int(floor(random()*6.0)), random())"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    name = "::5d:iset"
    setup = "import numpy as np; from math import floor; from random import random; shape = [1, 1, 1, 3, 2]; y = np.ndarray(buffer=np.array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]), shape=shape, dtype='float64');"
    stmt = "y.itemset(int(floor(random()*6.0)), random())"
    iterations = 1000000
    benchmark(name, setup, stmt, iterations)

    print_summary(COUNT[0], COUNT[0])


if __name__ == "__main__":
    main()
