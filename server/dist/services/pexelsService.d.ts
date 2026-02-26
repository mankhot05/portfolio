interface PexelsPhoto {
    url: string;
    photographer: string;
    query: string;
}
export declare function getRandomImage(): Promise<PexelsPhoto>;
export {};
