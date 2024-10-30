module.exports = (config, env) => {
    console.log(config);
    if (env === "development") {
        if (!config.devServer) {
            config.devServer = {};
        }
        config.devServer.allowedHosts = [
            "zuse-testing-grounds-3ca8bc72f89d.herokuapp.com",
            "www.zusetestinggrounds.com"
        ];
    }
    return config;
};