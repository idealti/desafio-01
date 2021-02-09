const api = async(data) => {

    try {
        const response = await fetch("http://mockbin.org/bin/25965c30-636e-4737-868a-ceab09f1d21a", {
            "method": "POST",
            "headers": {
                "cookie": "foo=bar; bar=baz"
            },
            "body": data
        });

        return response;
    } catch (err) {
        alert("Erro interno. Tente novamente mais tarde.");
        console.log(err);
    }

}

export default api;