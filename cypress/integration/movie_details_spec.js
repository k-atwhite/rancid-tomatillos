describe('Movie Details', () => {

    beforeEach( () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
            'movies': [
                {
                    "id":694919,"poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg","title":"Money Plane","average_rating":6.142857142857143,"release_date":"2020-09-29"
                },
                {
                    "id":337401,"poster_path":"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg","title":"Mulan","average_rating":5.2727272727272725,"release_date":"2020-09-04"
                },
                {
                    "id":718444,"poster_path":"https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg","title":"Rogue","average_rating":7,"release_date":"2020-08-20"
                }
            ]
        })
        .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
            'movie': 694919,
                "poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
                "backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
                "title":"Money Plane",
                "average_rating":6.142857142857143,
                "release_date":"2020-09-29"
        })
        // What is this for??
        .visit('http://localhost:3000')
    })

       it('Should be able to choose a movie poster on click, and display that movie details', () => {
        cy.intercept('http://localhost:3000/:id')
        .visit('http://localhost:3000/:id')
        cy.get('.card').click()
        .url().should('eq', 'http://localhost:3000/:id')
    })


    it('Should display a movies details', () => {
        cy.get('.card:first').click()
        .url().should('include', 694919)
        // Add more data checks?
    })

    it('Should return to home page when main button is clicked', () => {
        cy.get('.main-btn').click()
        .url().should('eq', 'http://localhost:3000/')
    })

    it('Should be able to navigate forward and backward through the url', () => {
        cy.go('back')
        .url().should('eq', 'http://localhost:3000/')
    })


    // it('Should display an error message if failure of fetch', () => {

    // })
})