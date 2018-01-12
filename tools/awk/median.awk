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

# Computes the median.
#
# Usage: median
#
# Input:
#   - a sorted column of numbers
#
# Output:
#   - median value

BEGIN {
	i = 0
}
{
	a[i++] = $1
}
END {
	j = i/2
	if (i%2 == 1) {
		median = a[int(j)]
	} else {
		median = (a[j] + a[j-1])/2
	}
	print median
}
