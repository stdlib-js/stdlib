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

"""
This script is meant to be copy-pasted into an IPython REPL session.

Upon execution, enter `X` to print the contents of the generated array of random
values.

To generate an array containing the biased covariance, set the `bias` kwarg to
`True`.
"""

import numpy as np

# Define the list of known means:
mean = [1.0, 1.0]

# Create a 2x3 matrix of mean values:
broadcasted_mean = np.broadcast_to(mean, (3, 2)).T

# Define the matrix of standard deviations:
sigma = [
    [1.0, 0.7],
    [0.7, 1.0]
]

# Generate a random sample of normally distributed numbers:
X = np.random.default_rng().multivariate_normal(mean, sigma, 3).T

# Center the generated values:
for n in range(X.shape[0]):
    X[n] = X[n] - X[n].mean()

# Transform the generated values via Cholesky decomposition (see https://stats.stackexchange.com/questions/120179/generating-data-with-a-given-sample-covariance-matrix and https://www.r-bloggers.com/2011/10/simulating-data-following-a-given-covariance-structure/)...
L_inv = np.linalg.inv(np.linalg.cholesky(np.cov(X, bias=False)))
X = np.dot(L_inv, X)

L = np.linalg.cholesky(sigma)
X = np.dot(L, X)

# Un-center the transformed values:
X += broadcasted_mean

# Confirm that the generated values have the expected covariance matrix:
np.cov(X, bias=False)
