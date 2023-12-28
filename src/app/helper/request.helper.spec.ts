// Angular
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// Helper
import { RequestHelper } from './request.helper';
import { requestConstants } from './constants.helper';

describe('RequestHelper', () => {
    let requestHelper: RequestHelper,
        httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ RequestHelper ]
        });

        requestHelper = TestBed.inject( RequestHelper );
        httpTestingController = TestBed.inject( HttpTestingController );
    });

    it('should get all the pokemons', () => {
        const testUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=00';
        console.log('fore fn call')

        requestHelper.getPokemons().subscribe( pokemons => {
            expect(pokemons).toBeTruthy();
            // expect(pokemons).withContext('no pokemons   returned').toBeTruthy();
            
            expect(pokemons.results.length).toBeGreaterThanOrEqual(1)
        });

        const req = httpTestingController.expectOne(testUrl);
        expect(req.request.method).toEqual('GET');
        // req.flush({})
    });


});