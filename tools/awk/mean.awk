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

# Computes the arithmetic mean.
#
# Usage: mean
#
# Input:
#   - a column of numbers
#
# Output:
#   - arithmetic mean
#
# Notes:
#   - Uses [Welford's method][1].
#
# [1]: https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Online_algorithm

BEGIN {
	delta = 0
	mean = 0
	N = 0
}
{
	N += 1
	delta = $1 - mean
	mean += delta / N
}
END {
	print mean
}
