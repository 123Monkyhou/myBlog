const objMap = {
    "title": '老马烧鹅铺',
    "notes": "笔记",
    "meeting": "面试",
    "guide": "测试",
    "write": "笔试",
    "gitee": "https://gitee.com/monky-hou",
    "logo": "/logo.png",
    "github": "https://github.com/123Monkyhou",
    "description": "一个vue3组件库"
}
const path = require('path');
const fs = require('fs');

const configGenerate = () => {
    const currentDir = path.resolve(__dirname, '../doc')
    const files = fs.readdirSync(currentDir);
    const nav = files.map(file => {
        return {
            text: objMap[file],
            link: `/doc/${file}/index.md`,
        }
    })
    const sidebar = files.reduce((prev, cur, ne) => {
        prev[`doc/${cur}/`] = getDocItem(cur);
        return prev
    }, {})

    return {
        title: objMap['title'],
        description: objMap['description'],
        themeConfig: {
            siteTitle: objMap['title'],
            logo: objMap["logo"],
            nav,
            sidebar,
        }
    }
}
const getDocItem = (docfile) => {
    const currentItemUrl = path.resolve(__dirname, `../doc/${docfile}`)
    const filesItem = fs.readdirSync(currentItemUrl);
    const item = {
        text: `${objMap[docfile]}`,
        collapsible: true,
        collapsed: false,
        items: []
    }
    let itemArray = [item]

    filesItem.forEach(fileItem => {
        let curisDir = fs.lstatSync(currentItemUrl + '/' + fileItem).isDirectory()
        if (curisDir) {
            itemArray.push(
                {
                    text: `${fileItem}`,
                    collapsible: true,
                    collapsed: false,
                    items: fs.readdirSync(currentItemUrl + '/' + fileItem).map(t => {
                        if (t.split('.')[1] == 'md') {
                            const tx = t.split('.')[0]
                            return {
                                text: tx,
                                link: `/doc/${docfile}/${fileItem}/${tx}`
                            }
                        }
                    })
                })

        } else {
            itemArray[0].items = [...itemArray[0].items, {
                text: fileItem.split('.')[0] == 'index' ? '首页' : fileItem.split('.')[0],
                link: `/doc/${docfile}/${fileItem.split('.')[0]}`
            }]
        }
    })
    return itemArray
}
const config = configGenerate()

export default config