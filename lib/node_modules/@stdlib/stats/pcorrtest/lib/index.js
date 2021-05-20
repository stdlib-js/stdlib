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
* Compute a Pearson product-moment correlation test between paired samples.
*
* @module @stdlib/stats/pcorrtest
*
* @example
* var pcorrtest = require( '@stdlib/stats/pcorrtest' );
* var incrspace = require( '@stdlib/array/incrspace' );
*
* var a = incrspace( 1, 11, 1 );
* var b = incrspace( 11, 21, 1 );
*
* var out = pcorrtest( a, b );
* var table = out.print();
*/

// MODULES //

var pcorrtest = require( './main.js' );


// EXPORTS //

module.exports = pcorrtest;
