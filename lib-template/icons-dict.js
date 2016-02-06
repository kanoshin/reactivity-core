import {Categories as IconCategories} from 'lib-template/icons-categories.js'
import * as SvgIcons from 'material-ui/lib/svg-icons'

let icons = Object.keys(SvgIcons).map(iconName => {
    return {icon: SvgIcons[iconName], name: iconName};
});
    
let iconGroups = IconCategories.map(prefix => {
    return {
        icons: icons.filter(icon => icon.name.startsWith(prefix)),
        category: prefix.toLowerCase()
    };
});

let iconDict = {};

iconGroups.forEach((group) => {
    group.icons.forEach(iconObj => iconObj.name = iconObj.name.slice(group.category.length));
    iconDict[group.category] = group.icons;
});

export {iconDict as IconsDict};