const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {'Content-type': 'applecation/json'
    },
        body: data
    });

    return await res.json();
};


const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Cloud not fetch ${url}', status: ${res.status}`);
    }

    return await res.json();
}


export {postData};
export {getResource};