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

var signatures = require( '@stdlib/strided/base/binary-dtype-signatures' );
var dtypes = require( './dtypes.enum.json' );


// MAIN //

/**
* List of dtypes defining supported interface signatures.
*
* @private
* @name types
* @constant
* @type {Array}
*/
var types = signatures( dtypes[ 0 ], dtypes[ 1 ], dtypes[ 2 ], {
	'enums': true
});


// EXPORTS //

module.exports = types;
