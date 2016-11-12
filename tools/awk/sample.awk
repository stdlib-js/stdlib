#!/usr/bin/env awk -f
#
# Samples a column of values.
#
# Usage: sample prob seed
#
# Input:
#   - a column of values
#
# Arguments:
#   - prob: success probability
#   - seed: pseudorandom number generator seed
#
# Output:
#   - sample values
#
# Example:
#   $ seq 1 100 | sample 0.1 $RANDOM

BEGIN {
	if (ARGC == 1) {
		prob = 0.5
	} else if (ARGC == 2) {
		prob = ARGV[1]
		ARGV[1] = ""
	} else {
		prob = ARGV[1]
		srand(ARGV[2])
		ARGV[1] = ""
		ARGV[2] = ""
	}
	# No filenames so force stdin:
	ARGV[ARGC++] = "-"
}
rand() <= prob {
	print $0
}
