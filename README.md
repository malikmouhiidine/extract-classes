# extract-classes

**A command-line tool** to extract classes from an HTML, JSX, etc. file to a CSS file.

## Install

```bash
$ npm install extract-classes
```

## Usage

```bash
$ extract-classes [options]
```

## Options

```
  -V, --version            output the version number
  -k, --keyword <keyword>  The keyword to search for the attribute in the file (default: class)
  -i, --input <file>       Input file (required)
  -o, --output <file>      Output file (optional) (default: <input-filename>.css))
  -h, --help               display help for command
```

## Example

We have an `index.html` and we want to output it to `styles.css`

`index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1 class="foo">This is a Heading</h1>
    <p class="bar">This is a paragraph.</p>
    <p class="baz">This is a paragraph.</p>
  </body>
</html>
```

We execute the following command:

```bash
$ extract-classes -i index.html
Created Successfully!
```

Then an `index.css` will be created with the following classes:

```css
.foo {

}
.bar {

}
.baz {

}
```

💡 **If you want to use it with JSX, for example,** it suffices to specify `--keyword="className"`.

## Contributing

Feel free to fork and submit pull requests.
