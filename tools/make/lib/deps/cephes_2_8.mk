
# VARIABLES #

# Define the download URL:
DEPS_CEPHES_URL ?= http://www.moshier.net/cephes-math-28.tar.gz

# Determine the basename for the download:
deps_cephes_basename := $(notdir $(DEPS_CEPHES_URL))

# Define the path to the file containing a checksum verify a download:
DEPS_CEPHES_CHECKSUM ?= $(shell cat $(DEPS_CHECKSUMS_DIR)/$(subst -,_,$(subst .,_,$(deps_cephes_basename)))/sha256)

# Define the output path when downloading:
DEPS_CEPHES_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_cephes_basename)

# Define the path to the directory containing tests:
DEPS_CEPHES_TEST_DIR ?= $(DEPS_DIR)/test/cephes

# Define the output directory path for compiled tests:
DEPS_CEPHES_TEST_OUT ?= $(DEPS_CEPHES_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_CEPHES_TEST_INSTALL ?= $(DEPS_CEPHES_TEST_DIR)/test_install.c

# Define the output path for a test file:
DEPS_CEPHES_TEST_INSTALL_OUT ?= $(DEPS_CEPHES_TEST_OUT)/test_install


# TARGETS #

# Download.
#
# This target downloads a Cephes distribution.

$(DEPS_CEPHES_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading Cephes...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_CEPHES_URL) $(DEPS_CEPHES_DOWNLOAD_OUT)


# Extract.
#
# This target extracts a gzipped tar archive.

$(DEPS_CEPHES_BUILD_OUT): $(DEPS_CEPHES_DOWNLOAD_OUT) | $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting Cephes...' >&2
	$(QUIET) $(TAR) -zxf $(DEPS_CEPHES_DOWNLOAD_OUT) -C $(DEPS_BUILD_DIR)


# Create directory for tests.
#
# This target creates a directory for storing compiled tests.

$(DEPS_CEPHES_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_CEPHES_TEST_OUT)


# Compile install test.
#
# This target compiles a test file for testing an installation.

$(DEPS_CEPHES_TEST_INSTALL_OUT): $(DEPS_CEPHES_BUILD_OUT) $(DEPS_CEPHES_TEST_OUT)
	$(QUIET) $(CC) -I $(DEPS_CEPHES_BUILD_OUT) \
		$(DEPS_CEPHES_TEST_INSTALL) \
		$(DEPS_CEPHES_BUILD_OUT)/double/sindg.c \
		$(DEPS_CEPHES_BUILD_OUT)/double/mtherr.c \
		$(DEPS_CEPHES_BUILD_OUT)/double/polevl.c \
		-o $(DEPS_CEPHES_TEST_INSTALL_OUT)


# Download Cephes.
#
# This target downloads a Cephes distribution.

deps-download-cephes: $(DEPS_CEPHES_DOWNLOAD_OUT)

.PHONY: deps-download-cephes


# Verify download.
#
# This targets verifies a download.

deps-verify-cephes: deps-download-cephes
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_CEPHES_DOWNLOAD_OUT) $(DEPS_CEPHES_CHECKSUM) >&2

.PHONY: deps-verify-cephes


# Extract Cephes.
#
# This target extracts a Cephes download.

deps-extract-cephes: $(DEPS_CEPHES_BUILD_OUT)

.PHONY: deps-extract-cephes


# Test install.
#
# This target tests an installation.

deps-test-cephes: $(DEPS_CEPHES_TEST_INSTALL_OUT)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) $(DEPS_CEPHES_TEST_INSTALL_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-cephes
