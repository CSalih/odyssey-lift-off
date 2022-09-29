const resolvers = {
    Query: {
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        tracksForHomeFetch: async () => {
            const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
            const res = await fetch(`${baseUrl}/tracks`);
            return res.json();
        },
    },
    Track: {
        author: async ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    },
};

module.exports = resolvers;