#!/usr/bin/env awk -f
#
# Computes the minimum value.
#
# Usage: min
#
# Input:
#   - a column of numbers
#
# Output:
#   - minimum value

!i++ {
	# Only for the first record:
	min = $1
}
{
	if ( $1 < min ) {
		min = $1
	}
}
END {
	print min
}
