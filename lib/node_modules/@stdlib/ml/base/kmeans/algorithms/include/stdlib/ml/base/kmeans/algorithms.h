/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#ifndef STDLIB_ML_BASE_KMEANS_ALGORITHMS_H
#define STDLIB_ML_BASE_KMEANS_ALGORITHMS_H

/**
* Enumeration of k-means clustering algorithms.
*/
enum STDLIB_ML_KMEANS_ALGORITHM {
	// Classic EM-style algorithm:
	STDLIB_ML_KMEANS_LLOYD = 0,

	// Optimized algorithm using triangle inequality:
	STDLIB_ML_KMEANS_ELKAN,
};

#endif // !STDLIB_ML_BASE_KMEANS_ALGORITHMS_H
