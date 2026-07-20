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

#ifndef STDLIB_STATS_BASE_ZTEST_ALTERNATIVES_H
#define STDLIB_STATS_BASE_ZTEST_ALTERNATIVES_H

/**
* Enumeration of alternative hypotheses.
*/
enum STDLIB_STATS_ZTEST_ALTERNATIVE {
	// Mean is not equal to the null hypothesis value:
	STDLIB_STATS_ZTEST_TWO_SIDED = 0,

	// Mean is less than the null hypothesis value:
	STDLIB_STATS_ZTEST_LESS,

	// Mean is greater than the null hypothesis value:
	STDLIB_STATS_ZTEST_GREATER
};

#endif // !STDLIB_STATS_BASE_ZTEST_ALTERNATIVES_H
