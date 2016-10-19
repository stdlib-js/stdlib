#!/usr/bin/env awk -f
#
# Generates a frequency table.
#
# Usage: frequency_table
#
# Input:
#   - a column of numbers
#
# Output:
#   - frequency table

{
	total += 1
	table[$1] += 1
}
END {
	for (v in table) {
		count = table[v]
		print v OFS count OFS count/total
	}
}
