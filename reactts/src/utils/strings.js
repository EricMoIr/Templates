// eslint-disable-next-line import/prefer-default-export
export function isImageUrl(str) {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(str);
}
