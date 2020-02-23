module.exports = {
  encode: buf => buf.toString('base64').replace(/[+=\/]/g, match => ({'+': '-', '/': '_', '=': ''}[match])),
  decode: s => Buffer.from(s.replace(/[-_]/g, match => ({'-': '+', '_': '/'}[match])) + '='.repeat(3 - (s.length-1) % 4), 'base64')
}
