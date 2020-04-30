export default class DummySwapiService {

  _imageBase = 'https://starwars-visualguide.com/assets/img';

  _people = [
    {
      id: 1,
      edited: "2014-12-20T21:17:56.891Z",
      name: "Luke Skywalker",
      created: "2014-12-09T13:50:51.644Z",
      gender: "male",
      skin_color: "fair",
      hair_color: "blond",
      height: "172",
      eye_color: "blue",
      mass: "77",
      homeworld: 1,
      birth_year: "19BBY"
    },
    {
      id: 2,
      edited: "2014-12-20T21:17:50.309Z",
      name: "C-3PO",
      created: "2014-12-10T15:10:51.357Z",
      gender: "n/a",
      skin_color: "gold",
      hair_color: "n/a",
      height: "167",
      eye_color: "yellow",
      mass: "75",
      homeworld: 1,
      birth_year: "112BBY"
    },
    {
      id: 3,
      edited: "2014-12-20T21:17:50.311Z",
      name: "R2-D2",
      created: "2014-12-10T15:11:50.376Z",
      gender: "n/a",
      skin_color: "white, blue",
      hair_color: "n/a",
      height: "96",
      eye_color: "red",
      mass: "32",
      homeworld: 8,
      birth_year: "33BBY"
    }
  ];

  _planets = [
    {
      id: 1,
      edited: "2014-12-20T20:58:18.411Z",
      climate: "arid",
      surface_water: "1",
      name: "Tatooine",
      diameter: "10465",
      rotation_period: "23",
      created: "2014-12-09T13:50:49.641Z",
      terrain: "desert",
      gravity: "1 standard",
      orbital_period: "304",
      population: "200000"
    },
    {
      id: 2,
      edited: "2014-12-20T20:58:18.420Z",
      climate: "temperate",
      surface_water: "40",
      name: "Alderaan",
      diameter: "12500",
      rotation_period: "24",
      created: "2014-12-10T11:35:48.479Z",
      terrain: "grasslands, mountains",
      gravity: "1 standard",
      orbital_period: "364",
      population: "2000000000"
    },
    {
      id: 3,
      edited: "2014-12-20T20:58:18.421Z",
      climate: "temperate, tropical",
      surface_water: "8",
      name: "Yavin IV",
      diameter: "10200",
      rotation_period: "24",
      created: "2014-12-10T11:37:19.144Z",
      terrain: "jungle, rainforests",
      gravity: "1 standard",
      orbital_period: "4818",
      population: "1000"
    },
    {
      id: 4,
      edited: "2014-12-20T20:58:18.423Z",
      climate: "frozen",
      surface_water: "100",
      name: "Hoth",
      diameter: "7200",
      rotation_period: "23",
      created: "2014-12-10T11:39:13.934Z",
      terrain: "tundra, ice caves, mountain ranges",
      gravity: "1.1 standard",
      orbital_period: "549",
      population: "unknown"
    },
    {
      id: 5,
      edited: "2014-12-20T20:58:18.425Z",
      climate: "murky",
      surface_water: "8",
      name: "Dagobah",
      diameter: "8900",
      rotation_period: "23",
      created: "2014-12-10T11:42:22.590Z",
      terrain: "swamp, jungles",
      gravity: "N/A",
      orbital_period: "341",
      population: "unknown"
    },
  ];

  _starships = [
    {
      id: 1,
      name: 'USS Enterprise',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      cost_in_credits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargo_capacity: 100
    },
    {
      id: 2,
      edited: "2014-12-20T21:23:49.867Z",
      consumables: "1 year",
      name: "CR90 corvette",
      created: "2014-12-10T14:20:33.369Z",
      cargo_capacity: "3000000",
      passengers: "600",
      max_atmosphering_speed: "950",
      crew: "30-165",
      length: "150",
      model: "CR90 corvette",
      cost_in_credits: "3500000",
      manufacturer: "Corellian Engineering Corporation"
    },
    {
      id: 3,
      edited: "2014-12-20T21:23:49.870Z",
      consumables: "2 years",
      name: "Star Destroyer",
      created: "2014-12-10T15:08:19.848Z",
      cargo_capacity: "36000000",
      passengers: "n/a",
      max_atmosphering_speed: "975",
      crew: "47,060",
      length: "1,600",
      model: "Imperial I-class Star Destroyer",
      cost_in_credits: "150000000",
      manufacturer: "Kuat Drive Yards"
    },
  ];

  getAllPeople = async () => {
    return this._people.map(this._transformPerson);
  };

  getPerson = async (id) => {
    return this._transformPerson(this._people[--id]);
  };

  getAllPlanets = async () => {
    return this._planets.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    return this._transformPlanet(this._planets[--id]);
  };

  getAllStarships = async () => {
    return this._starships.map(this._transformStarship);
  };

  getStarship = async (id) => {
    return this._transformStarship(this._starships[--id]);
  };

  // getPersonImage = () => {
  //   return `https://placeimg.com/400/500/people`
  // };

  // getStarshipImage = () => {
  //   return `https://placeimg.com/600/400/tech`;
  // };

  // getPlanetImage = () => {
  //   return `https://placeimg.com/400/400/nature`
  // };

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  _transformPlanet = (planet) => {
    return {
      id: planet.id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformPerson = (person) => {
      return {
        id: person.id,
        name: person.name,
        gender: person.gender,
        birthYear: person.birth_year,
        eyeColor: person.eye_color
      };
  };

  _transformStarship = (starship) => {
    return {
      id: starship.id,
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
