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

#ifndef STDLIB_STATS_BASE_ZTEST_TWO_SAMPLE_RESULTS_FLOAT32_H
#define STDLIB_STATS_BASE_ZTEST_TWO_SAMPLE_RESULTS_FLOAT32_H

#include <stdbool.h>
#include <stdint.h>

/**
* Struct for storing test results.
*/
struct stdlib_stats_ztest_two_sample_float32_results {
	// Boolean indicating whether the null hypothesis was rejected:
	bool rejected;

	// Alternative hypothesis:
	int8_t alternative;

	// Significance level:
	float alpha;

	// p-value:
	float pValue;

	// Test statistic:
	float statistic;

	// Confidence interval:
	float ci[ 2 ];

	// Difference in means under the null hypothesis:
	float nullValue;

	// Sample mean of `x`:
	float xmean;

	// Sample mean of `y`:
	float ymean;
};

#endif // !STDLIB_STATS_BASE_ZTEST_TWO_SAMPLE_RESULTS_FLOAT32_H
