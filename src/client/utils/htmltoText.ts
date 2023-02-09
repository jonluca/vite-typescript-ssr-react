const htmltoText = (html: any) => {
    return html.replace(/<[^>]*>?/gm, '');
}

export default htmltoText;