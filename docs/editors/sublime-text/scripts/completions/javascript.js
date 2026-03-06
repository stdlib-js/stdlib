#!/usr/bin/env node

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

/* eslint-disable node/shebang */

'use strict';

// MODULES //

var currentYear = require( '@stdlib/time/current-year' );
var licenseHeader = require( '@stdlib/_tools/licenses/header' );


// MAIN //

// SPDX license identifier:
var spdx = 'Apache-2.0';

// License header options:
var opts = {
	'year': currentYear(),
	'copyright': 'The Stdlib Authors'
};

// License header:
var license = licenseHeader( spdx, 'javascript', opts );

// Configurations for each completion:
var completions = [
	{
		'name': 'js',
		'scope': 'source.js',
		'completions': [
			{
				'trigger': 'stdlib.stub',
				'contents': license+'\n\'use strict\';\n\n'
			},
			{
				'trigger': 'stdlib.stub.script',
				'contents': '#!/usr/bin/env node\n\n'+license+'\n\'use strict\';\n\n'
			}
		]
	}
];


// EXPORTS //

module.exports = completions;
