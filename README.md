# React Custom Hooks

## 1. useToggle

toggle value or set To True or False
常用在按鈕 設定兩種情況

## 2. useTimeout

可以在一開始 render 過幾秒後跳回去
reset or clear

## 3. useDebounce

使用 useTimeout
點擊很多下之後 一秒之內沒有點擊 做某些事情 (callback)

## 4. useUpdateEffect

只有在 value 更新的時候做事 (把第一次 render 的時候判斷掉)

## 5. useArray

array 的各種實作 set remove push filter update

## 6. usePrevious

可以儲存上一個的 state 的值

## 7. useStateWithHistory

history 是一個 array 然後有 pointer 可以只像現在的 value
set 是可以根據現在的值產生下一個值或是直接 set 值

## 8.useStorage

第一個值是 key 第二個值是 value
localStorage || sessionStorage

getItem removeItem setItem

## 9. useAsync

第一個值是 callback 要回傳 Async 或是 Promise
第二個是 dependencies

## 10. useFetch

使用 useAsync 把 callback 換成 fetch
第一個值是 url
第二個值是 option Ex:
{"Content-type":"application/json"}
第三個值是 dependencies
