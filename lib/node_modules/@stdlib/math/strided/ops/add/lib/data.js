/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var add = require( '@stdlib/number/float64/base/add' );
var cadd = require( '@stdlib/complex/float64/base/add' );
var caddf = require( '@stdlib/complex/float32/base/add' );
var callbacks = require( '@stdlib/strided/base/binary-signature-callbacks' );
var types = require( './types.js' );


// VARIABLES //

// Define a callback table...
var table = {
	'default': add,
	'complex64': caddf,
	'complex128': cadd
};


// MAIN //

/**
* Binary callbacks to apply to strided arrays.
*
* @private
* @name data
* @constant
* @type {Array}
*/
var data = callbacks( table, types );


// EXPORTS //

module.exports = data;
