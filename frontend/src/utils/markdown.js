export const styleHtml = (html) => {
    const style = `
        <style>
            a {
                color: white;
                text-decoration: none;
            }

            a:hover {
                color: gray;
            }
        </style>
    `;

    return html + style;
};
