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
