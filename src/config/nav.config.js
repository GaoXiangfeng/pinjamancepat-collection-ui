import messagesCn from '../language/cn/nav'
import messagesEn from '../language/en/nav'
import messagesIndo from '../language/indo/nav'
import localStorage from '../services/localStorage.service'
import config from '../config'
const opRedirectUrl = config.LoginUrl

let user = localStorage.get('user');
let menuCn = messagesCn.nav.slice(0);
let menuEn = messagesEn.nav.slice(0);
let menuIndo = messagesIndo.nav.slice(0);
let role = []
let roleText = {
    1: 'DEVGLY',//开发管理员==用户管理员
    2: 'CSRY',//催收员
    3: 'COMPANY',//公司管理员
    4: 'USERGLY',//用户管理员
}

let loopNav = (menu) => {
    for (let k = 0; k < menu.length; k++) {
        let num = 0;
        for (let i = 0; i < role.length; i++) {
            if (menu[k].role) {
                if (menu[k].role.indexOf(role[i]) === -1) {
                    num++;
                    if (num == role.length) {
                        menu.splice(k, 1);
                        --k;
                        continue;
                    }
                }
            }

            if (!menu[k].role) {
                menu.splice(k, 1);
                --k;
                continue;
            }

            if (menu[k].children) {
                loopNav(menu[k].children);
            }
        }
    }
}

if (user && user.role) {
    role.push(roleText[user.role])
} else {
    window.location.href = opRedirectUrl
    location.reload()
}

if (role.length>0 && role.indexOf('GLY') === -1) {
    // 如果非管理员，只能访问，当前权限的
    loopNav(menuCn);
    loopNav(menuEn);
    loopNav(menuIndo);
}

export default {
    menuCn,menuEn,menuIndo
}
