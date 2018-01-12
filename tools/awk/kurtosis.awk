#!/usr/bin/env awk -f
#
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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

# Computes the corrected sample excess kurtosis.
#
# Usage: kurtosis
#
# Input:
#   - a column of numbers
#
# Output:
#   - corrected sample excess kurtosis
#
# References:
#   - Joanes, D. N., and C. A. Gill. 1998. "Comparing measures of sample skewness and kurtosis." *Journal of the Royal Statistical Society: Series D (The Statistician)* 47 (1). Blackwell Publishers Ltd: 183–89. doi:[10.1111/1467-9884.00122](http://dx.doi.org/10.1111/1467-9884.00122).

BEGIN {
	deltaN2 = 0
	deltaN = 0
	delta = 0
	term1 = 0
	mean = 0
	M2 = 0
	M3 = 0
	M4 = 0
	g2 = 0
	N = 0
}
{
	N += 1
	delta = $1 - mean
	deltaN = delta / N
	deltaN2 = deltaN * deltaN

	term1 = delta * deltaN * (N-1)

	M4 += term1 * deltaN2 * (N*N - 3*N + 3) + 6 * deltaN2 * M2 - 4 * deltaN * M3
	M3 += term1*deltaN*(N-2) - 3*deltaN*M2
	M2 += term1
	mean += deltaN
}
END {
	if (N < 4) {
		print ""
	} else {
		g2 = N*M4 / (M2*M2) - 3
		print (N-1) / ((N-2)*(N-3)) * ((N+1)*g2 + 6)
	}
}
