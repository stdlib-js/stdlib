
# VARIABLES #

# Define the command for recursively creating directories (WARNING: portability issues on some systems!):
MKDIR_RECURSIVE ?= mkdir -p

# Define the command for removing files and directories:
DELETE ?= -rm
DELETE_FLAGS ?= -rf

# Define the path to an executable for downloading a remote resource:
DEPS_DOWNLOAD_BIN ?= $(TOOLS_DIR)/scripts/download

# Define the path to an executable for verifying a download:
DEPS_CHECKSUM_BIN ?= $(TOOLS_DIR)/scripts/checksum

# Define the Boost version to download:
DEPS_BOOST_VERSION ?= 1.62.0

# Generate a Boost version slug:
deps_boost_version_slug := $(subst .,_,$(DEPS_BOOST_VERSION))

# Define the URL for downloading Boost:
DEPS_BOOST_URL ?= https://sourceforge.net/projects/boost/files/boost/$(DEPS_BOOST_VERSION)/boost_$(deps_boost_version_slug).tar.gz

# Determine the basename for the Boost download:
deps_boost_basename := $(notdir $(DEPS_BOOST_URL))

# Define the path to the file containing a checksum verify a Boost download:
DEPS_BOOST_CHECKSUM ?= $(shell cat $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_boost_basename))/sha256)

# Define the output path when downloading Boost:
DEPS_BOOST_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_boost_basename)

# Define the output path when building Boost:
DEPS_BOOST_BUILD_OUT ?= $(DEPS_BUILD_DIR)/boost_$(deps_boost_version_slug)

# Define the path to the directory containing Boost tests:
DEPS_BOOST_TEST_DIR ?= $(DEPS_DIR)/test/boost

# Define the output directory path for a compiled tests:
DEPS_BOOST_TEST_OUT ?= $(DEPS_BOOST_TEST_DIR)/build

# Define the path to a test file for checking a Boost installation:
DEPS_BOOST_TEST_INSTALL ?= $(DEPS_BOOST_TEST_DIR)/test_install.cpp

# Define the output path for a test file:
DEPS_BOOST_TEST_INSTALL_OUT ?= $(DEPS_BOOST_TEST_OUT)/test_install


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


# Create directory for tests.
#
# This target creates a directory for storing compiled tests.

$(DEPS_BOOST_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_BOOST_TEST_OUT)


# Compile install test.
#
# This target compiles a test file for testing a Boost installation.

$(DEPS_BOOST_TEST_INSTALL_OUT): $(DEPS_BOOST_BUILD_OUT) $(DEPS_BOOST_TEST_OUT)
	$(QUIET) $(CXX) -I $(DEPS_BOOST_BUILD_OUT) $(DEPS_BOOST_TEST_INSTALL) -o $(DEPS_BOOST_TEST_INSTALL_OUT)


# Download Boost.
#
# This target downloads a Boost distribution.

deps-download-boost: $(DEPS_BOOST_DOWNLOAD_OUT)

.PHONY: deps-download-boost


# Verify download.
#
# This targets verifies a Boost download.

deps-verify-boost: deps-download-boost
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_BOOST_DOWNLOAD_OUT) $(DEPS_BOOST_CHECKSUM) >&2

.PHONY: deps-verify-boost


# Extract Boost.
#
# This target extracts a Boost download.

deps-extract-boost: $(DEPS_BOOST_BUILD_OUT)

.PHONY: deps-extract-boost


# Test install.
#
# This target tests a Boost installation.

deps-test-boost: $(DEPS_BOOST_TEST_INSTALL_OUT)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) echo 1 2 3 | $(DEPS_BOOST_TEST_INSTALL_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-boost


# Install Boost.
#
# This target installs Boost.

install-deps-boost: deps-download-boost deps-verify-boost deps-extract-boost deps-test-boost

.PHONY: install-deps-boost


# Clean Boost.
#
# This target removes a Boost distribution (but does not remove a Boost download if one exists).

clean-deps-boost:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_BOOST_BUILD_OUT)

.PHONY: clean-deps-boost
