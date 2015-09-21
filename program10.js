function loggerBind(namespace) {
  return console.log.bind(console, namespace)
}

module.exports = loggerBind