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

#include "stdlib/ml/strided/dkmeans_distance.h"
#include "stdlib/blas/base/shared.h"
#include "stdlib/ml/base/kmeans/metrics.h"
#include "stdlib/strided/base/stride2offset.h"
#include "stdlib/stats/strided/distances/dsquared_euclidean.h"
#include "stdlib/stats/strided/distances/dcosine_distance.h"
#include "stdlib/stats/strided/distances/dcityblock.h"
#include "stdlib/stats/strided/distances/dcorrelation.h"

/**
* Computes the distance between two double-precision floating-point strided arrays according to a specified distance metric.
*
* @param N        number of indexed elements
* @param metric   distance metric
* @param X        first array
* @param strideX  X stride length
* @param Y        second array
* @param strideY  Y stride length
* @return         distance
*/
double API_SUFFIX(stdlib_strided_dkmeans_distance)( const CBLAS_INT N, const enum STDLIB_ML_KMEANS_METRIC metric , const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY ) {
	CBLAS_INT ox = stdlib_strided_stride2offset( N, strideX );
	CBLAS_INT oy = stdlib_strided_stride2offset( N, strideY );
	return API_SUFFIX(stdlib_strided_dkmeans_distance_ndarray)( N, metric, X, strideX, ox, Y, strideY, oy );
}

/**
* Computes the distance between two double-precision floating-point strided arrays according to a specified distance metric using alternative indexing semantics.
*
* @param N        number of indexed elements
* @param metric   distance metric
* @param X        first array
* @param strideX  X stride length
* @param offsetX  starting index for X
* @param Y        second array
* @param strideY  Y stride length
* @param offsetY  starting index for Y
* @return         distance
*/
double API_SUFFIX(stdlib_strided_dkmeans_distance_ndarray)( const CBLAS_INT N, const enum STDLIB_ML_KMEANS_METRIC metric, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY ) {
	if ( metric == STDLIB_ML_KMEANS_SQEUCLIDEAN ) {
		return API_SUFFIX(stdlib_strided_dsquared_euclidean_ndarray)( N, X, strideX, offsetX, Y, strideY, offsetY );
	}
	if ( metric == STDLIB_ML_KMEANS_COSINE ) {
		return API_SUFFIX(stdlib_strided_dcosine_distance_ndarray)( N, X, strideX, offsetX, Y, strideY, offsetY );
	}
	if ( metric == STDLIB_ML_KMEANS_CITYBLOCK ) {
		return API_SUFFIX(stdlib_strided_dcityblock_ndarray)( N, X, strideX, offsetX, Y, strideY, offsetY );
	}
	if ( metric == STDLIB_ML_KMEANS_CORRELATION ) {
		return API_SUFFIX(stdlib_strided_dcorrelation_ndarray)( N, X, strideX, offsetX, Y, strideY, offsetY );
	}
	return 0.0 / 0.0; // NaN
}
