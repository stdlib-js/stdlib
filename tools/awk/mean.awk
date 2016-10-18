#!/usr/bin/env awk -f
#
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
	N = 0
	mean = 0
	delta = 0
}
{
	N++
	delta = $1 - mean
	mean += delta / N
}
END {
	print mean
}
