export type Locale = 'en' | 'id';
export const locales: Locale[] = ['en','id'];
export const site = {
 name: 'PT Mekanikal Glass Analitik', email: 'mekanikalglassanalitik@gmail.com',
 office: { name:'Anna Mariaga', whatsapp:'08112341010', wa:'628112341010', phone:'082115226477', tel:'+6282115226477', address:'Jl. Bukit Reuma No. 50, RT 07/RW 19, Kel. Sadang Serang, Kec. Coblong, Kota Bandung 40133.' },
 workshop: { name:'Rio Aria Sanova', whatsapp:'0812 9973 1583', wa:'6281299731583', address:'Jl. Bukit Reuma No. 43, RT 07/RW 19, Kel. Sadang Serang, Kec. Coblong, Kota Bandung 40133.' }
};
export const pick = (lang:Locale,en:string,id:string) => lang==='en'?en:id;
export const nav = [
 {path:'about',en:'About us',id:'Tentang kami'}, {path:'products',en:'Products',id:'Produk'},
 {path:'services',en:'Services',id:'Layanan'}, {path:'projects',en:'Projects',id:'Proyek'}, {path:'contact',en:'Contact',id:'Kontak'}
];
export const categories = [
 {id:'rotary',en:'Rotary Evaporators',idName:'Rotary Evaporator'},
 {id:'volumetric',en:'Volumetric Equipment',idName:'Alat Volumetrik'},
 {id:'physical',en:'Physical Measurement',idName:'Pengukuran Fisik'},
 {id:'glassware',en:'Laboratory Glassware',idName:'Glassware Laboratorium Kimia'},
 {id:'components',en:'Apparatus & Components',idName:'Apparatus dan Komponen'}
];
export const products = [
 {slug:'rotary-evaporator',category:'rotary',image:'rotary-evaporator.png',en:'Rotary Evaporator',id:'Rotary Evaporator',summary:{en:'Explore a glassware system for laboratory evaporation requirements.',id:'Jelajahi sistem glassware untuk kebutuhan evaporasi laboratorium.'}},
 {slug:'laboratory-support',category:'components',image:'laboratory-support.png',en:'Laboratory Support',id:'Statif Laboratorium',summary:{en:'Discuss a supporting component for your laboratory apparatus setup.',id:'Diskusikan komponen penyangga untuk susunan apparatus laboratorium Anda.'}},
 {slug:'glass-condenser',category:'components',image:'glass-condenser.png',en:'Glass Condenser',id:'Kondensor Kaca',summary:{en:'A glass component to discuss as part of your apparatus requirements.',id:'Komponen kaca untuk dikonsultasikan sesuai kebutuhan apparatus Anda.'}}
];
export const projects = [
 {slug:'distillation-apparatus',en:'Distillation apparatus',id:'Apparatus distilasi',summary:{en:'A source case involving distillation for palm oil applications.',id:'Kandidat kasus dari sumber untuk kebutuhan distilasi pada aplikasi minyak sawit.'}},
 {slug:'education-glassware',en:'Glassware for education',id:'Glassware untuk pendidikan',summary:{en:'A source case involving glassware for an educational setting.',id:'Kandidat kasus dari sumber untuk kebutuhan glassware di lingkungan pendidikan.'}}
];
export const whatsapp = (message:string, workshop=false) => `https://wa.me/${workshop?site.workshop.wa:site.office.wa}?text=${encodeURIComponent(message)}`;
