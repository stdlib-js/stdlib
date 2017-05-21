
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/deps/python.mk
include $(TOOLS_MAKE_LIB_DIR)/deps/r.mk


# TARGETS #

# Install language dependencies.
#
# This target installs language dependencies:

install-lang-deps: install-deps-python install-deps-r

.PHONY: install-lang-deps


# Update language dependencies.
#
# This target updates language dependencies:

update-lang-deps: update-deps-python update-deps-r

.PHONY: update-lang-deps


# Clean language dependencies.
#
# This target removes language dependencies.

clean-lang-deps: clean-deps-python clean-deps-r

.PHONY: clean-lang-deps
