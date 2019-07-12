const apiKey = '-NfXtlML3P2P1x3JwaOryglvzTGKqfPlAA_5_Q3lkfS_67joafTeUg6MTHbWWbwZw_yDzTkIQXQbGAk3HAgHxEw0MP1D51RDQzolzqRkVaDfh7i9Ne7mCI3wL7QdXXYx';

    const Yelp = {
        searchYelp(term, location, sort_by){
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`, {
                
            headers: {
                    Authorization: `Bearer ${apiKey}`
                },
            }).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(((business)=> {
                        console.log(business);
                        return { 
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            adress: business.location.address1, 
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipCode,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                        }
                    }));
                }
            })
        }
    };

export default Yelp;