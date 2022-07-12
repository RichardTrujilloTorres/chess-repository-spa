export const buildGame = moment =>
    ({game: {frames: (moment.map(singleMoment => ({fen: singleMoment.fen})))}})