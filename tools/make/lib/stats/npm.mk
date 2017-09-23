
# VARIABLES #

# Specify the output build directory when generating an npm gzipped archive.
stats_npm_tarball_build_out := $(BUILD_DIR)/npm

# Get the current package version:
stats_npm_tarball_pkg_version := $(shell $(NODE) -e "console.log( require( '$(ROOT_DIR)/package.json' ).version )")

# Specify the gzipped archive basename:
stats_npm_tarball_basename := "stdlib-stdlib-$(stats_npm_tarball_pkg_version).tgz"

# Specify the output npm gzipped archive:
stats_npm_tarball := $(stats_npm_tarball_build_out)/$(stats_npm_tarball_basename)


# TARGETS #

# Generate npm tarball.
#
# This target generates an npm gzipped archive.

$(stats_npm_tarball):
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(stats_npm_tarball_build_out)
	$(QUIET) $(MKDIR_RECURSIVE) $(BUILD_DIR)/npm
	$(QUIET) $(NPM) pack $(ROOT_DIR) >/dev/null
	$(QUIET) mv $(ROOT_DIR)/$(stats_npm_tarball_basename) $@


# Compute npm archive size.
#
# This target computes size of the gzipped archive which would be published to npm.

stats-npm-tarball-size: $(stats_npm_tarball)
	$(QUIET) wc -c $(stats_npm_tarball) | awk '{print $$1 OFS "B"}'

.PHONY: stats-npm-tarball-size
