// 作品数据
const galleryItems = [
    {
        id: 1,
        image: 'images/gallery1.svg',
        title: '人物肖像',
        description: '现代风格的AI人物肖像',
        category: 'portrait',
        tags: ['人像', '现代风格']
    },
    {
        id: 2,
        image: 'images/gallery2.svg',
        title: '风景艺术',
        description: '梦幻般的AI风景创作',
        category: 'landscape',
        tags: ['风景', '梦幻风格']
    },
    {
        id: 3,
        image: 'images/service1.svg',
        title: '商业插画',
        description: '现代商业风格插画',
        category: 'commercial',
        tags: ['商业', '插画']
    },
    {
        id: 4,
        image: 'images/service2.svg',
        title: '概念设计',
        description: '未来科技风格概念设计',
        category: 'commercial',
        tags: ['概念', '科技']
    }
];

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    loadGallery('all');
    initializeFilters();
});

// 加载作品
function loadGallery(category) {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = '';

    const items = category === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === category);

    items.forEach(item => {
        const itemElement = createGalleryItem(item);
        galleryGrid.appendChild(itemElement);
    });

    // 添加动画效果
    setTimeout(() => {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.classList.add('show');
        });
    }, 100);
}

// 创建作品元素
function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-item-info">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="gallery-item-tags">
                ${item.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
        </div>
    `;

    return div;
}

// 初始化筛选按钮
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新按钮状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 加载对应分类的作品
            const category = button.getAttribute('data-filter');
            loadGallery(category);
        });
    });
}

// 添加页面滚动动画
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('show');
        }
    });
});
