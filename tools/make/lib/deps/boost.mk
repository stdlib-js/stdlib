
# VARIABLES #

# Define the command for recursively creating directories (WARNING: portability issues on some systems!):
MKDIR_RECURSIVE ?= mkdir -p

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

# Define the output path when downloading Boost:
DEPS_BOOST_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_boost_basename)

# Define the output path when building Boost:
DEPS_BOOST_BUILD_OUT ?= $(DEPS_BUILD_DIR)/boost_$(deps_boost_version_slug)


# TARGETS #

# Download.
#
# This target downloads a Boost distribution.

$(DEPS_BOOST_DOWNLOAD_OUT): $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading Boost...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_BOOST_URL) $(DEPS_BOOST_DOWNLOAD_OUT)


# Extract.
#
# This target extracts a gzipped tar archive.
#
# TODO: verify checksum before extracting.

$(DEPS_BOOST_BUILD_OUT): $(DEPS_BOOST_DOWNLOAD_OUT) $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting Boost...' >&2
	$(QUIET) tar -zxf $(DEPS_BOOST_DOWNLOAD_OUT) -C $(DEPS_BUILD_DIR)


# Download Boost.
#
# This target downloads a Boost distribution.

deps-download-boost: $(DEPS_BOOST_DOWNLOAD_OUT)

.PHONY: deps-download-boost


# Extract Boost.
#
# This target extracts a Boost download.

deps-extract-boost: $(DEPS_BOOST_BUILD_OUT)

.PHONY: deps-extract-boost


# Test install.
#
# This target tests a Boost installation.

deps-test-boost: $(DEPS_BOOST_BUILD_OUT)


.PHONY: deps-test-boost


# Install Boost.
#
# This target installs Boost.

deps-install-boost: deps-download-boost deps-extract-boost

.PHONY: deps-install-boost


# Clean Boost.
#
# This target removes a Boost distribution (but does not remove a Boost download if one exists).

clean-deps-boost:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_BOOST_BUILD_OUT)

.PHONY: clean-deps-boost
