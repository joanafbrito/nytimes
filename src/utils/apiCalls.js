export const getNewsData = async (category) => {
    let key = 'G66nUJYyQddyfK0QQGYg4WtpnnnNXG7E'
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${category}&api-key=${key}`
    // let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=G66nUJYyQddyfK0QQGYg4WtpnnnNXG7E'
    console.log(url)
    const res = await fetch(url)
    console.log(res)
    return res

    // ESSE EH O ENDERECO DA IMAGEM:
    // https://www.nytimes.com/images/2021/10/27/sports/27transgender-athletes-1/merlin_195051300_d630eead-3c9b-4d79-a243-742d1a12033d-blog480.jpg
}

// app key:
// G66nUJYyQddyfK0QQGYg4WtpnnnNXG7E
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey