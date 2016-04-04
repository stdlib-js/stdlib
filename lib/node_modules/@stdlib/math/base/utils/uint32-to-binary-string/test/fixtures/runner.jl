# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

function gen( x, name )
	y = Array( Any, length( x ) );
	for i in eachindex(x)
		y[i] = bits( convert( UInt32, x[i] ) );
	end

	data = Dict([
		("x", x),
		("expected", y)
	]);

	outfile = open( name, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# Small integer values:
x = linspace( 0, 1000, 1001 )
gen( x, "small.json" );

# Medium integer values:
x = linspace( 1e5, 1e6, 1001 );
gen( x, "medium.json" );

# Large integer values:
x = linspace( 1e8, 1e9, 1001 );
gen( x, "large.json" );
