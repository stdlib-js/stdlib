#!/usr/bin/env awk -f
#
# Computes the mid-range.
#
# Usage: mid-range
#
# Input:
#   - a column of numbers
#
# Output:
#   - mid-range

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
	print (max + min) / 2
}
