import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {MoviesMagnamentProvider} from '../../../providers/MoviesMagnament.provider';
import {MovieModel} from '../../models/Movie.model';
import { Storage } from '@ionic/storage';
import {UsersManagementProvider} from '../../../providers/users-managament-provider.service';


@Component({
    selector: 'app-movie',
    templateUrl: './movie.page.html',
    styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {

    movie: MovieModel;
    addToFavoriteSuccess: boolean ;
    addToSeeSuccess: boolean;

    constructor(
        private router: ActivatedRoute,
        private moviesProvider: MoviesMagnamentProvider,
        private usersProvider: UsersManagementProvider,
        private storage: Storage
    ) {
        this.router.params.subscribe( idMovie => {
            // console.log(idMovie);
             this.getMovie(idMovie.id);
        });

        // save in localstorage

    }

    private getMovie(idMovie: string) {
       this.moviesProvider.getMovieById(idMovie).subscribe( (data) => {
        // console.log('data -> ' + JSON.stringify(data));
        const movieObj: MovieModel = new MovieModel();
        this.movie = Object.assign(new MovieModel(), data);
        console.log('movie -> ' + JSON.stringify(this.movie));
      });


    }

    ngOnInit() {
    }

    async addToSee() {
        this.addToSeeSuccess = false;
        /*const userId = await this.storage.get('userId');
        this.router.params.subscribe(idMovie => {
            console.log(`add to See: ${JSON.stringify(idMovie)}`);

            const auxMovieId: number = idMovie.id;
            this.usersProvider.addMovieToSee(userId, auxMovieId).subscribe( response => {
                console.log(`response add to See -> ${JSON.stringify(response)}`);
                this.addToSeeSuccess = true;
            });
        });*/
        alert(' proximamente '); this.addToSeeSuccess = true;
        this.addToSeeSuccess = false;
    }

    async addToFavorite() {

        this.addToFavoriteSuccess = false;
/*        const userId = await this.storage.get('userId');
        this.router.params.subscribe(idMovie => {
            console.log(`add to favorite: ${JSON.stringify(idMovie)}`);
            const auxMovieId: number = idMovie.id;
            this.usersProvider.addMovieToFavorite(userId, auxMovieId).subscribe( response => {
               console.log(`response add to favorite -> ${JSON.stringify(response)}`);
               this.addToFavoriteSuccess = true;
            });
        });*/
        alert(' proximamente '); this.addToFavoriteSuccess = true;

        this.addToFavoriteSuccess = false;

    }
}
