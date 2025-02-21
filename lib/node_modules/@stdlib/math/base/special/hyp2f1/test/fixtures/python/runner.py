#!/usr/bin/env python
#
# @license Apache-2.0
#
# Copyright (c) 2025 The Stdlib Authors.
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
from scipy.special import hyp2f1

# For reproducibility:
np.random.seed(1234)

# Get the file path:
FILE = os.path.realpath(__file__)

# Extract the directory in which this file resides:
DIR = os.path.dirname(FILE)

# Outliers:
outliers = [
    (-1.8, 7.4, 20.4, -10),
    (1.8, -2.5, 20.4, -10),
    (1.8, 1, 20.4, -10),
    (1.8, 7.4, -1.8, -10),
    (1.8, 7.4, 20.4, -10),
    (5, 7.4, 20.4, -10),
    (10, 7.4, 20.4, -10),
    (10, 7.4, 20.4, 0.95),
    (2, 3, 5, 0.99),
    (2, 2.5, -3.25, 0.999),
    (-1.8, -2.5, 20.4, -10),
    (1.8, 7.4, -1.8, -1.01),
    (10, 1, -1.8, -0.99),
    (10, 7.4, -1.8, -0.99),
    (0.5, 1 - 270.5, 1.5, 0.999**2),
    (-8, 18.016500331508873, 10.805295997850628, 0.90875647507),
    (
        -0.1156544430516313,
        12.722140489351698,
        -0.6030985338257255,
        -0.0005448214561780684,
    ),
    (-27.911722328444608, 14.018736008860946, -1.0168630024136034, 0.6228483452847298),
    (-10.184355055477743, 6.5450429328481174, -0.44051751620383994, 0.6555896492302491),
    (-5.0083982772911, 171.09919289684245, -1.4923865283013589, 0.7073764056574465),
    (-0.7429095709749414, 11.725525989335528, -7.299203351011158, 0.11534401417791407),
    (-14.55029516886238, 0.46553367087834685, -0.5349901418098844, 0.6086682776938632),
    (-5.428179853908536, 26.782963689614604, -4.162402828198655, 0.10047548647104909),
    (-1.8190858888165087, 21.025202609254364, -0.6960141045675334, 0.2570211738060222),
    (-0.9534205693212994, 10.024920055648606, -0.23845367675425955, 0.4419851803780206),
    (
        -31.70680212982947,
        0.11445767340979862,
        -0.5570625216964069,
        0.020574313007314604,
    ),
    (-0.18350917503602782, 14.696533286274349, -6.338990250643928, -0.9003519736816863),
    (-200.19574300099214, 1.9444493115386567, -0.6933677849479691, 0.24492811068225362),
    (
        -8.837706832399117,
        0.19096384651567044,
        -2.3808990396202425,
        -0.27624718180517105,
    ),
    (-3.2052905962805456, 0.3048596186043564, -0.7039276707364683, 0.8496565195400692),
    (
        -13.37614633859299,
        1.337786902832312,
        -0.05015281580946018,
        -0.0022109253176725296,
    ),
]


def gen(a, b, c, x, name):
    """Generate fixture data and write to file.

    # Arguments

    * `a`: domain
    * `b`: domain
    * `c`: domain
    * `x`: domain
    * `name::str`: output filename

    # Examples

    ``` python
    python> a = linspace(-50, 50, 1000)
    python> b = linspace(-50, 50, 1000)
    python> c = linspace(-50, 50, 1000)
    python> x = linspace(-50, 50, 1000)
    python> gen(a, b, c, x, './data.json')
    ```
    """
    filtered_data = [
        (ai, bi, ci, xi)
        for ai, bi, ci, xi in zip(a, b, c, x)
        if (ai, bi, ci, xi) not in outliers
    ]
    a_f, b_f, c_f, x_f = map(np.array, zip(*filtered_data))
    y = hyp2f1(a_f, b_f, c_f, x_f)
    y_f = ["PINF" if np.isinf(val) else val for val in y]
    data = {
        "a": a_f.tolist(),
        "b": b_f.tolist(),
        "c": c_f.tolist(),
        "x": x_f.tolist(),
        "expected": y_f,
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def gen_outliers(name):
    """Generate a test fixture including only outlier points.

    # Arguments

    * `name::str`: output filename

    # Examples

    ``` python
    python> gen_outliers('./data.json')
    ```
    """
    a = np.array([o[0] for o in outliers])
    b = np.array([o[1] for o in outliers])
    c = np.array([o[2] for o in outliers])
    x = np.array([o[3] for o in outliers])
    y = hyp2f1(a, b, c, x)
    y = ["PINF" if np.isinf(val) else val for val in y]
    data = {
        "a": a.tolist(),
        "b": b.tolist(),
        "c": c.tolist(),
        "x": x.tolist(),
        "expected": y,
    }

    # Based on the script directory, create an output filepath:
    filepath = os.path.join(DIR, name)

    # Write the data to the output filepath as JSON:
    with open(filepath, "w", encoding="utf-8") as outfile:
        json.dump(data, outfile)


def main():
    """Generate fixture data."""
    # Basic values:
    n = 1000
    a = np.linspace(-50, 50, n, dtype=int)
    b = np.linspace(-50, 50, n, dtype=int)
    c = np.linspace(-50, 50, n, dtype=int)
    x = np.linspace(-50, 50, n)
    gen(a, b, c, x, "basic.json")

    # Edge Cases #1
    pts = [
        (1, 2, 3, 0),
        (1.0 / 3, 2.0 / 3, 5.0 / 6, 27.0 / 32),
        (1.0 / 4, 1.0 / 2, 3.0 / 4, 80.0 / 81),
        (2, -2, -3, 3),
        (2, -3, -2, 3),
        (2, -1.5, -1.5, 3),
        (1, 2, 3, 0),
        (0.7235, -1, -5, 0.3),
        (0.25, 1.0 / 3, 2, 0.999),
        (0.25, 1.0 / 3, 2, -1),
        (2, 3, 5, 0.99),
        (3.0 / 2, -0.5, 3, 0.99),
        (2, 2.5, -3.25, 0.999),
        (-8, 18.016500331508873, 10.805295997850628, 0.90875647507000001),
        (-10, 900, -10.5, 0.99),
        (-10, 900, 10.5, 0.99),
        (-1, 2, 1, 1.0),
        (-1, 2, 1, -1.0),
        (-3, 13, 5, 1.0),
        (-3, 13, 5, -1.0),
        (0.5, 1 - 270.5, 1.5, 0.999**2),
    ]
    a, b, c, x = zip(*pts)
    a = np.array(a)
    b = np.array(b)
    c = np.array(c)
    x = np.array(x)
    gen(a, b, c, x, "edge_cases1.json")

    # Edge Cases #2
    pts = [
        (112, 5.1, -0.9, -0.99999),
        (10, -900, 10.5, 0.99),
        (10, -900, -10.5, 0.99),
    ]
    a, b, c, x = zip(*pts)
    a = np.array(a)
    b = np.array(b)
    c = np.array(c)
    x = np.array(x)
    gen(a, b, c, x, "edge_cases2.json")

    # Edge Cases #3
    a_values = [-10, -5, -1.8, 1.8, 5, 10]
    b_values = [-2.5, -1, 1, 7.4]
    c_values = [-9, -1.8, 5, 20.4]
    x_values = [-10, -1.01, -0.99, 0, 0.6, 0.95]

    a_list, b_list, c_list, x_list = [], [], [], []

    for a in a_values:
        for b in b_values:
            for c in c_values:
                for x in x_values:
                    a_list.append(a)
                    b_list.append(b)
                    c_list.append(c)
                    x_list.append(x)

    a = np.array(a_list)
    b = np.array(b_list)
    c = np.array(c_list)
    x = np.array(x_list)
    gen(a, b, c, x, "edge_cases3.json")

    # Edge Cases #4
    n = 500
    a = np.random.pareto(1.5, n) * (-1) ** np.random.randint(2, n)
    b = np.random.pareto(1.5, n) * (-1) ** np.random.randint(2, n)
    c = np.random.pareto(1.5, n) * (-1) ** np.random.randint(2, n)
    x = 2 * np.random.rand(n) - 1
    gen(a, b, c, x, "edge_cases4.json")

    # Outliers:
    gen_outliers("outliers.json")


if __name__ == "__main__":
    main()
