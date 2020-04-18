export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
        let response;

        try {
            response = await fetch(
                `${this._apiBase}${url}`,
                {
                    mode: 'no-cors',
                    cache: 'default',
                }
            );
        } catch (error) {
            console.error(error);
        }

        if (!response.ok) {
            throw new Error(
                `Could not fetch ${url}, received Http Status ${response.status}`
            );
        }

        return await response.json();
    };

    getAllPeople = async () => {
        const body = await this.getResource('/people/');

        return body.results.map(this._transformPerson);
    };

    getPerson = async (id) => {
        const person = this.getResource(`/people/${id}/`);

        return this._transformPerson(person);
    }

    getAllPlanets = async () => {
        const body = await this.getResource('/planets/');

        return body.results.map(this._transformPlanet);
    };

    getPlanet = async (id) => {
        const planet =  await this.getResource(`/planets/${id}/`);

        return  this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const body = await this.getResource(`/starships/`);

        return body.results.map(this._transformStarship);
    };

    getStarship = async (id) => {
        const starship =  this.getResource(`/starships/${id}/`);

        return this._transformStarship(starship);
    };

    getPersonImage = async ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`;
    }

    getPlanetImage = async ({ id }) => {
        return `${this._imageBase}/planets/${id}.jpg`;
    }

    getStarshipImage = async ({ id }) => {
        return `${this._imageBase}/startships/${id}.jpg`;
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;

        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
        };
    };
}
