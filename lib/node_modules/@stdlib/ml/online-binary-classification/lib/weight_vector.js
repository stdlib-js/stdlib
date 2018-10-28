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

/*
* The weight vector implementation was inspired by the [sofia-ml]{@link https://code.google.com/archive/p/sofia-ml/} library.
*/

// MODULES //

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' );
var isBoolean = require( '@stdlib/assert/is-boolean' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var pow = require( '@stdlib/math/base/special/pow' );
var dot = require( './dot.js' );


// VARIABLES //

var MIN_SCALE = 1.0e-11;


// FUNCTIONS //

/**
* Scale elements of the weight vector by the supplied factor.
*
* @private
* @param {number} factor - scaling factor
* @throws {RangeError} `lambda` times `eta` must be large enough for the scaling weight to be nonnegative
*/
function scaleTo( factor ) {
	/* eslint-disable no-invalid-this */
	var i;
	if ( this.scale < MIN_SCALE ) {
		// Scale vector to one:
		for ( i = 0; i < this.nWeights; i++ ) {
			this._data[ i ] *= this.scale;
		}
		this.scale = 1.0;
	}

	this.norm *= pow( factor, 2 );

	if ( factor > 0.0 ) {
		this.scale *= factor;
	} else {
		throw new RangeError( 'Scaling weight vector by nonpositive value, likely due to too large value of eta * lambda. Value: `' + factor + '`' );
	}
}

/**
* Adds vector `x` to the weight vector after scaling its elements.
*
* @private
* @param {NumericArray} x - vector to add
* @param {number} [xScale=1.0] - number to scale the elements of x with
*/
function add( x, xScale ) {
	/* eslint-disable no-invalid-this */
	var xscaled;
	var inner;
	var i;

	inner = 0.0;
	if ( xScale === void 0 ) {
		xScale = 1.0;
	}
	for ( i = 0; i < x.length; i++ ) {
		xscaled = x[ i ] * xScale;
		inner += this._data[i] * xscaled;
		this._data[ i ] = this._data[ i ] + ( xscaled / this.scale );
	}
	// If an intercept is assumed, treat `x` as containing one additional element equal to one...
	if ( this.intercept ) {
		xscaled = 1.0 * xScale;
		inner += this._data[ i ] * xscaled;
		this._data[ i ] = this._data[ i ] + ( xscaled / this.scale );
	}
	this.norm += ( ( dot( x, x ) + ( ( this.intercept ) ? 1.0 : 0.0 ) ) *
		pow( xScale, 2 ) ) +
		( 2.0 * this.scale * inner );
}

/**
* Calculates the inner product of the weights and supplied vector `x`.
*
* @private
* @param {NumericArray} x - input vector
* @returns {number} inner product
*/
function innerProduct( x ) {
	/* eslint-disable no-invalid-this */
	var ret = 0;
	var i;
	for ( i = 0; i < x.length; i++ ) {
		ret += this._data[ i ] * x[ i ];
	}
	ret += ( this.intercept ) ? this._data[ i ] : 0.0;
	ret *= this.scale;
	return ret;
}


// MAIN //

/**
* Creates a WeightVector.
*
* @constructor
* @param {PositiveInteger} dim - number of feature weights (excluding bias/intercept term)
* @param {boolean} intercept - boolean indicating whether a bias/intercept weight should be implicitly assumed
* @throws {TypeError} first argument must be a positive integer
* @throws {TypeError} second argument must be a boolean primitive
*/
function WeightVector( dim, intercept ) {
	var i;
	if ( !(this instanceof WeightVector) ) {
		return new WeightVector( dim, intercept );
	}
	if ( !isPositiveInteger( dim ) ) {
		throw new TypeError( 'invalid argument. First argument `dim` must be a positive integer. Value: `' + dim + '`.' );
	}
	if ( !isBoolean( intercept ) ) {
		throw new TypeError( 'invalid argument. Second argument `intercept` must be a boolean primitive. Value: `' + intercept + '`.' );
	}

	this.scale = 1.0;
	this.norm = 0.0;
	this.intercept = intercept;
	this.nWeights = dim + ( ( this.intercept ) ? 1 : 0 );

	this._data = new Array( this.nWeights );

	// Initialize weights to zero:
	for ( i = 0; i < this.nWeights; i++ ) {
		this._data[ i ] = 0.0;
	}
}

/**
* Scale elements of the weight vector by the supplied factor.
*
* @memberof WeightVector.prototype
* @function scaleTo
* @param {number} factor - scaling factor
* @throws {RangeError} `lambda` times `eta` must be large enough for the scaling weight to be nonnegative
*/
setReadOnly( WeightVector.prototype, 'scaleTo', scaleTo );

/**
* Adds vector `x` to the weight vector after scaling its elements.
*
* @memberof WeightVector.prototype
* @function add
* @param {NumericArray} x - vector to add
* @param {number} [xScale=1.0] - number to scale the elements of x with
*/
setReadOnly( WeightVector.prototype, 'add', add );

/**
* Calculates the inner product of the weights and supplied vector `x`.
*
* @memberof WeightVector.prototype
* @function innerProduct
* @param {NumericArray} x - input vector
* @returns {number} inner product
*/
setReadOnly( WeightVector.prototype, 'innerProduct', innerProduct );


// EXPORTS //

module.exports = WeightVector;
