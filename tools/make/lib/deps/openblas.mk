
# VARIABLES #

# Define the command for recursively creating directories (WARNING: portability issues on some systems!):
MKDIR_RECURSIVE ?= mkdir -p

# Define the command for removing files and directories:
DELETE ?= -rm
DELETE_FLAGS ?= -rf

# Define the command for extracting tarfiles:
TAR ?= tar
TAR_FLAGS ?= -zxf

# Define the path to an executable for downloading a remote resource:
DEPS_DOWNLOAD_BIN ?= $(TOOLS_DIR)/scripts/download

# Define the path to an executable for verifying a download:
DEPS_CHECKSUM_BIN ?= $(TOOLS_DIR)/scripts/checksum

# Define the version to download:
DEPS_OPENBLAS_VERSION ?= 0.2.19

# Generate a version slug:
deps_openblas_version_slug := $(subst .,_,$(DEPS_OPENBLAS_VERSION))

# Define the download URL:
DEPS_OPENBLAS_URL ?= https://github.com/xianyi/OpenBLAS/archive/v$(DEPS_OPENBLAS_VERSION).tar.gz

# Determine the basename for the download:
deps_openblas_basename := $(notdir $(DEPS_OPENBLAS_URL))

# Define the path to the file containing a checksum verify a download:
DEPS_OPENBLAS_CHECKSUM ?= $(shell cat $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_openblas_basename))/sha256)

# Define the output path when downloading:
DEPS_OPENBLAS_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_openblas_basename)

# Define the output path when building:
DEPS_OPENBLAS_BUILD_OUT ?= $(DEPS_BUILD_DIR)/openblas_$(deps_openblas_version_slug)

# Define the path to the directory containing tests:
DEPS_OPENBLAS_TEST_DIR ?= $(DEPS_DIR)/test/openblas

# Define the output directory path for a compiled tests:
DEPS_OPENBLAS_TEST_OUT ?= $(DEPS_OPENBLAS_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_OPENBLAS_TEST_INSTALL ?= $(DEPS_OPENBLAS_TEST_DIR)/test_install.c

# Define the output path for a test file:
DEPS_OPENBLAS_TEST_INSTALL_OUT ?= $(DEPS_OPENBLAS_TEST_OUT)/test_install


# TARGETS #

# Download.
#
# This target downloads a OpenBLAS distribution.

$(DEPS_OPENBLAS_DOWNLOAD_OUT): $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading OpenBLAS...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_OPENBLAS_URL) $(DEPS_OPENBLAS_DOWNLOAD_OUT)


# Extract.
#
# This target extracts a gzipped tar archive.

$(DEPS_OPENBLAS_BUILD_OUT): $(DEPS_OPENBLAS_DOWNLOAD_OUT) $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting OpenBLAS...' >&2
	$(QUIET) $(TAR) $(TAR_FLAGS) $(DEPS_OPENBLAS_DOWNLOAD_OUT) -C $(DEPS_BUILD_DIR)


# Create directory for tests.
#
# This target creates a directory for storing compiled tests.

$(DEPS_OPENBLAS_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_OPENBLAS_TEST_OUT)


# Compile install test.
#
# This target compiles a test file for testing an installation.

$(DEPS_OPENBLAS_TEST_INSTALL_OUT): $(DEPS_OPENBLAS_BUILD_OUT) $(DEPS_OPENBLAS_TEST_OUT)
	$(QUIET) $(CC) $(DEPS_OPENBLAS_TEST_INSTALL) -o $(DEPS_OPENBLAS_TEST_INSTALL_OUT) -I $(DEPS_OPENBLAS_BUILD_OUT) -lopenblas -lpthread -lgfortran


# Download OpenBLAS.
#
# This target downloads an OpenBLAS distribution.

deps-download-openblas: $(DEPS_OPENBLAS_DOWNLOAD_OUT)

.PHONY: deps-download-openblas


# Verify download.
#
# This targets verifies a download.

deps-verify-openblas: deps-download-openblas
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_OPENBLAS_DOWNLOAD_OUT) $(DEPS_OPENBLAS_CHECKSUM) >&2

.PHONY: deps-verify-openblas


# Extract OpenBLAS.
#
# This target extracts an OpenBLAS download.

deps-extract-openblas: $(DEPS_OPENBLAS_BUILD_OUT)

.PHONY: deps-extract-openblas


# Test install.
#
# This target tests an installation.

deps-test-openblas: $(DEPS_OPENBLAS_TEST_INSTALL_OUT)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) echo $(DEPS_OPENBLAS_TEST_INSTALL_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-openblas


# Install OpenBLAS.
#
# This target installs OpenBLAS.

install-deps-openblas: deps-download-openblas deps-verify-openblas deps-extract-openblas deps-test-openblas

.PHONY: install-deps-openblas


# Clean OpenBLAS.
#
# This target removes an OpenBLAS distribution (but does not remove an OpenBLAS download if one exists).

clean-deps-openblas:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_OPENBLAS_BUILD_OUT)

.PHONY: clean-deps-openblas
