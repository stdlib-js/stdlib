
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/deps/python.mk


# TARGETS #

# Install language dependencies.
#
# This target installs language dependencies:

install-lang-deps: install-deps-python

.PHONY: install-lang-deps


# Clean language dependencies.
#
# This target removes language dependencies.

clean-lang-deps: clean-deps-python

.PHONY: clean-lang-deps
