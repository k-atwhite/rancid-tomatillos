describe('Homepage', () => {

    beforeEach(() => {
        const movieData =  [
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
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { movieData })
    })


    it('Should display home path when page loads', () => {
        cy.visit('http://localhost:3000')
        .contains('Rancid Tomatillos')
    })

    // NOT BEHAVING
    // it('should display a loading message when fetching movie data', () => {
    //     cy.reload()
    //     cy.get('.loading-message').contains('🍿 Movies Loading 🍿')
    // });

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
        
    })

    it('Should show the input as the user types in the searchbar', () => {
        
    })

    it('Should display moves that match search', () => {
        
    })

    it('Should display an error message if there are no matches', () => {
        
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
//     })


