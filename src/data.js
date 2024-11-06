export const ListDataHomePage = [
    {
        title: "Đang chiếu",
        api: import.meta.env.VITE_DOMAIN_API + "movie/now_playing?api_key=" + import.meta.env.VITE_API_KEY + "&language=" + import.meta.env.VITE_API_LANG + "&page=1"
    },   
    {
        title: "Ưu thích",
        api: import.meta.env.VITE_DOMAIN_API + "movie/popular?api_key=" + import.meta.env.VITE_API_KEY + "&language=" + import.meta.env.VITE_API_LANG + "&page=1"
    },
    {
        title: "Sắp chiếu",
        api: import.meta.env.VITE_DOMAIN_API + "movie/upcoming?api_key=" + import.meta.env.VITE_API_KEY + "&language=" + import.meta.env.VITE_API_LANG + "&page=1"
    }
]
export const SilderData = [
    {
        img: "https://cdn.galaxycine.vn/media/2024/9/30/shopee-3_1727693002891.jpg",
        title: "KHỞI CHIẾU",
        description:"NGÀY 11/11/2024",
    },
    {
        img: "https://cdn.galaxycine.vn/media/2024/10/24/2048_1729756961121.jpg",
        title: "KHỞI CHIẾU",
        description:"NGÀY 11/11/2024",
    },
    {
        img: "https://cdn.galaxycine.vn/media/2024/10/18/co-dau-hao-mon-2048_1729221071482.jpg",
        title: "KHỞI CHIẾU",
        description:"NGÀY 11/11/2024"
    }

]


