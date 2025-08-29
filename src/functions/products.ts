import {products as data} from '../data/data';
export function Products() {
    const newProducts = data.filter((item) => item.new === true);
    const headphones = data.filter((item) => item.category === 'headphones');
    const speakers = data.filter((item) => item.category === 'speakers');
    const earphones = data.filter((item) => item.category === 'earphones');


    function getItemsBySlug(slug: string) {
        return data.find((item) => item.slug === slug);
    }
    
    return { newProducts, headphones, speakers, earphones, getItemsBySlug } 
}