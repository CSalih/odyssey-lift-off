const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }

    getTrack(trackId) {
        return this.get(`track/${trackId}`);
    }

    getTracksForHome() {
        return this.get('tracks');
    }

    getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`);
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }
}
module.exports = TrackAPI;