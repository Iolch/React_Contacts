class Company{
    constructor(
        name, 
        founded, 
        size_range,
        pdl_current_size,
        pdl_historical_size,
        locality,
        street_address,
        country,
        industry,
        description,
        facebook_url,
        twitter_url,
        crunchbase_url,
        alternative_names,
        domain,
        last_modified_date,
        technologies, 
        tags, 
        logo_url){

            this.name = name;
            this.founded = founded;
            this.size_range = size_range;
            this.pdl_current_size = pdl_current_size;
            this.pdl_historical_size = pdl_historical_size;
            this.locality = locality;
            this.street_address = street_address;
            this.country = country;
            this.industry = industry;
            this.description = description;
            this.facebook_url = facebook_url;
            this.twitter_url = twitter_url;
            this.crunchbase_url = crunchbase_url;
            this.alternative_names = alternative_names;
            this.domain = domain;
            this.last_modified_date = last_modified_date;
            this.technologies = technologies;
            this.tags = tags;
            this.logo_url = logo_url;
        }
}
export default Company;