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
  (type (;1;) (func (param i32 i32 i32) (result f64)))
  (type (;2;) (func (param i32 i32 i32 i32) (result f64)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32) (result f64)
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
  (func (;2;) (type 2) (param i32 i32 i32 i32) (result f64)
    (local f64 f64 f64 f64 f64 f64 f64 f64 i32 i32 i32 i32 i32 i32 i32 i32 i32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      br_if 0 (;@1;)
      local.get 2
      i32.eqz
      if  ;; label = @2
        local.get 1
        f64.load
        local.tee 5
        local.get 5
        f64.ne
        br_if 1 (;@1;)
        local.get 5
        local.get 0
        f64.convert_i32_u
        f64.mul
        return
      end
      local.get 0
      i32.const 7
      i32.le_u
      if  ;; label = @2
        loop  ;; label = @3
          local.get 0
          local.get 12
          i32.eq
          br_if 2 (;@1;)
          local.get 4
          local.get 4
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          f64.load
          local.tee 4
          f64.add
          local.get 4
          local.get 4
          f64.ne
          select
          local.set 4
          local.get 12
          i32.const 1
          i32.add
          local.set 12
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
        f64.load
        local.tee 4
        f64.const 0x0p+0 (;=0;)
        local.get 4
        local.get 4
        f64.eq
        select
        local.set 4
        local.get 1
        local.get 2
        local.get 3
        i32.add
        local.tee 3
        i32.const 3
        i32.shl
        i32.add
        f64.load
        local.tee 5
        f64.const 0x0p+0 (;=0;)
        local.get 5
        local.get 5
        f64.eq
        select
        local.set 5
        local.get 1
        local.get 2
        local.get 3
        i32.add
        local.tee 3
        i32.const 3
        i32.shl
        i32.add
        f64.load
        local.tee 6
        f64.const 0x0p+0 (;=0;)
        local.get 6
        local.get 6
        f64.eq
        select
        local.set 6
        local.get 1
        local.get 2
        local.get 3
        i32.add
        local.tee 3
        i32.const 3
        i32.shl
        i32.add
        f64.load
        local.tee 7
        f64.const 0x0p+0 (;=0;)
        local.get 7
        local.get 7
        f64.eq
        select
        local.set 7
        local.get 1
        local.get 2
        local.get 3
        i32.add
        local.tee 3
        i32.const 3
        i32.shl
        i32.add
        f64.load
        local.tee 8
        f64.const 0x0p+0 (;=0;)
        local.get 8
        local.get 8
        f64.eq
        select
        local.set 8
        local.get 1
        local.get 2
        local.get 3
        i32.add
        local.tee 3
        i32.const 3
        i32.shl
        i32.add
        f64.load
        local.tee 9
        f64.const 0x0p+0 (;=0;)
        local.get 9
        local.get 9
        f64.eq
        select
        local.set 9
        local.get 1
        local.get 2
        local.get 3
        i32.add
        local.tee 3
        i32.const 3
        i32.shl
        i32.add
        f64.load
        local.tee 10
        f64.const 0x0p+0 (;=0;)
        local.get 10
        local.get 10
        f64.eq
        select
        local.set 10
        local.get 1
        local.get 2
        local.get 3
        i32.add
        local.tee 3
        i32.const 3
        i32.shl
        i32.add
        f64.load
        local.tee 11
        f64.const 0x0p+0 (;=0;)
        local.get 11
        local.get 11
        f64.eq
        select
        local.set 11
        local.get 2
        i32.const 48
        i32.mul
        local.set 14
        local.get 2
        i32.const 40
        i32.mul
        local.set 15
        local.get 2
        i32.const 5
        i32.shl
        local.set 16
        local.get 2
        i32.const 24
        i32.mul
        local.set 17
        local.get 2
        i32.const 4
        i32.shl
        local.set 18
        local.get 2
        i32.const 7
        i32.mul
        local.set 19
        local.get 0
        i32.const 248
        i32.and
        local.set 20
        i32.const 8
        local.set 12
        loop  ;; label = @3
          local.get 2
          local.get 3
          i32.add
          local.set 3
          local.get 12
          local.get 20
          i32.ge_u
          i32.eqz
          if  ;; label = @4
            local.get 5
            local.get 1
            local.get 3
            i32.const 3
            i32.shl
            i32.add
            local.tee 13
            local.get 2
            i32.const 3
            i32.shl
            i32.add
            f64.load
            local.tee 5
            f64.const 0x0p+0 (;=0;)
            local.get 5
            local.get 5
            f64.eq
            select
            f64.add
            local.set 5
            local.get 4
            local.get 13
            f64.load
            local.tee 4
            f64.const 0x0p+0 (;=0;)
            local.get 4
            local.get 4
            f64.eq
            select
            f64.add
            local.set 4
            local.get 11
            local.get 1
            local.get 3
            local.get 19
            i32.add
            local.tee 3
            i32.const 3
            i32.shl
            i32.add
            f64.load
            local.tee 11
            f64.const 0x0p+0 (;=0;)
            local.get 11
            local.get 11
            f64.eq
            select
            f64.add
            local.set 11
            local.get 10
            local.get 13
            local.get 14
            i32.add
            f64.load
            local.tee 10
            f64.const 0x0p+0 (;=0;)
            local.get 10
            local.get 10
            f64.eq
            select
            f64.add
            local.set 10
            local.get 9
            local.get 13
            local.get 15
            i32.add
            f64.load
            local.tee 9
            f64.const 0x0p+0 (;=0;)
            local.get 9
            local.get 9
            f64.eq
            select
            f64.add
            local.set 9
            local.get 8
            local.get 13
            local.get 16
            i32.add
            f64.load
            local.tee 8
            f64.const 0x0p+0 (;=0;)
            local.get 8
            local.get 8
            f64.eq
            select
            f64.add
            local.set 8
            local.get 7
            local.get 13
            local.get 17
            i32.add
            f64.load
            local.tee 7
            f64.const 0x0p+0 (;=0;)
            local.get 7
            local.get 7
            f64.eq
            select
            f64.add
            local.set 7
            local.get 6
            local.get 13
            local.get 18
            i32.add
            f64.load
            local.tee 6
            f64.const 0x0p+0 (;=0;)
            local.get 6
            local.get 6
            f64.eq
            select
            f64.add
            local.set 6
            local.get 12
            i32.const 8
            i32.add
            local.set 12
            br 1 (;@3;)
          end
        end
        local.get 4
        local.get 5
        f64.add
        local.get 6
        local.get 7
        f64.add
        f64.add
        local.get 8
        local.get 9
        f64.add
        local.get 10
        local.get 11
        f64.add
        f64.add
        f64.add
        local.set 4
        loop  ;; label = @3
          local.get 0
          local.get 12
          i32.le_s
          br_if 2 (;@1;)
          local.get 4
          local.get 4
          local.get 1
          local.get 3
          i32.const 3
          i32.shl
          i32.add
          f64.load
          local.tee 4
          f64.add
          local.get 4
          local.get 4
          f64.ne
          select
          local.set 4
          local.get 12
          i32.const 1
          i32.add
          local.set 12
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
      local.tee 12
      local.get 1
      local.get 2
      local.get 3
      call 2
      local.get 0
      local.get 12
      i32.sub
      local.get 1
      local.get 2
      local.get 3
      local.get 2
      local.get 12
      i32.mul
      i32.add
      call 2
      f64.add
      local.set 4
    end
    local.get 4)
  (export "__wasm_call_ctors" (func 0))
  (export "stdlib_strided_dnansumpw" (func 1))
  (export "stdlib_strided_dnansumpw_ndarray" (func 2)))
