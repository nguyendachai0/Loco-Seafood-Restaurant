export const RESTAURANT_INFO = {
  name: "LoCo Restaurant",
  nameVi: "Nhà hàng LoCo",
  phone: "+84 906 456 785",
  email: "locorestaurant@gmail.com",
  address: "1C Lê Duẩn, Phường Hải Châu 1, Quận Hải Châu, Da Nang, Vietnam",
  addressVi: "1C Lê Duẩn, Phường Hải Châu 1, Quận Hải Châu, Da Nang, Vietnam",
  coordinates: {
    lat: 16.0544,
    lng: 108.2442,
  },
  hours: {
    weekday: "10:00 AM - 10:00 PM",
    weekend: "10:00 AM - 11:00 PM",
    monday: "Closed",
  },
  social: {
    facebook: "https://facebook.com/restaurantloco",
    instagram: "https://instagram.com/restaurantloco",
    // tripadvisor: "https://tripadvisor.com/restaurantloco",
  },
  chat: {
    messenger: "restaurantloco", // Replace with your Facebook Page ID
    zalo: "0906456785", // Replace with your Zalo phone number
    whatsapp: "84906456785", // Replace with international format (no + or spaces)
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8840555286424!2d108.22159057365586!3d16.07150533937997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421977569bbd1f%3A0xa664a343c71a38a1!2zTG9DbyBSZXN0YXVyYW50IC0gRGFuYW5nIHNlYWZvb2QgcmVzdGF1cmFudCAtIOuLpOuCrSDroIjsiqTthqDrnpE!5e0!3m2!1sen!2s!4v1761211175424!5m2!1sen!2s"
} as const;

export const ROUTES = {
  home: '/',
  menu: '/menu',
  location: '/location',
  contact: '/contact',
  reserve: '/reserve',
} as const;