
# VARIABLES #

# Define the download URL:
DEPS_ELECTRON_URL ?= https://github.com/electron/electron/releases/download/v$(DEPS_ELECTRON_VERSION)/electron-v$(DEPS_ELECTRON_VERSION)-$(DEPS_ELECTRON_PLATFORM)-$(DEPS_ELECTRON_ARCH).zip

# Determine the basename for the download:
deps_electron_basename := $(notdir $(DEPS_ELECTRON_URL))

# Define the path to the file containing a checksum verify a download:
DEPS_ELECTRON_CHECKSUM ?= $(shell cat $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(subst -,_,$(deps_electron_basename)))/sha256)

# Define the output path when downloading:
DEPS_ELECTRON_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_electron_basename)

# Define the path to the directory containing tests:
DEPS_ELECTRON_TEST_DIR ?= $(DEPS_DIR)/test/electron

# Define the path to a test file for checking an installation:
DEPS_ELECTRON_TEST_INSTALL ?= $(DEPS_ELECTRON_TEST_DIR)/test_install.js


# TARGETS #

# Download.
#
# This target downloads an Electron distribution.

$(DEPS_ELECTRON_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading Electron...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_ELECTRON_URL) $(DEPS_ELECTRON_DOWNLOAD_OUT)


# Extract.
#
# This target extracts a ZIP archive.

$(DEPS_ELECTRON_BUILD_OUT): $(DEPS_ELECTRON_DOWNLOAD_OUT) | $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting Electron...' >&2
	$(QUIET) $(UNZIP) -q $(DEPS_ELECTRON_DOWNLOAD_OUT) -d $@


# Download Electron.
#
# This target downloads an Electron distribution.

deps-download-electron: $(DEPS_ELECTRON_DOWNLOAD_OUT)

.PHONY: deps-download-electron


# Verify download.
#
# This targets verifies a download.

deps-verify-electron: deps-download-electron
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_ELECTRON_DOWNLOAD_OUT) $(DEPS_ELECTRON_CHECKSUM) >&2

.PHONY: deps-verify-electron


# Extract Electron.
#
# This target extracts an Electron download.

deps-extract-electron: $(DEPS_ELECTRON_BUILD_OUT)

.PHONY: deps-extract-electron


# Test install.
#
# This target tests an installation.

deps-test-electron: $(DEPS_ELECTRON_TEST_INSTALL)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) $(NODE) $(DEPS_ELECTRON_TEST_INSTALL)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-electron


# Install Electron.
#
# This target installs Electron.

install-deps-electron: deps-download-electron deps-verify-electron deps-extract-electron deps-test-electron

.PHONY: install-deps-electron


# Clean Electron.
#
# This target removes an Electron distribution (but does not remove an Electron download if one exists).

clean-deps-electron: clean-deps-electron-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_ELECTRON_BUILD_OUT)

.PHONY: clean-deps-electron


# Clean tests.
#
# This targets remove installation tests.

clean-deps-electron-tests:

.PHONY: clean-deps-electron-tests
