/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#ifndef STDLIB_STATS_BASE_ZTEST_TWO_SAMPLE_RESULTS_FLOAT64_H
#define STDLIB_STATS_BASE_ZTEST_TWO_SAMPLE_RESULTS_FLOAT64_H

#include <stdbool.h>
#include <stdint.h>

/**
* Struct for storing test results.
*/
struct stdlib_stats_ztest_two_sample_float64_results {
	// Boolean indicating whether the null hypothesis was rejected:
	bool rejected;

	// Alternative hypothesis:
	int8_t alternative;

	// Significance level:
	double alpha;

	// p-value:
	double pValue;

	// Test statistic:
	double statistic;

	// Confidence interval:
	double ci[ 2 ];

	// Difference in means under the null hypothesis:
	double nullValue;

	// Sample mean of `x`:
	double xmean;

	// Sample mean of `y`:
	double ymean;
};

#endif // !STDLIB_STATS_BASE_ZTEST_TWO_SAMPLE_RESULTS_FLOAT64_H
