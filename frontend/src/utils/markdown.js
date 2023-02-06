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
            
            a:visited {
                color: white;
            }

            p {
                font-size: 1.2rem;
            }
        </style>
    `;

    return html + style;
};
