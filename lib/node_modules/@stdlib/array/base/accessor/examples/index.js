/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

/* eslint-disable no-restricted-syntax */

'use strict';

var AccessorArray = require( './../lib' );

// Define a class for creating a minimal sparse array-like object...
function SparseArray( len, values ) {
	this.length = len;
	this._data = values;
	return this;
}

SparseArray.prototype.get = function get( i ) {
	var v = this._data[ i ];
	if ( v === void 0 ) {
		return 0;
	}
	return v;
};

SparseArray.prototype.set = function set( v, i ) {
	this._data[ i ] = v;
};

// Define a function for printing the contents of an array and which assumes accessor protocol support:
function printArray( name, x ) {
	var i;
	for ( i = 0; i < x.length; i++ ) {
		console.log( '%s[%d] = %d', name, i, x.get( i ) );
	}
}

// Create a sparse array-like object:
var sparse = new SparseArray( 10, {
	'2': 1,
	'3': 2,
	'8': 3
});

// Create a dense array:
var arr = [ 0, 0, 1, 2, 0, 0, 0, 0, 3, 0 ];

// Convert the dense array to an accessor array to allow for uniform iteration:
var dense = new AccessorArray( arr );

// Print the contents of each array...
printArray( 'sparse', sparse );
printArray( 'dense', dense );
