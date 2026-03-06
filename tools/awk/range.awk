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

# Computes the range.
#
# Usage: range
#
# Input:
#   - a column of numbers
#
# Output:
#   - range

!i++ {
	# Only for the first record:
	max = $1
	min = $1
}
{
	if ($1 > max) {
		max = $1
	} else if ($1 < min) {
		min = $1
	}
}
END {
	print max - min
}
