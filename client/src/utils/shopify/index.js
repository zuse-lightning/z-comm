export const embedShopifyProduct = (productId, domain, token) => {

    const loadScript = () => {
        const script = document.getElementsByTagName("script")[0];
        script.onload = ShopifyBuyInit;
    };

    const ShopifyBuyInit = () => {
        console.log("ShopifyBuyInit");
        var client = window.ShopifyBuy.buildClient({
            domain: domain,
            storefrontAccessToken: token,
        });
        window.ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: productId,
                node: document.getElementById('product-component-1731358336108'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0",
                                    "margin-bottom": "50px"
                                },
                                "text-align": "left"
                            },
                            "title": {
                                "font-size": "26px"
                            },
                            "button": {
                                ":hover": {
                                    "background-color": "#2b5680"
                                },
                                "background-color": "#30608e",
                                ":focus": {
                                    "background-color": "#2b5680"
                                }
                            },
                            "price": {
                                "font-size": "18px"
                            },
                            "compareAt": {
                                "font-size": "15.299999999999999px"
                            },
                            "unitPrice": {
                                "font-size": "15.299999999999999px"
                            }
                        },
                        "layout": "horizontal",
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "description": true
                        },
                        "width": "100%",
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                ":hover": {
                                    "background-color": "#2b5680"
                                },
                                "background-color": "#30608e",
                                ":focus": {
                                    "background-color": "#2b5680"
                                }
                            },
                            "title": {
                                "font-family": "Helvetica Neue, sans-serif",
                                "font-weight": "bold",
                                "font-size": "26px",
                                "color": "#4c4c4c"
                            },
                            "price": {
                                "font-family": "Helvetica Neue, sans-serif",
                                "font-weight": "normal",
                                "font-size": "18px",
                                "color": "#4c4c4c"
                            },
                            "compareAt": {
                                "font-family": "Helvetica Neue, sans-serif",
                                "font-weight": "normal",
                                "font-size": "15.299999999999999px",
                                "color": "#4c4c4c"
                            },
                            "unitPrice": {
                                "font-family": "Helvetica Neue, sans-serif",
                                "font-weight": "normal",
                                "font-size": "15.299999999999999px",
                                "color": "#4c4c4c"
                            }
                        },
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "option": {},
                    "cart": {
                        "styles": {
                            "button": {
                                ":hover": {
                                    "background-color": "#2b5680"
                                },
                                "background-color": "#30608e",
                                ":focus": {
                                    "background-color": "#2b5680"
                                }
                            }
                        },
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        },
                        "popup": false
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "background-color": "#30608e",
                                ":hover": {
                                    "background-color": "#2b5680"
                                },
                                ":focus": {
                                    "background-color": "#2b5680"
                                }
                            }
                        }
                    }
                },
            });
        });
    };

    if (window.ShopifyBuy) {
        console.log("ShopifyBuy exists");
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit(productId, domain, token);
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
};