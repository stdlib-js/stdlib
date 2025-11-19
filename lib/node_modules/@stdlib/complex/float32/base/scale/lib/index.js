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

'use strict';

/**
* Scale a single-precision complex floating-point number by a real-valued single-precision floating-point scalar constant.
*
* @module @stdlib/complex/float32/base/scale
*
* @example
* var Complex64 = require( '@stdlib/complex/float32/ctor' );
* var scale = require( '@stdlib/complex/float32/base/scale' );
*
* var z = new Complex64( 5.0, 3.0 );
*
* var out = scale( 5.0, z );
* // returns <Complex64>[ 25.0, 15.0 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );
var strided = require( './strided.js' );


// MAIN //

setReadOnly( main, 'assign', assign );
setReadOnly( main, 'strided', strided );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign", "strided": "main.strided" }
