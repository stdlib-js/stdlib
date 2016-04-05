# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

function gen( x, name )
	y = Array( Any, length( x ) );
	for i in eachindex(x)
		y[i] = bits( convert( UInt8, x[i] ) );
	end

	data = Dict([
		("x", x),
		("expected", y)
	]);

	outfile = open( name, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end

# Integer values:
x = linspace( 0, 255, 256 )
gen( x, "data.json" );
