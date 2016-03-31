# To run this script, `cd` to the `./test/fixtures` directory and then, from the R shell, `source("./runner.R")`.

options( digits = 16 );
library( jsonlite );
library( pracma ); # http://finzi.psych.upenn.edu/library/pracma/html/eta.html

x = linspace( -100, 100, n=3003 )
y = eta( x )

cat( y, sep = ",\n" )

write( toJSON( x, digits = 16, auto_unbox = TRUE ), "./data.json" )
write( toJSON( y, digits = 16, auto_unbox = TRUE ), "./expected.json" )
