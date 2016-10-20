#!/usr/bin/env awk -f
#
# Computes the corrected sample standard deviation.
#
# Usage: stdev
#
# Input:
#   - a column of numbers
#
# Output:
#   - corrected sample standard deviation
#
# Notes:
#   - Uses [Welford's method][1].
#
# [1]: https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Online_algorithm

BEGIN {
	delta = 0
	mean = 0
	M2 = 0
	N = 0
}
{
	N += 1
	delta = $1 - mean
	mean += delta / N
	M2 += delta * ($1 - mu)
}
END {
	if (N < 2) {
		print 0
	} else {
		print sqrt(M2 / (N-1))
	}
}
