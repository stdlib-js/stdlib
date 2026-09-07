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

#ifndef STDLIB_ML_BASE_KMEANS_METRICS_H
#define STDLIB_ML_BASE_KMEANS_METRICS_H

/**
* Enumeration of distance metrics.
*/
enum STDLIB_ML_KMEANS_METRIC {
	// Squared euclidean distance:
	STDLIB_ML_KMEANS_SQEUCLIDEAN = 0,

	// Cosine distance:
	STDLIB_ML_KMEANS_COSINE,

	// Cityblock (taxicab) distance:
	STDLIB_ML_KMEANS_CITYBLOCK,

	// Correlation distance:
	STDLIB_ML_KMEANS_CORRELATION
};

#endif // !STDLIB_ML_BASE_KMEANS_METRICS_H
