
# TARGETS #

# Compute npm archive size.
#
# This target computes size (in bytes) of the gzipped archive which would be published to npm.

stats-npm-tarball-size: $(NPM_TARBALL)
	$(QUIET) wc -c $(NPM_TARBALL) | awk '{print $$1 OFS "B"}'

.PHONY: stats-npm-tarball-size
