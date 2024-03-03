const mainNavLink: {name: string, href: string}[] = [
    {name: "Home", href: "/"},
    {name: "Men", href: "/men"},
    {name: "Women", href: "/women"},
    {name: "Kids", href: "/kids"}
]
const collectionLink: {collectionName: string, href: string}[] = [
    {collectionName:"All",href:"/products"},
    {collectionName:"Men",href:"/men"},
    {collectionName:"Women",href:"/women"},
    {collectionName:"Kids",href:"/kids"} 
]
const socialLinks = [
    {
        iconName:  'Instagram',
        icon:  'icon-instagram.svg',
        URL: 'https://www.instagram.com/'
    },
    {
        iconName:  'Facebook',
        icon:  'icon-facebook.svg',
        URL: 'https://www.facebook.com/'
    },
    {
        iconName:  'linkedIn',
        icon:  'icon-linkedin.svg',
        URL: 'https://www.linkedin.com/'
    },
]
export {mainNavLink, collectionLink, socialLinks} 