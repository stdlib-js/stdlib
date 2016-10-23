#!/usr/bin/env awk -f
#
# Computes the corrected sample skewness.
#
# Usage: skewness
#
# Input:
#   - a column of numbers
#
# Output:
#   - corrected sample skewness
#
# References:
#   - Joanes, D. N., and C. A. Gill. 1998. "Comparing measures of sample skewness and kurtosis." *Journal of the Royal Statistical Society: Series D (The Statistician)* 47 (1). Blackwell Publishers Ltd: 183–89. doi:[10.1111/1467-9884.00122](http://dx.doi.org/10.1111/1467-9884.00122).

BEGIN {
	deltaN = 0
	delta = 0
	term1 = 0
	mean = 0
	M2 = 0
	M3 = 0
	g1 = 0
	N = 0
}
{
	N += 1
	delta = $1 - mean
	deltaN = delta / N
	term1 = delta * deltaN * (N-1)
	M3 += term1*deltaN*(N-2) - 3*deltaN*M2
	M2 += term1
	mean += deltaN
}
END {
	if (N < 3) {
		print ""
	} else {
		g1 = sqrt(N)*M3 / (M2*sqrt(M2))
		print sqrt(N*(N-1)) * g1 / (N-2)
	}
}
