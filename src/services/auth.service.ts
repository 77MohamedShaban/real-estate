import { jwtDecode, JwtPayload } from 'jwt-decode';
import CookieService from './CookieService';


export const isLogged = () => {
    const token = CookieService.getCookie('jwt');
    
    if(!token || token === 'loggedout' ) {
        return false;
    }

    const decodedToken = jwtDecode(token) as JwtPayload ;

    if(!decodedToken ||!decodedToken.exp ||decodedToken.exp * 1000 < Date.now()) {
        return false;
    }

    return true;
}


export const getLoggedInUser = () => {
    const token = CookieService.getCookie('jwt');
    
    if(!token || token === 'loggedout') {
        return null;
    }
    const decodedToken = jwtDecode(token) as JwtPayload;

    

    return decodedToken;
}