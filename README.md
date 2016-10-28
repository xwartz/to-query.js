# to-query.js
Serialize a set of key/values into a query string, like ruby [to_query](http://apidock.com/rails/ActiveSupport/CoreExtensions/Hash/to_query) method.

## Usage

ES6:

```js
import toQuery from 'to-query.js'

toQuery({ arr: [{ a:1, b: 2 }, { a: 3, b: 4 }] }) 
// => "arr[][a]=1&arr[][b]=2&arr[][a]=3&arr[][b]=4"

toQuery({ arr: [{ a:1, b: 2 }, { a: 3, b: 4 }] }, true) 
// => "arr[0][a]=1&arr[0][b]=2&arr[1][a]=3&arr[1][b]=4"

toQuery({ a: 'v', b: [1, 2, 3] })
// => "a=v&b[]=1&b[]=2&v[]=3"

```

## License

MIT © [xwartz](https://github.com/xwartz)
