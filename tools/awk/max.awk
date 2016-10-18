#!/usr/bin/env awk -f
#
# Computes the maximum value.
#
# Usage: max
#
# Input:
#   - a column of numbers
#
# Output:
#   - maximum value

!i++ {
	# Only for the first record:
	max = $1
}
{
	if ( $1 > max ) {
		max = $1
	}
}
END {
	print max
}
