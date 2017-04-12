'use strict';

// MODULES //

var tape = require( 'tape' );
var Ajv = require( 'ajv' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var schema = require( './../lib' );


// VARIABLES //

var validate = (new Ajv()).compile( schema() );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof schema, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a JSON schema', function test( t ) {
	var json = schema();
	t.strictEqual( isObject( json ), true, 'returns an object' );
	t.end();
});

tape( 'the function returns `true` if provided a valid package JSON', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/good.json' );

	bool = validate( pkg );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing an `author` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_author.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `bugs` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_bugs.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `contributors` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_contributors.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `dependencies` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_dependencies.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `description` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_description.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `devDependencies` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_devdependencies.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing an `engines` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_engines.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `homepage` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_homepage.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `keywords` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_keywords.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `license` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_license.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `main` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_main.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `name` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_name.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `repository` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_repository.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `scripts` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_scripts.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON missing a `version` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/missing_version.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `author` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_author1.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `author` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_author2.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `author` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_author3.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `bin` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_bin.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `browser` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_browser.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `gypfile` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_gypfile.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `bugs` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_bugs.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `contributors` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_contributors1.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `contributors` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_contributors2.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `contributors` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_contributors3.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `contributors` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_contributors4.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `dependencies` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_dependencies.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `description` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_description.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `devDependencies` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_devdependencies.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `engines` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_engines.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `homepage` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_homepage.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `keywords` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_keywords1.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `keywords` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_keywords2.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `license` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_license.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `main` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_main.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `name` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_name.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `repository` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_repository1.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `repository` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_repository2.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `scripts` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_scripts.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});

tape( 'the function returns `false` if provided a package JSON having an invalid `version` field', function test( t ) {
	var bool;
	var pkg;

	pkg = require( './fixtures/bad_version.json' );

	bool = validate( pkg );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});
