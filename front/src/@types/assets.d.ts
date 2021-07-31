declare module '*.css';
declare module '*.svg';
declare module '*.jpg';
declare module '*.png';
declare module '*.scss';
declare module "*.module.scss" {
    const classes: { readonly [key: string]: string };
    export default classes;
}
