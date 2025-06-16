import React from "react";
import { Helmet } from "react-helmet-async";

export default ({ favIcon, site, title, description, keywords, type, image, url }) => {
    return (
        <Helmet>
            <link rel="icon" href={favIcon} />
            <title>{site} - {title}</title>
            <meta name="decription" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
};