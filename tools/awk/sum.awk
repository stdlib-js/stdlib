#!/usr/bin/env awk -f
#
# Computes the sum.
#
# Usage: sum
#
# Input:
#   - a column of numbers
#
# Output:
#   - sum

BEGIN {
	sum = 0
}
{
	sum += $1
}
END {
	print sum
}
