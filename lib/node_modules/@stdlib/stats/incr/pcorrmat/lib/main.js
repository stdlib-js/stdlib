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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
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
* Sets the values along the main diagonal of a square matrix.
*
* @private
* @param {ndarray} matrix - input square matrix
* @param {number} v - value
* @returns {ndarray} input matrix
*/
function diagonal( matrix, v ) {
	var M = matrix.shape[ 0 ];
	var i;
	for ( i = 0; i < M; i++ ) {
		matrix.set( i, i, v );
	}
	return matrix;
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
* Returns an accumulator function which incrementally computes a sample Pearson product-moment correlation matrix.
*
* ## Method
*
* -   For each sample Pearson product-moment correlation coefficient, we begin by defining the co-moment \\(C_{jn}\\)
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
* -   To calculate the corrected sample standard deviation, we can use Welford's method, which can be derived as follows. We can express the variance as
*
*     ```tex
*     \begin{align*}
*     S_n &= n \sigma_n^2 \\
*         &= \sum_{i=1}^{n} (x_i - \mu_n)^2 \\
*         &= \biggl(\sum_{i=1}^{n} x_i^2 \biggr) - n\mu_n^2
*     \end{align*}
*     ```
*
*     Accordingly,
*
*     ```tex
*     \begin{align*}
*     S_n - S_{n-1} &= \sum_{i=1}^{n} x_i^2 - n\mu_n^2 - \sum_{i=1}^{n-1} x_i^2 + (n-1)\mu_{n-1}^2 \\
*                   &= x_n^2 - n\mu_n^2 + (n-1)\mu_{n-1}^2 \\
*                   &= x_n^2 - \mu_{n-1}^2 + n(\mu_{n-1}^2 - \mu_n^2) \\
*                   &= x_n^2 - \mu_{n-1}^2 + n(\mu_{n-1} - \mu_n)(\mu_{n-1} + \mu_n) \\
*                   &= x_n^2 - \mu_{n-1}^2 + (\mu_{n-1} - x_n)(\mu_{n-1} + \mu_n) \\
*                   &= x_n^2 - \mu_{n-1}^2 + \mu_{n-1}^2 - x_n\mu_n - x_n\mu_{n-1} + \mu_n\mu_{n-1} \\
*                   &= x_n^2 - x_n\mu_n - x_n\mu_{n-1} + \mu_n\mu_{n-1} \\
*                   &= (x_n - \mu_{n-1})(x_n - \mu_n) \\
*                   &= S_{n-1} + (x_n - \mu_{n-1})(x_n - \mu_n)
*     \end{align*}
*     ```
*
*     where we use the identity
*
*     ```tex
*     x_n - \mu_{n-1} = n (\mu_n - \mu_{n-1})
*     ```
*
* -   To compute the corrected sample standard deviation, we apply Bessel's correction and take the square root.
*
* -   The sample Pearson product-moment correlation coefficient can thus be calculated as
*
*     ```tex
*     r = \frac{\operatorname{cov}_n(x,y)}{\sigma_x \sigma_y}
*     ```
*
*     where \\(\sigma_x\\) and \\(\sigma_y\\) are the corrected sample standard deviations for \\(x\\) and \\(y\\), respectively.
*
* @param {(PositiveInteger|ndarray)} out - order of the correlation matrix or a square 2-dimensional output ndarray for storing the correlation matrix
* @param {ndarray} [means] - mean values
* @throws {TypeError} first argument must be either a positive integer or a 2-dimensional ndarray having equal dimensions
* @throws {TypeError} second argument must be a 1-dimensional ndarray
* @throws {Error} number of means must match correlation matrix dimensions
* @returns {Function} accumulator function
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var ndarray = require( '@stdlib/ndarray/ctor' );
*
* // Create an output correlation matrix:
* var buffer = new Float64Array( 4 );
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
* var order = 'row-major';
*
* var corr = ndarray( 'float64', buffer, shape, strides, offset, order );
*
* // Create a correlation matrix accumulator:
* var accumulator = incrpcorrmat( corr );
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
* var bool = ( out === corr );
* // returns true
*
* vec.set( 0, -5.0 );
* vec.set( 1, 3.14 );
*
* out = accumulator( vec );
* // returns <ndarray>
*
* // Retrieve the correlation matrix:
* out = accumulator();
* // returns <ndarray>
*/
function incrpcorrmat( out, means ) {
	var order;
	var corr;
	var M2;
	var sd;
	var mu;
	var C;
	var d;
	var N;

	N = 0;
	if ( isPositiveInteger( out ) ) {
		order = out;
		corr = createMatrix( order, false );
	} else if ( isSquareMatrix( out ) ) {
		order = out.shape[ 0 ];
		corr = out;
	} else {
		throw new TypeError( 'invalid argument. First argument must either specify the order of the correlation matrix or be a square 2-dimensional ndarray for storing the correlation matrix. Value: `' + out + '`.' );
	}
	// Set the values along the correlation matrix diagonal to `1` (i.e., a random variable is always perfectly correlated with itself):
	corr = diagonal( corr, 1.0 );

	// Create a scratch array for storing residuals (i.e., `x_i - xbar_{i-1}`):
	d = new Float64Array( order );

	// Create a scratch array for storing second moments:
	M2 = new Float64Array( order );

	// Create a scratch array for storing standard deviations:
	sd = new Float64Array( order );

	// Create a low-level scratch matrix for storing co-moments:
	C = createMatrix( order, true );

	if ( arguments.length > 1 ) {
		if ( !isVectorLike( means ) ) {
			throw new TypeError( 'invalid argument. Second argument must be a 1-dimensional ndarray. Value: `' + means + '`.' );
		}
		if ( numel( means.shape ) !== order ) {
			throw new Error( 'invalid argument. The number of elements (means) in the second argument must match correlation matrix dimensions. Expected: '+order+'. Actual: '+numel( means.shape )+'.' );
		}
		mu = means; // TODO: should we copy this? Otherwise, internal state could be "corrupted" due to mutation outside the accumulator
		return accumulator2;
	}
	// Create an ndarray vector for storing sample means (note: an ndarray interface is not necessary, but it reduces implementation complexity by ensuring a consistent abstraction for accessing and updating sample means):
	mu = createVector( order );

	return accumulator1;

	/**
	* If provided a data vector, the accumulator function returns an updated sample correlation matrix. If not provided a data vector, the accumulator function returns the current sample correlation matrix.
	*
	* @private
	* @param {ndarray} [v] - data vector
	* @throws {TypeError} must provide a 1-dimensional ndarray
	* @throws {Error} vector length must match correlation matrix dimensions
	* @returns {(ndarray|null)} sample correlation matrix or null
	*/
	function accumulator1( v ) {
		var denom;
		var rdx;
		var cij;
		var rij;
		var sdi;
		var di;
		var vi;
		var m;
		var n;
		var r;
		var i;
		var j;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return corr;
		}
		if ( !isVectorLike( v ) ) {
			throw new TypeError( 'invalid argument. Must provide a 1-dimensional ndarray. Value: `' + v + '`.' );
		}
		if ( v.shape[ 0 ] !== order ) {
			throw new Error( 'invalid argument. Vector length must match correlation matrix dimensions. Expected: '+order+'. Actual: '+v.shape[ 0 ]+'.' );
		}
		n = N;
		N += 1;
		r = n / N;

		denom = n || 1; // Bessel's correction (avoiding divide-by-zero below)

		if ( N === 1 ) {
			for ( i = 0; i < order; i++ ) {
				vi = v.get( i );
				m = mu.get( i );

				// Compute the residual:
				di = vi - m;

				// Update the sample mean:
				m += di / N;
				mu.set( i, m );

				// Update the sample standard deviation:
				d[ i ] = di;
				M2[ i ] += di * ( vi-m );
				sd[ i ] = sqrt( M2[i]/denom );

				// Update the co-moments and correlation matrix, recognizing that the matrices are symmetric...
				rdx = r * d[i]; // if `n=0`, `r=0.0`
				for ( j = 0; j < i; j++ ) {
					cij = C.get( i, j ) + ( rdx*d[j] );
					C.set( i, j, cij );
					C.set( j, i, cij ); // via symmetry
				}
			}
		} else {
			for ( i = 0; i < order; i++ ) {
				vi = v.get( i );
				m = mu.get( i );

				// Compute the residual:
				di = vi - m;

				// Update the sample mean:
				m += di / N;
				mu.set( i, m );

				// Update the sample standard deviation:
				d[ i ] = di;
				M2[ i ] += di * ( vi-m );
				sd[ i ] = sqrt( M2[i]/denom );

				rdx = r * d[i];
				sdi = sd[ i ];
				for ( j = 0; j < i; j++ ) {
					cij = C.get( i, j ) + ( rdx*d[j] );
					C.set( i, j, cij );
					C.set( j, i, cij ); // via symmetry

					rij = ( cij/denom ) / ( sdi*sd[j] );
					corr.set( i, j, rij );
					corr.set( j, i, rij ); // via symmetry
				}
			}
		}
		return corr;
	}

	/**
	* If provided a data vector, the accumulator function returns an updated sample correlation matrix. If not provided a data vector, the accumulator function returns the current sample correlation matrix.
	*
	* @private
	* @param {ndarray} [v] - data vector
	* @throws {TypeError} must provide a 1-dimensional ndarray
	* @throws {Error} vector length must match correlation matrix dimensions
	* @returns {(ndarray|null)} sample correlation matrix or null
	*/
	function accumulator2( v ) {
		var rij;
		var cij;
		var sdi;
		var di;
		var i;
		var j;
		if ( arguments.length === 0 ) {
			if ( N === 0 ) {
				return null;
			}
			return corr;
		}
		if ( !isVectorLike( v ) ) {
			throw new TypeError( 'invalid argument. Must provide a 1-dimensional ndarray. Value: `' + v + '`.' );
		}
		if ( v.shape[ 0 ] !== order ) {
			throw new Error( 'invalid argument. Vector length must match correlation matrix dimensions. Expected: '+order+'. Actual: '+v.shape[ 0 ]+'.' );
		}
		N += 1;
		for ( i = 0; i < order; i++ ) {
			// Compute the residual:
			di = v.get( i ) - mu.get( i );
			d[ i ] = di;

			// Update the standard deviation:
			M2[ i ] += di * di;
			sd[ i ] = sqrt( M2[i]/N );

			// Update the co-moments and correlation matrix, recognizing that the matrices are symmetric...
			sdi = sd[ i ];
			for ( j = 0; j < i; j++ ) {
				cij = C.get( i, j ) + ( di*d[j] );
				C.set( i, j, cij );
				C.set( j, i, cij ); // via symmetry

				rij = ( cij/N ) / ( sdi*sd[j] );
				corr.set( i, j, rij );
				corr.set( j, i, rij ); // via symmetry
			}
		}
		return corr;
	}
}


// EXPORTS //

module.exports = incrpcorrmat;
