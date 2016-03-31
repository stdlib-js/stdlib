# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

# Medium negative values:
x = linspace( -709.78, -1.0, 1000 )

y = expm1( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./medium_negative.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Medium positive values:
x = linspace( 1.0, 709.78, 1000 )

y = expm1( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./medium_positive.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Small negative values:
x = linspace( -1.0, -2.0^-54, 1000 )

y = expm1( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./small_negative.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Small positive values:
x = linspace( 2.0^-54, 1.0, 1000 )

y = expm1( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./small_positive.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )


# Tiny values:
x = linspace( -2.0^-54, 2.0^-54, 1000 )

y = expm1( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./tiny.json", "w" )
JSON.json( data )

write( outfile, JSON.json(data) )
close( outfile )
