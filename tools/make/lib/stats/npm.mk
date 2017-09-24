
# TARGETS #

# Compute npm archive size.
#
# This target computes size (in bytes) of the gzipped archive which would be published to npm.

stats-npm-tarball-size: npm-tarball
	$(QUIET) wc -c $(npm_tarball) | awk '{print $$1 OFS "B"}'

.PHONY: stats-npm-tarball-size
