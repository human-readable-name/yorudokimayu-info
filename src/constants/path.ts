export type PageType = "Home" | "Biography" | "Discography";

type Path = {
    home: string;
    biography: string;
    discography: string;
};

const path:Path = {
    home: "/",
    biography: "/biography",
    discography: "/discography",
};

export default path;