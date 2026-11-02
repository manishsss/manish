export interface CampaignMetric {value: string; label: string}
export interface Campaign {id:string;project:string;type:string;logo:string|null;projectUrl:string;proofUrl:string;description:string;metrics:CampaignMetric[];role:string;spend:string}
// Campaign figures and proof link confirmed by Manish. Logo from xento.org/brand/mark.png.
export const campaigns: Campaign[] = [{
 id:'xento', project:'Xento', type:'KOL Campaign',
 logo:'/brands/xento.png',
 projectUrl:'https://x.com/xentoquests',
 proofUrl:'https://x.com/Web3Manish/status/2103483701992833416',
 description:'Managed a creator campaign for Xento, a free-to-play quest platform.',
 metrics:[{value:'38',label:'Creators'},{value:'60K+',label:'Campaign views'},{value:'200+',label:'Users onboarded'}],
 role:'Creator sourcing, shortlisting, rate negotiation, creator coordination, campaign execution, and results tracking.',
 spend:'$1,250'
}];
export const predictionMarkets = {stats:[{value:'13+',label:'Referral Signups'},{value:'$800+',label:'Trading Volume'}],posts:null,views:null,description:'Content focused on prediction markets, trading strategies, market analysis and new opportunities.'};
