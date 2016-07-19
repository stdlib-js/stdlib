#!/usr/bin/env julia

import JSON

"""
    gen( b, x, name )

Generate fixture data and write to file.

# Arguments

* `b`: bases
* `x`: exponents
* `name::AbstractString`: output filename

# Examples

``` julia
julia> b = rand( 1001 )*10.0;
julia> x = rand( 1001 )*616.0 - 308.0;
julia> gen( b, x, \"data.json\" );
```
"""
function gen( b, x, name )
	y = Array( Float64, length(b) );
	for i in eachindex(b)
		y[ i ] = b[i]^x[i];
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("b", b),
		("x", x),
		("expected", y)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	close( outfile );
end


# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Generate fixture data:
b = sort( rand( 1001 )*10.0 );
x = rand( 1001 )*616.0 - 308.0;
gen( b, x, "data.json" );
