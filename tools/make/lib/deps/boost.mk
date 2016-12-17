
# VARIABLES #

# Define the path to an executable for downloading a remote resource:
DEPS_DOWNLOAD_BIN ?= $(TOOLS_DIR)/scripts/download

# Define the Boost version to download:
DEPS_BOOST_VERSION ?= 1.62.0

# Generate a Boost version slug:
deps_boost_version_slug := $(subst .,_,$(DEPS_BOOST_VERSION))

# Define the URL for downloading Boost:
DEPS_BOOST_URL ?= https://sourceforge.net/projects/boost/files/boost/$(DEPS_BOOST_VERSION)/boost_$(deps_boost_version_slug).tar.gz

# Determine the basename for the Boost download:
deps_boost_basename := $(notdir $(DEPS_BOOST_URL))

# Define the output filepath when downloading Boost:
DEPS_BOOST_DOWNLOAD_OUT ?= $(DEPS_DIR)/$(deps_boost_basename)


# TARGETS #

# Downloads Boost.
#
# This target downloads Boost to the `build` directory.

deps-download-boost: $(DEPS_DIR)
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_BOOST_URL) $(DEPS_BOOST_DOWNLOAD_OUT)

.PHONY: deps-download-boost


# Extracts Boost.
#
# This targets extracts a Boost download.

deps-extract-boost: $(DEPS_BOOST_DOWNLOAD_OUT)
	$(QUIET)

.PHONY: deps-extract-boost
