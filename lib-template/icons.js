import * as SvgIcons from 'material-ui/lib/svg-icons'

let icons = Object.keys(SvgIcons).map(iconName => {
    return {icon: SvgIcons[iconName], name: iconName};
}), prefixes = ['Action', 'Alert', 'Av', 'Communication', 'Content', 'Device', 'Editor',
    'File', 'Hardware', 'Image', 'Maps', 'Navigation', 'Notification', 'Places', 'Social',
    'Toggle'];
    
let iconGroups = prefixes.map(prefix => {
    return {
        icons: icons.filter(icon => icon.name.startsWith(prefix)),
        category: prefix
    };
});

let iconDict = {};

iconGroups.forEach((group) => {
    group.icons.forEach(iconObj => iconObj.name = iconObj.name.slice(group.category.length));
    iconDict[group.category] = group.icons;
});

export {iconDict as IconsDict};
export {prefixes as Categories}