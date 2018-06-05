
export async function fetchWiki(queryParam) {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&search=${queryParam}`;
    return fetch(apiUrl).then(res => res.json());
}

export async function fetchWikiImage(queryParam) {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&titles=${queryParam}&prop=pageimages&formatversion=2&pithumbsize=100`;
    return fetch(apiUrl).then(res => res.json());
}
