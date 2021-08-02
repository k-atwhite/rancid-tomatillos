describe('Movie Details', () => {

    beforeEach( () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            'movie': {
                "id":694919,
                "poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
                "backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
                "title":"Money Plane",
                "average_rating":6.142857142857143,
                "release_date":"2020-09-29"
            }
        })
        .visit('http://localhost:3000/movies/694919')
    })

    it('Should display the movies details', () => {
        cy.url().should('include', 694919)
        .get('.details').contains('Money Plane')
        .get('.release-date').contains('2020-09-29')
    })
    
    it('Should return to home page when main button is clicked', () => {
        cy.get('.title').click()
        .url().should('eq', 'http://localhost:3000/')
    })

    it('Should be able to navigate forward and backward through the url', () => {
        cy.visit('http://localhost:3000/')
        .visit('http://localhost:3000/movies/694919')
        .go('back')
        .url().should('eq', 'http://localhost:3000/')
    })
})