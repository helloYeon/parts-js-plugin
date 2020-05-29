# MMMModal

## Setup

- [Download ZIP](http://google.com)

## Configuration

#### 1.1 Practical Example

```js
$(".mmmmodal-sample2").mmmmodal({
  type: "movie",
  overlay_opacity: "0.5",
  background: "#162CBD",
  background_scroll: false,
});
```

#### 1.2 Configuration Options

 | key               | type    | default   | values               | notes             |
 | :---------------- | :------ | :-------- | :------------------- | :---------------- |
 | type              | string  | inline    | `inline`<br> `movie` |                   |
 | background_scroll | boolean | false     | `true`<br> `false`   |                   |
 | overlay_opacity   | float   | 0.9       |                      |                   |
 | background        | string  | #000000   |                      |                   |
 | close_btn         | string  | close-btn |                      | Botton Class Name |
 | duration          | int     | 500       |                      | ex) 500 → 0.5s    |
 | custom_css        | object  | ※1        |                      |                   |

#### note ※1

```js
{
  position: "fixed",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  transition: "background-color .6s ease-out",
  display: "none",
  z-index:"1"
}
```

## License

---
MIT license.
