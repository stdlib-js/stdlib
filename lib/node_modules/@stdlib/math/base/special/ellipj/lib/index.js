/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Compute the Jacobi elliptic functions sn, cn, dn, and Jacobi amplitude am.
*
* @module @stdlib/math/base/special/ellipj
*
* @example
* var ellipj = require( '@stdlib/math/base/special/ellipj' );
*
* var v = ellipj( 0.3, 0.5 );
* // returns [ ~0.293, ~0.956, ~0.978, ~0.298 ]
*
* v = ellipj( 0.0, 0.0 );
* // returns [ ~0.0, ~1.0, ~1.0, ~0.0 ]
*
* v = ellipj( Infinity, 1.0 );
* // returns [ ~1.0, ~0.0, ~0.0, ~1.571 ]
*
* v = ellipj( 0.0, -2.0 );
* // returns [ ~0.0, ~1.0, ~1.0, NaN ]
*
* v = ellipj( NaN, NaN );
* // returns [ NaN, NaN, NaN, NaN ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var assign = require( './assign.js' );
var main = require( './main.js' );
var sn = require( './sn.js' );
var cn = require( './cn.js' );
var dn = require( './dn.js' );
var am = require( './am.js' );


// MAIN //

setReadOnly( main, 'assign', assign );
setReadOnly( main, 'sn', sn );
setReadOnly( main, 'cn', cn );
setReadOnly( main, 'dn', dn );
setReadOnly( main, 'am', am );


// EXPORTS //

module.exports = main;
