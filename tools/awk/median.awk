#!/usr/bin/env awk -f
#
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
	if ( i%2 == 1 ) {
		median = a[int(j)]
	} else {
		median = (a[j] + a[j-1])/2
	}
	print median
}
