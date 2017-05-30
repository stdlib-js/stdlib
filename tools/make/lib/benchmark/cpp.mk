
# TARGETS #

# Run C++ benchmarks.
#
# This target runs a list of C++ benchmarks consecutively.

benchmark-cpp:
	$(QUIET) for file in $(CPP_BENCHMARKS); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		cd `dirname $$file` && \
		$(MAKE) clean && \
		$(MAKE) && \
		$(MAKE) run || exit 1; \
	done

.PHONY: benchmark-cpp
