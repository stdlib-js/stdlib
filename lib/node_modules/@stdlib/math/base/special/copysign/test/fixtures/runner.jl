# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

exp = linspace( 0, 308, 5001 )
len = length( exp )

x = Array( Float64, len )
y = rand( len ) - 0.5;
z = Array( Float64, len )
for i in eachindex(x)
	x[i] = (rand()-0.5) * 10^exp[i]
	z[i] = copysign( x[i], y[i] )
end

data = Dict([
	("x", x),
	("y", y),
	("expected", z)
])

outfile = open( "data.json", "w" )
write( outfile, JSON.json(data) )
close( outfile );
