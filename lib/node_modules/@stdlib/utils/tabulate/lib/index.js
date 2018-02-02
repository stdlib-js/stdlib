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
* Generate a frequency table.
*
* @module @stdlib/utils/tabulate
*
* @example
* var tabulate = require( '@stdlib/utils/tabulate' );
*
* var arr = [ 'beep', 'boop', 'foo', 'beep' ];
*
* var out = tabulate( arr );
* // returns [ [ 'beep', 2, 0.5 ], [ 'boop', 1, 0.25 ], [ 'foo', 1, 0.25 ] ]
*/

// MODULES //

var tabulate = require( './tabulate.js' );


// EXPORTS //

module.exports = tabulate;
