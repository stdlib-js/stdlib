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
	'alias': 'base.hacovercos',
	'path': '@stdlib/math/base/special/hacovercos',
	'value': require( '@stdlib/math/base/special/hacovercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/hacoversin',
		'@stdlib/math/base/special/havercos'
	]
});

ns.push({
	'alias': 'base.hacoversin',
	'path': '@stdlib/math/base/special/hacoversin',
	'value': require( '@stdlib/math/base/special/hacoversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/hacovercos',
		'@stdlib/math/base/special/haversin'
	]
});

ns.push({
	'alias': 'base.havercos',
	'path': '@stdlib/math/base/special/havercos',
	'value': require( '@stdlib/math/base/special/havercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/haversin',
		'@stdlib/math/base/special/vercos'
	]
});

ns.push({
	'alias': 'base.haversin',
	'path': '@stdlib/math/base/special/haversin',
	'value': require( '@stdlib/math/base/special/haversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/havercos',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.headercase',
	'path': '@stdlib/string/base/headercase',
	'value': require( '@stdlib/string/base/headercase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/camelcase',
		'@stdlib/string/base/pascalcase',
		'@stdlib/string/base/uppercase'
	]
});

ns.push({
	'alias': 'base.heaviside',
	'path': '@stdlib/math/base/special/heaviside',
	'value': require( '@stdlib/math/base/special/heaviside' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ramp'
	]
});

ns.push({
	'alias': 'base.hermitepoly',
	'path': '@stdlib/math/base/tools/hermitepoly',
	'value': require( '@stdlib/math/base/tools/hermitepoly' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/tools/evalpoly',
		'@stdlib/math/base/tools/normhermitepoly'
	]
});

ns.push({
	'alias': 'base.hypot',
	'path': '@stdlib/math/base/special/hypot',
	'value': require( '@stdlib/math/base/special/hypot' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.hypotf',
	'path': '@stdlib/math/base/special/hypotf',
	'value': require( '@stdlib/math/base/special/hypotf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/hypot'
	]
});


// EXPORTS //

module.exports = ns;
