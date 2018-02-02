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
* Revive a JSON-serialized 128-bit complex number.
*
* @module @stdlib/complex/reviver-float64
*
* @example
* var parseJSON = require( '@stdlib/utils/parse-json' );
* var reviver = require( '@stdlib/complex/reviver-float64' );
*
* var str = '{"type":"Complex128","re":5,"im":3}';
*
* var z = parseJSON( str, reviver );
* // returns <Complex128>
*/

// MODULES //

var reviver = require( './reviver.js' );


// EXPORTS //

module.exports = reviver;
