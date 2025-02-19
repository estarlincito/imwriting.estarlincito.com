import { ObjectUtils } from '@estarlincito/utils';

const x = { label: 'Twitter', route: 'https://x.com/estarlincito' };
const linktr = { label: 'Linktr', route: 'https://linktr.ee/estarlincito' };
const links = [x, linktr];

const HIREME = ObjectUtils.freeze({ links, linktr, x });
export default HIREME;
