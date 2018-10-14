import {Nuxt} from 'nuxt';
import config from '../../nuxt.config';

export default (() => {
    return new Nuxt(config);
})();