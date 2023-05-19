import { 
    faChampagneGlasses,
    faSquare,
    faBriefcase,
    faCommentDollar,
    faSackDollar,
    faCar,
    faBoltLightning,
    faCircleQuestion
} from '@fortawesome/free-solid-svg-icons';

export const getIcons = (category) => {
    switch (category) {
        case "incoming":
            return [faSquare, faBriefcase];
        case "transfer":
            return [faSquare, faSackDollar];
        case "car":
            return [faSquare, faCar];
        case "bizum":
            return [faSquare, faCommentDollar];
        case "bill":
            return [faSquare, faChampagneGlasses];
        case "electricity":
            return [faSquare, faBoltLightning];
        default:
            return [faSquare, faCircleQuestion];
    }
};
