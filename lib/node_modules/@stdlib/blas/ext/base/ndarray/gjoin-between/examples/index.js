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

'use strict';

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var filled = require( '@stdlib/array/base/filled' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var gjoinBetween = require( './../lib' );

var xbuf = discreteUniform( 10, -100, 100, {
	'dtype': 'generic'
});
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var prefix = scalar2ndarray( '[ ', {
	'dtype': 'generic'
});

var suffix = scalar2ndarray( ' ]', {
	'dtype': 'generic'
});

var sbuf = filled( ' | ', xbuf.length - 1 );
var separators = new ndarray( 'generic', sbuf, [ sbuf.length ], [ 1 ], 0, 'row-major' );

var out = gjoinBetween( [ x, prefix, suffix, separators ] );
console.log( out );
