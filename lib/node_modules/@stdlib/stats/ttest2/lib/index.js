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
* Compute a two-sample Student's t-Test.
*
* @module @stdlib/stats/ttest2
*
* @example
* var ttest2 = require( '@stdlib/stats/ttest2' );
* var incrspace = require( '@stdlib/array/incrspace' );
*
* var a = incrspace( 1, 11, 1 );
* var b = incrspace( 7, 21, 1 );
*
* var out = ttest2( a, b );
* var table = out.print();
*/

// MODULES //

var ttest2 = require( './main.js' );


// EXPORTS //

module.exports = ttest2;
