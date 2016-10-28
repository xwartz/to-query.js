const toQuery = (object, showSub) => {
  const rbracket = /\[\]$/
  const r20 = /%20/g
  const s = []

  const add = (key, value) => {
    const v = typeof value === 'function' ? value() : (value === null ? '' : (value === undefined ? '' : value))
    s[s.length] = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  }

  const buildParams = (prefix, obj) => {
    let i
    let len
    let key

    if (prefix) {
      if (Array.isArray(obj)) {
        for (i = 0, len = obj.length; i < len; i++) {
          if (rbracket.test(prefix)) {
            add(prefix, obj[i])
          } else {
            const sub = showSub ? typeof obj[i] === 'object' ? i : '' : ''
            buildParams(`${prefix}[${sub}]`, obj[i])
          }
        }
      } else if (obj && String(obj) === '[object Object]') {
        for (key in obj) {
          buildParams(`${prefix}[${key}]`, obj[key])
        }
      } else {
        add(prefix, obj)
      }
    } else if (Array.isArray(obj)) {
      for (i = 0, len = obj.length; i < len; i++) {
        add(obj[i].name, obj[i].value)
      }
    } else {
      for (key in obj) {
        buildParams(key, obj[key])
      }
    }
    return s
  }

  return buildParams('', object).join('&').replace(r20, '+')
}

export default toQuery
