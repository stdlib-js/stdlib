#!/usr/bin/env awk -f
#
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
