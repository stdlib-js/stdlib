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

# Computes the mode.
#
# Usage: mode
#
# Input:
#   - a column of numbers
#
# Output:
#   - mode

{
	counts[$1] += 1
}
END {
	mode = ""
	max = 0
	for (v in counts) {
		count = counts[v]
		if (count == max) {
			mode = v OFS mode
		} else if (count > max) {
			max = count
			mode = v
		}
	}
	print mode
}
