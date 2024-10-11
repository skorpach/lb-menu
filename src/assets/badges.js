import spicyBadge from '@/assets/badges/icon_chilly.svg';
import gfBadge from '@/assets/badges/icon_gf.svg';
import favBadge from '@/assets/badges/icon_star.svg';
import blackSpicy from '@/assets/badges/icon_black_chilly.svg';
import blackGf from '@/assets/badges/icon_black_gf.svg';
import blackFav from '@/assets/badges/icon_black_star.svg';

export const colorIcons = {
    spicy: spicyBadge,
    gf: gfBadge,
    fav: favBadge,
};

export const blackIcons = {
    spicy: blackSpicy,
    gf: blackGf,
    fav: blackFav
};

// export default function badges(tags, set="default"){
//     if(!tags)
// 	return [];
    
//     var srcs = [];
//     let dict = badgeDict[set];

//     for(const [name, count] of Object.entries(tags)){
// 	if(count > 0){
// 	    var bSrc = dict[name] || "";
// 	    for(var i = 0; i < count; i++)
// 		srcs.push(bSrc);
// 	}
//     }

//     return srcs;
// };

