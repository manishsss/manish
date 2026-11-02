export interface Testimonial {quote:string;name:string;role:string;project:string;x:string}
export const testimonials:Testimonial[] = [];
// Owner-supplied logos and source links for Selected brand work.
// Subject labels checked against the public X post text; see reference/brand-post-subjects.json.
export interface BrandPost {label:string;url:string}
export interface Brand {name:string;logo:string|null;posts:BrandPost[]}
export const brands:Brand[] = [
  {name:'Bitget Wallet',logo:'/brands/bitget-wallet.png',posts:[
    {label:'Arc token discovery',url:'https://x.com/Web3Manish/status/2100503335430471703'},
    {label:'Trading Arc tokens',url:'https://x.com/Web3Manish/status/2101607679571742982'},
    {label:'Swap n Earn rewards',url:'https://x.com/Web3Manish/status/2113291742950965317'},
  ]},
  {name:'Maestro Bot',logo:'/brands/maestro-bot.png',posts:[
    {label:'Bridging and trading on Arc',url:'https://x.com/Web3Manish/status/2100060526932001242'},
  ]},
  {name:'CoinGecko',logo:'/brands/coingecko.png',posts:[
    {label:'RWA market overview',url:'https://x.com/Web3Manish/status/2109169798466904424'},
    {label:'Tokenized silver',url:'https://x.com/Web3Manish/status/2110289462999806294'},
    {label:'Tokenized gold',url:'https://x.com/Web3Manish/status/2105630719942983850'},
    {label:'Tracking onchain RWAs',url:'https://x.com/Web3Manish/status/2104511497129136330'},
  ]},
];
