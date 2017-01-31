
# VARIABLES #

# Determine the OS:
OS := $(shell uname)
ifneq (, $(findstring MINGW,$(OS)))
	OS := WINNT
else
ifneq (, $(findstring MSYS,$(OS)))
	OS := WINNT
endif
endif

# Define the C compiler:
C_COMPILER ?= gcc

# Define the C++ compiler:
CXX_COMPILER ?= g++

# Define the Fortran compiler:
FORTRAN_COMPILER ?= gfortran

# Define the linker:
LINKER ?= g++

# Determine whether to generate [position independent code][1]:
#
# [1]: https://gcc.gnu.org/onlinedocs/gcc/Code-Gen-Options.html#Code-Gen-Options
# [2]: http://stackoverflow.com/questions/5311515/gcc-fpic-option

ifeq ($(OS), WINNT)
	fPIC ?=
else
	fPIC ?= -fPIC
endif


# TARGETS #

# Install add-ons.
#
# This target installs native add-ons.

install-addons:
	$(QUIET) $(MAKE) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Compiling add-on: $$pkg"; \
		cd $$pkg/src && \
			FC=$(FC) \
			FORTRAN_COMPILER=$(FORTRAN_COMPILER) \
			CC=$(CC) \
			C_COMPILER=$(C_COMPILER) \
			CXX=$(CXX) \
			CXX_COMPILER=$(CXX_COMPILER) \
			LINKER=$(LINKER) \
			fPIC=$(fPIC) \
			$(MAKE) \
		|| exit 1; \
	done

.PHONY: install-addons


# Remove add-ons.
#
# This target removes all compiled and generated files for native add-ons.

clean-addons:
	$(QUIET) $(MAKE) -f $(this_file) list-pkgs-addons | while read -r pkg; do \
		if echo "$$pkg" | grep -v '^\/.*\|^[a-zA-Z]:.*' >/dev/null; then \
			continue; \
		fi; \
		echo ''; \
		echo "Cleaning add-on: $$pkg"; \
		cd $$pkg/src && $(MAKE) clean || exit 1; \
	done

.PHONY: clean-addons
