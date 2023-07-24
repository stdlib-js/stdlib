/* eslint-disable max-lines */

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

// MODULES //

var tape = require( 'tape' );
var ordinalize = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ordinalize, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the first argument is not a string or integer, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {},
		3.12
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ordinalize( value );
		};
	}
});

tape( 'if the first argument is not a string or integer, the function throws an error (options)', function test( t ) {
	var values;
	var i;

	values = [
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {},
		3.12
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ordinalize( value, {} );
		};
	}
});

tape( 'the function throws an error if provided an invalid options argument', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		true,
		void 0,
		NaN,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function zipper() {
			ordinalize( 8, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid `lang` option', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		5,
		null,
		[],
		{},
		true,
		void 0,
		NaN,
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function zipper() {
			ordinalize( 8, {
				'lang': value
			});
		};
	}
});

tape( 'the function returns an ordinal string for a provided integer string (default language)', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1st',
		'2nd',
		'21st',
		'7th',
		'10th',
		'11th',
		'12th',
		'13th',
		'14th',
		'15th',
		'16th',
		'21st',
		'22nd',
		'23rd',
		'24th',
		'332nd',
		'333rd',
		'999th'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i] ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer (default language)', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		1,
		2,
		21,
		7,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		21,
		22,
		23,
		24,
		332,
		333,
		999
	];
	expected = [
		'1st',
		'2nd',
		'21st',
		'7th',
		'10th',
		'11th',
		'12th',
		'13th',
		'14th',
		'15th',
		'16th',
		'21st',
		'22nd',
		'23rd',
		'24th',
		'332nd',
		'333rd',
		'999th'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i] ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports returning an ordinal string suffix for a provided integer string (default language)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'st',
		'nd',
		'st',
		'th',
		'th',
		'th',
		'th',
		'th',
		'th',
		'th',
		'th',
		'st',
		'nd',
		'rd',
		'th',
		'nd',
		'rd',
		'th'
	];

	opts = {
		'suffixOnly': true
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports returning an ordinal string suffix for a provided integer (default language)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		1,
		2,
		21,
		7,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		21,
		22,
		23,
		24,
		332,
		333,
		999
	];
	expected = [
		'st',
		'nd',
		'st',
		'th',
		'th',
		'th',
		'th',
		'th',
		'th',
		'th',
		'th',
		'st',
		'nd',
		'rd',
		'th',
		'nd',
		'rd',
		'th'
	];

	opts = {
		'suffixOnly': true
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=en)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1st',
		'2nd',
		'21st',
		'7th',
		'10th',
		'11th',
		'12th',
		'13th',
		'14th',
		'15th',
		'16th',
		'21st',
		'22nd',
		'23rd',
		'24th',
		'332nd',
		'333rd',
		'999th'
	];

	opts = {
		'lang': 'en'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer (lang=en)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		1,
		2,
		21,
		7,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		21,
		22,
		23,
		24,
		332,
		333,
		999
	];
	expected = [
		'1st',
		'2nd',
		'21st',
		'7th',
		'10th',
		'11th',
		'12th',
		'13th',
		'14th',
		'15th',
		'16th',
		'21st',
		'22nd',
		'23rd',
		'24th',
		'332nd',
		'333rd',
		'999th'
	];

	opts = {
		'lang': 'en'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=fr)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1er',
		'2e',
		'21e',
		'7e',
		'10e',
		'11e',
		'12e',
		'13e',
		'14e',
		'15e',
		'16e',
		'21e',
		'22e',
		'23e',
		'24e',
		'332e',
		'333e',
		'999e'
	];

	opts = {
		'lang': 'fr'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=fr gender=masculine)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1er',
		'2e',
		'21e',
		'7e',
		'10e',
		'11e',
		'12e',
		'13e',
		'14e',
		'15e',
		'16e',
		'21e',
		'22e',
		'23e',
		'24e',
		'332e',
		'333e',
		'999e'
	];

	opts = {
		'lang': 'fr',
		'gender': 'masculine'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=fr gender=feminine)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1re',
		'2e',
		'21e',
		'7e',
		'10e',
		'11e',
		'12e',
		'13e',
		'14e',
		'15e',
		'16e',
		'21e',
		'22e',
		'23e',
		'24e',
		'332e',
		'333e',
		'999e'
	];

	opts = {
		'lang': 'fr',
		'gender': 'feminine'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=de)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1.',
		'2.',
		'21.',
		'7.',
		'10.',
		'11.',
		'12.',
		'13.',
		'14.',
		'15.',
		'16.',
		'21.',
		'22.',
		'23.',
		'24.',
		'332.',
		'333.',
		'999.'
	];

	opts = {
		'lang': 'de'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=fin)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1.',
		'2.',
		'21.',
		'7.',
		'10.',
		'11.',
		'12.',
		'13.',
		'14.',
		'15.',
		'16.',
		'21.',
		'22.',
		'23.',
		'24.',
		'332.',
		'333.',
		'999.'
	];

	opts = {
		'lang': 'fin'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=it)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1º',
		'2º',
		'21º',
		'7º',
		'10º',
		'11º',
		'12º',
		'13º',
		'14º',
		'15º',
		'16º',
		'21º',
		'22º',
		'23º',
		'24º',
		'332º',
		'333º',
		'999º'
	];

	opts = {
		'lang': 'it'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=it, gender=masculine)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1º',
		'2º',
		'21º',
		'7º',
		'10º',
		'11º',
		'12º',
		'13º',
		'14º',
		'15º',
		'16º',
		'21º',
		'22º',
		'23º',
		'24º',
		'332º',
		'333º',
		'999º'
	];

	opts = {
		'lang': 'it',
		'gender': 'masculine'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=it, gender=feminine)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1ª',
		'2ª',
		'21ª',
		'7ª',
		'10ª',
		'11ª',
		'12ª',
		'13ª',
		'14ª',
		'15ª',
		'16ª',
		'21ª',
		'22ª',
		'23ª',
		'24ª',
		'332ª',
		'333ª',
		'999ª'
	];

	opts = {
		'lang': 'it',
		'gender': 'feminine'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=pt)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1º',
		'2º',
		'21º',
		'7º',
		'10º',
		'11º',
		'12º',
		'13º',
		'14º',
		'15º',
		'16º',
		'21º',
		'22º',
		'23º',
		'24º',
		'332º',
		'333º',
		'999º'
	];

	opts = {
		'lang': 'pt'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=pt, gender=masculine)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1º',
		'2º',
		'21º',
		'7º',
		'10º',
		'11º',
		'12º',
		'13º',
		'14º',
		'15º',
		'16º',
		'21º',
		'22º',
		'23º',
		'24º',
		'332º',
		'333º',
		'999º'
	];

	opts = {
		'lang': 'pt',
		'gender': 'masculine'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=pt, gender=feminine)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1ª',
		'2ª',
		'21ª',
		'7ª',
		'10ª',
		'11ª',
		'12ª',
		'13ª',
		'14ª',
		'15ª',
		'16ª',
		'21ª',
		'22ª',
		'23ª',
		'24ª',
		'332ª',
		'333ª',
		'999ª'
	];

	opts = {
		'lang': 'pt',
		'gender': 'feminine'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=es)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1º',
		'2º',
		'21º',
		'7º',
		'10º',
		'11º',
		'12º',
		'13º',
		'14º',
		'15º',
		'16º',
		'21º',
		'22º',
		'23º',
		'24º',
		'332º',
		'333º',
		'999º'
	];

	opts = {
		'lang': 'es'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=es, gender=masculine)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1º',
		'2º',
		'21º',
		'7º',
		'10º',
		'11º',
		'12º',
		'13º',
		'14º',
		'15º',
		'16º',
		'21º',
		'22º',
		'23º',
		'24º',
		'332º',
		'333º',
		'999º'
	];

	opts = {
		'lang': 'es',
		'gender': 'masculine'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=es, gender=feminine)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1ª',
		'2ª',
		'21ª',
		'7ª',
		'10ª',
		'11ª',
		'12ª',
		'13ª',
		'14ª',
		'15ª',
		'16ª',
		'21ª',
		'22ª',
		'23ª',
		'24ª',
		'332ª',
		'333ª',
		'999ª'
	];

	opts = {
		'lang': 'es',
		'gender': 'feminine'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an ordinal string for a provided integer string (lang=swe)', function test( t ) {
	var expected;
	var values;
	var opts;
	var i;

	values = [
		'1',
		'2',
		'21',
		'7',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'21',
		'22',
		'23',
		'24',
		'332',
		'333',
		'999'
	];
	expected = [
		'1:a',
		'2:a',
		'21:a',
		'7:e',
		'10:e',
		'11:e',
		'12:e',
		'13:e',
		'14:e',
		'15:e',
		'16:e',
		'21:a',
		'22:a',
		'23:e',
		'24:e',
		'332:a',
		'333:e',
		'999:e'
	];

	opts = {
		'lang': 'swe'
	};

	for ( i = 0; i < values.length; i++ ) {
		t.equal( ordinalize( values[i], opts ), expected[i], 'returns expected value' );
	}
	t.end();
});
