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

#include "stdlib/stats/strided/sztest2.h"
#include "stdlib/stats/base/ztest/two-sample/results/float32.h"
#include "stdlib/stats/base/ztest/alternatives.h"
#include <stdbool.h>
#include <stdio.h>

int main( void ) {
	// Create a strided arrays:
	const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };
	const float y[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

	// Specify the number of elements:
	const int NX = 4;
	const int NY = 4;

	// Specify the stride lengths:
	const int strideX = 2;
	const int strideY = 2;

	// Initialize a results object:
	struct stdlib_stats_ztest_two_sample_float32_results results = {
		.rejected = false,
		.alpha = 0.0f,
		.alternative = STDLIB_STATS_ZTEST_TWO_SIDED,
		.pValue = 0.0f,
		.statistic = 0.0f,
		.ci = { 0.0f, 0.0f },
		.nullValue = 0.0f,
		.xmean = 0.0f,
		.ymean = 0.0f
	};

	// Compute a Z-test:
	stdlib_strided_sztest2( NX, NY, STDLIB_STATS_ZTEST_TWO_SIDED, 0.05f, 5.0f, 3.0f, x, strideX, 3.0f, y, strideY, &results );

	// Print the result:
	printf( "Statistic: %f\n", results.statistic );
	printf( "Null hypothesis was %s\n", ( results.rejected ) ? "rejected" : "not rejected" );
}
