type TypeLiteralRequest = 'GET' | 'POST' | 'PUT' | 'DELETE';

function fetchWithAuth(url: string, method: TypeLiteralRequest) {
    console.log(url, method);
}

fetchWithAuth('urlRequest', 'GET');
fetchWithAuth('another request', 'POST');
