export const exerciseOptions = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '5ab6387140mshebf0c96fa6815ddp1b15b2jsn21793525382d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}
}


export const fetchData = async (url, options) => {
    const response = await fetch(url,options);
    const data = await response.json();
    return data;

}