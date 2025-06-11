// =======================================================================
// ★ 第1步: 配置你的分类qweqeqeqwedqweqweq
// =======================================================================
// - id:      分类的唯一标识符（英文），请勿重复。
// - name:    分类的显示名称。
// - svg:     分类的SVG图标代码 (可以从 https://lucide.dev/ 网站查找并复制)。
const navCategories = [
    {
        id: 'work',
        name: '工作',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
    },dadaw
    {
        id: 'media',
        name: '影音',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-popcorn"><path d="M18 8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2"/><path d="m10 12 1 6"/><path d="m14 12-1 6"/><path d="M18 12h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2"/><path d="M6 12H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"/><path d="M18 18h-2a4 4 0 0 1-4-4h0a4 4 0 0 1-4 4H6"/></svg>'
    },
    {123
        id: 'tools',
        name: '工具',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
    },
    {
        id: 'memo', // <-- 新增的备忘录分类ID
        name: '备忘录',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 12h4"/><path d="M2 18h2"/><path d="M2 6h4"/><path d="m18 2-3 3 2 2 3-3"/><path d="M19.5 7.5 17 5"/></svg>'
    }
];

// =======================================================================
// ★ 第2步: 配置你的网站链接和备忘录内容
// =======================================================================
// - category: 所属分类的 `id`。
// - name:     显示名称。
// - url:      (可选) 网站链接。如果这是一个备忘录条目，可以留空。
// - memo:     (可选) 备忘录的详细文字内容。
const siteData = [
    // --- 网站链接示例 ---
    {
        category: 'work',
        name: 'GitHub',
        url: 'https://github.com'
    },
    {
        category: 'work',
        name: 'VSCode',
        url: 'https://code.visualstudio.com/'
    },
    {
        category: 'media',
        name: 'Bilibili',
        url: 'https://www.bilibili.com'
    },
    {
        category: 'media',
        name: 'YouTube',
        url: 'https://www.youtube.com'
    },
    {
        category: 'tools',
        name: '在线PS',
        url: 'https://www.photopea.com/'
    },
    {
        category: 'tools',
        name: '菜鸟工具',
        url: 'https://c.runoob.com/'
    },
    
    // --- 备忘录内容示例 (请将它们放在 `memo` 分类下) ---
    {
        category: 'memo',
        name: '购物清单',
        memo: '牛奶、鸡蛋、面包、咖啡豆'
    },
    {
        category: 'memo',
        name: '项目TODO',
        memo: '1. 完成首页UI调整。<br>2. 测试移动端兼容性。<br>3. 准备周五的演示PPT。' // <br>可以用来换行
    },
    {
        category: 'memo',
        name: '常用命令',
        url: '#', // 如果希望它能点击但又不去任何地方, url可以写'#'
        memo: 'Git提交: git commit -m "..."<br>服务器重启: sudo reboot'
    }
];
