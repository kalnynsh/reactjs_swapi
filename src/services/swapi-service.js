export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResource(url) {

        const response = await fetch(
            `${this._apiBase}${url}`,
            {
                mode: 'cors',
                cache: 'default',
            }
        );

        if (!response.ok) {
            throw new Error(
                `Could not fetch ${url}, received Http Status ${response.status}`
            );
        }

        return await response.json();
    }

    async getAllPeople() {
        const body = await this.getResource(`/people/`);

        return body.results;
    }

    async getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets() {
        const body = await this.getResource(`/planets/`);

        return body.results;
    }

    async getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships() {
        const body = await this.getResource(`/starships/`);

        return body.results;
    }

    async getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }
}