;; @license Apache-2.0
;;
;; Copyright (c) 2025 The Stdlib Authors.
;;
;; Licensed under the Apache License, Version 2.0 (the "License");
;; you may not use this file except in compliance with the License.
;; You may obtain a copy of the License at
;;
;;    http://www.apache.org/licenses/LICENSE-2.0
;;
;; Unless required by applicable law or agreed to in writing, software
;; distributed under the License is distributed on an "AS IS" BASIS,
;; WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
;; See the License for the specific language governing permissions and
;; limitations under the License.

(module
  (type (;0;) (func))
  (type (;1;) (func (param i32 f64 i32 i32) (result f64)))
  (type (;2;) (func (param i32 f64 i32 i32 i32) (result f64)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 f64 i32 i32) (result f64)
    local.get 0
    local.get 1
    local.get 2
    local.get 3
    i32.const 1
    local.get 0
    i32.sub
    local.get 3
    i32.mul
    i32.const 0
    local.get 3
    i32.const 0
    i32.le_s
    select
    call 2)
  (func (;2;) (type 2) (param i32 f64 i32 i32 i32) (result f64)
    (local f64 f64 f64 f64 f64 i32 i32)
    f64.const nan (;=nan;)
    local.set 8
    block  ;; label = @1
      block  ;; label = @2
        local.get 0
        i32.const 0
        i32.le_s
        br_if 0 (;@2;)
        local.get 3
        i32.eqz
        local.get 0
        i32.const 1
        i32.eq
        i32.or
        br_if 1 (;@1;)
        loop  ;; label = @3
          local.get 0
          local.get 11
          i32.eq
          i32.eqz
          if  ;; label = @4
            local.get 2
            local.get 4
            i32.const 3
            i32.shl
            i32.add
            f64.load
            local.tee 7
            local.get 7
            f64.eq
            if  ;; label = @5
              local.get 7
              local.get 6
              f64.sub
              local.tee 9
              local.get 7
              local.get 6
              local.get 9
              local.get 10
              i32.const 1
              i32.add
              local.tee 10
              f64.convert_i32_s
              f64.div
              f64.add
              local.tee 6
              f64.sub
              f64.mul
              local.get 5
              f64.add
              local.set 5
            end
            local.get 11
            i32.const 1
            i32.add
            local.set 11
            local.get 3
            local.get 4
            i32.add
            local.set 4
            br 1 (;@3;)
          end
        end
        local.get 10
        f64.convert_i32_s
        local.get 1
        f64.sub
        local.tee 1
        f64.const 0x0p+0 (;=0;)
        f64.le
        br_if 0 (;@2;)
        local.get 5
        local.get 1
        f64.div
        local.set 8
      end
      local.get 8
      return
    end
    f64.const 0x0p+0 (;=0;)
    f64.const nan (;=nan;)
    local.get 1
    local.get 0
    f64.convert_i32_u
    f64.lt
    select
    f64.const nan (;=nan;)
    local.get 2
    local.get 4
    i32.const 3
    i32.shl
    i32.add
    f64.load
    local.tee 1
    local.get 1
    f64.eq
    select)
  (export "__wasm_call_ctors" (func 0))
  (export "stdlib_strided_dnanvariancewd" (func 1))
  (export "stdlib_strided_dnanvariancewd_ndarray" (func 2)))
