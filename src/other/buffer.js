/**
 * 缓冲区
 * 专门用于处理、存放二进制数据的缓存区
 */
const buf = Buffer.from('testWord', 'ascii');
// 输出 74657374576f7264
console.log(buf.toString('hex'));
// 输出 dGVzdFdvcmQ=
console.log(buf.toString('base64'));

