import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer QNabzxHsQqULI0xiVXnPmm4qKwxC_0JyZTNW6USgfzEba19jZ8fmeGZN0xBM1ZqnduIWZ30vKJb_ftC0oKShX5upym_j1K2DREgAdMTFPyKZnjkCKPC_VwfNO-bTXnYx'


        
    }
});

