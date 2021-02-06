/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

// MODULES //

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isSquareMatrix = require( '@stdlib/assert/is-square-matrix' );
var isVectorLike = require( '@stdlib/assert/is-vector-like' );
var Float64Array = require( '@stdlib/array/float64' );
var ctor = require( '@stdlib/ndarray/ctor' );
var bctor = require( '@stdlib/ndarray/base/ctor' );
var numel = require( '@stdlib/ndarray/base/numel' );


// FUNCTIONS //

/**
* Returns a matrix.
*
* @private
* @param {PositiveInteger} n - matrix order
* @param {boolean} bool - boolean indicating whether to create a low-level ndarray
* @returns {ndarray} matrix
*/
function createMatrix( n, bool ) {
	var strides;
	var buffer;
	var shape;
	var f;

	if ( bool ) {
		f = bctor;
	} else {
		f = ctor;
	}
	buffer = new Float64Array( n*n );
	shape = [ n, n ];
	strides = [ n, 1 ];
	return f( 'float64', buffer, shape, strides, 0, 'row-major' );
}

/**
* Returns a vector.
*
* @private
* @param {PositiveInteger} N - number of elements
* @returns {ndarray} vector
*/
function createVector( N ) {
	var strides;
	var buffer;
	var shape;

	buffer = new Float64Array( N );
	shape = [ N ];
	strides = [ 1 ];

	return bctor( 'float64', buffer, shape, strides, 0, 'row-major' );
}


// MAIN //

/**
* Returns an accumulator function which incrementally computes an unbiased sample covariance matrix.
*
* ## Method
*
* -   For each unbiased sample covariance, we begin by defining the co-moment \\(C_{jn}\\)
*
*     ```tex
*     C_n = \sum_{i=1}^{n} ( x_i - \bar{x}_n ) ( y_i - \bar{y}_n )
*     ```
*
*     where \\(\bar{x}_n\\) and \\(\bar{y}_n\\) are the sample means for \\(x\\) and \\(y\\), respectively.
*
* -   Based on Welford's method, we know the update formulas for the sample means are given by
*
*     ```tex
*     \bar{x}_n = \bar{x}_{n-1} + \frac{x_n - \bar{x}_{n-1}}{n}
*     ```
*
*     and
*
*     ```tex
*     \bar{y}_n = \bar{y}_{n-1} + \frac{y_n - \bar{y}_{n-1}}{n}
*     ```
*
* -   Substituting into the equation for \\(C_n\\) and rearranging terms
*
*     ```tex
*     C_n = C_{n-1} + (x_n - \bar{x}_n) (y_n - \bar{y}_{n-1})
*     ```
*
*     where the apparent asymmetry arises from
*
*     ```tex
*     x_n - \bar{x}_n = \frac{n-1}{n} (x_n - \bar{x}_{n-1})
*     ```
*
*     and, hence, the update term can be equivalently expressed
*
*     ```tex
*     \frac{n-1}{n} (x_n - \bar{x}_{n-1}) (y_n - \bar{y}_{n-1})
*     ```
*
* -   The covariance can be defined
*
*     ```tex
*     \begin{align*}
*     \operatorname{cov}_n(x,y) &= \frac{C_n}{n} \\
*     &= \frac{C_{n-1} + \frac{n-1}{n} (x_n - \bar{x}_{n-1}) (y_n - \bar{y}_{n-1})}{n} \\
*     &= \frac{(n-1)\operatorname{cov}_{n-1}(x,y) + \frac{n-1}{n} (x_n - \bar{x}_{n-1}) (y_n - \bar{y}_{n-1})}{n}
*     \end{align*}
*     ```
*
* -   Applying Bessel's correction, we arrive at an update formula for calculating an unbiased sample covariance
*
*     ```tex
*     \begin{align*}
*     \operatorname{cov}_n(x,y) &= \frac{n}{n-1}\cdot\frac{(n-1)\operatorname{cov}_{n-1}(x,y) + \frac{n-1}{n} (x_n - \bar{x}_{n-1}) (y_n - \bar{y}_{n-1})}{n} \\
*     &= \operatorname{cov}_{n-1}(x,y) + \frac{(x_n - \bar{x}_{n-1}) (y_n - \bar{y}_{n-1})}{n} \\
*     &= \frac{C_{n-1}}{n-1} + \frac{(x_n - \bar{x}_{n-1}) (y_n - \bar{y}_{n-1})}{n}
*     &= \frac{C_{n-1} + \frac{n-1}{n} (x_n - \bar{x}_{n-1}) (y_n - \bar{y}_{n-1})}{n-1}
*     \end{align*}
*     ```
*
* @param {(PositiveInteger|ndarray)} out - order of the covariance matrix or a square 2-dimensional output ndarray for storing the covariance matrix
* @param {ndarray} [means] - mean values
* @throws {TypeError} first argument must be either a positive integer or a 2-dimensional ndarray having equal dimensions
* @throws {TypeError} second argument must be a 1-dimensional ndarray
* @throws {Error} number of means must match covariance matrix dimensions
* @returns {Function} accumulator function
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create an output covariance matrix:
* var buffer = new Float64Array( 4 );
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
* var order = 'row-major';
*
* var cov = ndarray( 'float64', buffer, shape, strides, offset, order );
*
* // Create a covariance matrix accumulator:
* var accumulator = incrcovmat( cov );
*
* var out = accumulator();
* // returns null
*
* // Create a data vector:
* buffer = new Float64Array( 2 );
* shape = [ 2 ];
* strides = [ 1 ];
*
* var vec = ndarray( 'float64', buffer, shape, strides, offset, order );
*
* // Provide data to the accumulator:
* vec.set( 0, 2.0 );
* vec.set( 1, 1.0 );
*
* out = accumulator( vec );
* // returns <ndarray>
*
* var bool = ( out === cov );
* // returns true
*
* vec.set( 0, -5.0 );
* vec.set( 1, 3.14 );
*
* out = accumulator( vec );
* // returns <ndarray>
*
* // Retrieve the covariance matrix:
* out = accumulator();
* // returns <ndarray>
*/
function incrcovmat( out, means ) {
	var order;
	var cov;
	var mu;
	var C;
	var d;
	var N;

	N = 0;
	if ( isPositiveInteger( out ) ) {
		order = out;
		cov = createMatrix( order, false );
	} else if ( isSquareMatrix( out ) ) {
		order = out.shape[ 0 ];
		cov = out;
	} else {
		throw new TypeError( 'invalid argument. First argument must either specify the order of the covariance matrix or be a square 2-dimensional ndarray for storing the covariance matrix. Value: `' + out + '`.' );
	}
	// Create a scratch array for storing residuals (i.e., `x_i - xbar_{i-1}`):
	d = new Float64Array( order );

	// Create a low-level scratch matrix for storing co-moments:
	C = createMatrix( order, true );

	if ( arguments.length > 1 ) {
		if ( !isVectorLike( means ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a 1-dimensional ndarray. Value: `' + means + '`.' );
		}
		if ( numel( means.shape ) !== order ) {
			throw new Error( 'invalid argument. The number of elements (means) in the second argument must match covariance matrix dimensions. Expected: '+order+'. Actual: '+numel( means.shape )+'.' );
		}
		mu = means; // TODO: should we copy this? Otherwise, internal state could be "corrupted" due to mutation outside the accumulator
		return accumulator2;
	}
	// Create an ndarray vector for storing sample means (note: an ndarray interface is not necessary, but it reduces implementation complexity by ensuring a consistent abstraction for accessing and updating sample means):
	mu = createVector( order );

	return accumulator1;

	/**
	* If provided a data vector, the accumulator function returns an updated unbiased sample covariance matrix. If not provided a data vector, the accumulator function returns the current unbiased sample covariance matrix.
	*
	* @private
	* @param {ndarray} [v] - data vector
	* @throws {TypeError} must provide a 1-dimensional ndarray
	* @throws {Error} vector length must match covariance matrix dimensions
	* @returns {(ndarray|null)} unbiased sample covariance matrix or null
	*/
	function accumulator1( v ) {
		var covij;
		var denom;
		var rdx;
		var cij;
		var m;
		var n;
		var r;
		var i;
		var j;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return cov;
		}
		if ( !isVectorLike( v ) ) {
			throw new TypeError( 'invalid argument. Must provide a 1-dimensional ndarray. Value: `' + v + '`.' );
		}
		if ( v.shape[ 0 ] !== order ) {
			throw new Error( 'invalid argument. Vector length must match covariance matrix dimensions. Expected: '+order+'. Actual: '+v.shape[ 0 ]+'.' );
		}
		n = N;
		N += 1;
		r = n / N;

		denom = n || 1; // Bessel's correction (avoiding divide-by-zero below)

		for ( i = 0; i < order; i++ ) {
			m = mu.get( i );

			// Compute the residual:
			d[ i ] = v.get( i ) - m;

			// Update the sample mean:
			m += d[ i ] / N;
			mu.set( i, m );

			// Update the co-moments and covariance matrix, recognizing that the covariance matrix is symmetric...
			rdx = r * d[ i ]; // if `n=0`, `r=0.0`
			for ( j = 0; j <= i; j++ ) {
				cij = C.get( i, j ) + ( rdx*d[j] );
				C.set( i, j, cij );
				C.set( j, i, cij ); // via symmetry

				covij = cij / denom;
				cov.set( i, j, covij );
				cov.set( j, i, covij ); // via symmetry
			}
		}
		return cov;
	}

	/**
	* If provided a data vector, the accumulator function returns an updated unbiased sample covariance matrix. If not provided a data vector, the accumulator function returns the current unbiased sample covariance matrix.
	*
	* @private
	* @param {ndarray} [v] - data vector
	* @throws {TypeError} must provide a 1-dimensional ndarray
	* @throws {Error} vector length must match covariance matrix dimensions
	* @returns {(ndarray|null)} unbiased sample covariance matrix or null
	*/
	function accumulator2( v ) {
		var covij;
		var cij;
		var di;
		var i;
		var j;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return cov;
		}
		if ( !isVectorLike( v ) ) {
			throw new TypeError( 'invalid argument. Must provide a 1-dimensional ndarray. Value: `' + v + '`.' );
		}
		if ( v.shape[ 0 ] !== order ) {
			throw new Error( 'invalid argument. Vector length must match covariance matrix dimensions. Expected: '+order+'. Actual: '+v.shape[ 0 ]+'.' );
		}
		N += 1;
		for ( i = 0; i < order; i++ ) {
			// Compute the residual:
			d[ i ] = v.get( i ) - mu.get( i );

			// Update the co-moments and covariance matrix, recognizing that the covariance matrix is symmetric...
			di = d[ i ];
			for ( j = 0; j <= i; j++ ) {
				cij = C.get( i, j ) + ( di*d[j] );
				C.set( i, j, cij );
				C.set( j, i, cij ); // via symmetry

				covij = cij / N;
				cov.set( i, j, covij );
				cov.set( j, i, covij ); // via symmetry
			}
		}
		return cov;
	}
}


// EXPORTS //

module.exports = incrcovmat;
