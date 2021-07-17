describe('Homepage', () => {

    beforeEach(() => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
            'movies' : [
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
         .visit('http://localhost:3000')
    })


    it('Should display home path when page loads', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Rancid Tomatillos')
    })

    it('Should render movie cards upon loading', () => {
        cy.get('.card').contains('Money Plane')
        cy.get('.card').contains('Mulan')
        cy.get('.card').contains('Rogue')
    })

    it('should display an error message if the data doesnt load', () => {
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { statusCode: 500} )
        cy.visit('http://localhost:3000')
        .get('h2').contains('wrong')
    })

    it('Should show a search bar', () => {
        cy.get('form').type('text')
    })

    it('Should show the input as the user types in the searchbar', () => {
        cy.get('form > input').type('Money')
        .should('have.value', "Money")

    })

    it('Should display moves that match search', () => {
        cy.get('form > input').type('Mulan')
        .get('.card').contains('Mulan')

    })

      it('Should return to all movies after pressing X', () => {
         cy.get('form > input').type('Mulan')
         .get('.fa.fa-times').click()
         .url().should('eq', 'http://localhost:3000/')

    })

    // it('Should display an error message if there are no matches', () => {
        
    // })

      it('Should be able to choose a movie poster on click, and navigate to the correct url', () => {
        cy.visit('http://localhost:3000')
        cy.get('.card:first').click()
        .url().should('include', 694919)
    })

})


// it('should display a loading message when fetching movie data', () => {
//         let sendResponse;
//         const trigger = new Promise((resolve) => { 
//             sendResponse = resolve;}
//         );

//         cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', (request) => {
//             return trigger.then(() => {
//                 request.reply({
//                     'movies': [
//                         {
//                             "id":694919,"poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg","title":"Money Plane","average_rating":6.142857142857143,"release_date":"2020-09-29"
//                         },
//                         {
//                             "id":337401,"poster_path":"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg","title":"Mulan","average_rating":5.2727272727272725,"release_date":"2020-09-04"
//                         },
//                         {
//                             "id":718444,"poster_path":"https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg","title":"Rogue","average_rating":7,"release_date":"2020-08-20"
//                         }
//                     ]
//                 });
//             });
//         });
        
//         cy.visit('http://localhost:3000')
//         .get('h2').contains('🍿 Movies Loading 🍿')
//         .then(() => {
//             sendResponse();
//             cy.get('.all-movies').should('exist')

//       });



// describe('Loading', () => {
    
//     // Need to somehow make this WAIT to load the page

//     it('should display a loading message when fetching movie data', () => {
//         cy.visit('http://localhost:3000')
//         cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { 
//             'movies' : [
//                 {
//                     "id":694919,"poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg","title":"Money Plane","average_rating":6.142857142857143,"release_date":"2020-09-29"
//                 },
//                 {
//                     "id":337401,"poster_path":"https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg","title":"Mulan","average_rating":5.2727272727272725,"release_date":"2020-09-04"
//                 },
//                 {
//                     "id":718444,"poster_path":"https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg","title":"Rogue","average_rating":7,"release_date":"2020-08-20"
//                 }
//             ]
//          }).reload()
//         .get('.loading-message').contains('🍿 Movies Loading 🍿')
//     });
// })


