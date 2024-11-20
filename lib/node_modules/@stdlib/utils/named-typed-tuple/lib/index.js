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

/**
* Named typed tuple.
*
* @module @stdlib/utils/named-typed-tuple
*
* @example
* var namedtypedtuple = require( '@stdlib/utils/named-typed-tuple' );
*
* var point = namedtypedtuple( [ 'x', 'y' ] );
*
* var p = point( [ 1.0, -1.0 ] );
*
* var x = p[ 0 ];
* // returns 1.0
*
* x = p.x;
* // returns 1.0
*
* var y = p[ 1 ];
* // returns -1.0
*
* y = p.y;
* // returns -1.0
*/

// MAIN //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
