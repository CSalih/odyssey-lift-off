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

    getModule(moduleId) {
        return this.get(`module/${moduleId}`);
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }

    incrementTrackViews(trackId) {
        return this.patch(`track/${trackId}/numberOfViews`);
    }
}
module.exports = TrackAPI;