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

var ndtypes = require( '@stdlib/ndarray/dtypes' ).enum;


// VARIABLES //

var dt = ndtypes();


// MAIN //

/**
* Returns an object mapping supported dtypes to integer values for purposes of C inter-operation.
*
* ## Notes
*
* -   Downstream consumers of this mapping should **not** rely on specific integer values (e.g., `INT8 == 0`). Instead, the object should be used in an opaque manner.
* -   The main purpose of this function is JavaScript and C inter-operation of strided arrays.
*
* @returns {Object} object mapping supported dtypes to integer values
*
* @example
* var table = enumerated();
* // returns <Object>
*/
function enumerated() {
	// NOTE: the following should match the C `dtypes.h` enumeration!!!!
	return {
		'int8': dt[ 'int8' ],
		'uint8': dt[ 'uint8' ],
		'int16': dt[ 'int16' ],
		'uint16': dt[ 'uint16' ],
		'int32': dt[ 'int32' ],
		'uint32': dt[ 'uint32' ],
		'int64': dt[ 'int64' ],
		'uint64': dt[ 'uint64' ],

		'float32': dt[ 'float32' ],
		'float64': dt[ 'float64' ],

		'generic': dt[ 'generic' ],

		'notype': dt[ 'notype' ],

		'userdefined_type': dt[ 'userdefined_type' ]
	};
}


// EXPORTS //

module.exports = enumerated;
