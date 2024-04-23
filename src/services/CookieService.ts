import Cookies from 'universal-cookie'
import { ICookieOptions } from '../interfaces';

const cookie = new Cookies();

class CookieService {
    // Get cookie
    getCookie(name: string) {
        return cookie.get(name);
    }
    
    // Set cookie
    setCookie(name: string, value: string, options?: ICookieOptions) {
        cookie.set(name, value, options);
    }
    
    // Remove cookie
    removeCookie(name: string) {
        cookie.remove(name);
    }
}

export default new CookieService();
