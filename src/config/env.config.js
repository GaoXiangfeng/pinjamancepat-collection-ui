const protocol = window.location.protocol
const qiniuHost = 'https://oic74zs8j.qnssl.com/'
// const opapiHost = `${protocol}//192.168.2.213:9001` //晓航开发环境
//const opapiHost = `${protocol}//101.201.238.13:9003` //测试环境
const opapiHost = `${protocol}//pinjaman-collection-api-test1.xiaoxinfen.com` //测试环境
const translateHost = `${protocol}//translate-dongmeifeng1.liangkebang.com` //测试环境
let LoginUrl = `${protocol}/login`  // 登录页
let domain = ''

export default{
    qiniuHost,
    opapiHost,
    translateHost,
    LoginUrl,
    domain
}
