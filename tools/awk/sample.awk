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

# Samples a column of values.
#
# Usage: sample prob seed
#
# Input:
#   - a column of values
#
# Arguments:
#   - prob: success probability
#   - seed: pseudorandom number generator seed
#
# Output:
#   - sample values
#
# Example:
#   $ seq 1 100 | sample 0.1 $RANDOM

BEGIN {
	if (ARGC == 1) {
		prob = 0.5
	} else if (ARGC == 2) {
		prob = ARGV[1]
		ARGV[1] = ""
	} else {
		prob = ARGV[1]
		srand(ARGV[2])
		ARGV[1] = ""
		ARGV[2] = ""
	}
	# No filenames so force stdin:
	ARGV[ARGC++] = "-"
}
rand() <= prob {
	print $0
}
