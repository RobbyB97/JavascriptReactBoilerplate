/*
    This array contains all the links displayed in the mobile and desktop
    navigation ui components.

*/


export interface navigationLinksType {
    href: string;
    text: string;
    internal?: boolean;
    sublinks?: {
        href: string;
        text: string;
        internal?: boolean;
    }[]
}


export const navigationLinks: navigationLinksType[] = [
    {
        href: "/",
        text: "Home",
        internal: true
    }, {
        href: "/StyleGuide",
        text: "Style Guide",
        internal: true
    }, {
        text: "Meet the Dev",
        href: "https://bergers.dev",
        internal: false
    }, {
        text: "View on GitHub",
        href: "https://github.com/RobbyB97/JavascriptReactBoilerplate",
        internal: false
    },
]