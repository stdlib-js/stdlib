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

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.pascalcase',
	'path': '@stdlib/string/base/pascalcase',
	'value': require( '@stdlib/string/base/pascalcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/camelcase',
		'@stdlib/string/base/lowercase',
		'@stdlib/string/base/uppercase'
	]
});

ns.push({
	'alias': 'base.pdiff',
	'path': '@stdlib/math/base/special/pdiff',
	'value': require( '@stdlib/math/base/special/pdiff' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.pdifff',
	'path': '@stdlib/math/base/special/pdifff',
	'value': require( '@stdlib/math/base/special/pdifff' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/pdiff'
	]
});

ns.push({
	'alias': 'base.percentEncode',
	'path': '@stdlib/string/base/percent-encode',
	'value': require( '@stdlib/string/base/percent-encode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.polygamma',
	'path': '@stdlib/math/base/special/polygamma',
	'value': require( '@stdlib/math/base/special/polygamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/trigamma',
		'@stdlib/math/base/special/digamma',
		'@stdlib/math/base/special/gamma'
	]
});

ns.push({
	'alias': 'base.pow',
	'path': '@stdlib/math/base/special/pow',
	'value': require( '@stdlib/math/base/special/pow' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/powm1'
	]
});

ns.push({
	'alias': 'base.powm1',
	'path': '@stdlib/math/base/special/powm1',
	'value': require( '@stdlib/math/base/special/powm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/pow'
	]
});


// EXPORTS //

module.exports = ns;
