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

var base = require( '@stdlib/math/base/special/abs' );
var strided = require( '@stdlib/math/strided/special/abs' );
var dispatcher = require( '@stdlib/ndarray/dispatch' );
var unary = require( '@stdlib/ndarray/base/unary' );
var types = require( './types.json' );
var meta = require( './meta.json' );
var data = require( './data.js' );


// MAIN //

var table = {
	'number': base,
	'complex': null,
	'array': strided,
	'ndarray': dispatcher( unary, types, data, meta.nargs, meta.nin, meta.nout )
};


// EXPORTS //

module.exports = table;
