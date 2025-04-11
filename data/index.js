import { galeria } from "./pages/portafolio";

export const getPageContext = (pagePath) => {
    console.log("Page to Load Context:", pagePath);

    
    const commonVariables = {
        galeria: galeria,
    };

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
            pageVariables = { galeria }; 
            break;
        case '/portafolio.html':
            pageVariables = { galeria }; 
    }

    
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    };

    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext;
};
