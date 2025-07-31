export const embedShopifyProduct = (productId, productNode, domain, token, options) => {
    const loadScript = () => {
        const script = document.getElementsByTagName("script")[0];
        script.onload = ShopifyBuyInit;
    };

    const ShopifyBuyInit = () => {
        var client = window.ShopifyBuy.buildClient({
            domain: domain,
            storefrontAccessToken: token,
        });
        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("product", {
                id: productId,
                node: document.getElementById(productNode),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: options,
            });
        });
    };

    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit(productId, domain, token);
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
};

export const embedShopifyCollection = (collectionId, collectionNode, domain, token, options) => {
    const loadScript = () => {
        const script = document.getElementsByTagName("script")[0];
        script.onload = ShopifyBuyInit;
    };

    const ShopifyBuyInit = () => {
        var client = window.ShopifyBuy.buildClient({
            domain: domain,
            storefrontAccessToken: token,
        });
        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent("collection", {
                id: collectionId,
                node: document.getElementById(collectionNode),
                moneyFormat: "%24%7B%7Bamount%7D%7D",
                options: options,
            });
        });
    };

    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit(collectionId, domain, token);
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    return {
        collectionId,
        collectionNode,
        domain,
        token
    }
};