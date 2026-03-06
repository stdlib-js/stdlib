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

/**
* Assign callbacks to binary interfaces according to type promotion rules.
*
* @module @stdlib/strided/base/binary-signature-callbacks
*
* @example
* var signatures = require( '@stdlib/strided/base/binary-dtype-signatures' );
* var add = require( '@stdlib/number/float64/base/add' );
* var cadd = require( '@stdlib/complex/float64/base/add' );
* var caddf = require( '@stdlib/complex/float32/base/add' );
* var callbacks = require( '@stdlib/strided/base/binary-signature-callbacks' );
*
* var dtypes = [
*     'float64',
*     'float32',
*     'int32',
*     'uint8'
* ];
*
* var sigs = signatures( dtypes, dtypes, dtypes );
* // returns [...]
*
* var table = {
*     'default': add,
*     'complex64': caddf,
*     'complex128': cadd
* };
*
* var list = callbacks( table, sigs );
* // returns [...]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
