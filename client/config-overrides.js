module.exports = override = (config, env) => {
    if (env === "development") {
        config.devServer.allowedHosts = [
            "zuse-testing-grounds-3ca8bc72f89d.herokuapp.com",
            "www.zusetestinggrounds.com"
        ];
    }
    return config;
};