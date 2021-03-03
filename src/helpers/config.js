const config = {
    API_URL: function(){
        let live = 'http://139.59.35.110/castclass';
        let local = 'http://localhost/castclass';
        return live+'/api/v2/';
    }
}

export default config;