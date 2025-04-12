import { galeria } from "./pages/portafolio";
import { faqs } from "./pages/faq";

export const getPageContext = (pagePath) => {
    console.log("Page to Load Context:", pagePath);

    const commonVariables = {
        galeria: galeria,
        faqs: faqs
    };

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
            pageVariables = { galeria };
            break;
        case '/portafolio.html':
            pageVariables = { galeria };
            break;
        case '/faq.html':
            pageVariables = { faqs }; // 👈 Añadido para la página de preguntas frecuentes
            break;
    }

    const finalContext = {
        ...commonVariables,
        ...pageVariables
    };

    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext;
};
