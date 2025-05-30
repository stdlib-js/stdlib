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
  (type (;0;) (func (param i32 i32 i32 i32) (result f64)))
  (type (;1;) (func))
  (type (;2;) (func (param i32 i32 i32) (result f64)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 1)
    nop)
  (func (;1;) (type 2) (param i32 i32 i32) (result f64)
    local.get 0
    local.get 1
    local.get 2
    i32.const 1
    local.get 0
    i32.sub
    local.get 2
    i32.mul
    i32.const 0
    local.get 2
    i32.const 0
    i32.le_s
    select
    call 2)
  (func (;2;) (type 0) (param i32 i32 i32 i32) (result f64)
    local.get 0
    i32.const 0
    i32.le_s
    if  ;; label = @1
      f64.const nan (;=nan;)
      return
    end
    local.get 0
    i32.const 1
    i32.ne
    i32.const 0
    local.get 2
    select
    i32.eqz
    if  ;; label = @1
      local.get 1
      local.get 3
      i32.const 3
      i32.shl
      i32.add
      f64.load
      return
    end
    local.get 0
    local.get 1
    local.get 2
    local.get 3
    call 3
    local.get 0
    f64.convert_i32_u
    f64.div)
  (func (;3;) (type 0) (param i32 i32 i32 i32) (result f64)
    (local i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 f64 f64 f64 f64 f64 f64 f64)
    local.get 0
    i32.const 0
    i32.le_s
    if  ;; label = @1
      f64.const 0x0p+0 (;=0;)
      return
    end
    block  ;; label = @1
      local.get 0
      i32.const 7
      i32.le_u
      if  ;; label = @2
        loop  ;; label = @3
          local.get 0
          local.get 4
          i32.eq
          br_if 2 (;@1;)
          local.get 4
          i32.const 1
          i32.add
          local.set 4
          local.get 14
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          f64.load
          f64.add
          local.set 14
          local.get 2
          local.get 3
          i32.add
          local.set 3
          br 0 (;@3;)
        end
        unreachable
      end
      local.get 0
      i32.const 128
      i32.le_u
      if  ;; label = @2
        local.get 1
        local.get 3
        i32.const 3
        i32.shl
        i32.add
        local.tee 4
        local.get 2
        i32.const 56
        i32.mul
        local.tee 8
        i32.add
        f64.load
        local.set 14
        local.get 4
        local.get 2
        i32.const 48
        i32.mul
        local.tee 9
        i32.add
        f64.load
        local.set 15
        local.get 4
        local.get 2
        i32.const 40
        i32.mul
        local.tee 10
        i32.add
        f64.load
        local.set 16
        local.get 4
        local.get 2
        i32.const 5
        i32.shl
        local.tee 11
        i32.add
        f64.load
        local.set 17
        local.get 4
        local.get 2
        i32.const 24
        i32.mul
        local.tee 12
        i32.add
        f64.load
        local.set 18
        local.get 4
        local.get 2
        i32.const 4
        i32.shl
        local.tee 13
        i32.add
        f64.load
        local.set 19
        local.get 4
        local.get 2
        i32.const 3
        i32.shl
        local.tee 6
        i32.add
        f64.load
        local.set 20
        local.get 0
        i32.const 248
        i32.and
        local.set 7
        local.get 4
        f64.load
        local.set 21
        i32.const 8
        local.set 5
        loop  ;; label = @3
          local.get 3
          local.get 6
          i32.add
          local.set 3
          local.get 5
          local.get 7
          i32.ge_u
          i32.eqz
          if  ;; label = @4
            local.get 14
            local.get 1
            local.get 3
            i32.const 3
            i32.shl
            i32.add
            local.tee 4
            local.get 8
            i32.add
            f64.load
            f64.add
            local.set 14
            local.get 15
            local.get 4
            local.get 9
            i32.add
            f64.load
            f64.add
            local.set 15
            local.get 16
            local.get 4
            local.get 10
            i32.add
            f64.load
            f64.add
            local.set 16
            local.get 17
            local.get 4
            local.get 11
            i32.add
            f64.load
            f64.add
            local.set 17
            local.get 18
            local.get 4
            local.get 12
            i32.add
            f64.load
            f64.add
            local.set 18
            local.get 19
            local.get 4
            local.get 13
            i32.add
            f64.load
            f64.add
            local.set 19
            local.get 20
            local.get 4
            local.get 6
            i32.add
            f64.load
            f64.add
            local.set 20
            local.get 5
            i32.const 8
            i32.add
            local.set 5
            local.get 21
            local.get 4
            f64.load
            f64.add
            local.set 21
            br 1 (;@3;)
          end
        end
        local.get 21
        local.get 20
        f64.add
        local.get 19
        local.get 18
        f64.add
        f64.add
        local.get 17
        local.get 16
        f64.add
        local.get 15
        local.get 14
        f64.add
        f64.add
        f64.add
        local.set 14
        local.get 7
        i32.const 1
        i32.sub
        i32.const -8
        i32.and
        i32.const 8
        i32.add
        local.set 4
        loop  ;; label = @3
          local.get 0
          local.get 4
          i32.le_s
          br_if 2 (;@1;)
          local.get 4
          i32.const 1
          i32.add
          local.set 4
          local.get 14
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          f64.load
          f64.add
          local.set 14
          local.get 2
          local.get 3
          i32.add
          local.set 3
          br 0 (;@3;)
        end
        unreachable
      end
      local.get 0
      i32.const 1
      i32.shr_u
      i32.const 1073741816
      i32.and
      local.tee 4
      local.get 1
      local.get 2
      local.get 3
      call 3
      local.get 0
      local.get 4
      i32.sub
      local.get 1
      local.get 2
      local.get 3
      local.get 2
      local.get 4
      i32.mul
      i32.add
      call 3
      f64.add
      local.set 14
    end
    local.get 14)
  (export "__wasm_call_ctors" (func 0))
  (export "stdlib_strided_dmeanpw" (func 1))
  (export "stdlib_strided_dmeanpw_ndarray" (func 2)))
