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

/* eslint-disable max-lines */

'use strict';

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.abs',
	'path': '@stdlib/math/base/special/abs',
	'value': require( '@stdlib/math/base/special/abs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs2',
		'@stdlib/math/base/special/absf',
		'@stdlib/math/base/special/labs'
	]
});

ns.push({
	'alias': 'base.abs2',
	'path': '@stdlib/math/base/special/abs2',
	'value': require( '@stdlib/math/base/special/abs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs',
		'@stdlib/math/base/special/abs2f'
	]
});

ns.push({
	'alias': 'base.abs2f',
	'path': '@stdlib/math/base/special/abs2f',
	'value': require( '@stdlib/math/base/special/abs2f' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs2',
		'@stdlib/math/base/special/absf'
	]
});

ns.push({
	'alias': 'base.absdiff',
	'path': '@stdlib/math/base/utils/absolute-difference',
	'value': require( '@stdlib/math/base/utils/absolute-difference' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/utils/relative-difference',
		'@stdlib/math/base/utils/float64-epsilon-difference'
	]
});

ns.push({
	'alias': 'base.absf',
	'path': '@stdlib/math/base/special/absf',
	'value': require( '@stdlib/math/base/special/absf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs',
		'@stdlib/math/base/special/abs2f',
		'@stdlib/math/base/special/labs'
	]
});

ns.push({
	'alias': 'base.acos',
	'path': '@stdlib/math/base/special/acos',
	'value': require( '@stdlib/math/base/special/acos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/asin',
		'@stdlib/math/base/special/atan'
	]
});

ns.push({
	'alias': 'base.acosd',
	'path': '@stdlib/math/base/special/acosd',
	'value': require( '@stdlib/math/base/special/acosd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acos',
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/asind',
		'@stdlib/math/base/special/atand'
	]
});

ns.push({
	'alias': 'base.acosf',
	'path': '@stdlib/math/base/special/acosf',
	'value': require( '@stdlib/math/base/special/acosf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acos',
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/asinf',
		'@stdlib/math/base/special/atanf'
	]
});

ns.push({
	'alias': 'base.acosh',
	'path': '@stdlib/math/base/special/acosh',
	'value': require( '@stdlib/math/base/special/acosh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acos',
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/base/special/atanh'
	]
});

ns.push({
	'alias': 'base.acot',
	'path': '@stdlib/math/base/special/acot',
	'value': require( '@stdlib/math/base/special/acot' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acoth',
		'@stdlib/math/base/special/atan',
		'@stdlib/math/base/special/cot'
	]
});

ns.push({
	'alias': 'base.acotd',
	'path': '@stdlib/math/base/special/acotd',
	'value': require( '@stdlib/math/base/special/acotd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acot',
		'@stdlib/math/base/special/acoth',
		'@stdlib/math/base/special/atand',
		'@stdlib/math/base/special/cotd'
	]
});

ns.push({
	'alias': 'base.acotf',
	'path': '@stdlib/math/base/special/acotf',
	'value': require( '@stdlib/math/base/special/acotf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acot',
		'@stdlib/math/base/special/acoth',
		'@stdlib/math/base/special/atanf',
		'@stdlib/math/base/special/cotf'
	]
});

ns.push({
	'alias': 'base.acoth',
	'path': '@stdlib/math/base/special/acoth',
	'value': require( '@stdlib/math/base/special/acoth' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/acot',
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/base/special/atanh'
	]
});

ns.push({
	'alias': 'base.acovercos',
	'path': '@stdlib/math/base/special/acovercos',
	'value': require( '@stdlib/math/base/special/acovercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acoversin',
		'@stdlib/math/base/special/avercos',
		'@stdlib/math/base/special/covercos',
		'@stdlib/math/base/special/vercos'
	]
});

ns.push({
	'alias': 'base.acoversin',
	'path': '@stdlib/math/base/special/acoversin',
	'value': require( '@stdlib/math/base/special/acoversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acovercos',
		'@stdlib/math/base/special/aversin',
		'@stdlib/math/base/special/coversin',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.acsc',
	'path': '@stdlib/math/base/special/acsc',
	'value': require( '@stdlib/math/base/special/acsc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acot',
		'@stdlib/math/base/special/acsch',
		'@stdlib/math/base/special/asec',
		'@stdlib/math/base/special/asin',
		'@stdlib/math/base/special/csc'
	]
});

ns.push({
	'alias': 'base.acscd',
	'path': '@stdlib/math/base/special/acscd',
	'value': require( '@stdlib/math/base/special/acscd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acsc',
		'@stdlib/math/base/special/acsch',
		'@stdlib/math/base/special/asecd',
		'@stdlib/math/base/special/asind',
		'@stdlib/math/base/special/cscd'
	]
});

ns.push({
	'alias': 'base.acscdf',
	'path': '@stdlib/math/base/special/acscdf',
	'value': require( '@stdlib/math/base/special/acscdf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acsc',
		'@stdlib/math/base/special/acsch',
		'@stdlib/math/base/special/asecdf',
		'@stdlib/math/base/special/asindf'
	]
});

ns.push({
	'alias': 'base.acscf',
	'path': '@stdlib/math/base/special/acscf',
	'value': require( '@stdlib/math/base/special/acscf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acsc',
		'@stdlib/math/base/special/acsch',
		'@stdlib/math/base/special/asecf',
		'@stdlib/math/base/special/asinf',
		'@stdlib/math/base/special/cscf'
	]
});

ns.push({
	'alias': 'base.acsch',
	'path': '@stdlib/math/base/special/acsch',
	'value': require( '@stdlib/math/base/special/acsch' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acoth',
		'@stdlib/math/base/special/acsc',
		'@stdlib/math/base/special/asech',
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/base/special/csc',
		'@stdlib/math/base/special/csch'
	]
});

ns.push({
	'alias': 'base.add',
	'path': '@stdlib/math/base/ops/add',
	'value': require( '@stdlib/math/base/ops/add' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/div',
		'@stdlib/math/base/ops/mul',
		'@stdlib/math/base/ops/sub'
	]
});

ns.push({
	'alias': 'base.add3',
	'path': '@stdlib/math/base/ops/add3',
	'value': require( '@stdlib/math/base/ops/add3' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/add'
	]
});

ns.push({
	'alias': 'base.add4',
	'path': '@stdlib/math/base/ops/add4',
	'value': require( '@stdlib/math/base/ops/add4' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/add'
	]
});

ns.push({
	'alias': 'base.add5',
	'path': '@stdlib/math/base/ops/add5',
	'value': require( '@stdlib/math/base/ops/add5' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/add'
	]
});

ns.push({
	'alias': 'base.addf',
	'path': '@stdlib/math/base/ops/addf',
	'value': require( '@stdlib/math/base/ops/addf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/add',
		'@stdlib/math/base/ops/divf',
		'@stdlib/math/base/ops/mulf',
		'@stdlib/math/base/ops/subf'
	]
});

ns.push({
	'alias': 'base.ahavercos',
	'path': '@stdlib/math/base/special/ahavercos',
	'value': require( '@stdlib/math/base/special/ahavercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ahaversin',
		'@stdlib/math/base/special/havercos',
		'@stdlib/math/base/special/vercos'
	]
});

ns.push({
	'alias': 'base.ahaversin',
	'path': '@stdlib/math/base/special/ahaversin',
	'value': require( '@stdlib/math/base/special/ahaversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ahavercos',
		'@stdlib/math/base/special/haversin',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.altcase',
	'path': '@stdlib/string/base/altcase',
	'value': require( '@stdlib/string/base/altcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/lowercase',
		'@stdlib/string/base/uppercase'
	]
});

ns.push({
	'alias': 'base.asec',
	'path': '@stdlib/math/base/special/asec',
	'value': require( '@stdlib/math/base/special/asec' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acot',
		'@stdlib/math/base/special/acsc',
		'@stdlib/math/base/special/asech',
		'@stdlib/math/base/special/acos',
		'@stdlib/math/base/special/sec'
	]
});

ns.push({
	'alias': 'base.asecd',
	'path': '@stdlib/math/base/special/asecd',
	'value': require( '@stdlib/math/base/special/asecd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/asec',
		'@stdlib/math/base/special/asech',
		'@stdlib/math/base/special/acosd',
		'@stdlib/math/base/special/secd'
	]
});

ns.push({
	'alias': 'base.asecdf',
	'path': '@stdlib/math/base/special/asecdf',
	'value': require( '@stdlib/math/base/special/asecdf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/asec',
		'@stdlib/math/base/special/asech',
		'@stdlib/math/base/special/acosdf',
		'@stdlib/math/base/special/secdf'
	]
});

ns.push({
	'alias': 'base.asecf',
	'path': '@stdlib/math/base/special/asecf',
	'value': require( '@stdlib/math/base/special/asecf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/asec',
		'@stdlib/math/base/special/asech',
		'@stdlib/math/base/special/acosf',
		'@stdlib/math/base/special/secf'
	]
});

ns.push({
	'alias': 'base.asech',
	'path': '@stdlib/math/base/special/asech',
	'value': require( '@stdlib/math/base/special/asech' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/asec',
		'@stdlib/math/base/special/asech',
		'@stdlib/math/base/special/acoth',
		'@stdlib/math/base/special/sech'
	]
});

ns.push({
	'alias': 'base.asin',
	'path': '@stdlib/math/base/special/asin',
	'value': require( '@stdlib/math/base/special/asin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acos',
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/base/special/atan'
	]
});

ns.push({
	'alias': 'base.asind',
	'path': '@stdlib/math/base/special/asind',
	'value': require( '@stdlib/math/base/special/asind' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/asin',
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/base/special/atand'
	]
});

ns.push({
	'alias': 'base.asindf',
	'path': '@stdlib/math/base/special/asindf',
	'value': require( '@stdlib/math/base/special/asindf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/asinf',
		'@stdlib/math/base/special/asind'
	]
});

ns.push({
	'alias': 'base.asinf',
	'path': '@stdlib/math/base/special/asinf',
	'value': require( '@stdlib/math/base/special/asinf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/asin',
		'@stdlib/math/base/special/asindf'
	]
});

ns.push({
	'alias': 'base.asinh',
	'path': '@stdlib/math/base/special/asinh',
	'value': require( '@stdlib/math/base/special/asinh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/asin',
		'@stdlib/math/base/special/atanh'
	]
});

ns.push({
	'alias': 'base.atan',
	'path': '@stdlib/math/base/special/atan',
	'value': require( '@stdlib/math/base/special/atan' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acos',
		'@stdlib/math/base/special/asin',
		'@stdlib/math/base/special/atanh'
	]
});

ns.push({
	'alias': 'base.atan2',
	'path': '@stdlib/math/base/special/atan2',
	'value': require( '@stdlib/math/base/special/atan2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/atan'
	]
});

ns.push({
	'alias': 'base.atand',
	'path': '@stdlib/math/base/special/atand',
	'value': require( '@stdlib/math/base/special/atand' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/atan',
		'@stdlib/math/base/special/atanh',
		'@stdlib/math/base/special/acosd',
		'@stdlib/math/base/special/adins'
	]
});

ns.push({
	'alias': 'base.atanf',
	'path': '@stdlib/math/base/special/atanf',
	'value': require( '@stdlib/math/base/special/atanf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/atan',
		'@stdlib/math/base/special/atanh',
		'@stdlib/math/base/special/acosf'
	]
});

ns.push({
	'alias': 'base.atanh',
	'path': '@stdlib/math/base/special/atanh',
	'value': require( '@stdlib/math/base/special/atanh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/base/special/atan'
	]
});

ns.push({
	'alias': 'base.avercos',
	'path': '@stdlib/math/base/special/avercos',
	'value': require( '@stdlib/math/base/special/avercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/aversin',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.aversin',
	'path': '@stdlib/math/base/special/aversin',
	'value': require( '@stdlib/math/base/special/aversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/avercos',
		'@stdlib/math/base/special/vercos'
	]
});


// EXPORTS //

module.exports = ns;
